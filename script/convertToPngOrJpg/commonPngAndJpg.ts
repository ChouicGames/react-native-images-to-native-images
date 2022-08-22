const { convertFile } = require("convert-svg-to-png")
const sharp = require("sharp")

export type ImageSize = {
  path: string
  scale: number
}

export interface AndroidImageSizes {
  [key: string]: ImageSize
}

export enum OperatingSystem {
  iOS,
  android,
}

export const AndroidImageSize: AndroidImageSizes = {
  mdpi: {
    path: "drawable-mdpi",
    scale: 1,
  },
  ldpi: {
    path: "drawable-ldpi",
    scale: 0.75,
  },
  hdpi: {
    path: "drawable-hdpi",
    scale: 1.5,
  },
  xhdpi: {
    path: "drawable-xhdpi",
    scale: 2,
  },
  xxhdpi: {
    path: "drawable-xxhdpi",
    scale: 3,
  },
  xxxhdpi: {
    path: "drawable-xxxhdpi",
    scale: 4,
  },
}

export const convertPng = async (
  inputPath: string,
  height: number | "auto",
  width: number,
  outputFile: string,
  scale: number
) => {
  await convertFile(inputPath, {
    height: height,
    width: width,
    outputFilePath: outputFile,
    scale: scale,
  })
}

export const convertJpg = async (
  inputPath: string,
  height: number | "auto",
  width: number,
  outputFile: string,
  scale: number
) => {
  await sharp(inputPath).resize({ height: height, width: width }).toFile(outputFile)
}

export default convertPng
