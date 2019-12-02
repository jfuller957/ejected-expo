import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ProfileScreen extends React.Component {
  render(){
    return (
      <ScrollView style={styles.container}>
        <Text> My Profile </Text>

        <Text>
          Here is some text until i can figure out the console.log stuff
        </Text>

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
