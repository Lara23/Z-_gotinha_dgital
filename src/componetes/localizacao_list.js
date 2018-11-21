import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableHighlight, AsyncStorage } from 'react-native';
import { withNavigation } from 'react-navigation';
import LocalizacaoItem from './localizacao_item';

class LocalizaoList extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      postos: []
    }
  }

  renderLocalizacaoItem (posto) {
    return <LocalizacaoItem
            name={posto.name}
            id={posto.id}
            // aberto ou não
            status={posto.status}
            mapa={posto.mapa}            
            />
  }


  render() {


    if (this.mapa.isLoading) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <ScrollView style={styles.localizacaoList}>
          {this.state.movies.map(this.renderMovieItem.bind(this))}
        </ScrollView>
        // que 
      );
    }

  }
}




const styles = StyleSheet.create({
  localizacaoList: {
    margin: 8,
    padding: 0,
    backgroundColor: '#eeeeee',
    marginBottom: 70
  }
});