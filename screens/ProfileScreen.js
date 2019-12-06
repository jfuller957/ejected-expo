import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase'

export default class ProfileScreen extends React.Component {
  state = {
    email:'',
    name:''
  }
  componentDidMount(){
    firebase.auth().onAuthStateChanged(user => {
      // console.log('user', user)
      this.setState({email: user.email})

      let person = {};
      const profile = firebase.firestore().collection('users').doc(user.email)

      profile.get()
        .then(function(doc) {
          if (doc && doc.exists) {
              console.log("Document data:", doc.data());
              person = doc.data()
          } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
          }
        })
        .catch(function(error) {
        console.log("Error getting document:", error);
        });

        console.log('person', person)
    })
  }
  render(){
    return (
      <ScrollView style={styles.container}>
        <Text> My Profile </Text>

        <Text>
          Here is some text until i can figure out the console.log stuff
        </Text>
        <View>
          <Text>Name:</Text>
          <Text> {this.state.name}</Text>

        </View>
        <View>
          <Text>Email:</Text>
          <Text> {this.state.email}</Text>
        </View>
        <View>
          <Text>Bio:</Text>
          <Text> {this.state.bio}</Text>

        </View>
        <View>
          <Text>Job Title:</Text>
          <Text> {this.state.jobTitle}</Text>
        </View>
        <View>
          <Text>Interests:</Text>
          <Text> {this.state.interests}</Text>

        </View>
        <View>
          <Text>Skills:</Text>
          <Text> {this.state.skills}</Text>

        </View>
        <View>
          <Text>Location:</Text>
          <Text> {this.state.location}</Text>

        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={()=> this.props.navigation.navigate("EditProfile")}
        >
          <Text>Edit Profile</Text>
        </TouchableOpacity>

      </ScrollView>
    );
  }
}

ProfileScreen.navigationOptions = {
  title: 'Profile',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: 'dodgerblue',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  }
});
