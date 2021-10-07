#!/bin/bash

git add -A
git commit -m "push"
git push -u origin master

yarn build
scp -v -r -C ./docs/.vuepress/dist/ root@121.37.67.178:/home/blog/
