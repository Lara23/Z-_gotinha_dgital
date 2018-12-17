import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage, ScrollView, Image } from 'react-native';
import AppHeader from '../components/app-header';

export default class HomeScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <AppHeader title="Vaccine"  backgroundColor="#fafafa" />
        <ScrollView >
        <View style={styles.container}>
          <View style={styles.grid}>
          
            <View style={styles.grid1}>
            <Image style={styles.icones} source={require('../img/icone_vacina.png') } />
              <Text style={styles.legenda}>VACINAS</Text>
              <Image style={styles.icones} source={require('../img/icone_coracao.png')}  />
              <Text style={styles.legenda} onPress={() => {this.props.navigation.navigate('Perfil')}} >CARTEIRINHA</Text>
            </View>
            
            <View style={styles.grid2}>
              <Image style={styles.icones} source={require('../img/icone_calendario.png')} />
              <Text style={styles.legenda}>CALENDARIO</Text>
              <Image style={styles.icones} source={require('../img/icone_notificacao.png')} />
              <Text style={styles.legenda}>NOTIFICAÇÕES</Text>
            </View>
        </View>
           <View style={styles.footer}>
            <Image  source={require('../img/fundo-colorido.png')} />
          </View>  
        
          </View>
            
         

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    flex: 1
  },
  icones: {
    width: 50,
    height: 50,
    marginTop: 50,
  },
  grid:{
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',

  },
  grid1:{
      marginLeft: 100,
      flex:1
  },
   grid2:{
   
    flex:1
  },
  footer:{
    flex: 3,
    width: 700,
    height: '100%'
    
  },
  legenda:{
    
     
    color: '#bdbdbd',
    marginRight: 80

  }
});
