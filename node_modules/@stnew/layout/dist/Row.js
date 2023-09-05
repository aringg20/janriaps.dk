"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(require("styled-components"));
var Flex_1 = require("./Flex");
var utils_1 = require("./utils");
/**
 * Extension of `<Flex>` with negative margins.
 * Intended to wrap `<Col>` components for bootstrap-style flexbox grid.
 * Margins are tied to the `theme.grid.columnGap` property.
 * `flex-direction: row` and `flex-wrap: wrap` are enabled by default.
 */
exports.Row = styled_components_1.default(Flex_1.Flex).attrs(function (_a) {
    var theme = _a.theme;
    return ({
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginX: utils_1.calcRowGutter(theme.grid.columnGap),
    });
})({});
//# sourceMappingURL=Row.js.map