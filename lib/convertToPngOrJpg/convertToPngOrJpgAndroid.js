"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToPngOrJpgAndroid = void 0;
const tslib_1 = require("tslib");
const types_1 = require("../../src/types");
const common_js_1 = require("../baseCode/common.js");
const commonPngAndJpg_1 = require("./commonPngAndJpg");
const readline = tslib_1.__importStar(require("readline"));
const generateForEveryScale = (inputPath, width, height, fileName, outputFile, fileType, type) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    for (let key in commonPngAndJpg_1.AndroidImageSize) {
        process.stdout.write("⚙️  CONVERT START IN " + outputFile + commonPngAndJpg_1.AndroidImageSize[key].path + "/");
        const scale = commonPngAndJpg_1.AndroidImageSize[key].scale;
        if (fileType === types_1.AndroidFileType.Png) {
            yield (0, commonPngAndJpg_1.convertPng)(inputPath, height, width, (0, common_js_1.getOutpoutFilePath)(outputFile + commonPngAndJpg_1.AndroidImageSize[key].path, fileName), scale);
        }
        else if (fileType === types_1.AndroidFileType.Jpeg) {
            yield (0, commonPngAndJpg_1.convertJpg)(inputPath, height, width, (0, common_js_1.getOutpoutFilePath)(outputFile + commonPngAndJpg_1.AndroidImageSize[key].path, fileName), scale);
        }
        readline.cursorTo(process.stdout, 0);
        process.stdout.write("✅ CONVERT " +
            key +
            " DONE IN : " +
            outputFile +
            commonPngAndJpg_1.AndroidImageSize[key].path +
            "/" +
            fileName +
            "\n");
    }
});
const convertToPngOrJpgAndroid = (path, height, width, outputFile, fileType, fileUri) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const type = fileType === types_1.AndroidFileType.Png ? "png" : "jpg";
    var fileName = fileUri + "." + type;
    const inputFilePath = path;
    yield generateForEveryScale(inputFilePath, width, height, fileName, outputFile, fileType, type);
});
exports.convertToPngOrJpgAndroid = convertToPngOrJpgAndroid;
exports.default = exports.convertToPngOrJpgAndroid;
