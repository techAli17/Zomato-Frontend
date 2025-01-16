import {createStyleSheet} from 'react-native-unistyles';

export const emptyStyles = createStyleSheet(({colors, device, border}) => ({
  container: (isLive: Boolean = false) => ({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: isLive ? '#000' : colors.background,
  }),
  live_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  emptyImage: {
    width: device.width * 0.9,
    height: device.height * 0.4,
    resizeMode: 'contain',
  },
}));
