import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {ListDoctor} from '../../components';
import {colors, fonts} from '../../utils';
import {DummyDoctor3, DummyDoctor5, DummyDoctor6} from '../../assets';

export default function Messages() {
  const [doctors] = useState([
    {
      id: 1,
      profile: DummyDoctor3,
      name: 'Kartika Sari',
      desc: 'Terima Kasih atas kesabarannya yaa bu...',
    },
    {
      id: 2,
      profile: DummyDoctor5,
      name: 'Puspa Sari',
      desc: 'Sama-sama ibu, semoga sehat selalu!',
    },
    {
      id: 3,
      profile: DummyDoctor6,
      name: 'Robertson',
      desc: 'Selamat datang bu di layanan kami',
    },
  ]);
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Pesan</Text>
        {doctors.map(doctor => {
          return (
            <ListDoctor
              profile={doctor.profile}
              name={doctor.name}
              desc={doctor.desc}
              key={doctor.id}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    // Create a border radius on the bottom of the page
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
