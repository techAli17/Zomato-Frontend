import {FC, memo} from 'react';
import {Colors} from '@unistyles/Constants';
import CustomText from '@components/global/CustomText';
import {Image, TextStyle, View, ViewStyle} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useAppSelector} from '../../redux/reduxHook';
import {localImage} from '@utils/localImage';
/**
 * 
 * import DeliveryFocused from '@assets/tabIcons/delivery_focused.png';
import Delivery from '@assets/tabIcons/delivery.png';
import Dining from '@assets/tabIcons/dining.png';
import DiningFocused from '@assets/tabIcons/dining_focused.png';
import Live from '@assets/tabIcons/live.png';
import LiveFocused from '@assets/tabIcons/live_focused.png';
import Reorder from '@assets/tabIcons/reorder.png';
import ReorderFocused from '@assets/tabIcons/reorder_focused.png';
import {useAppSelector} from '../../redux/reduxHook';
 */
interface TabsProps {
  name: string;
  focused: boolean;
}

const ICONS: Record<string, {active: any; inactive: any}> = {
  Delivery: {active: localImage.DeliveryFocused, inactive: localImage.Delivery},
  Dining: {active: localImage.DiningFocused, inactive: localImage.Dining},
  Reorder: {active: localImage.ReorderFocused, inactive: localImage.Reorder},
  Live: {active: localImage.LiveFocused, inactive: localImage.Live},
};

const styles = {
  image: {
    width: RFValue(18),
    height: RFValue(18),
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  text: (focused: boolean): TextStyle => ({
    fontSize: RFValue(10),
    marginTop: 4,
    fontFamily: 'Okra-SemiBold',
    color: focused ? Colors.active : Colors.lightText,
  }),
};

const TabIcon: FC<TabsProps> = memo(({name, focused}) => {
  const icon = focused ? ICONS[name]?.active : ICONS[name]?.inactive;
  const isVegMode = useAppSelector(state => state.user.isVegMode);
  return (
    <View style={styles.container}>
      <Image
        source={icon}
        style={[
          styles.image,
          {
            tintColor: focused ? Colors.primary : Colors.lightText,
          },
        ]}
      />
      <CustomText style={styles.text(focused)}>{name}</CustomText>
    </View>
  );
});

export const DeliveryTabIcon: FC<{focused: boolean}> = memo(({focused}) => (
  <TabIcon name="Delivery" focused={focused} />
));

export const DiningTabIcon: FC<{focused: boolean}> = memo(({focused}) => (
  <TabIcon name="Dining" focused={focused} />
));

export const ReorderTabIcon: FC<{focused: boolean}> = memo(({focused}) => (
  <TabIcon name="Reorder" focused={focused} />
));

export const LiveTabIcon: FC<{focused: boolean}> = memo(({focused}) => (
  <TabIcon name="Live" focused={focused} />
));
