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
    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }
    this.isEmpty = function() {
        return item.length === 0;
    }
    this.enqueue = function(element, priority) {
        let queueElement = new QueueElement(element, priority); 
        if(this.isEmpty()) {
            item.push(queueElement);
        } else {
            for (let i = 0 ; i < item.length ; i++){
                if(i == item.length - 1) {
                    item.push(queueElement);
                    return;
                } else if(item[i].priority < queueElement.priority) {
                    break;
                } else {
                    item.splice(i, 0, queueElement);
                    return
                }
                
            }
        }
    }
    this.print = function() {
        return console.log(item);
    }
}


var a = new PriorityQueue();
a.print();
a.enqueue("lalala",0);
a.enqueue("bababa",100);
a.enqueue("hahaha",30);
a.enqueue("nanana",1);
a.enqueue("eaeaea",1);
a.print();