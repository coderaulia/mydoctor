import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconBackDark} from '../../../assets';
import {Gap} from '../../atoms';
import {colors} from '../../../utils';

export default function Header() {
  return (
    <View style={styles.page}>
      <IconBackDark />
      <Text style={styles.text}>Header</Text>
      {/* dummy gap matching with the icon */}
      <Gap width={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    paddingVertical: 30,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    flex: 1,
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: colors.text.primary,
  },
});
