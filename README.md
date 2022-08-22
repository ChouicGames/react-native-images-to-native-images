# react-native-images-to-native-images

## Introduction

This react-native module will help you to convert your images to Png/Jpg/VectorDrawable (for Android)/Pdf (for iOS) in every scale.

Your images must be in svg type if you want to convert them in Png/VectorDrawable/Pdf.
If you want to convert in Jpg, your images must be a Jpg (this module will just resize your image for every scale)

To show Vectors Drawables, the module need : @klarna/react-native-vector-drawable in your project dependencies, that's why we will ask you to install with our module. More information on this module here : https://github.com/klarna-incubator/react-native-vector-drawable

## Installation

run this command with yarn :

```sh
yarn add git+https://github.com/ChouicGames/react-native-images-to-native-images.git @klarna/react-native-vector-drawable
```

#### init the images folder

**Make sure there is not already an 'images' folder in your project root**

in your project root run :

```
yarn generate-images-init
```
# ![image](https://github.com/ChouicGames/react-native-images-to-native-images/blob/main/ReadMe_Images/ImagesFolder_screenshot.png?raw=true)

This will create a new folder 'images' in your root project, which contains 'Images.ts', 'ImagesTypes.ts' and 5 images, that serve as an example (you can delete them if you don't want the module to convert them into your project images).

## Set up

You can look [Example/](https://github.com/ChouicGames/react-native-images-to-native-images/tree/main/Example) to try the set-up and usage example.

Open images/Images.ts and change the value of the const "appName" to your app name (we need the name of the folder in ```YourProject/ios/YourAppName```)

```js
export const appName: string = "YourAppName" // <------ change to your app name (in YourProject/ios/YourAppName)
```

Now you can import your Svg/Jpg images in the folder 'images'.

**WARNING : 
Your images names must be in lower case, without spaces, and without '-'. Only "_" are accepted. You can add numbers.**

**For example, this name is right : 'my_cool_image12.svg'
But this name isn't right : 'My-cool image 12.svg'**

**If you want to convert in Jpg, your images must be a Jpg (This module will just resize your image for every scale)**



For every image in the folder, you have to add the name of 'ImagesTypes.ts' > enum Files. You can replace the default values of default images.

```js
export enum Files {
  // NAMES OF YOUR IMAGES HERE

  // Follow this example :

  IMG0,
  IMG1,
  IMG2,
  IMG3,
  IMG4
}
```

Then, in 'Images.ts' >  Images, add your images informations, by first adding the key of your images : [Files.nameYouAddInImagesTypes.ts] : {},
then adding the differents informations needed :
* path : "./image_name.svg"
* source : {uri: "image_name_generated"}
* android {type: AndroidFileType.Jpg or Png or Vector, width & height if it's Png or Jpg}
* ios : {type: IosFileType.Jpg or Png or Pdf, width & height if it's Png or Jpg}

height can be of the value "auto".

**For PNG on iOS only**
* You can add values for IPad : widthIpad: number, heightIpad: number or "auto".
* You can also add pathIpad: string, that will generate a different image for IPad only.

Here you choose what type of image your image will be converted to for Android and iOS, so you can convert one image into Png for Android and into Pdf for iOS for example.

```js
export const appName: string = "YourAppName" // <------ change to your app name (in YourProject/ios/YourAppName)

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
```

You can now run :
```
yarn generate-images
```

And the module will convert all your images in the right type, in every scale !

## Usage

```js
import React from "react"
import { ScrollView, View } from "react-native"

import { NativeImage } from "react-native-images-to-native-images"
import Images, { Files } from "./images/Images"

const App = () => {
  const imagesSize = {
    width: "100%",
    height: 200,
    borderColor: "black",
    borderWidth: 4,
  }

  return (
    <ScrollView>
      <View>
        <NativeImage file={Images[Files.IMG0]} style={imagesSize} />
        <View style={{ borderColor: "black", borderWidth: 4 }}>
          <NativeImage file={Images[Files.IMG1]} style={imagesSize} />
        </View>
        <NativeImage file={Images[Files.IMG2]} style={imagesSize} />
        <NativeImage file={Images[Files.IMG3]} style={imagesSize} />
        <NativeImage file={Images[Files.IMG4]} style={imagesSize} />
      </View>
    </ScrollView>
  )
}

export default App


```

In this example, IMG1 is a Vector Drawable, which doesn't support border props. More informations for Vector Drawable here : https://github.com/klarna-incubator/react-native-vector-drawable

### Props

| Prop               | Description                                              | Default |
| ------------------ | -------------------------------------------------------- | ------- |
| **`file`** | Name of your image  in 'images/types.ts'. follow this example : Files.YourImage            | _None_  |
| **`style`**        | Support style like a normal image in react-native. Add width and height if your image is a Pdf/Vector Drawable or it won't show in your application. | width & height for Png/Jpg call in images/Images.ts |

## AnimatedNativeImage

You can also use AnimatedNativeImage, it work exactly like Animated.Image.

```js
import AnimatedNativeImages from "react-native-images-to-native-images/src/AnimatedNativeImage"

<AnimatedNativeImages file={Images[Files.IMG4]} style={styles.image} />
```

