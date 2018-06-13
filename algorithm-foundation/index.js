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

//队列
function Queue() {
    let item = [];
    this.enqueue = function(...arg) {
        item.push(...arg);
    }
    this.dequeue = function() {
        return item.unshift()
    }
    this.front = function() {
        return item[0];
    }
    this.isEmpty = function() {
        return item.length === 0;
    }
    this.size = function() {
        return item.length;
    }
    this.print = function() {
        return item.toString();
    }
}