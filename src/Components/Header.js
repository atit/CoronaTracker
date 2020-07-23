import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import CountryPicker from './CountryPicker';
import Card from '../Component/Card';
import { Colors, HelperFunction } from '../constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eff2f7',
    flex: 1,
  },
  headerView: {
    backgroundColor: Colors.primaryColor,
    height: HelperFunction.ModerateScale(190),
    padding: 14,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  contentView: {
    marginTop: HelperFunction.ModerateScale(-60),
    alignItems: 'center',
  },
  title: {
    color: Colors.White_FFFFFF,
    fontSize: HelperFunction.ModerateScale(20),
    fontWeight: 'bold',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  dateText: {
    color: Colors.White_FFFFFF,
    marginTop: 28,
    fontSize: 12,
  },
  caseTitleText: {
    color: Colors.White_FFFFFF,
    fontSize: HelperFunction.ModerateScale(18),
    marginTop: HelperFunction.ModerateScale(4),
  },
  casesText: {
    color: Colors.White_FFFFFF,
    fontSize: HelperFunction.ModerateScale(24),
  },
});

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

const Header = ({ data: { confirmed, recovered, deaths, lastUpdate }, handleCountryChange, country }) => {
  if (!confirmed) {
    return <Text>Loading...!</Text>;
  }
  const updatedTime = new Date(lastUpdate).toDateString();
  const activeCase = formatNumber(
    confirmed.value - recovered.value - deaths.value,
  );
  const closedCase = formatNumber(deaths.value + recovered.value);
  const info = [
    { title: 'Deaths', count: formatNumber(deaths.value), color: 'red' },
    { title: 'Recovered', count: formatNumber(recovered.value) },
    { title: 'Active', count: formatNumber(activeCase) },
    { title: 'Closed', count: formatNumber(closedCase) },
  ];
  const colors = ['#FF6F93', '#36C0FF', '#F0AB22', '#8D58C4'];
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <View style={styles.row}>
          <Text style={styles.title}>Covid-19</Text>
          <CountryPicker handleCountryChange={(country) => handleCountryChange(country)} />
        </View>
        <Text style={styles.dateText}>{updatedTime}</Text>
        {country ? (<Text style={styles.caseTitleText}>Total Cases in {country}</Text>) : <Text style={styles.caseTitleText}>Total Cases Globally</Text>}
        <Text style={styles.casesText}>{formatNumber(confirmed.value)}</Text>
      </View>

      <View style={styles.contentView}>
        <FlatList
          data={info}
          horizontal={false}
          numColumns={2}
          renderItem={({ item, index }) => {
            return (
              <View>
                <Card
                  index={index}
                  title={item.title}
                  style={{ color: colors[index % colors.length] }}
                  count={item.count}
                />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Header;
