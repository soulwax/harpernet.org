#!/bin/zsh

# Purpose: Auto-deploy harpernet.org changes from git repository
# Improved version with better error handling and environment setup

# Exit immediately if a command exits with a non-zero status
set -e
source /home/soulwax/.zshrc
# --- Configuration ---
REPO_DIR="/home/soulwax/workspace/websites/harpernet.org"
GIT_LOGS="/home/soulwax/workspace/websites/harpernet.org/logs/git.log"
BRANCH="main"
REMOTE="origin"
USER="soulwax"

# --- Environment Setup ---
# Set a more complete PATH that includes common node/npm locations
export PATH="/usr/local/bin:/usr/bin:/bin:/usr/local/sbin:/usr/sbin:/sbin"
export PATH="$PATH:/home/$USER/.local/bin:/home/$USER/bin"

# Add Node.js paths (adjust these to your actual Node.js installation)
export PATH="$PATH:/home/$USER/.nvm/current/bin"
export PATH="$PATH:/usr/local/node/bin"
export PATH="$PATH:/opt/node/bin"

# Set NODE environment
export NODE_ENV="production"

# --- Log File Setup ---
mkdir -p "$(dirname "$GIT_LOGS")"
touch "$GIT_LOGS"

# --- Function for logging with timestamp ---
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" >> "$GIT_LOGS"
}

# --- Redirect stderr to log, but keep function logging ---
exec 2>> "$GIT_LOGS"

# --- Start Execution ---
log "=== Starting update check for harpernet.org ==="
log "PATH: $PATH"
log "NODE_PATH: ${NODE_PATH:-'not set'}"
log "Current user: $(whoami)"
log "Current directory: $(pwd)"

# Check if required commands exist
command_check() {
    if ! command -v "$1" >/dev/null 2>&1; then
        log "ERROR: Command '$1' not found in PATH"
        log "PATH searched: $PATH"
        return 1
    else
        log "✓ Found $1 at: $(command -v "$1")"
        return 0
    fi
}

# Verify all required commands are available
log "--- Checking required commands ---"
if ! command_check git; then
    log "FATAL: git command not found"
    exit 1
fi

if ! command_check npm; then
    log "FATAL: npm command not found"
    exit 1
fi

if ! command_check pm2; then
    log "FATAL: pm2 command not found"
    exit 1
fi

# --- Navigate to repository ---
log "--- Navigating to repository directory ---"
if [ ! -d "$REPO_DIR" ]; then
    log "ERROR: Repository directory does not exist: $REPO_DIR"
    exit 1
fi

cd "$REPO_DIR"
log "Changed to directory: $(pwd)"

# --- Git Operations ---
log "--- Fetching latest changes from remote ---"
if ! git fetch --all; then
    log "ERROR: Failed to fetch from remote"
    exit 1
fi

# Check for new commits
log "--- Checking for new commits ---"
NEW_COMMITS=$(git log HEAD..$REMOTE/$BRANCH --oneline)

if [ -n "$NEW_COMMITS" ]; then
    log "New commits found on $REMOTE/$BRANCH:"
    log "$NEW_COMMITS"
    
    # Pull changes
    log "--- Pulling changes ---"
    if ! git pull $REMOTE $BRANCH; then
        log "ERROR: Failed to pull changes"
        exit 1
    fi
    
    log "Changes pulled successfully"
    
    # --- Build Process ---
    log "--- Starting build process ---"
    
    # Install/update dependencies if package.json changed
    if git diff HEAD~1 --name-only | grep -q "package.json\|package-lock.json"; then
        log "Package files changed, updating dependencies..."
        if ! npm ci; then
            log "ERROR: npm ci failed"
            exit 1
        fi
    fi
    
    # Build the application
    log "Building application..."
    if ! npm run build; then
        log "ERROR: Build failed"
        exit 1
    fi
    
    # --- PM2 Restart ---
    log "--- Restarting PM2 application ---"
    if ! pm2 restart mbti-app; then
        log "ERROR: PM2 restart failed"
        # Try to start if restart failed
        log "Attempting to start application..."
        if ! pm2 start ecosystem.config.js; then
            log "ERROR: PM2 start also failed"
            exit 1
        fi
    fi
    
    # Save PM2 configuration
    pm2 save
    
    log "=== Deployment completed successfully ==="
    log "Application should be updated within 30 seconds"
    
else
    log "Local branch is up-to-date with $REMOTE/$BRANCH"
    log "No deployment needed"
fi

log "=== Update check finished ==="