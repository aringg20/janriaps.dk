"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(require("styled-components"));
var Box_1 = require("./Box");
/**
 * Extension of `<Box>` with max-width and padding applied.
 * This is used as a page or section wrapper.
 */
exports.Container = styled_components_1.default(Box_1.Box).attrs(function (_a) {
    var theme = _a.theme;
    var containerWidth = theme.grid.maxWidth;
    if (Array.isArray(containerWidth)) {
        containerWidth = __spreadArrays(['100%'], theme.grid.maxWidth);
    }
    return {
        width: '100%',
        marginX: 'auto',
        paddingX: theme.grid.margins,
        maxWidth: containerWidth,
    };
})({});
//# sourceMappingURL=Container.js.map