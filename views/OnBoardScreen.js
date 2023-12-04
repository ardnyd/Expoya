import React from 'react';
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  View,
  navigation
} from 'react-native';
import { useNavigation } from '@react-navigation/native';



const OnBoardScreen = () => {
  const navigation = useNavigation();

  const navigateLogin = () => {
    navigation.navigate('Login')
  }
  return (
    <View style={styles.screen}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground style={{flex: 1}} source={require('../foto/jogja2.jpg')}>
        <View style={styles.detail}>
          <Text style={styles.discover}>Discover the Unexplored: </Text>
          <Text style={styles.desc}>
            For Embark on an Adventure to Our Recommended Hidden Gems!
          </Text>
          <TouchableOpacity
            onPress={navigateLogin}>
            <View style={styles.btn}>
              <Text style={{fontWeight: 'bold'}}>Get Started</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  detail: {
    bottom: 0,
    paddingTop: 575,
    paddingHorizontal: 30,
  },
  discover: {
    color: 'white',
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 0,
  },
  desc: {
    color: 'white',
    lineHeight: 30,
    fontSize: 16,
    marginTop: 5,
  },
  btn: {
    heght: 50,
    width: 100,
    backgroundColor: '#F1EB90',
    marginTop: 10,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
});
export default OnBoardScreen;
