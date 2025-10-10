import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/Home/Home';
import Project from './screens/Project/Project';
import Resume from './screens/Resume/Resume';
import IntelligentCampaignBuilder from './screens/IntelligentCampaignBuilder/IntelligentCampaignBuilder';
import LoanAppExperienceOptimization from './screens/LoanAppExperienceOptimization/LoanAppExperienceOptimization';
import AdmissionsProcessAcceleration from './screens/AdmissionsProcessAcceleration/AdmissionsProcessAcceleration';
import InsuranceCompanyWebsiteRedesign from './screens/InsuranceCompanyWebsiteRedesign/InsuranceCompanyWebsiteRedesign';
import MainLayout from './components/MainLayout/MainLayout';
import featureFlags from './config/featureFlags';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/#projects" element={<Home />} />
          <Route path="/#about" element={<Home />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
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
