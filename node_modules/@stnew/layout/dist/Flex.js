"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(require("styled-components"));
var Box_1 = require("./Box");
/**
 * Extension of `<Box>` with `display: flex`.
 */
exports.Flex = styled_components_1.default(Box_1.Box)({
    display: 'flex',
});
//# sourceMappingURL=Flex.js.map