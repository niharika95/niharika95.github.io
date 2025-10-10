import FeatureFlagPanel from '../FeatureFlagPanel/FeatureFlagPanel';
import { Gutter } from '../../common';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import React from 'react';

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Gutter className="pt-[74px]">
        <Outlet />
      </Gutter>
      <FeatureFlagPanel />
    </div>
  );
};

export default MainLayout;
