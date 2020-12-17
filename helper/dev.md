### 本地运行注意事项

1. 进入 src/cnchar-types 目录 运行 npm link 命令
2. 进入 src/cnchar 目录 运行 npm link cnchar-types 命令

### npm run test
1. npm run test:npm: 需要先build之后测试 npm 包
2. npm run test：直接测试 ts 源代码，需要 npm install -g typescript 全局安装ts

### 分支
1. master 作为开发分支
2. gh-pages 分支作为 github pages发布分支
3. gitee-pages 分支作为 gitee pages发布分支
   
gh-pages 分支中的 vuepress/.vuepress/config.js 文件中 base需要设置为 /
gitee-pages 分支中的 vuepress/.vuepress/config.js 文件中 base需要设置为 /cnchar/

naster 开发完成推送之后 创建一个新的版本号分支
dev:docs 完成之后 分别合到gh-pages和gitee-pages分支进行build:docs