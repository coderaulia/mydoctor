import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IconBackDark, IconBackLight} from '../../../assets';

export default function IconOnly({onPress, icon}) {
  // icon type conditional
  const Icon = () => {
    if (icon === 'back-dark') {
      return <IconBackDark />;
    }
    if (icon === 'back-light') {
      return <IconBackLight />;
    }
    return <IconBackDark />;
  };

  // returning the icon button
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
