"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NativeImage = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_native_1 = require("react-native");
const constants_1 = require("../script/commonImage/constants");
const types_1 = require("./types");
const react_native_vector_drawable_1 = tslib_1.__importDefault(require("@klarna/react-native-vector-drawable"));
const NativeImage = (_a) => {
    var { file } = _a, rest = tslib_1.__rest(_a, ["file"]);
    const fileInfos = constants_1.files[file];
    let width = undefined;
    let height = undefined;
    if (react_native_1.Platform.OS === "android" &&
        (fileInfos.android.type === types_1.AndroidFileType.Jpeg ||
            fileInfos.android.type === types_1.AndroidFileType.Png)) {
        width = fileInfos.android.width;
        height = fileInfos.android.height;
    }
    else if (fileInfos.ios.type === types_1.IosFileType.Jpeg || fileInfos.ios.type === types_1.IosFileType.Png) {
        width = fileInfos.ios.width;
        height = fileInfos.ios.height;
    }
    if (react_native_1.Platform.OS === "android" && fileInfos.android.type === types_1.AndroidFileType.Vector) {
        return <react_native_vector_drawable_1.default resourceName={fileInfos.source.uri} style={{ width, height }}/>;
    }
    return <react_native_1.Image source={fileInfos.source} style={{ width, height }} {...rest}/>;
};
exports.NativeImage = NativeImage;
