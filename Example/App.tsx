import React from "react"
import { ScrollView, View } from "react-native"

import { NativeImage } from "react-native-images-to-native-images"
import Images from "./images/Images"

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
        <NativeImage file={Images.IMG0} style={imagesSize} />
        <View style={{ borderColor: "black", borderWidth: 4 }}>
          <NativeImage file={Images.IMG1} style={imagesSize} />
        </View>
        <NativeImage file={Images.IMG2} style={imagesSize} />
        <NativeImage file={Images.IMG3} style={imagesSize} />
        <NativeImage file={Images.IMG4} style={imagesSize} />
      </View>
    </ScrollView>
  )
}

export default App
