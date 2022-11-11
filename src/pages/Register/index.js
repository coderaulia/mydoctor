import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/Header';
import {Button, Gap, Input} from '../../components/atoms';
import {colors} from '../../utils';

export default function Register() {
  return (
    <View style={styles.page}>
      <Header />
      <View style={styles.content}>
        <Input label={'Nama Lengkap'} />
        <Gap height={24} />
        <Input label={'Pekerjaan'} />
        <Gap height={24} />
        <Input label={'Email'} />
        <Gap height={24} />
        <Input label={'Password'} />
        <Gap height={24} />
        <Button title={'Daftar Sekarang!'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
