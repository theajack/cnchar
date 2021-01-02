### 本地运行注意事项

1. 进入 src/cnchar-types 目录 运行 npm link 命令
2. 进入 src/cnchar 目录 运行 npm link cnchar-types 命令

### npm run test
1. npm run test: 需要先build之后测试 npm 包

### 分支
1. 从master新建版本号分支作为开发分支
2. gh-pages 分支作为 github pages发布分支
3. gitee-pages 分支作为 gitee pages发布分支
   
gh-pages 分支中的 vuepress/.vuepress/config.js 文件中 base需要设置为 /
gitee-pages 分支中的 vuepress/.vuepress/config.js 文件中 base需要设置为 /cnchar/

版本号分支开发完成之后 合到master分支
dev:docs 完成之后 分别合到gh-pages和gitee-pages分支进行build:docs

### build

打包所有模块

```
npm run build
```

打包指定模块

```
npm run build <name>
```

name 可选值

main poly order trad draw idiom xhy radical all npm types hanzi-util hanzi-util-base