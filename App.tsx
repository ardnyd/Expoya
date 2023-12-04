// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

import React from "react";
import { NavigationContainer} from "@react-navigation/native";
import Route from "./routes/routes";

// const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
       <Route />
    </NavigationContainer>
  );
};

export default App;

