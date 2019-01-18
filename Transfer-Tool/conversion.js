const fs = require('fs');

const { betweenWord } = require('./src');

let interfaceDocument = fs.readFileSync('./markdown/interfaceDocument.md', 'utf8');

interfaceDocument = betweenWord('\\#\\# \\*\\*req\\*\\*', '\\#\\# \\*\\*res\\*\\*')(interfaceDocument, 'LazyPress');
interfaceDocument = betweenWord('\\#\\# \\*\\*res\\*\\*', '\\#\\# \\*\\*example\\*\\*')(interfaceDocument, 'LazyPress');

// 删除所有空行
interfaceDocument = interfaceDocument.replace(/\n[\s| ]*\r/g, '');

fs.mkdir('conversion', () => console.log('文件夹创建完成'));

fs.writeFileSync('./conversion/conversion.md', interfaceDocument);
