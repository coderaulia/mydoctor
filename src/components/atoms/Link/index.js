import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';

export default function Link({title, size, align}) {
  return (
    <View>
      <Text style={styles.title(size, align)}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: (size, align) => ({
    color: colors.text.secondary,
    fontSize: size,
    fontFamily: 'Nunito-Regular',
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});
