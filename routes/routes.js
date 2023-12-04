import React from "react";
// import OnBoardScreens from "./views/OnBoardScreen";
import OnBoardScreens from "../views/OnBoardScreen";
import PetaLokasi from "../navigation/petalokasiobjek"
// import PetaScreens from "./navigation/petalokasiobjek";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from "@react-navigation/native";
import Nature from "../Recommend/Nature"
import Landmark from "../Recommend/Landmark"
import Art from "../Recommend/Art"
import Cafe from "../Recommend/Cafe"
import Login from "../views/LoginScreen"
import SignUp from "../views/SignUpScreen"
// import 'react-native-gesture-handler';

const Stack = createStackNavigator();

const route = () => {
  return (
      <Stack.Navigator initialRoutName="OnBoardScreen" screenOptions={{headerShown: false}}>
        <Stack.Screen name='OnBoardScreen' component={OnBoardScreens} />
        <Stack.Screen name='PetaScreen' component={PetaLokasi} />
        <Stack.Screen name='Nature' component={Nature} />
        <Stack.Screen name='Landmark' component={Landmark} />
        <Stack.Screen name='Art' component={Art} />
        <Stack.Screen name='Cafe' component={Cafe} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='SignUp' component={SignUp} />
      </Stack.Navigator>
  );
};

export default route;

