#!/usr/bin/env sh

# 确保脚本抛出遇到的错误 停止
set -e

# 打包 生成静态文件 /dist
npm run build

# 进入生成的文件夹
cd dist

# 提交到仓库
git init
git add -A
git commit -m ':smiley: deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:xn213/vue-test-pro.git master:gh-pages

cd -