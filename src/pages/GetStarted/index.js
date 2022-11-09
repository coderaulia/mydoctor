import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILLogo, ILGetStarted} from '../../assets/illustration';
import {Button, Gap} from '../../components/atoms';

export default function GetStarted() {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button title={'Get Started'} />
        <Gap height={16} />
        <Button title={'Sign in'} type={'secondary'} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    marginTop: 91,
    fontSize: 28,
    color: 'white',
    fontFamily: 'Nunito-SemiBold',
  },
});
