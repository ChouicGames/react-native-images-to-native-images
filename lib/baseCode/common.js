"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.folderExist = exports.getOutpoutFilePath = void 0;
const FilePath = require("path");
const fs = require("fs");
const getOutpoutFilePath = (folder, fileName) => {
    (0, exports.folderExist)(folder);
    const outputFilePath = folder + "/" + fileName;
    return outputFilePath;
};
exports.getOutpoutFilePath = getOutpoutFilePath;
const folderExist = (folder) => {
    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder);
    }
};
exports.folderExist = folderExist;
