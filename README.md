# cloud-functions-typescript

## What is this

Cloud Functions を TypeScript x WebPack で開発するサンプルです。  

※️ **私自身が初学者なので「作ってみた系」のソースであることにご注意ください。**

## How to develop

ビルドウォッチ開始 & ローカルサーバー起動
```
npm run start
```

サーバー起動後以下にアクセス 
http://localhost:8080

## How to deploy

以下のコマンドを実行するとwebpackでバンドル後、index.jsとpackage.jsonを./dist/src.zipにzipで固めます。  
```
npm run build
```

Cloud functions の設定は trigger をHTTP、エントリポイントを handler にして dist/src.zip をアップロードすることでデプロイできます。

## Notes

Cloud functions では package.json の main で指定したファイルをrequireで読み込みます。  
そのため output.library.type に commonjs2 を設定して 「export.modules =」の形式で export する必要があるようです。

Ref.
- [Cloud Functionsの作成](https://cloud.google.com/functions/docs/writing#structuring_source_code)
- [Output | webpack #outputlibrary](https://webpack.js.org/configuration/output/#outputlibrarytype)
