# CMS 项目说明

项目名称：`ems-backend`
项目描述：钢铁行业 ems 管理后台

## 安装启动开发环境

## 安装

1. 安装 `node.js` 版本 `8.10.0`；
2. 安装 `yarn`，在命令行中执行 `npm install -g yarn@1.19.1`；

### 启动开发环境

1. 在命令行中 `cd ems-backend` 到项目根目录；
2. 执行 `yarn install` 安装依赖库；
3. 执行 `yarn start` 启动开发服务和假数据服务。

## 项目结构

```javascript
- /node_modules  ------------------------  包文件
- /config  ------------------------------  项目配置
- /public  ------------------------------  静态文件夹（不会被打包）
- /src  ---------------------------------  源代码目录
  |
  |- /common  ---------------------------  通用代码
  | |- /tools  -------------------------  通用的工具类 services
  |  |- /common  ---------------------  通用的工具类、方法
  |  		|- tools.js  ------------------  自定义通用的工具类
  |  		|- common.js  -----------------  兼容性重写方法库
  |  		|- validate.js  ---------------  表单校验
  |  		|- statusEmun.js  -------------  状态枚举
  |  	|- /api  ------------------------  封装 services
  |  		|- http.js  -------------------  封装ajax业务操作
  |  		|- stateCode.js  --------------  自定义状态码
  |  		|- api  -----------------------  数据请求处理
  |
  |- /components  -----------------------  自定义组件封装
  |  |- /popupModule  -------------------  自定义弹窗组件
  |  	  |- popupModule.js  --------------  自定义弹窗组件
  |  	  |- popupModule.scss  ------------  自定义弹窗组件
  |  |- /formModule  --------------------  自定义表单组件
  |  		|- formModule.js  ---------------  自定义表单组件
  |  		|- formModule.scss  -------------  自定义表单组件
  |  |- /dragModule  --------------------  自定义拖拽组件
  |  		|- dragModule.js  ---------------  自定义拖拽组件
  |  		|- dragModule.scss  -------------  自定义拖拽组件
  |
  |- /routes  ---------------------------  路由
  |- /redux  ----------------------------  redux
  |  |- /actions  -----------------------  actions
  |  |- /reducers  ----------------------  reducers
  |
  |- /containers  ----------------------  页面容器组件
  |     |- /pageName  ---------------------  资源文件
  |        |- templatesName.js  ------------  页面容器组件名称
  |        |- /component  ------------------  子组件
  |           |- componentName.js  ---------  子组件名称
  |           |- componentName.scss  -------  子组件名称
  |- /resources  ---------------------  资源文件
  |  |- /css  ------------------------  静态样式资源文件
  |  		|- /base.scss  ---------------  公共样式样式资源文件
  |  		|- /index.scss  --------------  首页样式资源文件
  |  |- /images  ---------------------  静态图片资源文件
  |
  |  |- index.js  -----------------------  主页面入口
  |  |- app.js  -------------------------  初始化页面

- /build  -------------------------------  构建时创建的临时目录
- package.json  -------------------------  包管理文件
- .gitignore  ---------------------------  Git忽略项
- .eslintignore  ------------------------  eslint忽略项
- .eslintrc  ----------------------------  eslint配置项目
- .prettierrc.json  ---------------------  prettier配置项
- README.md  ----------------------------  项目说明
```

# yarn 基本使用

项目的 `yarn.lock` 文件是自动产生的，而且应该完全被 Yarn 管理。 当你用 Yarn CLI 增加／升级／删除依赖，它将自动更新你的 `yarn.lock` 文件。 不要直接编辑这个文件，那样很容易弄坏某些东西。

## **添加依赖包**

> 分别添加到 `devDependencies`、`peerDependencies` 和 `optionalDependencies`：

```
yarn add [package] --dev
yarn add [package]@[version] --dev
yarn add [package]@[tag] --dev
```

## **升级依赖包**

```
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]
```

## **移除依赖包**

```
yarn remove [package]
```

##**安装项目的全部依赖**

```
yarn
```
