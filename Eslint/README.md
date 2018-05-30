# Esline 各种错误

1.  `A space is required after '{'   object-curly-spacing` <br>
    `A space is required before '}'  object-curly-spacing` <br>
    缺少空间如： {children} -> { children } <br>
2.  `Missing semicolon  semi` <br>
    缺少分号 <br>
3.  `'children' is missing in props validation  react/prop-types` <br>
    PropTypes 缺少 children <br>
4.  `Typo in static class property declaration  react/no-typos` <br>
    缺少PropTypes静态类检查 (3、4一起出现的，原因是 `propTypes` 写成了 `PropTypes` !!) <br>
5.  `'pictureStyle' is defined but never used  no-unused-vars` <br>
    pictureStyle 这个变量从来都没有被使用 <br>
6.  `Unexpected trailing comma  comma-dangle` <br>
    意外的逗号 <br>
7.  `Prop type 'object' is forbidden  react/forbid-prop-types` <br>
    PropTypes.object  不准使用 <br>
8.  `Missing space before =>   arrow-spacing` <br>
    `Missing space after  =>   arrow-spacing` <br>
    箭头函数前后少空格 <br>
9.  `Unexpected block statement surrounding arrow body; move the returned value immediately after the '=>'  arrow-body-style` <br>
    不用写 {} return 等 箭头体周围的意外块语句；在'= >箭头体样式之后立即移动返回值 <br>
10. `Trailing spaces not allowed` <br>
    不允许尾随空间 <br>
11. `Unexpected parentheses around single function argument having a body with no curly braces  arrow-parens` <br>
    箭头函数单参数不用括号 <br>
