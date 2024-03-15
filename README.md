
### Webpack React based project
It is react project using typescript and build and serve through webpack6. This project can be used as base project. Just fork this project and start using it. 

## Node and npm version

* node = v20.11.1
* npm = 10.2.4

This proejct has 
- typescript
* eslist
* stylelint
* prettier
* webpack
* styled-component for theme
* husky for pre-commit hooks
+ lint-staged


I will keep on updating this project. 

## Projecct Structure

```
.babelrc
.eslintignore
.eslintrc
.gitignore
.husky
   |-- pre-commit
.prettierignore
.prettierrc
.stylelintrc
README.md
package-lock.json
package.json
src
   |-- assets
   |   |-- .DS_Store
   |   |-- images
   |   |   |-- favicon.ico
   |   |-- style
   |   |   |-- style.scss
   |-- bootstrap.js
   |-- components
   |   |-- App
   |   |   |-- app.scss
   |   |   |-- app.tsx
   |   |-- BlogApp
   |   |   |-- blog-app.component.tsx
   |   |-- Footer
   |   |   |-- footer.component.tsx
   |   |-- Header
   |   |   |-- header.component.tsx
   |   |-- Home
   |   |   |-- home.component.tsx
   |   |   |-- home.style.scss
   |   |-- Layout
   |   |   |-- layout.component.tsx
   |   |-- List
   |   |   |-- list.component.tsx
   |   |-- Main
   |   |   |-- main.component.tsx
   |   |-- Router
   |   |   |-- Root.tsx
   |   |   |-- Router.tsx
   |   |-- ThemeProvider
   |   |   |-- ThemeProvider.tsx
   |-- index.html
   |-- index.js
   |-- theme
   |   |-- ThemeModel.tsx
   |   |-- default.ts
tsconfig.json
webpack.config.common.js
webpack.config.js
webpack.config.prod.js
webpack
   |-- config.js
   |-- plugins.js
   |-- rules.js

```