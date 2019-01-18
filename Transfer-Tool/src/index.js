const betweenWord = (before, after) => (string, type) => {
    const reg = new RegExp(`(${before})([\\s\\S]*?)(${after})`, 'g');
    return string.replace(reg, betweenWordType[type]);
}

const Lazy = (m0, m1, c2, m3) => {
    try {
        c2 = JSON.stringify(JSON.parse(c2), null, 4);
    } catch (e) {
        console.log(e);
    }
    return `${m1}\n${c2}\n${m3}`;
}

const LazyPress = (m0, m1, c2, m3) => {
    try {
        c2 = JSON.stringify(JSON.parse(c2), null, 4);
    } catch (e) {
        console.log(e);
    }
    return `${m1}\n\`\`\`json\n${c2}\n\`\`\`\n${m3}`;
}

const betweenWordType = { Lazy, LazyPress };


const labelWord = (string) => {
    string = string.replace(/\<\?L\>([\s\S]*?)\<\?\>/g, Label);
    string = string.replace(/\<\?L\:\>([\s\S]*?)\<\?\>/g, LabelTwice);
    string = string.replace(/\<\?L\!\>([\s\S]*?)\<\?\>/g, LabelPress);
    string = string.replace(/\<\?L\!\:\>([\s\S]*?)\<\?\>/g, LabelPressTwice);
    string = string.replace(/\<\?Lazy>([\s\S]*?)\<\?\>/g, LabelLazy);
    string = string.replace(/\<\?L\@result\>([\s\S]*?)\<\?\>/g, (m0, s1) => {
        let parse = JSON.parse(JSON.parse(s1));
        parse.result = JSON.parse(parse.result);
        return `\`\`\`json\n${JSON.stringify(parse, null, 4)}\n\`\`\``;
    })
    return string;
}

// <?Lazy>...<?>
const LabelLazy = (m0, s1) => {
    try {
        s1 = JSON.stringify(JSON.parse(s1), null, 4);
    } catch (e) {
        console.log(e);
    }
    return `${s1}`;
}

// <?L>...<?>
const Label = (m0, s1) => {
    try {
        s1 = JSON.stringify(JSON.parse(s1), null, 4);
    } catch (e) {
        console.log(e);
    }
    return `\`${s1}\``;
}

// <?L:>...<?>
// 需要转移两次
const LabelTwice = (m0, s1) => {
    try {
        s1 = JSON.stringify(JSON.parse(JSON.parse(s1)), null, 4);
    } catch (e) {
        console.log(e);
    }
    return `\`${s1}\``;
}

// <?L!>...<?>
// 增加 json 外层
const LabelPress = (m0, s1) => {
    try {
        s1 = JSON.stringify(JSON.parse(s1), null, 4);
    } catch (e) {
        console.log(e);
    }
    return `\n\`\`\`json\n${s1}\n\`\`\`\n`;
}

// <?L!:>...<?>
// 增加 json 外层
const LabelPressTwice = (m0, s1) => {
    try {
        s1 = JSON.stringify(JSON.parse(JSON.parse(s1)), null, 4);
    } catch (e) {
        console.log(e);
    }
    return `\n\`\`\`json\n${s1}\n\`\`\`\n`;
}

module.exports = { betweenWord, labelWord };
