### 本地运行注意事项

1. 进入 src/cnchar-types 目录 运行 npm link 命令
2. 进入 src/cnchar 目录 运行 npm link cnchar-types 命令

### npm run test
1. npm run test:npm: 需要先build之后测试 npm 包
2. npm run test：直接测试 ts 源代码，需要 npm install -g typescript 全局安装ts