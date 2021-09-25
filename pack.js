var archiver = require('archiver');
var fs = require('fs');

fs.mkdirSync('dist', { recursive: true });
var archive = archiver.create('zip', {});
var output = fs.createWriteStream('./dist/src.zip');
output.on("close",  () => console.log('output: ./dist/src.zip'));

archive.pipe(output);

archive.glob('index.js');
archive.glob('package.json');

archive.finalize();
