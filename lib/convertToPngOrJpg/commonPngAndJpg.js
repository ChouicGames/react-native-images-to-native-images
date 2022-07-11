"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertJpg = exports.convertPng = exports.AndroidImageSize = exports.OperatingSystem = void 0;
const tslib_1 = require("tslib");
const { convertFile } = require("convert-svg-to-png");
const sharp = require("sharp");
var OperatingSystem;
(function (OperatingSystem) {
    OperatingSystem[OperatingSystem["iOS"] = 0] = "iOS";
    OperatingSystem[OperatingSystem["android"] = 1] = "android";
})(OperatingSystem = exports.OperatingSystem || (exports.OperatingSystem = {}));
exports.AndroidImageSize = {
    mdpi: {
        path: "drawable-mdpi",
        scale: 1,
    },
    ldpi: {
        path: "drawable-ldpi",
        scale: 0.75,
    },
    hdpi: {
        path: "drawable-hdpi",
        scale: 1.5,
    },
    xhdpi: {
        path: "drawable-xhdpi",
        scale: 2,
    },
    xxhdpi: {
        path: "drawable-xxhdpi",
        scale: 3,
    },
    xxxhdpi: {
        path: "drawable-xxxhdpi",
        scale: 4,
    },
};
const convertPng = (inputPath, height, width, outputFile, scale) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    yield convertFile(inputPath, {
        height: height,
        width: width,
        outputFilePath: outputFile,
        scale: scale,
    });
});
exports.convertPng = convertPng;
const convertJpg = (inputPath, height, width, outputFile, scale) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    yield sharp(inputPath).resize({ height: height, width: width }).toFile(outputFile);
});
exports.convertJpg = convertJpg;
exports.default = exports.convertPng;
