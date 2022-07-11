"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imagesGenerator = void 0;
const tslib_1 = require("tslib");
const types_1 = require("../src/types");
const common_js_1 = require("./baseCode/common.js");
const convertSvgToPdf_1 = require("./convertToPdf/convertSvgToPdf");
const convertToPngOrJpgAndroid_1 = require("./convertToPngOrJpg/convertToPngOrJpgAndroid");
const convertToPngOrJpgIos_1 = require("./convertToPngOrJpg/convertToPngOrJpgIos");
const convertToVD_1 = require("./convertToVD/convertToVD");
const generateImages = (file, appName) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const realPath = "./images/" + file.path.replace("./", "");
    yield generateAndroid(file, realPath);
    yield generateIos(file, appName, realPath);
});
const generateAndroid = (file, realPath) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const androidOutput = "./android/app/src/main/res/";
    (0, common_js_1.folderExist)(androidOutput);
    if (file.android.type === types_1.AndroidFileType.Png || file.android.type === types_1.AndroidFileType.Jpeg) {
        yield (0, convertToPngOrJpgAndroid_1.convertToPngOrJpgAndroid)(realPath, file.android.height, file.android.width, androidOutput, file.android.type, file.source["uri"]);
    }
    else if (file.android.type === types_1.AndroidFileType.Vector) {
        yield (0, convertToVD_1.convertSvgToVD)(realPath, androidOutput, file.source["uri"]);
    }
});
const generateIos = (file, appName, realPath) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const iosOutput = "./ios/" + appName + "/Images.xcassets/";
    (0, common_js_1.folderExist)(iosOutput);
    if (file.ios.type === types_1.IosFileType.Png || file.ios.type === types_1.IosFileType.Jpeg) {
        yield (0, convertToPngOrJpgIos_1.convertToPngOrJpgIos)(realPath, file.ios.height, file.ios.width, iosOutput, file.ios.type, file.source["uri"], file.ios.heightIPad, file.ios.widthIPad);
    }
    else if (file.ios.type === types_1.IosFileType.Pdf) {
        yield (0, convertSvgToPdf_1.convertSvgToPdf)(realPath, iosOutput, file.source["uri"]);
    }
});
const imagesGenerator = (file, appName) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    for (let image in file) {
        yield generateImages(file[image], appName);
    }
});
exports.imagesGenerator = imagesGenerator;
exports.default = exports.imagesGenerator;
