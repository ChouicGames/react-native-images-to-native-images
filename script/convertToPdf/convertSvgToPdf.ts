var fs = require("fs")
const fsExtra = require("fs-extra")
var { readFileSync } = require("fs")
var PDFDocument = require("pdfkit")
var SVGtoPDF = require("svg-to-pdfkit")
const FilePath = require("path")
import { folderExist } from "../baseCode/common"
import * as readline from "readline"

export const convertSvgToPdf = async (path: string, outputFilePath: string, fileUri: string) => {
  const fileName = fileUri + ".pdf"
  const folderName = fileUri + ".imageset/"
  const finalOutput = outputFilePath + folderName
  folderExist(finalOutput)

  process.stdout.write("⚙️ CONVERT PDF START IN " + finalOutput + fileName)

  const svgString = await readFileSync(path, "utf-8")
  var doc = new PDFDocument(),
    stream = fs.createWriteStream(finalOutput + fileName),
    svg = svgString

  await SVGtoPDF(doc, svg, 0, 0)
  doc.pipe(stream)
  doc.end()

  readline.cursorTo(process.stdout, 0)
  process.stdout.write("✅ CONVERT PDF DONE ")

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
  }

  fsExtra.outputJsonSync(FilePath.join(finalOutput + "/", "Contents.json"), contentsFile, {
    spaces: 2,
  })

  console.log("Contents file generated !")
}
