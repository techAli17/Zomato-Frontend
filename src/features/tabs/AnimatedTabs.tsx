import React, {FC} from 'react';
import {SharedStateProvide} from './SharedContext';
import UserBottomTabs from './userBottomTabs';

const AnimatedTabs: FC = () => {
  return (
    <SharedStateProvide>
      <UserBottomTabs />
    </SharedStateProvide>
  );
};

export default AnimatedTabs;
