#!/usr/bin/env bash
rm -rf dist &&
yarn build &&
git checkout gh-pages &&
rm -rf assets &&
mv -f dist/* ./ &&
rm -rf dist &&
git pull &&
git add . &&
time=$(date "+%Y-%m-%d %H:%M:%S")  &&
git commit -m "website deploy ${time}"  &&
git push -f &&
git checkout master &&
echo https://dreamqyq.github.io/coast-ui-vue3/