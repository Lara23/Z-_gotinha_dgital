import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppHeader from './src/components/app-header';
import NotificacaoList from './src/components/notificacao-list';

export default class NotificacaoScreen extends React.Component {
  render() {
    return (
      <View style={styles.body}>
        <AppHeader title="Notificacao" icon="https://image.flaticon.com/icons/png/512/168/168557.png" />
        <NotificacaoList />
      </View>
    );
  }
}

const styles = {
  body: {
    backgroundColor: '#eeeeee',
  }
}