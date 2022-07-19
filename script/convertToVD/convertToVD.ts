import { folderExist } from "../baseCode/common"
import * as readline from "readline"
var path = require("path")
var shell = require("shelljs")
const { vdConvert } = require("vd-tool")

export const convertSvgToVD = async (pathFile: string, outputFilePath: string, fileUri: string) => {
  const fileXmlName = path.parse(pathFile).base
  const fileName = fileUri + ".xml"
  const finalOutput = outputFilePath + "drawable/"

  folderExist(finalOutput)

  process.stdout.write("⚙️  CONVERT XML START IN " + finalOutput + fileName)

  await vdConvert(pathFile, { outDir: finalOutput })
  shell.exec(
    "mv " + finalOutput + fileXmlName.replace(".svg", ".xml") + " " + finalOutput + fileName
  )
  readline.cursorTo(process.stdout, 0)
  process.stdout.write("✅ CONVERT XML DONE \n")
}

export default convertSvgToVD
