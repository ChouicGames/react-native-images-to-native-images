import { folderExist } from "../baseCode/common"
import * as readline from "readline"

const { vdConvert } = require("vd-tool")

export const convertSvgToVD = async (pathFile: string, outputFilePath: string, fileUri: string) => {
  const fileName = fileUri + ".xml"
  const finalOutput = outputFilePath + "drawable/"

  folderExist(finalOutput)

  process.stdout.write("⚙️  CONVERT XML START IN " + finalOutput + fileName)

  await vdConvert(pathFile, { outDir: finalOutput })

  readline.cursorTo(process.stdout, 0)
  process.stdout.write("✅ CONVERT XML DONE \n")
}

export default convertSvgToVD
