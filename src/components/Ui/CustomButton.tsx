import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC} from 'react';
import {useStyles} from 'react-native-unistyles';
import {loginStyles} from '@unistyles/authStyles';
import CustomText from '@components/global/CustomText';
import {Colors} from '@unistyles/Constants';
interface CustomButtonProps {
  text: string;
  loading?: boolean;
  onPress: () => void;
}
const CustomButton: FC<CustomButtonProps> = ({
  text,
  onPress,
  loading = false,
}) => {
  const {styles} = useStyles(loginStyles);
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      disabled={loading}
      style={styles.buttonContainer}>
      {loading ? (
        <ActivityIndicator size="small" color={'#fff'} />
      ) : (
        <CustomText color="#fff" fontFamily="Okra-Medium" variant="h5">
          {text || 'Enter text'}
        </CustomText>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
