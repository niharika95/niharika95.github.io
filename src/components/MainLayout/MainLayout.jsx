import FeatureFlagPanel from '../FeatureFlagPanel/FeatureFlagPanel';
import Footer from '../Footer/Footer';
import { Gutter } from '../../common';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import React from 'react';

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Gutter className="pt-[60px]">
        <Outlet />
      </Gutter>
      <Footer />
      <FeatureFlagPanel />
    </div>
  );
};

export default MainLayout;
