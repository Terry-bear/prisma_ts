# prisma_ts

prisma demo by typescript

## 初始化开发环境（首次）

先 - [node下载](https://nodejs.org/dist/v8.9.4/) 下载对应系统的node包解压并配置用户环境变量

>prisma 全局安装

```bash
npm install -g prisma
```

`NODE_HOME=D:\Devtools\nodejs`

`NODE_PATH=%NODE_HOME%\node_modules`

`PATH=%NODE_HOME%\`

```bash
 npm i -g prisma
 npm install -g typescript
 npm config set registry https://registry.npm.taobao.org/
 ```

## 项目初始化（仅限未初始化）

```bash
cd auth
prisma init  prisma -e '${env:PRISMA_MANAGEMENT_API_SECRET}'
tsc --init
npm init -y
npm i --save nexus graphql nexus-prisma prisma-client-lib graphql-yoga
npm i --save-dev typescript ts-node-dev
npm i --save-dev @types/node @types/ws @types/graphql
```

## prisma部署(无./src/generated 目录 或 datamodel.prisma模型变化时才需要)

```bash
rm -rf ./src/generated  # Windows+Powershell环境下执行 rm -r -fo ./src/generated
prisma deploy  # 部署成功后会重新生成./src/generated
```

## 启动本地调试环境

```bash
npm start
```
