"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trimUnit = function (s) { return s.replace(/([\d,.])+(\S+)?/, '$2').trim(); };
exports.transformProp = function (transform) {
    return function (prop) {
        if (Array.isArray(prop)) {
            return prop.map(transform);
        }
        if (prop instanceof Object) {
            var init = {};
            return Object.entries(prop).reduce(function (accumulator, _a) {
                var key = _a[0], value = _a[1];
                if (value !== undefined) {
                    accumulator[key] = transform(value);
                }
                return accumulator;
            }, init);
        }
        return transform(prop);
    };
};
exports.calcSpan = function (columns) {
    return exports.transformProp(function (value) {
        var int = typeof value === 'string' ? Number.parseInt(value, 10) : value;
        return (int / columns) * 100 + "%";
    });
};
exports.calcGutter = function (isRow) {
    return exports.transformProp(function (gap) {
        var index = isRow ? -1 : 1;
        if (typeof gap === 'string') {
            var _a = [Number.parseFloat(gap), exports.trimUnit(gap)], value = _a[0], unit = _a[1];
            return value / (2 * index) + unit;
        }
        return gap / (2 * index);
    });
};
exports.calcRowGutter = exports.calcGutter(true);
exports.calcColGutter = exports.calcGutter(false);
exports.flexBasis = exports.transformProp(function (value) { return "0 0 " + value; });
exports.isReverse = function (prop) {
    if (Array.isArray(prop)) {
        return prop.includes('row-reverse') || prop.includes('column-reverse');
    }
    if (prop instanceof Object) {
        var test_1 = Object.values(prop);
        return test_1.includes('row-reverse') || test_1.includes('column-reverse');
    }
    return prop === 'row-reverse' || prop === 'column-reverse';
};
//# sourceMappingURL=utils.js.map