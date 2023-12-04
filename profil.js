import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Image,
  View,
  Text,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';

function Section({children, title}) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: Colors.gray2,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function profil() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView
      style={{
        // flex: 1,
        backgroundColor: Colors.gray,
      }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header />
      <View style={{marginTop: 60, alignItems: 'center'}}>
        <Image
          source={require('./foto/rabbit.png')}
          resizeMode="contain"
          style={{
            height: 155,
            width: 155,
            borderRadius: 100,
            borderColor: '#1C2E31',
            borderWidth: 2,
            marginTop: -130,
          }}
        />
        {/* <Text style={{flex:1, color: '#1C2E31', marginVertical: 10, fontSize: 30, marginTop:100}}>
          Diandra Sabrina
        </Text>
        <Text style={{color: 'black', fontSize: 10}}>
          {' '}
          Undergraduated Student
        </Text>
        <Text
          style={{
            flexDirection: 'row',
            marginVertical: 6,
            color: 'black',
            fontSize: 10,
            alignItems: 'center',
          }}>
          {' '}
          Yogyakarta, DIY
        </Text> */}
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            textAlign: 'center',
            color: '#1C2E31',
            paddingTop:10
          }}>
          Diandra Sabrina
        </Text>
        <Text style={{textAlign: 'center', paddingTop:5}}>
          Undergraduated Student
        </Text>
        <View style={{alignContent:'center', marginBottom: 500}}>
          <View
        //   style={{
        //     flexDirection: 'row',
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //     marginTop: 20,
        //   }}
          >
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 40,
                height: 40,
                marginTop:5,
                marginLeft:-20
              }}>
                <Fontawesome5 name="map-pin" size={15} color={'#1C2E31'}/>
              {/* <Icon name="mobile-alt" size={25} color="#212121" /> */}
            </View>
            <View style={{justifyContent: 'center', marginLeft: 12, alignItems:'center', marginTop:-30}}>
            <Text style={{fontWeight: 'bold', fontSize:13.5}}>Yogyakarta, DIY</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default profil;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
