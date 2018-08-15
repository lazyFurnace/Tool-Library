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



function Promise(executor) {
    const _ = this;
    _.state = 'pending';
    _.value = null;
    _.callbacksResolve = [];
    _.callbacksReject = [];
    
    function resolve(value) {
        _.state = 'resolve';
        _.value = value;
        _.callbacksResolve.forEach(fn => fn(_.value))
    }

    function reject(value) {
        _.state = 'reject';
        _.value = value;
        _.callbacksReject.forEach(fn => fn(_.value))
    }
    
    executor(resolve, reject);
}

Promise.prototype.then = function(onFulfilled, onRejected) {
    const _ = this;

    if(_.state === 'pending') {

        _.callbacksResolve.push(onFulfilled);
        _.callbacksReject.push(onRejected);

    } else if (_.state === 'resolve') {

        onFulfilled(_.value);

    } else if (_.state === 'reject') {

        onRejected(_.value);

    } else {

        throw Error ('Promise 状态未知');

    }
}
