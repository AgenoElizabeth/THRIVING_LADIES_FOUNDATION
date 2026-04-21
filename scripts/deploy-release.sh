#!/bin/bash

set -euo pipefail

# Example usage: cleanup_old_releases 5 "/home/lisa/artifacts/releases"
cleanup_old_releases() {
    local keep=$1
    local releases_dir=$2

    echo "Cleaning up old releases in $releases_dir (keeping last $keep)..."

    if [ ! -d "$releases_dir" ]; then
        echo "Directory $releases_dir does not exist. Skipping cleanup."
        return
    fi

    # 1. List files/dirs starting with numbers (timestamps)
    # 2. Sort them (v-sort handles timestamps well)
    # 3. Head -n -X picks all EXCEPT the last X items
    # 4. xargs rm -rf deletes them

    # We keep: deploy.tar.gz (new), stderr.log (logs), .env (configs), tmp (process)
    # find . -maxdepth 1 ! -name 'deploy.tar.gz' ! -name 'stderr.log' ! -name '.env' ! -name 'tmp' ! -name '.' -exec rm -rf {} +
    ls -1 "$releases_dir" | grep -E '^[0-9]{8}_[0-9]{6}' | sort -V | head -n -"$keep" | while read -r old_release; do
        echo "Deleting old release: $old_release"
        rm -rf "$releases_dir/$old_release"
    done

    echo "Cleanup complete."
}


RELEASE_PATH="$DIR_RELEASES/$RELEASE_NAME.tar.gz"

# Backup current serve dir (if it exists) and then delete it to prepare for the new release
mv $DIR_SERVE{,.bak} 2>/dev/null || true  # Backup current serve dir, ignore if it doesn't exist
# Recreate serve dir for the new release
mkdir -p $DIR_SERVE

tar -xzf $RELEASE_PATH -C $DIR_SERVE
# Copy persistent .env into the new release
cp $DIR_RELEASES/.env $DIR_SERVE/.env 2>&1/dev/null || true  # Ignore if .env doesn't exist

# Update the .current file to point to the new release (for reference or other scripts)
echo $RELEASE_NAME > $DIR_RELEASES/.current

# Remove the backup of the old serve dir after successful deployment
rm -rf $DIR_SERVE.bak

# THE FLIP: Update the symlink to point to the new release
# -n treats the link as a normal file, -f forces the update
# ln -sfn $RELEASE_PATH /home/thrigrpj/app


# Cleanup old releases, keeping the last 3
cleanup_old_releases 3 "$DIR_RELEASES"