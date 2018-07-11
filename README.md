# 工具库

可能会有用的各种代码...

### 目录

```
    |──Carousel                 #jQuery轮播图插件(兼用低版本浏览器)
    |──Data-Structure           #常见数据结构实现 --未完成
    |──Design-Pattern           #常见设计模式实现 --未完成
    |──Eslint                   #Eslint常见错误
    |──Stylelint                #Stylelint创建错误
    └──README.md
```

想法 关于 react 的状态管理  交互复杂项目 在外层父组件中写一个 类似于 reducer 的方法 来修改 全部的 state   所有子组件等通过 这个方法 传递数据 通过 actionType 来区分  统一在 外层父组件中做处理  或者通过 contenxt 来实现改函数传递功能 解决问题  减少组件间传递的的内容 避免： <br>
```
<ConnectionForm
    coordinateUpdate={this.coordinateUpdate}
    listExchange={this.listExchange}
    checkBoxSelect={this.checkBoxSelect}
    deleteCallBack={this.analysisTabsDelete} 
    selectListIndex={this.selectListIndex} 
    clickUpdate={this.clickUpdate}
    toggleList={this.toggleList}
    lookTable={this.lookTable}
    preAnalysisData={preAnalysisData}
/>
```
传递过多的函数 方便管理 代码 <br>
reducer 可能会很大 想方法拆分开来写  可以类似于 redux 中的 combinedReducer 方法来实现功能  可以拆分到不同文件 也可以通过在当前组件 constructor 中 bind 组件来完成  
