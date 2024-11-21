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
  const size =
    height == "auto"
      ? { width: Math.floor(width * scale) }
      : { height: Math.floor(height * scale), width: Math.floor(width * scale) }
  await sharp(inputPath).resize(size).toFile(outputFile)
}

export const convertJpg = async (
  inputPath: string,
  height: number | "auto",
  width: number,
  outputFile: string,
  scale: number
) => {
  await convertPng(inputPath, height, width, outputFile, scale)
}

export default convertPng
