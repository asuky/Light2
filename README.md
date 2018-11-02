# Light2

* Hueライトを管理するアプリ
* Hue の iOS アプリはそれなりに使い勝手は良いが、iOSアプリしかない点と、アプリ間の連携が取りづらい（MyHueを通さないとライトプリセットを共有できない、あるアプリで操作した結果を別のアプリで反映されない等）点に難あり
* 実用と練習を兼ねて Web アプリにしたい

# 利用方法

* リポジトリクローン
* cp -p .env.template .env
* .env を編集、必要項目を埋める
* npm install
* cd client
* npm install
* npm run build
* cd ..
* npm start
* ブラウザで localhost:8080 を開く