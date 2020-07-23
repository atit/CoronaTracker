import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

import { Colors } from './constants';
import { fetchData } from '../api';
import Card from './Components/Card';
import Header from './Components/Header';
import CountryPicker from './Components/CountryPicker';


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
    const { data, country } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={Colors.primaryColor} />
        <Header
          data={data}
          country={country}
          handleCountryChange={singleCountry => this.handleCountryChange(singleCountry)} />
        <Text>
          Corona App!
       </Text>
      </SafeAreaView>
    );
  }
}

export default App;
