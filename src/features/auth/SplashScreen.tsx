import {View, Text, StatusBar, Platform, Image} from 'react-native';
import React from 'react';
import {useStyles} from 'react-native-unistyles';
import {splashStyles} from '@unistyles/authStyles';
import Animated, {FadeInDown} from 'react-native-reanimated';
const SplashScreen = () => {
  const {styles} = useStyles(splashStyles);

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
          style={styles.logoImage}
          source={require('@assets/images/tree.png')}
        />
      </Animated.View>
    </View>
  );
};

export default SplashScreen;
