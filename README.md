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

### Install eslint-plugin-react-hooks

- add package

```bash
yarn add eslint-plugin-react-hooks --dev
```

- 在 `.eslintrc.json` 文件中增加如下内容

```json
{
  "plugins": ["react-hooks"],
  "extends": ["plugin:react-hooks/recommended"]
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

### Install eslint-plugin-jest

- add package

```bash
yarn add eslint-plugin-jest --dev
```

- 在 `.eslintrc.json` 文件中增加如下内容

```json
{
  "plugins": ["jest"],
  "extends": ["plugin: jest/recommended"]
}
```

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

### Install @types/jest

安装了这个包后, 在单元测试代码中输入 `expect().` 就会弹出各种方法了

```bash
yarn add @types/jest --dev
```

同时在项目根目录创建 `jsconfig.json` 文件

```json
{
  "typeAcquisition": {
    "include": ["jest"]
  }
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

### Setup

- 创建 `src/setupTests.js`

```javascript
import '@testing-library/jest-dom/extend-expect';
```

### Queries

[testing libray](https://testing-library.com/) 提供了 **3** 种类型 DOM element 的查询

- getBy: 返回匹配到的第一个匹配到的元素(`if` find=0 or find>1`then` throws error)
- queryBy: 返回匹配到的第一个匹配到的元素(`if` find=0 `then` return null `else if` find>1 `then` throws error)
- findBy: 返回一个 **promise** 当匹配到的一个元素(也就是说这个方法采用的是异步方式). 默认的超时 **1000 ms**.

上面三种方式返回一个匹配的元素, 匹配多个元素配套的提供了以下三种

- getAllBy: 返回匹配到的元素的数组(`if` find=0 `then` throws error)
- queryAllBy: 返回匹配到的元素的数组(no error throws)
- findAllBy: 返回一个 **promise** 当匹配到的元素的数组(也就是说这个方法采用的是异步方式). 默认的超时 **1000 ms**.

### Elements to Roles

```javascript
Map {
  '{"name": "article"}' => Set { 'article' },
  '{"name": "button"}' => Set { 'button' },
  '{"name": "td"}' => Set { 'cell', 'gridcell' },
  '{"name": "input", "attributes": [ {"name": "type", "value": "checkbox"}] }' => Set { 'checkbox' },
  '{"name": "th"}' => Set { 'columnheader' },
  '{"name": "select"}' => Set { 'combobox', 'listbox' },
  '{"name": "menuitem"}' => Set { 'command', 'menuitem' },
  '{"name": "dd"}' => Set { 'definition' },
  '{"name": "dfn"}' => Set { 'definition' },
  '{"name": "figure"}' => Set { 'figure' },
  '{"name": "form"}' => Set { 'form' },
  '{"name": "table"}' => Set { 'grid', 'table' },
  '{"name": "fieldset"}' => Set { 'group' },
  '{"name": "h1"}' => Set { 'heading' },
  '{"name": "h2"}' => Set { 'heading' },
  '{"name": "h3"}' => Set { 'heading' },
  '{"name": "h4"}' => Set { 'heading' },
  '{"name": "h5"}' => Set { 'heading' },
  '{"name": "h6"}' => Set { 'heading' },
  '{"name": "img"}' => Set { 'img' },
  '{"name": "a"}' => Set { 'link' },
  '{"name": "link"}' => Set { 'link' },
  '{"name": "ol"}' => Set { 'list' },
  '{"name": "ul"}' => Set { 'list' },
  '{"name": "li"}' => Set { 'listitem' },
  '{"name": "nav"}' => Set { 'navigation' },
  '{"name": "option"}' => Set { 'option' },
  '{"name": "input", "attributes": [ {"name": "type", "value": "radio"}] }' => Set { 'radio' },
  '{"name": "frame"}' => Set { 'region' },
  '{"name": "rel"}' => Set { 'roletype' },
  '{"name": "tr"}' => Set { 'row' },
  '{"name": "tbody"}' => Set { 'rowgroup' },
  '{"name": "tfoot"}' => Set { 'rowgroup' },
  '{"name": "thead"}' => Set { 'rowgroup' },
  '{"name": "th", "attributes": [ {"name": "scope", "value": "row"}] }' => Set { 'rowheader' },
  '{"name": "input", "attributes": [ {"name": "type", "value": "search"}] }' => Set { 'searchbox' },
  '{"name": "hr"}' => Set { 'separator' },
  '{"name": "dt"}' => Set { 'term' },
  '{"name": "textarea"}' => Set { 'textbox' },
  '{"name": "input", "attributes": [ {"name": "type", "value": "text"}] }' => Set { 'textbox' }
}
```

### 进行单元测试

建议使用命令行进行单元测试, 因为使用 **jest-vscode** 扩展 `console.log` 无法输出出来.

## 基本路由设置

- 在 `component` 目录下创建 `router.js` 文件

## React Context

- 创建文件用于描述 `Context`, ***src/component/context/theme-context.js***

```javascript
export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

export const ThemeContext = React.createContext(
  themes.dark // default value
);
```

- 使用 `Context`, ***src/component/context/themed-button.js***

```javascript
import React, { useContext } from 'react';
import { ThemeContext } from './theme-context';

const ThemedButton = (props) => {
  let theme = useContext(ThemeContext);

  return <button {...props} style={{ backgroundColor: theme.background }} />;
};

export default ThemedButton;
```

- 提供 `Context`, ***src/component/context/index.js***

```javascript
import React, { useState } from 'react';
import { ThemeContext, themes } from './theme-context';
import Toolbar from './toolbar';
import ThemedButton from './themed-button';

const ContextComponent = () => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  };

  return (
    <article>
      <h1>Context</h1>
      <ThemeContext.Provider value={theme}>
        <Toolbar changeTheme={toggleTheme}></Toolbar>
      </ThemeContext.Provider>
      <section>
        <ThemedButton>unchange theme</ThemedButton>
      </section>
    </article>
  );
};

export default ContextComponent;
```

### Updating Context from a Nested Component

在上面的范例中, 对 `Context` 更新是在"提供者"(Provider)代码中, 即上面的 ***src/component/context/index.js*** 文件中, 并通过 `props` 明确的向下传递（比如：上面的通过 `onClick` 属性向下传递）, 我们也可以不这么做，而是将更新/改变 `Context` 的功能直接声明在 `Context` 中，采用“占位符”的方式

```javascript
export const ThemeContext = React.createContext({
  theme: themes.dark, // default value
  toggleTheme: () => {},
});
```

然后在 `Context` 更新是在"提供者"(Provider)代码中对“占位符”进行绑定

```javascript
const ContextWithNestedUpdateComponent = () => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  };

  return (
    <article>
      <h1>Context</h1>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ThemedTogglerButton />
      </ThemeContext.Provider>
    </article>
  );
};
```

## FAQ

- eslint 报错: 'test is not defined'
  - 在 `.eslintrc` 文件中增加

```json
"env": { "jest": true }
```

- 运行 `yarn test` 报错: Error: ENOSPC: System limit for number of file watchers reached
  - 执行如下命令在操作系统 shell 中

```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```

- `Emmet` 不起作用
  - 在 `settings.json` 文件中输入如下内容

```json
{
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  }
}
```
