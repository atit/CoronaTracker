import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

import { Colors } from './constants';
import { fetchData } from '../api';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
class App extends Component {
  state = {
    data: {},
    country: '',
  }
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
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
