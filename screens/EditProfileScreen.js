import React from 'react';
import  { ScrollView, Text, TextInput, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';

export default class EditProfileScreen extends React.Component {
  render(){
    return (
      <ScrollView style={styles.container}>
        <Text> Edit My Profile </Text>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})
