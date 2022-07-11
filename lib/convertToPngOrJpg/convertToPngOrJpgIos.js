"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToPngOrJpgIos = void 0;
const tslib_1 = require("tslib");
const types_1 = require("../../src/types");
const common_1 = require("../baseCode/common");
const commonPngAndJpg_1 = require("./commonPngAndJpg");
const FilePath = require("path");
const fs = require("fs-extra");
const readline = tslib_1.__importStar(require("readline"));
const generateForEveryScale = (inputPath, width, height, fileName, outputFile, folderName, fileType, type, convertIpad) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const maxScale = convertIpad ? 2 : 3;
    const fileOutpoutPath = outputFile + folderName;
    const idiom = convertIpad ? "ipad" : "universal";
    const addToFileName = "~" + idiom + "@";
    const contentsImageTab = [];
    (0, common_1.folderExist)(outputFile + folderName);
    for (let i = 1; i <= maxScale; i++) {
        const universalFileName = fileName.replace("." + type, addToFileName + i + "x." + type);
        process.stdout.write("⚙️  CONVERT START IN " + outputFile + "/" + folderName);
        if (fileType === types_1.IosFileType.Png) {
            yield (0, commonPngAndJpg_1.convertPng)(inputPath, height, width, (0, common_1.getOutpoutFilePath)(fileOutpoutPath, universalFileName), i);
        }
        else if (fileType === types_1.IosFileType.Jpeg) {
            yield (0, commonPngAndJpg_1.convertJpg)(inputPath, height, width, (0, common_1.getOutpoutFilePath)(fileOutpoutPath, universalFileName), i);
        }
        readline.cursorTo(process.stdout, 0);
        process.stdout.write("✅ CONVERT " +
            universalFileName +
            " DONE IN : " +
            fileOutpoutPath +
            "/" +
            universalFileName +
            "\n");
        contentsImageTab.push({ filename: universalFileName, idiom: idiom, scale: i + "x" });
    }
    return contentsImageTab;
});
const convertToPngOrJpgIos = (path, height, width, outputFile, fileType, fileUri, heightIPad, widthIPad) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const type = fileType == types_1.IosFileType.Png ? "png" : "jpg";
    const parentType = fileType === types_1.IosFileType.Png ? "svg" : "jpg";
    var fileName = fileUri + "." + type;
    const inputFilePath = path;
    const folderName = fileUri + ".imageset/";
    const contentsImage = yield generateForEveryScale(inputFilePath, width, height, fileName, outputFile, folderName, fileType, type);
    if (heightIPad && widthIPad) {
        const contentsImageIpad = yield generateForEveryScale(inputFilePath, widthIPad, heightIPad, fileName, outputFile, folderName, fileType, type, true);
        for (let i = 0; i < contentsImageIpad.length; i++) {
            contentsImage.push(contentsImageIpad[i]);
        }
    }
    var contentsFile = {
        images: contentsImage,
        info: {
            version: 1,
            author: "xcode",
        },
    };
    fs.outputJsonSync(FilePath.join(outputFile + folderName + "/", "Contents.json"), contentsFile, {
        spaces: 2,
    });
    console.log("Contents file generated !");
});
exports.convertToPngOrJpgIos = convertToPngOrJpgIos;
