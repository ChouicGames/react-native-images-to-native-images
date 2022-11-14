import { AndroidFileType, IosFileType } from "react-native-images-to-native-images/src/types"
import { Files, FilesInfos } from "./ImagesTypes"

export const appName: string = "Example" // <------ change to your app name (in YourProject/ios/YourAppName)

export const Images: FilesInfos = {
  //YOUR IMAGES HERE !

  // Follow this example :

  [Files.IMG0]: {
    path: "./img0.jpg",
    source: { uri: "img0" },
    android: { type: AndroidFileType.Jpeg, width: 200, height: 200 },
    ios: { type: IosFileType.Jpeg, width: 300, height: 300 },
  },
  [Files.IMG1]: {
    path: "./img1.svg",
    source: { uri: "img1" },
    android: { type: AndroidFileType.Vector },
    ios: { type: IosFileType.Pdf },
  },
  [Files.IMG2]: {
    path: "./img2.svg",
    source: { uri: "img2" },
    android: { type: AndroidFileType.Png, width: 500, height: 500 },
    ios: { type: IosFileType.Png, width: 450, height: 450 },
  },
  [Files.IMG3]: {
    path: "./img3.svg",
    source: { uri: "img3" },
    android: { type: AndroidFileType.Png, width: 450, height: "auto" },
    ios: {
      type: IosFileType.Png,
      width: 375,
      height: 375,
      widthIPad: 250,
      heightIPad: 250,
    },
  },
  [Files.IMG4]: {
    path: "./img4.svg",
    source: { uri: "img4" },
    android: { type: AndroidFileType.Png, width: 375, height: 375 },
    ios: {
      type: IosFileType.Png,
      width: 375,
      height: 375,
      widthIPad: 400,
      heightIPad: "auto",
      pathIpad: "./img3.svg",
    },
  },
}

export default Images

export { Files }
