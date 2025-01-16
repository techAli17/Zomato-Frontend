import React from 'react';
import {Colors} from '@unistyles/Constants';
import {RFValue} from 'react-native-responsive-fontsize';
import {Platform, StyleSheet, Text, TextStyle} from 'react-native';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7';
type PlatformType = 'ios' | 'android';
interface CustomTextProps {
  variant?: Variant;
  style?: TextStyle | TextStyle[];
  children?: React.ReactNode;
  fontFamily?:
    | 'Okra-Bold'
    | 'Okra-Medium'
    | 'Okra-Regular'
    | 'Okra-Light'
    | 'Okra-Black';
  fontSize?: number;
  color?: string;
  textAlign?:
    | 'auto'
    | 'left'
    | 'right'
    | 'center'
    | 'justify'
    | 'start'
    | 'end'
    | undefined;
  numberOfLines?: number;
  onPress?: () => void;
  onLayout?: (event: any) => void;
}

const fontSizeMap: Record<Variant, Record<PlatformType, number>> = {
  h1: {
    ios: 20,
    android: 22,
  },
  h2: {
    ios: 18,
    android: 20,
  },
  h3: {
    ios: 16,
    android: 18,
  },
  h4: {
    ios: 14,
    android: 16,
  },
  h5: {
    ios: 12,
    android: 14,
  },
  h6: {
    ios: 10,
    android: 12,
  },
  h7: {
    ios: 9,
    android: 10,
  },
};

const CustomText: React.FC<CustomTextProps> = ({
  children,
  variant = 'h1',
  style,
  fontFamily,
  fontSize,
  color,
  numberOfLines,
  onPress,
  onLayout,
}) => {
  let computedFontSize: number =
    Platform.OS === 'android'
      ? RFValue(fontSize || 12)
      : RFValue(fontSize || 10);

  if (variant && fontSizeMap[variant]) {
    const defaultSize = fontSizeMap[variant][Platform.OS as PlatformType];
    computedFontSize = RFValue(fontSize || defaultSize);
  }

  const fontFamilyStyle = {
    fontFamily,
  };

  return (
    <Text
      style={[
        styles.text,
        fontFamilyStyle,
        {color: color || Colors.text, fontSize: computedFontSize, ...style},
      ]}
      numberOfLines={numberOfLines}
      onPress={onPress}
      onLayout={onLayout}>
      {children}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    textAlign: 'left',
  },
});
