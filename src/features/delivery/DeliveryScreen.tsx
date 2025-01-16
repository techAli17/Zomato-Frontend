import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {useStyles} from 'react-native-unistyles';
import {homeStyles} from '@unistyles/homeStyles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {useSharedState} from '@features/tabs/SharedContext';
import HeaderSection from '@components/Home/HeaderSection';
import Graphics from '@components/Home/Graphics';

const DeliveryScreen = () => {
  const insets = useSafeAreaInsets();
  const {styles} = useStyles(homeStyles);
  const {scrollYGlobal} = useSharedState();

  const moveUpStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollYGlobal.value,
      [0, 50],
      [0, -50],
      Extrapolate.CLAMP,
    );
    return {
      transform: [
        {
          translateY: translateY,
        },
      ],
    };
  });

  const moveUpStyleNotExtrapolate = useAnimatedStyle(() => {
    const translateY = interpolate(scrollYGlobal.value, [0, 50], [0, -50]);
    return {
      transform: [
        {
          translateY: translateY,
        },
      ],
    };
  });

  const backgroundColorChanges = useAnimatedStyle(() => {
    const opacity = interpolate(scrollYGlobal.value, [1, 50], [0, 1]);
    return {
      backgroundColor: `rgba(0,0,0,${opacity})`,
    };
  });

  return (
    <View style={styles.container}>
      <View style={{height: Platform.OS === 'ios' ? 0 : insets.top}} />
      <Animated.View style={[moveUpStyle]}>
        {/**Graphics Section */}
        <Animated.View style={[moveUpStyleNotExtrapolate]}>
          <Graphics />
        </Animated.View>

        {/**Header Section */}
        <Animated.View style={[backgroundColorChanges, styles.topHeader]}>
          <HeaderSection />
        </Animated.View>
      </Animated.View>
      <Graphics />
    </View>
  );
};

export default DeliveryScreen;

const styles = StyleSheet.create({});
