import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import {useSharedState} from '@features/tabs/SharedContext';
import {useStyles} from 'react-native-unistyles';
import {homeStyles} from '@unistyles/homeStyles';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomText from '@components/global/CustomText';
import {localImage} from '@utils/localImage';
const LocationHeader = () => {
  const {scrollYGlobal} = useSharedState();
  const {styles} = useStyles(homeStyles);
  const textColor = '#fff';
  const opacityFadingStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scrollYGlobal.value, [0, 80], [1, 0]);

    return {
      opacity: opacity,
    };
  });
  return (
    <Animated.View style={[opacityFadingStyle]}>
      <SafeAreaView />
      <View style={styles.flexRowBetween}>
        <View style={styles.flexRowGap}>
          <Icon name="map-marker" size={30} color={textColor} />
          <View>
            <TouchableOpacity style={styles.flexRow}>
              <CustomText variant="h5" color={textColor} fontFamily="Okra-Bold">
                Erangel, Pochinki
              </CustomText>
              <Icon name="chevron-down" size={18} color={textColor} />
            </TouchableOpacity>
            <CustomText variant="h6" color={textColor} fontFamily="Okra-Medium">
              Bhognipur, Kanpur Dehat
            </CustomText>
          </View>
        </View>

        <View style={styles.flexRowGap}>
          <TouchableOpacity style={styles.translation}>
            <Image
              source={localImage.translationIcon}
              style={styles.translationIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.profileAvatar}>
            <Image
              source={localImage.goldenCircle}
              style={styles.goldenCircle}
            />
            <Image
              source={localImage.profileImage}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
};

export default LocationHeader;
