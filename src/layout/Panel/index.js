import './panel.scss';

import React from 'react';
import AppHeader from '../AppHeader';
import { Outlet } from 'react-router-dom';
import LeftDiv from './LeftDiv';

const Panel = () => {
  return (
    <div>
      <AppHeader />
      <div className='panel-base-div'>
        <div className='panel-left-div'>
          <LeftDiv />
        </div>
        <div className='panel-right-div'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Panel;
