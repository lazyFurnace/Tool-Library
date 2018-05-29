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
    pictureStyle 这个变量从来都没有被使用
6.  `Unexpected trailing comma  comma-dangle` <br>
    意外的逗号
