import {View, Text, StatusBar, Platform, Image, Animated} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useStyles} from 'react-native-unistyles';
import {loginStyles} from '@unistyles/authStyles';
import CustomText from '@components/global/CustomText';
import TextBreaker from '@components/Ui/TextBreaker';
import PhoneInput from '@components/Ui/PhoneInput';
import CustomButton from '@components/Ui/CustomButton';
import SocialLogin from '@components/Ui/SocialLogin';
import useKeyboardOffsetHeight from '@utils/useKeyboardOffsetHeight';
import {resetAndNavigate} from '@utils/NavigationUtils';

const LoginScreen = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const keyboardOffset = useKeyboardOffsetHeight();
  const {styles} = useStyles(loginStyles);
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    if (keyboardOffset === 0) {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animatedValue, {
        toValue: -keyboardOffset * 0.25,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [keyboardOffset]);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      resetAndNavigate('UserBottomTabs');
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={Platform.OS !== 'android'} />
      <Image
        style={styles.cover}
        source={require('@assets/images/login.png')}
      />
      <Animated.ScrollView
        bounces={false}
        style={{transform: [{translateY: animatedValue}]}}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode={'on-drag'}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.bottomContainer}>
        <CustomText fontFamily="Okra-Bold" variant="h2" style={styles.title}>
          India's No. 1 Online Food Ordering Platform
        </CustomText>
        <TextBreaker text="Login Or Signup" />
        <PhoneInput
          value={phoneNumber}
          onChange={setPhoneNumber}
          onFocus={() => {}}
          onBlur={() => {}}
        />
        <CustomButton loading={loading} text="Continue" onPress={handleLogin} />
        <TextBreaker text="or" />
        <SocialLogin />
      </Animated.ScrollView>
      {keyboardOffset === 0 && (
        <View style={styles.footer}>
          <CustomText fontFamily="Okra-Bold" style={styles.footerText}>
            By continuing, you agree to our
          </CustomText>
          <View style={styles.footerTextContainer}>
            <CustomText style={styles.footerText}>
              Terms and Conditions
            </CustomText>
            <CustomText style={styles.footerText}>Privacy Policies</CustomText>
            <CustomText style={styles.footerText}>Content Policy</CustomText>
          </View>
        </View>
      )}
    </View>
  );
};

export default LoginScreen;
