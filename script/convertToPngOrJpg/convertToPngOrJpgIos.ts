import { IosFileType } from "../../src/types"
import { folderExist, getOutpoutFilePath } from "../baseCode/common"
import { convertJpg, convertPng } from "./commonPngAndJpg"
const FilePath = require("path")
const fs = require("fs-extra")
import * as readline from "readline"

const generateForEveryScale = async (
  inputPath: string,
  width: number,
  height: number,
  fileName: string,
  outputFile: string,
  folderName: string,
  fileType: IosFileType,
  type: string,
  convertIpad?: boolean
) => {
  const maxScale = convertIpad ? 2 : 3
  const fileOutpoutPath = outputFile + folderName
  const idiom = convertIpad ? "ipad" : "universal"
  const addToFileName = "~" + idiom + "@"
  const contentsImageTab = []

  folderExist(outputFile + folderName)

  for (let i: number = 1; i <= maxScale; i++) {
    const universalFileName = fileName.replace("." + type, addToFileName + i + "x." + type)
    process.stdout.write("⚙️  CONVERT START IN " + outputFile + "/" + folderName)
    if (fileType === IosFileType.Png) {
      await convertPng(
        inputPath,
        height,
        width,
        getOutpoutFilePath(fileOutpoutPath, universalFileName),
        i
      )
    } else if (fileType === IosFileType.Jpeg) {
      await convertJpg(
        inputPath,
        height,
        width,
        getOutpoutFilePath(fileOutpoutPath, universalFileName),
        i
      )
    }
    readline.cursorTo(process.stdout, 0)
    process.stdout.write(
      "✅ CONVERT " +
        universalFileName +
        " DONE IN : " +
        fileOutpoutPath +
        "/" +
        universalFileName +
        "\n"
    )
    contentsImageTab.push({ filename: universalFileName, idiom: idiom, scale: i + "x" })
  }
  return contentsImageTab
}

export const convertToPngOrJpgIos = async (
  path: string,
  height: number,
  width: number,
  outputFile: string,
  fileType: IosFileType,
  fileUri: string,
  heightIPad?: number,
  widthIPad?: number
) => {
  const type = fileType == IosFileType.Png ? "png" : "jpg"
  const parentType = fileType === IosFileType.Png ? "svg" : "jpg"

  var fileName = fileUri + "." + type

  const inputFilePath = path
  const folderName = fileUri + ".imageset/"

  const contentsImage = await generateForEveryScale(
    inputFilePath,
    width,
    height,
    fileName,
    outputFile,
    folderName,
    fileType,
    type
  )
  if (heightIPad && widthIPad) {
    const contentsImageIpad = await generateForEveryScale(
      inputFilePath,
      widthIPad,
      heightIPad,
      fileName,
      outputFile,
      folderName,
      fileType,
      type,
      true
    )
    for (let i = 0; i < contentsImageIpad.length; i++) {
      contentsImage.push(contentsImageIpad[i])
    }
  }
  var contentsFile = {
    images: contentsImage,
    info: {
      version: 1,
      author: "xcode",
    },
  }
  fs.outputJsonSync(FilePath.join(outputFile + folderName + "/", "Contents.json"), contentsFile, {
    spaces: 2,
  })
  console.log("Contents file generated !")
}
