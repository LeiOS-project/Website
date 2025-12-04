#!/bin/bash

# Exit on error
set -e

check_env_var() {
  VAR_NAME="$1"
  if [ -z "${!VAR_NAME}" ]; then
    echo "Error: Environment variable '$VAR_NAME' is not set."
    exit 1
  fi
}

# -------- CONFIG --------
LOCAL_DIR="$(pwd)/.output/public/"
check_env_var "DEPLOY_REMOTE_USER"
check_env_var "DEPLOY_REMOTE_PASSWORD"
check_env_var "DEPLOY_REMOTE_HOST"
check_env_var "DEPLOY_REMOTE_DIR"
# -------- END CONFIG --------

echo "Starting deployment to $DEPLOY_REMOTE_USER@$DEPLOY_REMOTE_HOST..."


sshpass -p "$DEPLOY_REMOTE_PASSWORD" rsync -avz \
  --delete \
  --omit-dir-times --no-perms --no-times \
  -e "ssh -o StrictHostKeyChecking=no" \
  "$LOCAL_DIR" \
  "$DEPLOY_REMOTE_USER@$DEPLOY_REMOTE_HOST:$DEPLOY_REMOTE_DIR"

echo "Deployment completed."
