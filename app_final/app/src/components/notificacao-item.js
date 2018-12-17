import React from 'react';
import { Icon } from 'react-native-elements'
import { StyleSheet, Text, View, ImageBackground, Image, StatusBar, TouchableHighlight, Alert, Button } from 'react-native';


export default class NotificacaoItem extends React.Component {

  constructor (props) {
    super(props);
  }

  _resolver () {
    Alert.alert('Tarefa cumprida ?');
  }

  render() {
    return (
      <View style={styles.notificacaoItem}>
            //colocar esse icone <i class="material-icons"> check_circle_outline </i>
              <Icon
                name='check_circle_outline'
                type='font-awesome' //não sei 
                color='#ffffff'
              />
              <Text style={styles.horario}>{this.props.hoario}</Text>
              <Text style={styles.dia}>{this.props.dia} {this.props.tempo}</Text>
              <Text style={styles.combate}>Dia{this.props.combate}</Text>
              <Text style={styles.textposto}>Posto:</Text>
              <Text style={styles.nomeposto}>{this.props.nomeposto}</Text>

              <Button
                title="Resolver"
                color="#00ff00"
                accessibilityLabel="Resolver tarefa"
                onPress={this._resolver.bind(this)}
              />            
          
        </View>
    );
  }
}

const styles = StyleSheet.create({
  notificacaoItem: {
    backgroundColor: '#5fa8d2',
    margin: 0,
    padding: 0,
    marginBottom: 10,
    borderRadius: 2,
    elevation: 1,
    width: '100%',
    flex:1,
    
    justifyContent: 'center',
    alignItems: 'center'
  },

  hoario: {
    fontSize: 15
  },

  dia: {
    fontSize: 15
  },

  combate: {
    fontSize: 12
  },

  textposto: {
    fontSize: 13
  },

  nomeposto: {
    fontSize: 15
  },
});