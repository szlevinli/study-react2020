# 学习 React

## 环境搭建

- 使用 [Create React App](https://create-react-app.dev/) 创建基于 `React` 框架的项目

```bash
yarn create react-app study-react2020
```

- 添加路由包

```bash
yarn add react-router-dom
```

## ESLint 配置

虽然 [Create React App](https://create-react-app.dev/) 在 `package.json` 文件中简单的配置了 [ESLint](https://eslint.org/), 但为了更好的扩展 [ESLint](https://eslint.org/) 的能力, 建议使用单独的配置文件 `.eslintrc.*` 来对 [ESLint](https://eslint.org/) 进行配置.

可以使用 [vscode](https://code.visualstudio.com/) 的 [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) 创建, 也可使用命令行创建

```bash
node_modules/.bin/eslint --init
```

这里创建了 `JSON` 格式的配置文件, 即 `.eslintrc.json`

```json
{
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": ["react"],
  "rules": {}
}
```

## Unit Test

单元测试方面, 采用 [Create React App](https://create-react-app.dev/) 自带的单元测试环境

- test runner: [jest](https://jestjs.io/)
- React Testing Library: [testing libray](https://testing-library.com/)

为了让单元测试工作更加便利，配合 [jest](https://jestjs.io/) 和 [testing libray](https://testing-library.com/) 使用的有如下包

- DOM element matcher for jest: [jest-dom](https://github.com/testing-library/jest-dom)
- simulation of browser interaction: [user-event](https://github.com/testing-library/user-event)
- ESLint plugin for Testing Library: [eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library)
- ESLint plugin for Jest DOM: [eslint-plugin-jest-dom](https://github.com/testing-library/eslint-plugin-jest-dom)

以上的包只有最后两个关于 Eslint plugin 的包没有被 [Create React App](https://create-react-app.dev/) 自动安装, 因此我们需要自行安装他们.

### Install eslint-plugin-testing-library

- add package

```bash
yarn add eslint-plugin-testing-library --dev
```

- 在 `.eslintrc.json` 文件中增加如下内容

```json
{
  "plugins": ["testing-library"],
  "extends": ["plugin:testing-library/recommended"]
}
```

### Install eslint-plugin-jest-dom

- add package

```bash
yarn add eslint-plugin-jest-dom --dev
```

- 在 `.eslintrc.json` 文件中增加如下内容

```json
{
  "plugins": ["jest-dom"],
  "extends": ["plugin:jest-dom/recommended"]
}
```

## 基本路由设置

- 在 `component` 目录下创建 `router.js` 文件
