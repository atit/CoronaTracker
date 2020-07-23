import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { Colors, HelperFunction } from '../constants';

const styles = StyleSheet.create({
  container: {
    shadowColor: '#474747',
    elevation: HelperFunction.ModerateScale(12),
    marginTop: 20,
    backgroundColor: '#fff',
    marginRight: 20,
    width: HelperFunction.ModerateScale(120),
    height: HelperFunction.ModerateScale(130),
    borderRadius: HelperFunction.ModerateScale(14),
    alignItems: 'center',
  },
  titleText: {
    fontSize: 18,
    marginTop: HelperFunction.ModerateScale(24),
  },
  countText: {
    fontSize: 22,
    marginTop: HelperFunction.ModerateScale(4),
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
