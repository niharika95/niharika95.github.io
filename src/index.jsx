import './index.css';

import { HashRouter, Route, Routes } from 'react-router-dom';

import About from './screens/About/About';
import AdmissionsProcessAcceleration from './screens/AdmissionsProcessAcceleration/AdmissionsProcessAcceleration';
import FemHealth from './screens/FemHealth/FemHealth';
import Home from './screens/Home/Home';
import HomeV2 from './screens/Home/HomeV2';
import InsuranceCompanyWebsiteRedesign from './screens/InsuranceCompanyWebsiteRedesign/InsuranceCompanyWebsiteRedesign';
import IntelligentCampaignBuilder from './screens/IntelligentCampaignBuilder/IntelligentCampaignBuilder';
import LoanAppExperienceOptimization from './screens/LoanAppExperienceOptimization/LoanAppExperienceOptimization';
import MainLayout from './components/MainLayout/MainLayout';
import Project from './screens/Project/Project';
import React from 'react';
import Resume from './screens/Resume/Resume';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Svaasthya from './screens/Svaasthya/Svaasthya';
import SwiftBikes from './screens/SwiftBikes/SwiftBikes';
import { createRoot } from 'react-dom/client';
import featureFlags from './config/featureFlags';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={featureFlags.useNewHomePage ? <HomeV2 /> : <Home />} />
          <Route path="/#projects" element={featureFlags.useNewHomePage ? <HomeV2 /> : <Home />} />
          <Route path="/#about" element={featureFlags.useNewHomePage ? <HomeV2 /> : <Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
          {/* Personal Projects */}
          <Route path="/femhealth" element={<FemHealth />} />
          <Route path="/swiftbikes" element={<SwiftBikes />} />
          <Route path="/svaasthya" element={<Svaasthya />} />
          {/* Professional Projects */}
          {featureFlags.showNewLinks && (
            <>
              <Route path="/intelligent-campaign-builder" element={<IntelligentCampaignBuilder />} />
              <Route path="/loan-app-experience-optimization" element={<LoanAppExperienceOptimization />} />
              <Route path="/admissions-process-acceleration" element={<AdmissionsProcessAcceleration />} />
              <Route path="/insurance-company-website-redesign" element={<InsuranceCompanyWebsiteRedesign />} />
            </>
          )}
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
