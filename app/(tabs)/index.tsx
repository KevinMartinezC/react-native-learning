import { Text, View, StyleSheet } from 'react-native';

export default function Index() {
  return (
    <View style={style.container}>
      <Text style={style.textStyle}>Hello Expo.</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#25292e',
  },
  textStyle: {
    color: 'white',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
