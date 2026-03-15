#!/bin/bash
set -euo pipefail

pnpm install --frozen-lockfile
pnpm run build

rm -rf build/app
mkdir -p build

cp -r .next/standalone build/app
cp -r .next/static build/app/.next
cp -r public build/app

echo -e "\n\n-------------------------------------------------------\n"\
            "Build successfull: Saved in 'build/app' directory.\n"\
            "-------------------------------------------------------\n"

# You can then zip the build/app directory and deploy it to your server or hosting provider.

# cd build && zip -r app.zip app
# .. OR ..
# cd build && 7zz a -snl app.7z app    # 7z x -snld app.7z 
