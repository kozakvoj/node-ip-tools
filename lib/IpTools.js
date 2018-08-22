'use strict';

module.exports = class Classifier {
    use(fn) {
        this.go = (stack => (ip, data, next) => stack(ip, data, () => {
            fn.apply(this, [ip, data, next.bind.apply(next, [null, ip, data])]);
        }))(this.go);

        return this;
    }

    go(ip, data, next) {
        next.apply(this, [ip, data]);
    }
};