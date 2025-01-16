import {
  LiveTabIcon,
  DiningTabIcon,
  ReorderTabIcon,
  DeliveryTabIcon,
} from './TabsIcons';
import React, {FC} from 'react';
import {Alert, Image, TouchableOpacity, View} from 'react-native';
import {Colors, screenWidth} from '@unistyles/Constants';
import {useSharedState} from './SharedContext';
import {tabStyles} from '@unistyles/tabStyles';
import {useStyles} from 'react-native-unistyles';
import ScalePress from '@components/Ui/ScalePress';
import {useAppSelector} from '../../redux/reduxHook';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {localImage} from '@utils/localImage';

const CustomTabBar: FC<BottomTabBarProps> = props => {
  const isVegMode = useAppSelector(state => state.user.isVegMode);
  const {scrollY} = useSharedState();
  const {navigation, state} = props;

  const bottom = useSafeAreaInsets();
  const {styles} = useStyles(tabStyles);

  const isLiveTabFocused = state.index === 3;

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY:
            scrollY.value === 1
              ? withTiming(100, {duration: 300})
              : withTiming(0, {duration: 300}),
        },
      ],
    };
  });

  const indicatorStyle = useAnimatedStyle(() => {
    const baseLeft = 10;
    const slideValue = state.index == 3 ? 0.23 : 0.24;
    return {
      left: withTiming(baseLeft + state.index * screenWidth * slideValue),
    };
  });

  return (
    <>
      <Animated.View
        style={[
          styles.tabBarContainer,
          animatedStyle,
          {
            paddingBottom: bottom.bottom,
            backgroundColor: isLiveTabFocused ? Colors.dark : Colors.background,
          },
        ]}>
        <View style={styles.tabContainer}>
          {state.routes?.map((route, index) => {
            const focused = index === state.index;
            const {name} = route;
            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });
              if (!focused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };
            return (
              <ScalePress
                key={index}
                onPress={onPress}
                onLongPress={onLongPress}
                style={[styles.tabItem, focused ? styles.focusedTabItem : {}]}>
                {route?.name === 'Delivery' && (
                  <DeliveryTabIcon focused={focused} />
                )}
                {route?.name === 'Reorder' && (
                  <ReorderTabIcon focused={focused} />
                )}
                {route?.name === 'Dining' && (
                  <DiningTabIcon focused={focused} />
                )}
                {route?.name === 'Live' && <LiveTabIcon focused={focused} />}
              </ScalePress>
            );
          })}
          <View style={styles.verticalLine} />
        </View>
        <Animated.View
          style={[
            styles.slidingIndicator,
            indicatorStyle,
            {
              backgroundColor: isLiveTabFocused
                ? '#fff'
                : isVegMode
                ? Colors.active
                : Colors.primary,
            },
          ]}
        />
        <TouchableOpacity
          onPress={() => {
            Alert.alert('BlinkIt', 'Coming Soon');
          }}
          style={styles.blinkitLogoContainer}>
          <Image source={localImage.blinkIt} style={styles.blinkitLogo} />
        </TouchableOpacity>
      </Animated.View>
    </>
  );
};

export default CustomTabBar;
