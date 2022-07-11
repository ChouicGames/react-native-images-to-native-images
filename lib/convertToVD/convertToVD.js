"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertSvgToVD = void 0;
const tslib_1 = require("tslib");
const common_1 = require("../baseCode/common");
const readline = tslib_1.__importStar(require("readline"));
const { vdConvert } = require("vd-tool");
const convertSvgToVD = (pathFile, outputFilePath, fileUri) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const fileName = fileUri + ".xml";
    const finalOutput = outputFilePath + "drawable/";
    (0, common_1.folderExist)(finalOutput);
    process.stdout.write("⚙️  CONVERT XML START IN " + finalOutput + fileName);
    yield vdConvert(pathFile, { outDir: finalOutput });
    readline.cursorTo(process.stdout, 0);
    process.stdout.write("✅ CONVERT XML DONE \n");
});
exports.convertSvgToVD = convertSvgToVD;
exports.default = exports.convertSvgToVD;
