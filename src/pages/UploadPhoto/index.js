import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/Header';
import {IconAddPhoto, ILNullPhoto} from '../../assets';
import {Button, Gap, Link} from '../../components/atoms';
import {colors, fonts} from '../../utils';

export default function UploadPhoto({navigation}) {
  return (
    <View style={styles.page}>
      <Header title="Unggah Foto" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.wrapper}>
            <Image source={ILNullPhoto} style={styles.photo} />
            <IconAddPhoto style={styles.icon} />
          </View>
          <Text style={styles.name}>Aulia Salsabila</Text>
          <Text style={styles.work}>Web Developer</Text>
        </View>
        <View>
          <Button title="Unggah dan Lanjutkan" />
          <Gap height={30} />
          <Link title="Lewati proses ini..." align={'center'} size={16} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: 40,
    paddingBottom: 40,
    flex: 1,
    justifyContent: 'space-between',
  },
  profile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  wrapper: {
    height: 130,
    width: 130,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    height: 110,
    width: 110,
  },
  icon: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  name: {
    fontSize: 24,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
  },
  work: {
    fontSize: 18,
    color: colors.text.secondary,
    textAlign: 'center',
  },
});
