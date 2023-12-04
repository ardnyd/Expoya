import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import {themeColors} from '../theme';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';

export default function LoginScreen() {
  const navigation = useNavigation();
  const navigateHome = () => {
    navigation.navigate('PetaScreen');
  };
  const navigateSignUp = () => {
    navigation.navigate('SignUp');
  };
  return (
    <View style={{backgroundColor: '#1C2E31', flex: 1}}>
      <SafeAreaView style={{flex: 0.5}}>
        <View style={styles.arrow}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              borderRadius: 18,
              backgroundColor: '#C8DBBE',
              padding: 10,
              marginLeft: 3,
              position: 'absolute'
            }}>
            <Fontawesome5 name="arrow-left" size={23} color={'black'} />
          </TouchableOpacity>
        </View>
        <View style={styles.logo}>
          <Image
            source={require('../foto/logo.png')}
            style={{
              width: 300,
              height: 300,
              justifyContent: 'center',
              position: 'absolute',
            }}
          />
        </View>
      </SafeAreaView>

      <View
        style={{
          borderTopLeftRadius: 70,
          borderTopRightRadius: 70,
          flex: 1,
          backgroundColor: 'white',
          paddingVertical: 40,
          paddingHorizontal: 40,
        }}>
        <View style={{marginVertical: 2}}>
          <Text style={styles.text}>Email Address</Text>
          <TextInput
            style={styles.TextInput}
            placeholder="email"
            value="dayendre@gmail.com"
          />
          <Text style={styles.text}>Password</Text>
          <TextInput
            style={styles.TextInput}
            secureTextEntry
            placeholder="password"
            value="12345"
          />
          <TouchableOpacity style={{alignItems: 'flex-end'}}>
            <Text style={{padding: 4, marginTop: 5}}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={navigateHome}
            style={{
              paddingVertical: 7,
              backgroundColor: '#ffcc00',
              borderRadius: 15,
              margin: 5,
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                textAlign: 'center',
                color: 'black',
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 7,
          }}>
          <Text className="text-gray-500 font-semibold">
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={navigateSignUp}>
            <Text style={{fontWeight: 'bold', color: '#ffcc00'}}>
              {' '}
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  arrow: {
    justifyContent: 'flex-start',
    padding: 15,
    margin: 10,
    color: 'white',
    flexDirection: 'row',
    size: 20
  },
  background: {
    backgroundColor: '#C8DBBE',
    padding: 20,
    margin: 50,
    marginTop: 100,
    height: '350px',
    width: '200px',
  },
  logo: {
    justifyContent: 'center',
    position: 'relative',
    margin: 30,
    marginLeft: 40,
  },
  position: {
    marginVertical: 8,
  },
  text: {
    color: 'black',
    marginLeft: 4,
    fontSize: 15,
    padding: 3,
    margin: 4,
  },
  TextInput: {
    backgroundColor: '#f0f0f0',
    color: 'black',
    marginLeft: 1,
    marginTop: 5,
    fontSize: 15,
    paddingLeft: 10,
    borderRadius: 15,
  },
});
