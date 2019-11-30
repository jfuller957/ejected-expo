import React from 'react';
import  { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';


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
    justifyContent: 'center'
  }
})
