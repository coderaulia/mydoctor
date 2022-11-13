import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, Button} from '../../atoms';
import {colors, fonts} from '../../../utils';

export default function Header({onPress, title, type}) {
  return (
    <View style={styles.page(type)}>
      {/* determine the button type to icon and back dark */}
      <Button
        type="icon-only"
        icon={type === 'dark' ? 'back-light' : 'back-dark'}
        onPress={onPress}
      />
      <Text style={styles.text(type)}>{title}</Text>
      {/* dummy gap matching with the icon */}
      <Gap width={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: type => ({
    paddingVertical: 30,
    paddingHorizontal: 10,
    backgroundColor: type === 'dark' ? colors.secondary : colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,
    borderBottomRightRadius: type === 'dark' ? 20 : 0,
  }),
  text: type => ({
    textAlign: 'center',
    flex: 1,
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: type === 'dark' ? colors.white : colors.text.primary,
  }),
});
