import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class ImageScreen extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('HomeScreen');
          }}>
          <Image
            style={styles.back}
            source={require('../assets/backButton.png')}
          />
        </TouchableOpacity>
        <Text style={styles.head}>The World's Most Interesting News</Text>
        <Text style={styles.textStyle}>
  From flashy diamantaire to fugitive: The rise and fall of Nirav Modi. The diamond merchant wanted in India on charges of fraud and money laundering in the estimated USD 2-billion Punjab National Bank (PNB) scam case was arrested on an extradition warrant on March 19, 2019.

        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    width: 30,
    height: 30,
    marginBottom: 50,
  },
   textStyle: {
     fontSize: 20,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  head: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 40,
    backgroundColor: 'cyan',
    marginTop: -30
  },
});
