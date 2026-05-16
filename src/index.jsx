import './index.css';

import { HashRouter, Route, Routes } from 'react-router-dom';

import About from './screens/About/About';
import AdmissionsProcessAcceleration from './screens/AdmissionsProcessAcceleration/AdmissionsProcessAcceleration';
import FemHealth from './screens/FemHealth/FemHealth';
import Home from './screens/Home/Home';
import HomeV1 from './screens/HomeV1/HomeV1';
import HomeV2 from './screens/HomeV2/HomeV2';
import InsuranceCompanyWebsiteRedesign from './screens/InsuranceCompanyWebsiteRedesign/InsuranceCompanyWebsiteRedesign';
import IntelligentCampaignBuilder from './screens/IntelligentCampaignBuilder/IntelligentCampaignBuilder';
import LoanAppExperienceOptimization from './screens/LoanAppExperienceOptimization/LoanAppExperienceOptimization';
import MainLayout from './components/MainLayout/MainLayout';
import Project from './screens/Project/Project';
import RamenNagiCaseStudy from './screens/RamenNagiCaseStudy/RamenNagiCaseStudy';
import React from 'react';
import Resume from './screens/Resume/Resume';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Svaasthya from './screens/Svaasthya/Svaasthya';
import SwiftBikes from './screens/SwiftBikes/SwiftBikes';
import { createRoot } from 'react-dom/client';
import Cursor from './components/Cursor/Cursor';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Cursor />
      <ScrollToTop />
      <Routes>
        <Route path="/v2" element={<HomeV2 />} />
        <Route path="/v2/exposure-tool" />
        <Route path="/v2/insurance-company-website-redesign" element={<InsuranceCompanyWebsiteRedesign />} />
        <Route path="/v2/ramen-nagi" element={<RamenNagiCaseStudy />} />
        <Route path="/v2/loan-app-experience-optimization" element={<LoanAppExperienceOptimization />} />
        <Route path="/v2/about" />
        <Route path="/v2/resume" />
        <Route path="/v1" element={<HomeV1 />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/#projects" element={<Home />} />
          <Route path="/#about" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
          {/* Personal Projects */}
          <Route path="/femhealth" element={<FemHealth />} />
          <Route path="/swiftbikes" element={<SwiftBikes />} />
          <Route path="/svaasthya" element={<Svaasthya />} />
          {/* Professional Projects */}
          <Route path="/intelligent-campaign-builder" element={<IntelligentCampaignBuilder />} />
          <Route path="/loan-app-experience-optimization" element={<LoanAppExperienceOptimization />} />
          <Route path="/admissions-process-acceleration" element={<AdmissionsProcessAcceleration />} />
          <Route path="/insurance-company-website-redesign" element={<InsuranceCompanyWebsiteRedesign />} />
          <Route path="/ramen-nagi" element={<RamenNagiCaseStudy />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
