import React from 'react';
import { StyleSheet, Text, ScrollView, View, ActivityIndicator, Image, StatusBar, TouchableHighlight, Alert } from 'react-native';
import NotificacaoItem from './notificacao-item';


export default class NotificacaoList extends React.Component {

constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      tarefas: []
    }
  }

  async fetchNotificacao () {
    try {
      let notificacaoResponse = await fetch('http://192.168.3.104:3000/notificacao');//pega o jason da localização e mostra
      console.log(notificacaoResponse);//mostra a lista
      let notificacaoResponseJson = await notificacaoResponse.json();
      return notificacaoResponseJson;
    }catch (error) {
      console.log(error);
    }
  }

    renderLocalizacaoItem (tarefas) {
    return <NotificacaoItem
            horario={tarefas.hoario}
            dia={tarefas.dia}
            tempo={tarefas.tempo}//am ou pm
            combate={tarefas.combate}
            nomeposto={tarefas.nomeposto}            
            />
  }


  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <ScrollView style={styles.notificacaoList}>
          <NotificacaoItem />
        </ScrollView>
      );
    }

  }
}




const styles = StyleSheet.create({
  notificacaoList: {
    margin: 8,
    padding: 0,
    backgroundColor: '#eeeeee',
    marginBottom: 70
  }
});