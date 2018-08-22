'use strict';

module.exports = class Classifier {
    use(fn) {
        this._go = (stack => (ip, data, next) => stack(ip, data, () => {
            fn.apply(this, [ip, data, next.bind.apply(next, [null, ip, data])]);
        }))(this._go);

        return this;
    }

    _go(ip, data, next) {
        next.apply(this, [ip, data]);
    }

    run(ip) {
        return new Promise(resolve => {
            this._go(ip, {}, (ip, data) => resolve(data));
        });
    }
};