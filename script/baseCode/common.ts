const FilePath = require("path")
const fs = require("fs")

export const getOutpoutFilePath = (folder: string, fileName: string) => {
  folderExist(folder)
  const outputFilePath = folder + "/" + fileName
  return outputFilePath
}

export const folderExist = (folder: string) => {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder)
  }
}
