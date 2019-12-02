import React from 'react';
import  { View, Text, TextInput, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';
import * as firebase from 'firebase';

import * as Facebook from 'expo-facebook'



export default class LoginScreen extends React.Component {
  state={
    email: '',
    password: '',
    errorMessage: null
  }

  handleLogin = () => {
    const { email, password } = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(error => this.setState({ errorMessage: error.message}))
  }


 loginWithFacebook = async() => {
  try {
    const {
      type,
      token,
      expires,
      permissions,
      declinedPermissions,
    } = await Facebook.logInWithReadPermissionsAsync('443898396314593', {
      permissions: ['email','public_profile'],
    });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);

      //*****ROB NOTE - NEED TO FIX THE BELOW TO LOGIN OR REGISTER
      //NEED TO LOGIN OR REGISTER
      //auth.signInWithCrediential(response)
    } else {
      // type === 'cancel'
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
  }
}



  render(){
    return (
      <View style={styles.container}>
        <Text>Welcome to SparkUpYourLife!</Text>
        <Text>Login Screen</Text>
        <View>
          {this.state.errorMessage && <Text>{this.state.errorMessage}</Text>}
        </View>
        <View style={styles.forms}>
           <View style={{marginTop: 30}}>
              <Text style={styles.inputTitle}>Email Address</Text>
              <TextInput
               style={styles.input}
               autoCapitalize='none'
               onChangeText={ email => this.setState({ email })}
               value={ this.state.email }
              ></TextInput>
           </View>
           <View style={{marginTop: 30}}>
             <Text style={styles.inputTitle}>Password</Text>
             <TextInput
              style={styles.input}
              autoCapitalize='none'
              secureTextEntry
              onChangeText={ password =>  this.setState({ password })}
              value={this.state.password}
             ></TextInput>
           </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={ () => this.props.navigation.navigate("Register")}
        >
          <Text>
            New to SparkUpYourLife? <Text style={{fontWeight: '500'}}>Register</Text>
          </Text>
        </TouchableOpacity>


        <View>
        <Text> --------- </Text>
        <Text> Login using Facebook below:</Text>
        <TouchableOpacity
                  onPress={()=> this.loginWithFacebook()}
                  style={{backgroundColor: 'blue', padding: 10}}>
                    <Text style={{color: 'white'}}> Login With Facebook </Text>
           </TouchableOpacity>
      </View>


      </View>
    )
  }

}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  inputTitle:{
    color:'gray',
    fontSize: 10
  },
  form:{
    marginBottom: 48,
    marginHorizontal: 30
  },
  input:{
    borderBottomColor: 'blue',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: 'black'
  },
  button: {
    backgroundColor: 'dodgerblue',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  }
})
