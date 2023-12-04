import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons';
import Portofolio from '../porto';
import {WebView} from 'react-native-webview';
import Getjsonfile from '../Getjsonfile';
import List from '../ListData';
import {SafeAreaView} from 'react-native-safe-area-context';
import places from '../Home/places';
import cafe from '../Home/cafe'
import Profil from '../profil';


const Tab = createBottomTabNavigator();
const {width} = Dimensions.get('screen');
const Card = ({place}) => {
  return (
    <ImageBackground style={styles.cardImage} source={place.image}>
      <Text
        style={{
          color: 'white',
          fontSize: 15,
          fontWeight: 'bold',
          marginTop: 10,
        }}>
        {place.name}
      </Text>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'flex-end',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Fontawesome5 name="map-pin" size={15} color={'white'} />
          <Text style={{marginLeft: 5, color: 'white'}}>{place.location}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Fontawesome5 name="star" size={15} color={'white'} />
          <Text style={{marginLeft: 5, color: 'white'}}>5.0</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const Cafe = ({place}) => {
  return (
    <ImageBackground style={styles.cardImage} source={place.image}>
      <Text
        style={{
          color: 'white',
          fontSize: 15,
          fontWeight: 'bold',
          marginTop: 10,
        }}>
        {place.name}
      </Text>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'flex-end'
        }}>
        <View style={{flexDirection: 'row'}}>
          <Fontawesome5 name="map-pin" size={15} color={'white'} />
          <Text style={{marginLeft: 5, color: 'white'}}>{place.location}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Fontawesome5 name="star" size={15} color={'white'} />
          <Text style={{marginLeft: 5, color: 'white'}}>4.7</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const ListCategories = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.category}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => {
          navigation.navigate('Nature')
        }} >
          <Fontawesome5 name="umbrella-beach" size={25} color={'#395144'} />
        </TouchableOpacity>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => {
          navigation.navigate('Landmark')
        }} >
          <Fontawesome5 name="gopuram" size={25} color={'#395144'} />
        </TouchableOpacity>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => {
          navigation.navigate('Art')
        }} >
          <Fontawesome5 name="landmark" size={25} color={'#395144'} />
        </TouchableOpacity>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => {
          navigation.navigate('Cafe')
        }} >
          <Fontawesome5 name="coffee" size={25} color={'#395144'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

//form input dari github page
const forminput = 'https://ardnyd.github.io/pgpbl-12/';
//peta map dari github page
const webmap = 'https://ardnyd.github.io/pgpbl-12/map.html';

function HomeScreen() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar translucent={false} backgroundColor={'#1C2E31'} />
      <View style={styles.header}>
        <Text style={styles.title}></Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.head}>
          <View style={{flex: 1}}>
            <Text style={styles.headertitle}>EXPOYA:</Text>
            <Text style={styles.headertitle2}>
              Discover heaven on earth at Yogyakarta
            </Text>
            <View style={styles.input}>
              <Fontawesome5 name="search" color="#053B50" size={20} />
              <TextInput
                placeholder="Cari tempat"
                style={{
                  flex: 1,
                  marginLeft: 8,
                  height: 35,
                  justifyContent: 'flex-start',
                }}
              />
            </View>
          </View>
        </View>
        <ListCategories />
        <Text style={styles.placeTitle}>Places</Text>
        <View>
          <FlatList
            horizontal
            contentContainerStyle={{paddingLeft: 20}}
            showsHorizontalScrollIndicator={false}
            data={places}
            renderItem={({item}) => <Card place={item} />}
          />
        </View>
        <Text style={styles.placeTitle}>Cafe Suggestions</Text>
        <View style={{paddingBottom:60}}>
          <FlatList
            horizontal
            contentContainerStyle={{paddingLeft: 20}}
            showsHorizontalScrollIndicator={false}
            data={cafe}
            renderItem={({item}) => <Cafe place={item} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
function MapScreen() {
  return <WebView source={{uri: webmap}} />;
}
function AddDataScreen() {
  return <WebView source={{uri: forminput}} />;
}
function ListDataScreen() {
  return (
    <View>
      <List />
    </View>
  );
}
function ProfileScreen() {
  return (
    <View>
      <Profil />
    </View>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#e4c294',
        tabBarInactiveTintColor: '#c6d1d5',
        tabBarStyle: {
          marginbottom: 30,
          bottom: 30,
          borderRadius: 35,
          left: 20,
          right: 20,
          height: 60,
          position: 'absolute',
          backgroundColor: '#1C2E31',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Fontawesome5 name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({color, size}) => (
            <Fontawesome5 name="map-marked" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Add Data"
        component={AddDataScreen}
        options={{
          tabBarLabel: 'Add Data',
          tabBarIcon: ({color, size}) => (
            <Fontawesome5 name="plus-circle" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="List Data"
        component={ListDataScreen}
        options={{
          tabBarLabel: 'List Data',
          tabBarIcon: ({color, size}) => (
            <Fontawesome5 name="bars" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Fontawesome5 name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;

const styles = StyleSheet.create({
  headertitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Arial',
  },
  headertitle2: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'Arial',
  },
  cardImage: {
    height: 200,
    width: width / 2,
    marginRight: 20,
    padding: 10,
    overflow: 'hidden',
    borderRadius: 10,
  },
  header: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#1C2E31',
  },
  head: {
    backgroundColor: '#1C2E31',
    height: 120,
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: '#CDCBC7',
    height: 60,
    width: '100%',
    paddingHorizontal: 20,
    borderRadius: 10,
    position: 'absolute',
    top: 90,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 12,
  },
  category: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    height: 60,
    width: 60,
    backgroundColor: '#C8DBBE',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  container1: {
    padding: 0,
    marginHorizontal: 0,
    marginTop: 0,
    backgroundColor: '#FAEED1',
    marginBottom: 20,
    flex: 1,
  },
  textImage: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
  },
  placeTitle: {
    marginHorizontal: 20,
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  container: {
    padding: 20,
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: '#BBAB8C',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'stretch',
  },
  listitems: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
  },
  caption: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    color: 'black',
  },
  ket: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    color: 'black',
  },
  desc: {
    fontSize: 15,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'left',
    color: 'black',
  },
  tab: {
    backgroundColor: '#BBAB8C',
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
