import {View, Text, ViewStyle, Animated, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';

interface ScalePressProps {
  onPress: () => void;
  children: React.ReactNode;
  onLongPress?: () => void;
  style?: ViewStyle | ViewStyle[];
}

const ScalePress: FC<ScalePressProps> = ({
  onPress,
  children,
  onLongPress,
  style,
}) => {
  const scaleValue = new Animated.Value(1);
  const onPressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.96,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
      duration: 100,
    }).start();
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={{...style}}>
      <Animated.View>{children}</Animated.View>
    </TouchableOpacity>
  );
};

export default ScalePress;
