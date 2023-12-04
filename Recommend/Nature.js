import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Nature() {
  const navigation = useNavigation();
  const navigateHome = () => {
    navigation.navigate('PetaScreen');
  };
  return (
    <SafeAreaView>
      <View>
        <View style={styles.arrow} screenOptions={{headerShown: true}}>
          <TouchableOpacity
            onPress={navigateHome}
            style={{
              backgroundColor: '#395144',
              padding: 15,
              elevation: 10,
              shadowColor: 'white',
              shadowOffset: {
                width: 1,
                height: 1,
              },
              shadowOpacity: 0.2,
              shadowRadius: 1.41,
            }}>
            <Fontawesome5 name="arrow-left" size={23} color={'white'} />
          </TouchableOpacity>
          <StatusBar backgroundColor={'#395144'} />
        </View>
      </View>
      <ScrollView>
        <View style={styles.listitems}>
          <Image
            source={require('../assets/Nature/sri-gethuk.png')}
            style={styles.image}
          />
          <Text style={styles.caption}>Air Terjun Sri Gethuk</Text>
          <Text style={{fontSize: 15, marginTop: 3, color: 'black'}}>
            Gunung Kidul
          </Text>
        </View>
        <View style={styles.listitems}>
          <Image
            source={require('../assets/Nature/hutan.jpg')}
            style={styles.image}
          />
          <Text style={styles.caption}>Hutan Pinus Mangunan</Text>
          <Text style={{fontSize: 15, marginTop: 3, color: 'black'}}>
            Bantul
          </Text>
        </View>
        <View style={styles.listitems}>
          <Image
            source={require('../assets/Nature/air.jpeg')}
            style={styles.image}
          />
          <Text style={styles.caption}>Air Terjun Kembang Soka</Text>
          <Text style={{fontSize: 15, marginTop: 3, color: 'black'}}>
            Kulon Progo
          </Text>
        </View>
        <View style={styles.listitems}>
          <Image
            source={require('../assets/Nature/pantai.jpg')}
            style={styles.image}
          />
          <Text style={styles.caption}>Pantai Wediombo</Text>
          <Text style={{fontSize: 15, marginTop: 3, color: 'black'}}>
            Gunung Kidul
          </Text>
        </View>
        <View
          style={{
            padding: 15,
            alignItems: 'center',
            backgroundColor: '#F0F0F0',
            borderBottomWidth: 1,
            marginBottom:60,
            paddingBottom:30
          }}>
          <Image
            source={require('../assets/Nature/bukit.jpg')}
            style={styles.image}
          />
          <Text style={styles.caption}>Bukit Klangon</Text>
          <Text style={{fontSize: 15, marginTop: 3, color: 'black'}}>
            Sleman
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// export default Nature;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'stretch',
  },
  listitems: {
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderBottomWidth: 1,
  },
  caption: {
    fontSize: 18,
    color: '#395144',
    paddingTop: 10,
    fontWeight: 'bold',
  },
  header: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#1C2E31',
  },
});
