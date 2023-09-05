"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(require("styled-components"));
var Box_1 = require("./Box");
var utils_1 = require("./utils");
/**
 * Extension of `<Box>`. Child of `<Row>` with built in padding
 * and bootstrap-esque flexbox grid props. The number of columns
 * you can span correspond to the `theme.grid.columns` property.
 * Spacing between columns is controlled via `theme.grid.columnGap`.
 */
exports.Col = styled_components_1.default(Box_1.Box).attrs(function (_a) {
    var theme = _a.theme, span = _a.span, push = _a.push, pull = _a.pull, offset = _a.offset;
    var props = {
        flex: 1,
        maxWidth: '100%',
        position: 'relative',
        paddingX: utils_1.calcColGutter(theme.grid.columnGap),
    };
    var colSpan = utils_1.calcSpan(theme.grid.columns);
    if (span) {
        props.flex = utils_1.flexBasis(colSpan(span));
        props.maxWidth = colSpan(span);
    }
    if (push) {
        props.left = colSpan(push);
    }
    if (pull) {
        props.right = colSpan(pull);
    }
    if (offset) {
        props.marginLeft = colSpan(offset);
    }
    return props;
})({});
//# sourceMappingURL=Col.js.map