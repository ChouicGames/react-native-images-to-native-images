import imagesGenerator from "./generate_images"
var fs = require("fs")
var shell = require("shelljs")

export const index = () => {
  if (fs.existsSync("./images/")) {
    shell.exec(
      "tsc ./images/Images.ts --outDir ./node_modules/@chouicgames/react-native-images-to-native-images/lib/commonImage/"
    )
    var constantsFile = require("./commonImage/Images")
    imagesGenerator(constantsFile["default"], constantsFile["appName"])
  } else {
    console.log("❗️ CANNOT START")
    console.log("run generate-images-init to create 'images/' folder with 'Images' + 'Types' files")
  }
}

index()
