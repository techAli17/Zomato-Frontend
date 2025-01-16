import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {FC} from 'react';
import {useStyles} from 'react-native-unistyles';
import {phoneStyles} from '@unistyles/phoneStyles';
import CustomText from '@components/global/CustomText';
import {Colors} from '@unistyles/Constants';

interface PhoneInputProps {
  value?: string;
  onChange?: (text: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

const PhoneInput: FC<PhoneInputProps> = ({
  value,
  onChange,
  onFocus,
  onBlur,
}) => {
  const {styles} = useStyles(phoneStyles);
  return (
    <View style={styles.container}>
      <Pressable style={styles.countryPickerContainer}>
        <CustomText variant="h3">🇮🇳</CustomText>
      </Pressable>
      <View style={styles.phoneInputContainer}>
        <CustomText variant="h4">+91</CustomText>
        <TextInput
          placeholder="Enter Mobile Number"
          keyboardType="phone-pad"
          style={styles.input}
          value={value}
          onChangeText={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholderTextColor={Colors.lightText}
        />
      </View>
    </View>
  );
};

export default PhoneInput;

const styles = StyleSheet.create({});
