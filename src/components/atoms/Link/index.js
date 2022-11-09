import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Link({title, size, align}) {
  return (
    <View>
      <Text style={styles.title(size, align)}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: (size, align) => ({
    color: '#7D8797',
    fontSize: size,
    fontFamily: 'Nunito-Regular',
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});
