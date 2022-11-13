import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILHospitalBG} from '../../assets';
import {colors, fonts} from '../../utils';
import {ListHospital} from '../../components';

export default function Hospitals() {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospitalBG} style={styles.background}>
        <Text style={styles.title}>Rumah Sakit Terdekat</Text>
        <Text style={styles.desc}>4 Tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospital />
        <ListHospital />
        <ListHospital />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  background: {
    height: 240,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    color: colors.white,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    color: colors.white,
    fontFamily: fonts.primary[300],
    textAlign: 'center',
  },
  content: {
    backgroundColor: colors.white,
    borderRadius: 20,
    flex: 1,
    // Adding border radius on top
    marginTop: -30,
  },
});
