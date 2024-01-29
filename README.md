# 42tokyo_20240214

node v20.5.0を使用

（各種ライブラリのバージョンを見たい場合は`package.json`を参照してください）

# 環境構築(ローカル)

上記のnodeが入っている状態で

- npm install
- npm run dev

を行い、`http://localhost:5173/`をブラウザで表示する
（サーバーを閉じる際は`Ctrl + C`）

# Dockerを使用したい場合

Dockerが入っている環境で

`docker build -t 42tokyoevent20240214 .`

を行い、完了したら、

`docker run -p 5173:5173 -v $(pwd):/app 42tokyoevent20240214`

を行い、`http://localhost:5173/`をブラウザで表示する
（サーバーを閉じる際はDocker DesktopからStopをする、ないし`docker stop <container id>`などを使用してください）

※両方の環境は同時に使用できないため、同一チームで環境が分かれる場合はそれぞれの環境で`package.json`、`package-lock.json`を共有しないようにしてください。

<!-- 
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list -->
