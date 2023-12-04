
import React from 'react';
// import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

function Section({children, title}){
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color:  Colors.gray2,
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

function porto() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: Colors.gray,
          }}>
          <Section title="Nama">
            Diandra Sabrina
          </Section>
          <Section title="Pendidikan">
            Departemen Teknologi Kebumian,
            {'\n'}Sekolah Vokasi, UGM
          </Section>
          <Section title="Nomor Induk Mahasiswa">
            21/479248/SV/19463
          </Section>
          <Section title="Kelas">
            A
          </Section>
          <Section title="Tentang Saya">
            Saya merupakan mahasiswa semester 5 di Sekolah Vokasi, UGM
          </Section>
          <Section title="Media Sosial">
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

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

export default porto;




// import React from "react";
// // import OnBoardScreen from "./views/OnBoardScreen";
// // import PetaScreen from "./navigation/petalokasiobjek";
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer} from "@react-navigation/native";
// import 'react-native-gesture-handler';
// import Routes from './route'

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//        <Routes />
//     </NavigationContainer>
//   );
// };

// export default App;

