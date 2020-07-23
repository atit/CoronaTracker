import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { Colors } from '../constants';

const styles = StyleSheet.create({
  container: {
    shadowColor: '#474747',
    elevation: 12,
    marginTop: 20,
    backgroundColor: '#fff',
    marginRight: 20,
    width: 120,
    height: 120,
    borderRadius: 14,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 18,
    marginTop: 24,
  },
  countText: {
    fontSize: 22,
    marginTop: 4
  },
});

const Card = ({ count, title, style }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={[style, styles.countText]}>{count}</Text>
    </View>
  );
};
export default Card;
