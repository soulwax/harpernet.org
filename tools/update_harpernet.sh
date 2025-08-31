#!/bin/zsh
# File: tools/update_harpernet.sh
set -e

# --- Configuration ---
REPO_DIR="/home/soulwax/workspace/websites/harpernet.org"
LOG_FILE="/home/soulwax/workspace/websites/harpernet.org/logs/deployment.log"
BRANCH="main"
REMOTE="origin"

# --- Environment Setup for Cron ---
# Source nvm to get node, npm, and pm2 in the PATH
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Set Node environment for production
export NODE_ENV="production"

# --- Log File Setup ---
mkdir -p "$(dirname "$LOG_FILE")"

# --- Function for logging with timestamp ---
log() {
    echo "[`date +'%Y-%m-%d %H:%M:%S'`] $1" | tee -a "$LOG_FILE"
}

# --- Redirect stderr to log file ---
exec 2>> "$LOG_FILE"

# --- Start Execution ---
log "=== Starting deployment check for harpernet.org ==="
cd "$REPO_DIR" || { log "ERROR: Repository directory not found."; exit 1; }

# --- Git Operations ---
log "Fetching latest changes from remote..."
git fetch $REMOTE

# Compare local HEAD with remote branch HEAD
LOCAL_HEAD=$(git rev-parse HEAD)
REMOTE_HEAD=$(git rev-parse "$REMOTE/$BRANCH")

if [ "$LOCAL_HEAD" == "$REMOTE_HEAD" ]; then
    log "Already up-to-date. No deployment needed."
    log "=== Deployment check finished ==="
    exit 0
fi

log "New commits found. Starting deployment..."

# Pull changes
log "Pulling changes from $REMOTE/$BRANCH..."
if ! git pull $REMOTE $BRANCH; then
    log "ERROR: Failed to pull changes. Aborting deployment."
    exit 1
fi
log "Changes pulled successfully."

# --- Build Process ---
# The original request was to rebuild only when something was pulled.
# Since we exit the script if there are no changes, this block will only run after a successful pull.
log "Rebuilding application..."
if ! npm run build; then
    log "ERROR: Build process failed. Aborting deployment."
    exit 1
fi
log "Build completed successfully."

# --- PM2 Restart ---
log "Restarting PM2 application 'mbti-app'..."
if ! pm2 restart mbti-app; then
    log "ERROR: PM2 restart failed. Check PM2 logs for details."
    exit 1
fi

# Save the current process list
pm2 save
log "PM2 process list saved."
log "=== Deployment completed successfully ==="