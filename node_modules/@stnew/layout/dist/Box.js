"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importStar(require("styled-components"));
var styled_system_1 = require("styled-system");
var should_forward_prop_1 = require("@styled-system/should-forward-prop");
var css_1 = __importDefault(require("@styled-system/css"));
var utils_1 = require("./utils");
var textColor = styled_system_1.style({
    prop: 'textColor',
    cssProperty: 'color',
    key: 'colors',
});
var boxProperties = new Set(__spreadArrays(should_forward_prop_1.props, [
    'span',
    'offset',
    'push',
    'pull',
    'spaceX',
    'sx',
    'spaceY',
    'sy',
]));
var spaceSystem = function (_a) {
    var spaceX = _a.spaceX, sx = _a.sx, spaceY = _a.spaceY, sy = _a.sy, flexDirection = _a.flexDirection;
    if (utils_1.isReverse(flexDirection)) {
        return css_1.default({
            marginRight: spaceX,
            mr: sx,
            marginBottom: spaceY,
            mb: sy,
        });
    }
    return css_1.default({
        marginLeft: spaceX,
        ml: sx,
        marginTop: spaceY,
        mt: sy,
    });
};
var spaceExtension = styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & > * + * {\n    ", "\n  }\n"], ["\n  & > * + * {\n    ", "\n  }\n"])), spaceSystem);
var box = styled_system_1.compose(styled_system_1.background, styled_system_1.border, styled_system_1.color, styled_system_1.flexbox, styled_system_1.grid, styled_system_1.layout, styled_system_1.position, styled_system_1.space, styled_system_1.typography, 
// Custom properties
textColor);
/**
 * Basic layout building block. Includes `background`, `border`, `color`,
 * `flexbox`, `grid`, `layout`, `position`, `space`,  and `typography`
 * props from `styled-system`. All `<Box>` components render a `div`
 * by default and have no styling applied.
 */
exports.Box = styled_components_1.default('div').withConfig({
    shouldForwardProp: function (prop) { return !boxProperties.has(prop); },
})(box, spaceExtension);
var templateObject_1;
//# sourceMappingURL=Box.js.map