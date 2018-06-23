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
        return item.shift()
    }
    this.front = function() {
        return item[0];
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


//优先队列
function PriorityQueue() {
    let item = [];
    this.QueueElement = function(element, priority) {
        this.element = element;
        this.priority = priority;
    }
    this.enqueue = function(element, priority) {
        let queueElement = new this.QueueElement(element, priority); 
        if(this.isEmpty()) {
            item.push(queueElement);
        } else {
            for (let i = 0 ; i < item.length ; i++){
                if(item[i].priority > queueElement.priority) {
                    item.splice(i, 0, queueElement);
                    return;
                }
                if(i === item.length - 1) {
                    item.push(queueElement);
                    return;
                }
            }
        }
    }
    this.print = function() {
        return console.log(item);
    }
    this.isEmpty = function() {
        return item.length === 0;
    }
}

//测试用例
var priorityQueueTest = new PriorityQueue();
priorityQueueTest.enqueue("测试用例", 100);
priorityQueueTest.enqueue("测试用例", 10);
priorityQueueTest.enqueue("测试用例", -1);
priorityQueueTest.enqueue("测试用例", 1);
priorityQueueTest.enqueue("测试用例", 50);
priorityQueueTest.enqueue("测试用例", 0);
priorityQueueTest.enqueue("测试用例", 500);
priorityQueueTest.enqueue("测试用例", 20);
priorityQueueTest.print();
console.log(priorityQueueTest.isEmpty());

// 观察者模式
function createObserver() {
    let eventQueue = {};
    function listen(name, fn) {
        if(!fn) return;
        if(!eventQueue[name]) {
            eventQueue[name] = [fn];
        } else if(eventQueue[name] && !eventQueue[name].some(item => item === fn)) {
            eventQueue[name].push(fn);
        } else {
            console.log('This function has been subscribed!');
        }
        return function unlisten() {
            if(!eventQueue[name]) return;

            const index = eventQueue[name].indexOf(fn);
            eventQueue[name].splice(index, 1);

            if(eventQueue[name].length === 0) {
                delete eventQueue[name];
            }
        }
    }
    function trigger(name, action) {
        if(eventQueue[name]) {
            eventQueue[name].forEach((item) => {
                item(action);
            })
        } else {
            console.log('No related subscriptions!');
        }
    }
    function remove(name) {
        if(eventQueue[name]) {
            delete eventQueue[name];
        } else {
            console.log('No related subscriptions!');
        }
    }
    function print() {
        console.log(eventQueue);
    }
    return {
        listen: listen,
        trigger: trigger,
        remove: remove,
        print: print
    }
}
