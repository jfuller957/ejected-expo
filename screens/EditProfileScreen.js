import React from 'react';
import  { ScrollView, View, Text, TextInput, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';
import * as firebase from 'firebase';
import '@firebase/firestore'



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
    bio: person.bio,
    jobTitle: '',
    interests: ['one'],
    skills: [],
    location: '',
    photo: '',

  }

  componentDidMount(){
    //need to first get auth user from firebase
    //then get that specific user from firestore based off the email form firebase auth
    //then mount that info into the state so it can be edited
    // if a field is mempty then it can use the firebase info for that field when updating
    firebase.firestore().collection("users").get().then((querySnapshot) => {
      querySnapshot.filter((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
      });
  });
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
        <View>
          <Text>Job Title:</Text>
          <TextInput
            autoCapitalize='none'
            placeholder={this.state.jobTitle}
            onChangeText={ jobTitle => this.setState({jobTitle})}
          ></TextInput>
        </View>
        <View>
          <Text>Interests:</Text>
          <TextInput
            autoCapitalize='none'
            placeholder='...'
            onChangeText={ interest => this.state.interests.push(interest)}
          ></TextInput>
        </View>
        <View>
          <Text>Skills:</Text>
          <TextInput
            autoCapitalize='none'
            placeholder='...'
            onChangeText={ skill => this.state.skills.push(skill)}
          ></TextInput>
        </View>
        <View>
          <Text>Location:</Text>
          <TextInput
            autoCapitalize='none'
            placeholder={this.state.location}
            onChangeText={ location => this.setState({location})}
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
          <Text>{this.state.saved ? this.state.interests : ''}</Text>
          {/* <Text>{doc.data()}</Text> */}
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
