function Promise(executor) {
    const _ = this;
    _.state = 'pending';
    _.value = null;
    _.resolveCallbacks = [];
    _.rejectCallbacks = [];
    
    function resolve(value) {
        _.state = 'fulfilled';
        _.value = value;
    }

    function reject(value) {
        _.state = 'rejected';
        _.value = value;
    }
    
    executor(resolve, reject);
}

Promise.prototype.then = function(onFulfilled, onRejected) {
    const _ = this;
    if(_.state === 'pending') {
        
    } else if (_.state === 'fulfilled') {
        onFulfilled(_.value);
    } else if (_.state === 'rejected') {
        onRejected(_.value);
    } else {
        throw Error '错误';
    }
}
