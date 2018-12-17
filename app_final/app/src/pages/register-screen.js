import React from 'react';
import {Text, View, Alert, StyleSheet, ImageBackground, StatusBar, Image, NativeModules} from 'react-native';
import { Font } from 'expo';
import TextField from 'react-native-md-textinput';
import parse from 'url-parse';
import { Button } from 'react-native-elements';

const {hostname} = parse(NativeModules.SourceCode.scriptURL, true);


export default class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
      user: {
        email: '',
        password: '',
        checkPassword: ''
      }
    };
  }

  render() {
    return (
      <ImageBackground style={styles.backgroundContainer} imageStyle={styles.backgroundImage} source={require('../img/fundo_login.png')} >
        <StatusBar hidden={true} />
      
        <View style={styles.registerForm}>
          <Text style={styles.titulo}>Cadastro</Text>
          <TextField label={'Email'} dense={true} highlightColor={'#FFFFFF'} textColor={'#ffffff'} wrapperStyle={{width:'100%'}} onChangeText={(text) => this._updateField(text, 'email')} keyboardType={'email-address'} value={this.state.user.email}/>
          <TextField label={'Senha'} dense={true} highlightColor={'#FFFFFF'} textColor={'#ffffff'} wrapperStyle={{width:'100%'}} onChangeText={(text) => this._updateField(text, 'password')} secureTextEntry={true} value={this.state.user.password}/>
          <TextField label={'Reenter Senha'} dense={true} highlightColor={'#FFFFFF'} textColor={'#ffffff'} wrapperStyle={{width:'100%'}} onChangeText={(text) => this._updateField(text, 'password')} secureTextEntry={true} value={this.state.user.password}/>
          <View style={{width: '80%', marginBottom: 10, marginTop: 50, alignSelf: 'center'}}>
          <Button 
              backgroundColor ='#1E51A4'
              title='CADASTRAR'
              color='#fafafa'
              onPress={() => {this.props.navigation.navigate('Login')}}
              accessibilityLabel='Botão que realiza o login do usuário'
              rounded = {true}
            />
        </View>
        </View>
        
        <View style={{marginBottom: 20}}>
          <Text style={{color: '#fafafa', alignSelf: 'center'}}>Cadastro para mais de um membro?</Text>
        </View>
        
      </ImageBackground>
    );
  }

  async _submit_register_form() {
    if (this.state.user.password == this.state.user.checkPassword) {
      var user = {
        email: this.state.user.email,
        password: this.state.user.password
      }; 
      this._register(user);
    } else {
      Alert.alert('Senhas não conferem');
    }
  }

  async _register(user) {
    try {
      let response = await fetch('http://'+hostname + ':3000/api/v1/user', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
      });
      let responseJson = await response.json();
      
      Alert.alert(
        'Cadastro',
        responseJson.message,
        [
          {text: 'OK', onPress: () => this.props.navigation.navigate('AuthLoading')},
        ],
        { cancelable: false });
      
    } catch (e) {
      console.log(e.message);
    }
  }

  _updateField(text, field) {
    this.setState((prevState) => {
      prevState.user[field] = text;
      return prevState;
    });
  }

  async componentDidMount() {
    await Font.loadAsync({
      'hind-bold': require('../../assets/fonts/Hind-Bold.ttf'),
    });
    this.setState((prevState) => {
      prevState.fontLoaded = true;
      return prevState;
    });
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    margin: 0,
    padding: 0,
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  backgroundImage: {
    resizeMode: 'cover',
    top: 0,
    left: 0
  },
  logo: {
    width: 193,
    height: 151,
    marginTop: 13,
    padding: 0,
    shadowColor: '#000000',
    shadowOpacity: 30,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  logotipo: {
    color: '#1E51A4'
  },
  title: {
    color: '#ffffff',
    marginTop: 10
  },
  registerForm: {
    marginTop: 100,
    width: '80%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    padding: 10,
    borderRadius: 2,
    backgroundColor: '#fafafa',
    marginBottom: 20
  },
  registerButton: {
    backgroundColor: '#1E51A4',
    alignItems: 'center',
    padding: 10,
    width: '80%',
    borderRadius: 2,

  },
  titulo:{
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 35
  }
});