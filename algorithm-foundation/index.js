//栈
function Stack() {
    let item = [];
    this.push = function(...arg) {
        item.push(...arg);
    }
    this.pop = function() {
        return item.pop();
    }
    this.peek = function() {
        return item[item.length - 1];
    }
    this.isEmpty = function() {
        return item.length === 0;
    }
    this.clear = function() {
        item.length = 0;
    }
    this.size = function() {
        return item.length;
    }
    this.print = function() {
        return item.toString();
    }
}
