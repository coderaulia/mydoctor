import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, Button} from '../../atoms';
import {colors} from '../../../utils';

export default function Header({onPress, title}) {
  return (
    <View style={styles.page}>
      {/* determine the button type to icon and back dark */}
      <Button type="icon-only" icon="back-dark" onPress={onPress} />
      <Text style={styles.text}>{title}</Text>
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
