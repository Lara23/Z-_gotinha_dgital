import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableHighlight, AsyncStorage } from 'react-native';
import { withNavigation } from 'react-navigation';

class LocalizaoItem extends React.Component {

  constructor (props) {
    super(props);
  }


  render() {
    let postoButtonAction;

    return (
      <View style={styles.localizacaoItem}>
        <View style={styles.localizacaoItemHeader}>
            <Text style={styles.localizacaoItemHeaderText}>{this.props.name}</Text>
        </View>
        <Text style={styles.localizacaoItemText}>
          Está {this.props.name} no momento.
        </Text>
        <Button
          title={postoButtonActionTitle}
          color="#ffdb58"
          accessibilityLabel="Toque no botão para ver a localização"
          onPress={this._abrirlocalizacao.bind(this)}
        />
        <ImageBackground source={{uri: this.props.mapa}} resizeMode="cover" style={styles.localizacaoItemHeaderImage}>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  localizacaoItem: {
    backgroundColor: '#ffffff',
    margin: 0,
    padding: 0,
    marginBottom: 10,
    borderRadius: 2,
    elevation: 1,
    width: '100%'
  },

  localizacaoItemHeader: {
    height: 156,
    margin: 0,
    position: 'relative',
    width: '100%'
  },

  localizacaoItemHeaderText: {
    fontSize: 24,
    fontWeight: '500',
    margin: 0,
    padding: 0,
    paddingLeft: 10,
    color: '#ffffff',
    position: 'absolute',
    bottom: 0
  },

  localizacaoItemText: {
    fontSize: 14,
    fontWeight: '400',
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 10
  }
};
