#!/bin/zsh

# Purpose of this script: No matter where you develop from, every change on the repo
# should reflect changes on the hosted site within 5 minutes (or whatever your crontab floats).


# Note 1: recommend the following: `mkdir ~/bin` if not already done, then 
# `chmod +x $(pwd)/tools/update_harpernet.sh`
# followed by: `ln -s $(pwd)/tools/update_harpernet.sh ~/bin` ...
# before using this script at all.
# Note 2: Create cronjob: crontab -e
# Note 3: Add the following line to the crontab:
# */5 * * * * ~/bin/update_harpernet.sh
# ! Note 4: changed shebang to use zsh right away, CHANGE THIS TO YOUR NEEDS!
# Note 5: no root needed :)

# Exit immediately if a command exits with a non-zero status.
set -e

# --- Configuration ---
REPO_DIR="/home/soulwax/workspace/websites/harpernet.org"
GIT_LOGS="/home/soulwax/workspace/websites/harpernet.org/logs/git.log"
BRANCH="main"
REMOTE="origin"

# --- Log File Setup ---
# Create the log directory and file if they don't exist.
# 'mkdir -p' safely creates parent directories and doesn't fail if they exist.
mkdir -p "$(dirname "$GIT_LOGS")"
touch "$GIT_LOGS"

# --- Redirect all output (stdout and stderr) to the log file ---
# From this point on, all 'echo' and error messages will be appended to the log.

# Elaboration: This is the core of the logging solution. The exec command replaces 
# the current shell process. By using it with redirection, you are redirecting stdout (>>) 
# and stderr (2>&1) for the entire remainder of the script. 
# Every command that follows—echo, git, npm, and any error messages—will automatically 
# be appended to your log file.
exec >>"$GIT_LOGS" 2>&1

# --- Environment Setup ---
# Source your .zshrc to load your environment, including PATH.
# The 'zsh' command from your original script was removed as it would
# start a new interactive shell and cause the script to hang.
# This script should be run with `zsh` as per my own needs directly 
# (hence the `#!/bin/zsh shebang`).
source /home/soulwax/.zshrc

# --- Logic ---
echo "---"
echo "Starting update check for harpernet.org on $(date)"

# Navigate to the repository directory.
cd "$REPO_DIR"

echo "Fetching latest changes from remote..."
git fetch --all

# Check for new commits on the remote branch.
if [ -n "$(git log HEAD..$REMOTE/$BRANCH --oneline)" ]; then
    echo "New commits found on $REMOTE/$BRANCH. Pulling changes..."
    git pull $REMOTE $BRANCH

    echo "Changes pulled successfully. Rebuilding application..."
    npm run rebuild

    echo "Rebuild complete."
else
    echo "Local branch is up-to-date. No action taken."
fi

echo "Update check finished successfully."
