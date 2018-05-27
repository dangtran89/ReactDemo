import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
// import { Navigator } from 'react-native-navigation';

class DetailsScreen extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>This is detail!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    margin: 50,
    color: 'Red',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default DetailsScreen;

