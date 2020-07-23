import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

import { Colors } from './constants';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={Colors.primaryColor} />
        <Text>
          Corona App!
       </Text>
      </SafeAreaView>
    );
  }
}

export default App;
