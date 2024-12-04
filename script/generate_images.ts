import { FilesInfos } from "./commonImage/ImagesTypes"
// @ts-ignore
import { AndroidFileType, File, IosFileType } from "../src/types"
import { folderExist } from "./baseCode/common.js"
import { convertSvgToPdf } from "./convertToPdf/convertSvgToPdf"
import { convertToPngOrJpgAndroid } from "./convertToPngOrJpg/convertToPngOrJpgAndroid"
import { convertToPngOrJpgIos } from "./convertToPngOrJpg/convertToPngOrJpgIos"
import { convertSvgToVD } from "./convertToVD/convertToVD"

const generateImages = async (file: File, appName: string) => {
  const realPath = "./images/" + file.path.replace("./", "")
  generateAndroid(file, realPath)
  generateIos(file, appName, realPath)
}

const generateAndroid = async (file: File, realPath: string) => {
  const androidOutput = "./android/app/src/main/res/"
  folderExist(androidOutput)
  if (file.android.type === AndroidFileType.Png || file.android.type === AndroidFileType.Jpeg) {
    convertToPngOrJpgAndroid(
      realPath,
      file.android.height,
      file.android.width,
      androidOutput,
      file.android.type,
      file.source["uri"]
    )
  } else if (file.android.type === AndroidFileType.Vector) {
    convertSvgToVD(realPath, androidOutput, file.source["uri"])
  }
}

const generateIos = async (file: File, appName: string, realPath: string) => {
  const iosOutput = "./ios/" + appName + "/Images.xcassets/"

  folderExist(iosOutput)
  if (file.ios.type === IosFileType.Png || file.ios.type === IosFileType.Jpeg) {
    const realPathIpad = file.ios.pathIpad
      ? "./images/" + file.ios.pathIpad.replace("./", "")
      : undefined
    convertToPngOrJpgIos(
      realPath,
      file.ios.height,
      file.ios.width,
      iosOutput,
      file.ios.type,
      file.source["uri"],
      file.ios.heightIPad,
      file.ios.widthIPad,
      realPathIpad
    )
  } else if (file.ios.type === IosFileType.Pdf) {
    convertSvgToPdf(realPath, iosOutput, file.source["uri"])
  }
}

export const imagesGenerator = async (file: FilesInfos, appName: string) => {
  for (let key in file) {
    const image = file[key] as File
    await generateImages(image, appName)
  }
}

export default imagesGenerator
