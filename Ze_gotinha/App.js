import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import LocalizacaoScreen from './src/pages/localizacao-screen';

const Rotas = createStackNavigator(
  {
    Localizacao: {
      screen: LocalizacaoScreen
    }
  },
  {
    initialRouteName: 'Localizacao',
    headerMode: 'none'
  }
);

export default class App extends React.Component {
  render() {
    return (
      <Rotas />
    );
  }
      
  
}

