import { FilesInfos } from "./commonImage/Types"
import { AndroidFileType, File, IosFileType } from "../src/types"
import { folderExist } from "./baseCode/common.js"
import { convertSvgToPdf } from "./convertToPdf/convertSvgToPdf"
import { convertToPngOrJpgAndroid } from "./convertToPngOrJpg/convertToPngOrJpgAndroid"
import { convertToPngOrJpgIos } from "./convertToPngOrJpg/convertToPngOrJpgIos"
import { convertSvgToVD } from "./convertToVD/convertToVD"

const generateImages = async (file: File, appName: string) => {
  const realPath = "./images/" + file.path.replace("./", "")
  await generateAndroid(file, realPath)
  await generateIos(file, appName, realPath)
}

const generateAndroid = async (file: File, realPath: string) => {
  const androidOutput = "./android/app/src/main/res/"
  folderExist(androidOutput)
  if (file.android.type === AndroidFileType.Png || file.android.type === AndroidFileType.Jpeg) {
    await convertToPngOrJpgAndroid(
      realPath,
      file.android.height,
      file.android.width,
      androidOutput,
      file.android.type,
      file.source["uri"]
    )
  } else if (file.android.type === AndroidFileType.Vector) {
    await convertSvgToVD(realPath, androidOutput, file.source["uri"])
  }
}

const generateIos = async (file: File, appName: string, realPath: string) => {
  const iosOutput = "./ios/" + appName + "/Images.xcassets/"
  folderExist(iosOutput)
  if (file.ios.type === IosFileType.Png || file.ios.type === IosFileType.Jpeg) {
    await convertToPngOrJpgIos(
      realPath,
      file.ios.height,
      file.ios.width,
      iosOutput,
      file.ios.type,
      file.source["uri"],
      file.ios.heightIPad,
      file.ios.widthIPad
    )
  } else if (file.ios.type === IosFileType.Pdf) {
    await convertSvgToPdf(realPath, iosOutput, file.source["uri"])
  }
}

export const imagesGenerator = async (file: FilesInfos, appName: string) => {
  for (let image: File in file) {
    await generateImages(file[image], appName)
  }
}

export default imagesGenerator
