import './index.css';

import { HashRouter, Route, Routes } from 'react-router-dom';

import AboutV1 from './v1/screens/About/About';
import AdmissionsProcessAccelerationV1 from './v1/screens/AdmissionsProcessAcceleration/AdmissionsProcessAcceleration';
import FemHealthV1 from './v1/screens/FemHealth/FemHealth';
import HomeV1 from './v1/screens/Home/Home';
import InsuranceCompanyWebsiteRedesignV1 from './v1/screens/InsuranceCompanyWebsiteRedesign/InsuranceCompanyWebsiteRedesign';
import IntelligentCampaignBuilderV1 from './v1/screens/IntelligentCampaignBuilder/IntelligentCampaignBuilder';
import LoanAppExperienceOptimizationV1 from './v1/screens/LoanAppExperienceOptimization/LoanAppExperienceOptimization';
import MainLayoutV1 from './v1/components/MainLayout/MainLayout';
import PresentationV1 from './v1/screens/Presentation/Presentation';
import ProjectV1 from './v1/screens/Project/Project';
import RamenNagiCaseStudyV1 from './v1/screens/RamenNagiCaseStudy/RamenNagiCaseStudy';
import React from 'react';
import ResumeV1 from './v1/screens/Resume/Resume';
import ScrollToTop from './v1/components/ScrollToTop/ScrollToTop';
import SvaasthyaV1 from './v1/screens/Svaasthya/Svaasthya';
import SwiftBikesV1 from './v1/screens/SwiftBikes/SwiftBikes';
import featureFlagsV1 from './v1/config/featureFlags';
import { createRoot } from 'react-dom/client';
import AboutV2 from './v2/screens/About/About';
import CursorV2 from './v2/components/Cursor/Cursor';
import HomeV2 from './v2/screens/HomeV2/HomeV2';
import InsuranceCompanyWebsiteRedesignV2 from './v2/screens/InsuranceCompanyWebsiteRedesign/InsuranceCompanyWebsiteRedesign';
import LoanAppExperienceOptimizationV2 from './v2/screens/LoanAppExperienceOptimization/LoanAppExperienceOptimization';
import RamenNagiCaseStudyV2 from './v2/screens/RamenNagiCaseStudy/RamenNagiCaseStudy';
import ResumeV2 from './v2/screens/Resume/Resume';
import ExposureToolV2 from './v2/screens/ExposureTool/ExposureTool';

const container = document.getElementById('root');
const root = createRoot(container);

const V2Route = ({ children }) => (
  <div className="v2-route">
    <CursorV2 />
    {children}
  </div>
);

root.render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/presentation" element={<PresentationV1 />} />
        <Route path="/v2" element={<V2Route><HomeV2 /></V2Route>} />
        <Route path="/v2/exposure-tool" element={<V2Route><ExposureToolV2 /></V2Route>} />
        <Route path="/v2/insurance-company-website-redesign" element={<V2Route><InsuranceCompanyWebsiteRedesignV2 /></V2Route>} />
        <Route path="/v2/ramen-nagi" element={<V2Route><RamenNagiCaseStudyV2 /></V2Route>} />
        <Route path="/v2/loan-app-experience-optimization" element={<V2Route><LoanAppExperienceOptimizationV2 /></V2Route>} />
        <Route path="/v2/about" element={<V2Route><AboutV2 /></V2Route>} />
        <Route path="/v2/resume" element={<V2Route><ResumeV2 /></V2Route>} />
        <Route path="/v1" element={<HomeV1 />} />
        <Route element={<MainLayoutV1 />}>
          <Route path="/" element={<HomeV1 />} />
          <Route path="/#projects" element={<HomeV1 />} />
          <Route path="/#about" element={<HomeV1 />} />
          <Route path="/about" element={<AboutV1 />} />
          <Route path="/project/:id" element={<ProjectV1 />} />
          <Route path="/resume" element={<ResumeV1 />} />
          {/* Personal Projects */}
          <Route path="/femhealth" element={<FemHealthV1 />} />
          <Route path="/swiftbikes" element={<SwiftBikesV1 />} />
          <Route path="/svaasthya" element={<SvaasthyaV1 />} />
          {/* Professional Projects */}
          <Route path="/intelligent-campaign-builder" element={<IntelligentCampaignBuilderV1 />} />
          <Route path="/loan-app-experience-optimization" element={<LoanAppExperienceOptimizationV1 />} />
          <Route path="/admissions-process-acceleration" element={<AdmissionsProcessAccelerationV1 />} />
          <Route path="/insurance-company-website-redesign" element={<InsuranceCompanyWebsiteRedesignV1 />} />
          {featureFlagsV1.showRamenNagi && <Route path="/ramen-nagi" element={<RamenNagiCaseStudyV1 />} />}
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
