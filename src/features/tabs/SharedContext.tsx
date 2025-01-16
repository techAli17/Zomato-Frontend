import {createContext, FC, ReactNode, useContext} from 'react';
import Animated, {useSharedValue, withTiming} from 'react-native-reanimated';

interface SharedStateContextProps {
  scrollY: Animated.SharedValue<number>;
  scrollYGlobal: Animated.SharedValue<number>;
  scrollToTop: () => void;
}

const SharedStateContext = createContext<SharedStateContextProps>({
  scrollY: useSharedValue(0),
  scrollYGlobal: useSharedValue(0),
  scrollToTop: () => {},
});

export const SharedStateProvide: FC<{children: ReactNode}> = ({children}) => {
  const scrollY = useSharedValue(0);
  const scrollYGlobal = useSharedValue(0);
  const scrollToTop = () => {
    scrollY.value = withTiming(0, {duration: 3000});
    scrollYGlobal.value = withTiming(0, {duration: 3000});
  };

  return (
    <SharedStateContext.Provider value={{scrollToTop, scrollY, scrollYGlobal}}>
      {children}
    </SharedStateContext.Provider>
  );
};

export const useSharedState = () => {
  const context = useContext(SharedStateContext);
  if (context === undefined) {
    throw new Error('useState must be shared within sharedStateProvider');
  }
  return context;
};
