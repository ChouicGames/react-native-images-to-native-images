"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertSvgToPdf = void 0;
const tslib_1 = require("tslib");
var fs = require("fs");
const fsExtra = require("fs-extra");
var { readFileSync } = require("fs");
var PDFDocument = require("pdfkit");
var SVGtoPDF = require("svg-to-pdfkit");
const FilePath = require("path");
const common_1 = require("../baseCode/common");
const readline = tslib_1.__importStar(require("readline"));
const convertSvgToPdf = (path, outputFilePath, fileUri) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const fileName = fileUri + ".pdf";
    const folderName = fileUri + ".imageset/";
    const finalOutput = outputFilePath + folderName;
    (0, common_1.folderExist)(finalOutput);
    process.stdout.write("⚙️ CONVERT PDF START IN " + finalOutput + fileName);
    const svgString = yield readFileSync(path, "utf-8");
    var doc = new PDFDocument(), stream = fs.createWriteStream(finalOutput + fileName), svg = svgString;
    yield SVGtoPDF(doc, svg, 0, 0);
    doc.pipe(stream);
    doc.end();
    readline.cursorTo(process.stdout, 0);
    process.stdout.write("✅ CONVERT PDF DONE ");
    var contentsFile = {
        images: [
            {
                filename: fileName,
                idiom: "universal",
            },
        ],
        info: {
            author: "xcode",
            version: 1,
        },
        properties: {
            "preserves-vector-representation": true,
        },
    };
    fsExtra.outputJsonSync(FilePath.join(finalOutput + "/", "Contents.json"), contentsFile, {
        spaces: 2,
    });
    console.log("Contents file generated !");
});
exports.convertSvgToPdf = convertSvgToPdf;
