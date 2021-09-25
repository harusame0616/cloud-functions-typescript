# cloud-functions-typescript

## what is this

Cloud Functions を TypeScript x WebPack で開発するサンプルです。  


## how to develop

ビルドウォッチ開始 & ローカルサーバー起動
```
npm run start
```

サーバー起動後以下にアクセス
http://localhost:8080

## how to deploy

以下のコマンドを実行するとwebpackでバンドル後、  
index.jsとpackage.jsonを./dist/src.zipにzipで固めます。  
```
npm run build
```

Cloud functions上では
triggerをHTTP、 エントリポイントをhandlerに設定して 
dist/src.zip をアップロードすることでデプロイできます。
