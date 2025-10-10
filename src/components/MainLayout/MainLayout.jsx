import React from 'react';
import { Outlet } from 'react-router-dom';
import { Gutter } from '../../common';
import Header from '../Header/Header';
import FeatureFlagPanel from '../FeatureFlagPanel/FeatureFlagPanel';


const MainLayout = () => {
  return (
    <div>
      <Header />
      <Gutter className="pt-[100px]">
        <Outlet />
      </Gutter>
      <FeatureFlagPanel />
    </div>
  );
};

export default MainLayout;
