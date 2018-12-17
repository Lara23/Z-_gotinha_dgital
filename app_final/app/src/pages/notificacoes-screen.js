import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NotificacaoList from '../components/notificacao-list';
import AppHeader from '../components/app-header';
export default class NotificacaoScreen extends React.Component {
  render() {
    return (
      <View style={styles.body}>
        <AppHeader title="Notificacao"  />
        <View>
        <NotificacaoList />
      </View>
      </View>
    );
  }
}

const styles = {
  body: {
    backgroundColor: '#eeeeee',
  }
}