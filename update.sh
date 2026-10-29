#!/data/data/com.termux/files/usr/bin/bash

set -e

SOURCE="/storage/emulated/0/Hycrix Entertainment"
REPO="$HOME/ArchiveHycrix.github.io"

echo "===== HYCRIX WEBSITE UPDATER ====="

if [ ! -d "$SOURCE" ]; then
    echo "Khong tim thay thu muc website:"
    echo "$SOURCE"
    exit 1
fi

if [ ! -d "$REPO/.git" ]; then
    echo "Thu muc repository Git khong hop le!"
    exit 1
fi

echo "Dang dong bo file website..."

rsync -rt \
    --exclude='.git/' \
    "$SOURCE/" "$REPO/"

cd "$REPO"

git add -A

if git diff --cached --quiet; then
    echo "Khong co thay doi de cap nhat."
    exit 0
fi

read -r -p "Noi dung commit [Update website]: " MSG
MSG=${MSG:-Update website}

git commit -m "$MSG"
git push

echo "Cap nhat GitHub thanh cong!"
