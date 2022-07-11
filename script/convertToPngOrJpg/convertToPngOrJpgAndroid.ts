import { AndroidFileType } from "../../src/types"
import { getOutpoutFilePath } from "../baseCode/common.js"
import { AndroidImageSize, convertJpg, convertPng } from "./commonPngAndJpg"
import * as readline from "readline"

const generateForEveryScale = async (
  inputPath: string,
  width: number,
  height: number,
  fileName: string,
  outputFile: string,
  fileType: AndroidFileType,
  type: string
) => {
  for (let key in AndroidImageSize) {
    process.stdout.write("⚙️  CONVERT START IN " + outputFile + AndroidImageSize[key].path + "/")
    const scale = AndroidImageSize[key].scale
    if (fileType === AndroidFileType.Png) {
      await convertPng(
        inputPath,
        Math.floor(height * scale),
        Math.floor(width * scale),
        getOutpoutFilePath(outputFile + AndroidImageSize[key].path, fileName),
        1
      )
    } else if (fileType === AndroidFileType.Jpeg) {
      await convertJpg(
        inputPath,
        Math.floor(height * scale),
        Math.floor(width * scale),
        getOutpoutFilePath(outputFile + AndroidImageSize[key].path, fileName),
        1
      )
    }
    readline.cursorTo(process.stdout, 0)
    process.stdout.write(
      "✅ CONVERT " +
        key +
        " DONE IN : " +
        outputFile +
        AndroidImageSize[key].path +
        "/" +
        fileName +
        "\n"
    )
  }
}

export const convertToPngOrJpgAndroid = async (
  path: string,
  height: number,
  width: number,
  outputFile: string,
  fileType: AndroidFileType,
  fileUri: string
) => {
  const type = fileType === AndroidFileType.Png ? "png" : "jpg"
  var fileName = fileUri + "." + type
  const inputFilePath = path

  await generateForEveryScale(inputFilePath, width, height, fileName, outputFile, fileType, type)
}

export default convertToPngOrJpgAndroid
