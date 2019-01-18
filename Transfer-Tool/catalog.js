const fs = require('fs');

let catalog = fs.readFileSync('./markdown/catalog.md', 'utf8');

// 处理中文字符转
// catalog = catalog.replace(/.*[\u4e00-\u9fa5].*/ig, '');
// 处理空字符和数字
catalog = catalog.replace(/\s+\d+\s+/ig, ' ');
// // 处理结尾不需要的字母
// catalog = catalog.replace(/reqresexample$/ig, '');
// // 处理中间不需要的字母
catalog = catalog.replace(/(req|res|example|说明|old|package|asset|error)[^\.a-zA-Z]/ig, '').trim();

catalog = catalog.split(/\s+/);

module.exports = catalog;