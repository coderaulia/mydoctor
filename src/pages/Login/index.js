import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILLogo} from '../../assets/illustration';
import {Button, Input, Link, Gap} from '../../components/atoms';
import {colors, fonts} from '../../utils';

export default function Login() {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input label="Alamat Email" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={10} />
      <Link title={'Lupa Password'} size={12} />
      <Gap height={40} />
      <Button title={'Masuk'} />
      <Gap height={30} />
      <Link title={'Buat Akun Baru'} align={'center'} size={16} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 20,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 153,
  },
});
