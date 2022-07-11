# react-native-images-to-native-images

## Introduction

This react-native module will help you to convert your images to Png/Jpg/VectorDrawable (for Android)/Pdf (for iOS) in every scales.

Your images must be in svg type if you want to convert them in Png/VectorDrawable/Pdf.
If you want to convert in Jpg, your images must be an Jpg (This module will just resize your image for every scales)

To show Vectors Drawables, the module need : @klarna/react-native-vector-drawable in your project dependencies, that's why we will ask you to install with our module.

## Installation

run this command with yarn :

```sh
yarn add git+https://github.com/ChouicGames/react-native-images-to-native-images.git @klarna/react-native-vector-drawable
```

#### init the images folder

**Make sure there is not already an 'images' folder in your project root**

in your root project run :

```
yarn generate-images-init
```
# ![image](https://github.com/ChouicGames/react-native-images-to-native-images/blob/main/ReadMe_Images/ImagesFolder_screenshot.png?raw=true)

This will create a new folder 'images' in your root projet, which contains 'constants.ts', 'types.ts' and 5 images, that serve as an example (you can delete them if you don't want the module to convert them into your project images).

## Set-up

You can look [Example/](https://github.com/ChouicGames/react-native-images-to-native-images/tree/main/Example) to try the set-up and usage example.

Open images/constants.ts and change the value of the const "appName" to your app name (We need the name of the folder in ```YourProject/ios/YourAppName```)

```js
export const appName: string = "YourAppName" // <------ change to your app name (in YourProject/ios/YourAppName)
```

Now you can import your Svg/Jpg images in the folder 'images'.

**WARNING : 
Your images name must be in lower case, without spaces, and without '-'. Only "_" are accepted. You can add numbers.**

**For example, this name is right : 'my_super_image.svg'
But this name isn't right : 'My-Super image.svg'**

**If you want to convert in Jpg, your images must be an Jpg (This module will just resize your image for every scales**



For every images in the folder, you have to add the name in 'types.ts' > enum Files. You can replace the default values of default images.

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

Then, in 'constants.ts' >  FilesInfos, add a your images informations, by first adding the key of your images : [Files.nameYouAddInTypes.ts] : {},
Then adding the differents informations needed :
* path : "./images/image_name.svg"
* source : {uri: "image_name"}
* android {type: AndroidFileType.(Jpg/Png/Vector), width & height if it's Png or Jpg}
* ios : {type: IosFileType.(Jpg/Png/Pdf), width & heith if it's Png or Jpg}

Here you choose what type of image your image will be converted to for Android and iOS, so you can convert one image into Png for Android and into Pdf for iOS for example.

```js
export const files: FilesInfos = {
    //YOUR IMAGES HERE !

    // Follow this example :
    
    [Files.IMG0]: {
      path: "./images/img0.jpg",
      source: { uri: "img0" },
      android: { type: AndroidFileType.Jpeg, width: 200, height: 200 },
      ios: { type: IosFileType.Jpeg, width: 300, height: 300 },
    },
    [Files.IMG1]: {
      path: "./images/img1.svg",
      source: { uri: "img1" },
      android: { type: AndroidFileType.Vector },
      ios: { type: IosFileType.Pdf },
    },
    [Files.IMG2]: {
      path: "./images/img2.svg",
      source: { uri: "img2" },
      android: { type: AndroidFileType.Png, width: 500, height: 500 },
      ios: { type: IosFileType.Png, width: 450, height: 450 },
    },
    [Files.IMG3]: {
      path: "./images/img3.svg",
      source: { uri: "img3" },
      android: { type: AndroidFileType.Png, width: 450, height: 450 },
      ios: { type: IosFileType.Png, width: 375, height: 375, widthIPad: 250, heightIPad: 250 },
    },
    [Files.IMG4]: {
      path: "./images/img4.svg",
      source: { uri: "img4" },
      android: { type: AndroidFileType.Png, width: 375, height: 375 },
      ios: { type: IosFileType.Pdf },
    },
};
```

You can now run :
```
yarn generate-images
```

And the module will convert all your images in the right type, in every scales !

## Usage

```js
import React from 'react';
import {

  ScrollView,
  View,
} from 'react-native';

import { NativeImage } from 'react-native-images-to-native-images';
import { Files } from './images/types';

const App = () => {

  const imagesSize = {width: "100%", height: 200, borderColor: "black", borderWidth: 4}

  return (
    <ScrollView>
      <View>
        <NativeImage file={Files.IMG0} style={imagesSize}/>
        <View style={{borderColor: "black", borderWidth: 4}}>
          <NativeImage file={Files.IMG1} style={imagesSize}/>
        </View>
        <NativeImage file={Files.IMG2}style={imagesSize}/>
        <NativeImage file={Files.IMG3}style={imagesSize}/>
        <NativeImage file={Files.IMG4}style={imagesSize}/>
      </View>
    </ScrollView>
  );
};



export default App;

```

In this example, IMG1 is an Vector Drawable, which don't support border props, more informations for Vector Drawable here : https://github.com/klarna-incubator/react-native-vector-drawable

### Props

| Prop               | Description                                              | Default |
| ------------------ | -------------------------------------------------------- | ------- |
| **`file`** | Name of your image  in 'images/types.ts'. follow this example : Files.YourImage            | _None_  |
| **`style`**        | Support style like a normal image in react-native. Add width and height if your image is a Pdf/Vector Drawable or it won't show in your application. | width & height for Png/Jpg call in images/constants.ts |

