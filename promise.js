function Promise(fn) {
    const _ = this;

    _.state = 'pending';
    _.value = null;
    _.callBack = [];

    fn(resolve, reject);

    function resolve(value) {
        _.state = 'fulfilled';
        handle(value);
    }

    function reject(value) {
        _.state = 'rejected';
        handle(value);
    }

    function handle(value) {
        _.value = value;
        _.callBack.forEach(item => {
            _.value = item[_.state](_.value);
        })
    }
}

Promise.prototype.then = function(onFulfilled, onRejected) {
    if (this.state === 'pending') {
        this.callBack.push({
            fulfilled: onFulfilled,
            rejected: onRejected
        })
    } else if (this.state === 'fulfilled') {
        this.value = onFulfilled(this.value);
    } else if (this.state === 'rejected') {
        this.value = onRejected(this.value);
    }
    return this;
}
