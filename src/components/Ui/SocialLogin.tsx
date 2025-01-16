import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useStyles} from 'react-native-unistyles';
import {phoneStyles} from '@unistyles/phoneStyles';
import {RFValue} from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';
const SocialLogin = () => {
  const {styles} = useStyles(phoneStyles);
  return (
    <View style={styles.socialContainer}>
      <TouchableOpacity style={styles.iconContainer}>
        <Image
          style={styles.gimg}
          source={require('@assets/icons/google.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Ionicons name="logo-apple" color={'#222'} size={RFValue(24)} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Ionicons
          name="ellipsis-horizontal"
          color={'#222'}
          size={RFValue(24)}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SocialLogin;

const styles = StyleSheet.create({});
