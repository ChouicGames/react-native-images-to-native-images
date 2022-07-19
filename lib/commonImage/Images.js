"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appName = void 0;
const types_1 = require("react-native-images-to-native-images/src/types");
const Types_1 = require("./Types");
exports.appName = "YourAppName"; // <------ change to your app name (in YourProject/ios/YourAppName)
const Images = {
    //YOUR IMAGES HERE !
    // Follow this example :
    [Types_1.Files.IMG0]: {
        path: "./img0.jpg",
        source: { uri: "img0" },
        android: { type: types_1.AndroidFileType.Jpeg, width: 200, height: 200 },
        ios: { type: types_1.IosFileType.Jpeg, width: 300, height: 300 },
    },
    [Types_1.Files.IMG1]: {
        path: "./img1.svg",
        source: { uri: "img1" },
        android: { type: types_1.AndroidFileType.Vector },
        ios: { type: types_1.IosFileType.Pdf },
    },
    [Types_1.Files.IMG2]: {
        path: "./img2.svg",
        source: { uri: "img2" },
        android: { type: types_1.AndroidFileType.Png, width: 500, height: 500 },
        ios: { type: types_1.IosFileType.Png, width: 450, height: 450 },
    },
    [Types_1.Files.IMG3]: {
        path: "./img3.svg",
        source: { uri: "img3" },
        android: { type: types_1.AndroidFileType.Png, width: 450, height: 450 },
        ios: {
            type: types_1.IosFileType.Png,
            width: 375,
            height: 375,
            widthIPad: 250,
            heightIPad: 250,
        },
    },
    [Types_1.Files.IMG4]: {
        path: "./img4.svg",
        source: { uri: "img4" },
        android: { type: types_1.AndroidFileType.Png, width: 375, height: 375 },
        ios: { type: types_1.IosFileType.Pdf },
    },
};
exports.default = Images;
