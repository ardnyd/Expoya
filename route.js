import React from "react";
import OnBoardScreens from "./views/OnBoardScreen";
import PetaScreens from "./navigation/petalokasiobjek";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from "@react-navigation/native";
// import 'react-native-gesture-handler';

const Stack = createStackNavigator();

const route = () => {
  return (
      <Stack.Navigator initialRoutName="OnBoardScreen" screenOptions={{headerShown: false}}>
        <Stack.Screen name='OnBoardScreen' component={OnBoardScreens} />
        <Stack.Screen name='PetaScreen' component={PetaScreens} />
      </Stack.Navigator>
  );
};

export default route;

