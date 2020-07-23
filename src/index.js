import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

import { Colors } from './constants';
import { fetchData } from './api/index';
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
  handleCountryChange = async country => {
    // console.log("abcd", country);
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={Colors.primaryColor} />
        <Header
          data={data}
          country={country}
          handleCountryChange={singleCountry =>
            this.handleCountryChange(singleCountry)
          }
        />
      </SafeAreaView>
    );
  }
}

export default App;
