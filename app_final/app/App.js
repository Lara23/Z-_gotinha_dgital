import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './src/pages/home-screen';
import LoginScreen from './src/pages/login-screen';
import AuthLoadingScreen from './src/pages/auth-loading-screen';
import RegisterScreen from './src/pages/register-screen';
import NotificacaoScreen from './src/pages/notificacoes-screen';

const Rotas = createStackNavigator(
  {
    Login: {
      screen: LoginScreen
    },
    Home: {
      screen: HomeScreen
    },
    AuthLoading: {
      screen: AuthLoadingScreen,
    },
    Register: {
      screen: RegisterScreen,
    },
    Notificacao: {
      screen: NotificacaoScreen,
    }
  },
  {
    initialRouteName: 'Notificacao',
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
