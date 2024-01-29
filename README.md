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
