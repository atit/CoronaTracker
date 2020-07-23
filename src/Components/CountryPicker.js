import React from 'react';
import { SafeAreaView, Picker, StyleSheet } from 'react-native'

import { fetchCountries } from '../api/index';

class CountryPicker extends React.Component {
  state = {
    user: '',
    country: '',
    countries: []
  }
  async componentDidMount() {
    const fetchedCountries = await fetchCountries();
    this.setState({ countries: fetchedCountries });
    // console.log(fetchedCountries);
  }

  changeHandler = (country) => {
    this.setState({
      country: country
    });
    this.props.handleCountryChange(country);
  }

  render() {
    const { handleCountryChange } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Picker
          selectedValue={this.state.country}
          onValueChange={this.changeHandler}
          style={{ height: 30, width: 150 }}>
          <Picker.Item label="Global" value="" />
          {this.state.countries.map((country, i) => (
            <Picker.Item key={i} label={country} value={country}>
              {country}
            </Picker.Item>
          ))}
        </Picker>
      </SafeAreaView>
    );
  }
}

export default CountryPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffdd',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});