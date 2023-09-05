"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(require("styled-components"));
var Box_1 = require("./Box");
/**
 * Extension of [`<Box>`] with `display: grid`.
 *`<Grid>` has `grid-template-columns` and `grid-column-gap` applied,
 * corresponding  `theme.grid.columns` and `theme.grid.columnGap`, respectively.
 * `grid-template-columns` defaults to `repeat(n, 1fr)` to fill available space.
 */
exports.Grid = styled_components_1.default(Box_1.Box)
    .attrs(function (_a) {
    var theme = _a.theme, gridColumnGap = _a.gridColumnGap, gridTemplateColumns = _a.gridTemplateColumns;
    var columnGap = theme.grid.columnGap;
    var columns = "repeat(" + theme.grid.columns + ", 1fr)";
    return {
        display: 'grid',
        gridColumnGap: gridColumnGap !== null && gridColumnGap !== void 0 ? gridColumnGap : columnGap,
        gridTemplateColumns: gridTemplateColumns !== null && gridTemplateColumns !== void 0 ? gridTemplateColumns : columns,
    };
})({});
//# sourceMappingURL=Grid.js.map