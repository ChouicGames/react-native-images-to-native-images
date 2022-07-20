"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./baseCode/common");
var fs = require("fs");
var shell = require("shelljs");
const imageFolder = "./images/";
if (!fs.existsSync(imageFolder)) {
    const constantsContent = fs.readFileSync("./node_modules/react-native-images-to-native-images/script/commonImage/Images.ts");
    const typesContent = fs.readFileSync("./node_modules/react-native-images-to-native-images/script/commonImage/ImagesTypes.ts");
    (0, common_1.folderExist)(imageFolder);
    const err = () => { };
    fs.writeFile("images/Images.ts", constantsContent, err);
    fs.writeFile("images/ImagesTypes.ts", typesContent, err);
    shell.exec("cp ./node_modules/react-native-images-to-native-images/src/images_example/img0.jpg ./images/");
    shell.exec("cp ./node_modules/react-native-images-to-native-images/src/images_example/img1.svg ./images/");
    shell.exec("cp ./node_modules/react-native-images-to-native-images/src/images_example/img2.svg ./images/");
    shell.exec("cp ./node_modules/react-native-images-to-native-images/src/images_example/img3.svg ./images/");
    shell.exec("cp ./node_modules/react-native-images-to-native-images/src/images_example/img4.svg ./images/");
    console.log("Images folder has been created successfully !");
}
