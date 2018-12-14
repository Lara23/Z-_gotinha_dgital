import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppHeader from '../components/app-header';
import LocalizacaoList from '../components/localizacao_list';

export default class LocalizacaoScreen extends React.Component {
  render() {
    return (
      <View style={styles.body}>
        <AppHeader title="Vacinas" icon="http://travelpedia.com.br/wp-content/uploads/2018/01/inje%C3%A7ao-icon.png" />
        <LocalizacaoList />
      </View>
    );
  }
}