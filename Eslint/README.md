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
5.  `'pictureStyle' is defined but never used   no-unused-vars` <br>
    pictureStyle 这个变量从来都没有被使用 <br>
6.  `Unexpected trailing comma  comma-dangle` <br>
    意外的逗号 <br>
7.  `Prop type 'object' is forbidden    react/forbid-prop-types` <br>
    PropTypes.object  不准使用 <br>
8.  `Missing space before =>   arrow-spacing` <br>
    `Missing space after  =>   arrow-spacing` <br>
    箭头函数前后少空格 <br>
9.  `Unexpected block statement surrounding arrow body; move the returned value immediately after the '=>'      arrow-body-style` <br>
    不用写 {} return 等 箭头体周围的意外块语句；在 '=>' 箭头体样式之后立即移动返回值 <br>
10. `Trailing spaces not allowed` <br>
    不允许尾随空间 <br>
11. `Unexpected parentheses around single function argument having a body with no curly braces      arrow-parens` <br>
    箭头函数单参数不用括号 <br>
12. `Strings must use singlequote   quotes` <br>
    纯字符串使用 '
13. `Expected space(s) after "if"   keyword-spacing` <br>
    "if"之后的预期空间 <br>
14. `Expected '===' and instead saw '=='    eqeqeq` <br>
    两个等号换成三个 <br>
15. `Unary operator '++' used   no-plusplus` <br>
    `Unexpected space after unary operator '++'     space-unary-ops` <br>
    `Unary operator '--' used   no-plusplus` <br>
    `Unexpected space after unary operator '--'     space-unary-ops` <br>
    禁止使用一元操作符 ++ 和 -- (no-plusplus) <br>
16. `Unexpected string concatenatio     prefer-template` <br>
    意外的字符串连接 <br>
17. `Unnecessary return statement` <br>
    不必要的return语句
18. `Unexpected usage of singlequote    jsx-quotes` <br>
    单引号的意外使用 <br>
19. `Static HTML elements with event handlers require a role    jsx-a11y/no-static-element-interactions` <br>
    带有事件处理程序的静态HTML元素需要一个角色 <br>
20. `Visible, non-interactive elements with click handlers must have at least one keyboard listener  jsx-a11y/click-events-have-key-events` <br>
    具有单击处理程序的可见、非交互元素必须至少有一个键盘侦听器 <br>
21. `error  Function 'listen' expected no return value      consistent-return` <br>
    要求return语句总是或从不指定值（一致返回）  return 统一,不能有的返回值 有的返回空 <br>
22. `Use object destructuring` <br>
    使用对象赋值解构
