import React from 'react';
import  { View, Text, TextInput, StyleSheet } from 'react-native';
import * as firebase from 'firebase';


export default class AuthLoadingScreen extends React.Component {

  componentDidMount(){
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? "Main" : "Auth")
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
        <Text>The App will momentarially load.</Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
