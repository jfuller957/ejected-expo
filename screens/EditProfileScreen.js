import React from 'react';
import  { ScrollView, View, Text, TextInput, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';


person = {
  name:'Tom',
  email:'tom@gmail.com',
  bio:''
}

export default class EditProfileScreen extends React.Component {
  state = {
    saved: '',
    name: person.name,
    email: person.email,
    bio: person.bio
  }

  saveProfileInfo = () => {
    console.log('attemping to save')
    console.log(`state.name: ${this.state.name}`)
  }

  render(){
    return (
      <ScrollView style={styles.container}>
        <Text> Edit My Profile </Text>

        <View>
          <Text>Name:</Text>
          <TextInput
            autoCapitalize='none'
            placeholder={this.state.name}
            onChangeText={ name => this.setState({name})}
          ></TextInput>
        </View>
        <View>
          <Text>Email:</Text>
          <TextInput
            autoCapitalize='none'
            placeholder={this.state.email}
            onChangeText={ email => this.setState({email})}
          ></TextInput>
        </View>
        <View>
          <Text>Bio:</Text>
          <TextInput
            autoCapitalize='none'
            placeholder={this.state.bio}
            onChangeText={ bio => this.setState({bio})}
          ></TextInput>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={()=> {
            this.saveProfileInfo()
            this.setState({saved:'Saved!'})
          }}
        >
          <Text>Save Profile Changes</Text>
        </TouchableOpacity>
        <View>
          <Text>{this.state.saved}</Text>
          <Text>{this.state.saved ? this.state.name : ''}</Text>
          <Text>{this.state.saved ? this.state.email : ''}</Text>
          <Text>{this.state.saved ? this.state.bio : ''}</Text>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  button: {
    backgroundColor: 'dodgerblue',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  }
})
