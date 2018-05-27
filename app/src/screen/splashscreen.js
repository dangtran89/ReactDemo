import React from 'react';
import { TouchableOpacity, StyleSheet, Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import DetailsScreen  from './detailscreen';

class SplashScreen extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Details')
          }}
        >
          <View style={styles.button_home}>
            <Text style={styles.button_text}>Press Mee</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const Navigator = createStackNavigator(
  {
    Splash: SplashScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Splash',
  }
);

export default Navigator;

const styles = StyleSheet.create({
  button_home: {
    backgroundColor: 'red',
    margin: 50,
    alignItems: 'center',
  },
  button_text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
