import {View, Text, StatusBar, Platform, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useStyles} from 'react-native-unistyles';
import {splashStyles} from '@unistyles/authStyles';
import Animated, {FadeInDown} from 'react-native-reanimated';
import {resetAndNavigate} from '@utils/NavigationUtils';
import CustomText from '@components/global/CustomText';
const SplashScreen = () => {
  const {styles} = useStyles(splashStyles);

  useEffect(() => {
    const timer = setTimeout(() => {
      resetAndNavigate('LoginScreen');
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden={Platform.OS === 'ios'} />
      <Image
        style={styles.logoImage}
        source={require('@assets/images/logo_t.png')}
      />
      <Animated.View
        entering={FadeInDown.delay(400).duration(800)}
        style={styles.animatedContainer}>
        <Image
          style={styles.treeImage}
          source={require('@assets/images/tree.png')}
        />
        <CustomText
          variant="h5"
          style={styles.msgText}
          fontFamily="Okra-Medium"
          color="#fff">
          Carbon and Plastic Neutral Deliveries in India
        </CustomText>
      </Animated.View>
    </View>
  );
};

export default SplashScreen;
