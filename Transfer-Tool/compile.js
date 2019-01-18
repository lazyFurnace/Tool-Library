const fs = require('fs');

const { labelWord } = require('./src');

const catalog = require('./catalog');

const title = '# **H5后台接口文档**';

catalogContent = catalog.map(item => {
    return `- <a href='#${item.replace(/\./g, '').toLowerCase()}'>${item}</a>`
}).join('\n');

catalogContent = `\n${catalogContent}\n`;

let interfaceDocument = fs.readFileSync('./conversion/conversion.md', 'utf8');

interfaceDocument = labelWord(interfaceDocument);

interfaceDocument = interfaceDocument.replace(/\n\n/g, '');

// interfaceDocument = interfaceDocument.replace("<?Enter>", '\n')

fs.mkdir('compile', () => console.log('文件夹创建完成'));

fs.writeFileSync('./compile/compile.md', `${title}\n${catalogContent}\n${interfaceDocument}`);
