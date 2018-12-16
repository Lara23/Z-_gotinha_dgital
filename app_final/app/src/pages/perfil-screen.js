import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage, ScrollView, Image } from 'react-native';
import AppHeader from '../components/app-header';
import { Card, ListItem } from 'react-native-elements';

export default class HomeScreen extends React.Component {

  render() {
    return (
      <View>
        <AppHeader title="Vaccine" backgroundColor="#fafafa" />
        <ScrollView >
        	<Card
        		title='HPV'	
        		divider
        		containerStyle={styles.card}
        	>
        	<Text>Perfil</Text>
        	</Card>

        	<Card
        		title='HPV'	
        		divider
        		containerStyle={styles.card}
        	>
        	<Text>Perfil</Text>
        	</Card>

        	<Card
        		title='HPV'	
        		divider
        		containerStyle={styles.card}
        	>
        	<Text>Perfil</Text>
        	</Card>

        	<Card
        		title='HPV'	
        		divider
        		containerStyle={styles.card}
        	>
        	<Text>Perfil</Text>
        	</Card>

        	<Card
        		title='HPV'	
        		divider
        		containerStyle={styles.card}
        	>
        	<Text>Perfil</Text>
        	</Card>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({

	card:{
		width: 180,
		backgroundColor: '#d36d6b'
	}

});