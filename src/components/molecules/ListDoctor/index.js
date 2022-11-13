import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DummyDoctor2} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function ListDoctor() {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor2} style={styles.avatar} />
      <View>
        <Text style={styles.name}>Alexander James</Text>
        <Text style={styles.desc}>Baik bu, terima kasih atas kes...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
  },
});
