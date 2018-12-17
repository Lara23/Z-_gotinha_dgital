import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage, ScrollView, Image } from 'react-native';
import AppHeader from '../components/app-header';
import { Card, ListItem } from 'react-native-elements';

export default class PerfilScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <ScrollView >
        
        <View style={styles.perfil}>
        		<Image
                style={styles.perfilPicture}
                source={require('../img/foto_perfil.png')}
              	 />
              	<Text style={styles.perfilText}>
              	Leonan Luiz
              	</Text>
        </View>
        
        <View style={styles.container}>
          
          <View style={styles.grid}>
          
            <View style={styles.grid1}>
            
	            <Card
	        		title='HPV'	
	        		divider
	        		containerStyle={styles.card}
	        		titleStyle={{color:'#fafafa'}}	
	        	>
	        	<Text style= {styles.title}>0 - 05</Text>
	        	<Text style= {styles.title}> X Primeira dose</Text>

	        	</Card>
	        	
	        	<Card
	        		title='HPV'	
	        		divider
	        		containerStyle={styles.card}
	        		titleStyle={{color:'#fafafa'}}
	        	>
	        	<Text>Perfil</Text>
	        	</Card>
	         </View>   
            <View style={styles.grid2}>
              <Card
        		title='HPV'	
        		divider
        		containerStyle={styles.card}
        		titleStyle={{color:'#fafafa'}}
        	   >
	        	<Text>Perfil</Text>
	        	</Card>
	        	
	        	<Card
	        		title='HPV'	
	        		divider
	        		containerStyle={styles.card}
	        		titleStyle={{color:'#fafafa'}}
	        	>
	        	<Text>Perfil</Text>
	        	</Card>
	         </View>

	         <View style={styles.grid1}>
            
	            <Card
	        		title='HPV'	
	        		divider
	        		containerStyle={styles.card}
	        		titleStyle={{color:'#fafafa'}}
	        	>
	        	<Text>Perfil</Text>
	        	</Card>
	        	
	        	<Card
	        		title='HPV'	
	        		divider
	        		containerStyle={styles.card}
	        		titleStyle={{color:'#fafafa'}}
	        	>
	        	<Text>Perfil</Text>
	        	</Card>
	         </View> 

	         <View style={styles.grid2}>
            
	            <Card
	        		title='HPV'	
	        		divider
	        		containerStyle={styles.card}
	        		titleStyle={{color:'#fafafa'}}
	        	>
	        	<Text>Perfil</Text>
	        	</Card>
	        	
	        	<Card
	        		title='HPV'	
	        		divider
	        		containerStyle={styles.card}
	        		titleStyle={{color:'#fafafa'}}
	        	>
	        	<Text>Perfil</Text>
	        	</Card>
	         </View> 

	         <View style={styles.grid1}>
            
	            <Card
	        		title='HPV'	
	        		divider
	        		containerStyle={styles.card}
	        		titleStyle={{color:'#fafafa'}}
	        	>
	        	<Text>Perfil</Text>
	        	</Card>
	        	
	        	<Card
	        		title='HPV'	
	        		divider
	        		containerStyle={styles.card}
	        		titleStyle={{color:'#fafafa'}}
	        	>
	        	<Text>Perfil</Text>
	        	</Card>
	         </View> 

	         <View style={styles.grid2}>
            
	            <Card
	        		title='HPV'	
	        		divider
	        		containerStyle={styles.card}
	        		titleStyle={{color:'#fafafa'}}
	        	>
	        	<Text>Perfil</Text>
	        	</Card>
	        	
	        	<Card
	        		title='HPV'	
	        		divider
	        		containerStyle={styles.card}
	        		titleStyle={{color:'#fafafa'}}
	        	>
	        	<Text>Perfil</Text>
	        	</Card>
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
  },
  card:{
		width: 150,
		backgroundColor: '#ff7043',

	},
  
  grid:{
    
    flex: 1,
	marginTop: 50,
	alignItems: 'center'

  },
  grid1:{
   	flex:1,
    flexDirection: 'row',
  },
   grid2:{
    
    flex:1,
    flexDirection: 'row',
    
  },
  footer:{
    flex:1,
    alignItems: 'flex-end',
    width: 700
  },
 perfil:{
 	height: 250,
 	backgroundColor: '#ff7043',
 	alignItems: 'center',
 	justifyContent: 'center'
 },

 perfilText:{
 	color:'#fafafa',
 	fontSize: 20,
 	fontWeight: 'bold'
 },

 perfilPicture:{
 	width: 100,
 	height: 100
 },
 title:{
 	color:'#fafafa'
 }
});




