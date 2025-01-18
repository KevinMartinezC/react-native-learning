import { View, StyleSheet } from 'react-native';
import ImageViewer from '@/components/ImageViewer';
import Button from '@/components/Button';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

const placeHolderImage = require('../../assets/images/background-image.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image');
    }
  };

  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <ImageViewer imgSource={selectedImage || placeHolderImage} />
      </View>
      <View style={style.footerContainer}>
        <Button
          onPress={pickImageAsync}
          label="Choose a photo"
          theme="primary"
        />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#25292e',
  },
  textStyle: {
    color: 'white',
  },
  imageContainer: {
    flex: 1, //taking the complete available space
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
