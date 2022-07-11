

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
