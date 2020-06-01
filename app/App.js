import React from 'react';
import {
  SafeAreaView,
} from 'react-native';

import MainScreen from "./screens/MainScreen";

import style from "./styles";

function App() {
  return (
    <SafeAreaView style={style.appContainer}>
      <MainScreen />
    </SafeAreaView>
  );
}

export default App;
