"use strict";
/**
 * @format
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("react-native");
const react_1 = tslib_1.__importDefault(require("react"));
const App_1 = tslib_1.__importDefault(require("../App"));
// Note: test renderer must be required after react-native.
const react_test_renderer_1 = tslib_1.__importDefault(require("react-test-renderer"));
it('renders correctly', () => {
    react_test_renderer_1.default.create(react_1.default.createElement(App_1.default, null));
});
