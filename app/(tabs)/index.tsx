import { View, StyleSheet } from 'react-native';
import ImageViewer from '@/components/ImageViewer';
import Button from '@/components/Button';

const placeHolderImage = require('../../assets/images/background-image.png');

export default function Index() {
  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <ImageViewer imgSource={placeHolderImage} />
      </View>
      <View style={style.footerContainer}>
        <Button label="Choose a photo" theme="primary" />
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
