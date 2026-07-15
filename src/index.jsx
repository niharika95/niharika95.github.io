import './index.css';

import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

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
import HomeV2LargeThumbnails from './v2/screens/HomeV2LargeThumbnails/HomeV2LargeThumbnails';
import SelectedWorksDashboards from './v2/screens/SelectedWorks/SelectedWorksDashboards';
import SelectedWorksDataTables from './v2/screens/SelectedWorks/SelectedWorksDataTables';
import SelectedWorksDataExtraction from './v2/screens/SelectedWorks/SelectedWorksDataExtraction';
import SelectedWorksFormFlows from './v2/screens/SelectedWorks/SelectedWorksFormFlows';
import SelectedWorksMobileUI from './v2/screens/SelectedWorks/SelectedWorksMobileUI';
import SelectedWorksChatMessaging from './v2/screens/SelectedWorks/SelectedWorksChatMessaging';
import SelectedWorksAuthFlows from './v2/screens/SelectedWorks/SelectedWorksAuthFlows';
import SelectedWorksMarketingDesign from './v2/screens/SelectedWorks/SelectedWorksMarketingDesign';
import SelectedWorksAll from './v2/screens/SelectedWorks/SelectedWorksAll';
import Clarity from '@microsoft/clarity';

// Initialize Microsoft Clarity if Project ID is configured
const clarityProjectId = import.meta.env.VITE_CLARITY_PROJECT_ID || window.clarityProjectId;
if (clarityProjectId) {
  Clarity.init(clarityProjectId);
}

const container = document.getElementById('root');
const root = createRoot(container);

const V2Route = ({ children }) => (
  <div className="v2-route font-ibm-plex">
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
        <Route path="/v2" element={<Navigate to="/" replace />} />
        <Route path="/archived" element={<Navigate to="/archived-geometrical" replace />} />
        
        {/* V2 Routes (Default Portfolio Version) */}
        <Route path="/" element={<V2Route><HomeV2 /></V2Route>} />
        <Route path="/exposure-tool" element={<V2Route><ExposureToolV2 /></V2Route>} />
        <Route path="/insurance-company-website-redesign" element={<V2Route><InsuranceCompanyWebsiteRedesignV2 /></V2Route>} />
        <Route path="/ramen-nagi" element={<V2Route><RamenNagiCaseStudyV2 /></V2Route>} />
        <Route path="/loan-app-experience-optimization" element={<V2Route><LoanAppExperienceOptimizationV2 /></V2Route>} />
        <Route path="/about" element={<V2Route><AboutV2 /></V2Route>} />
        <Route path="/resume" element={<V2Route><ResumeV2 /></V2Route>} />
        <Route path="/selected-works/dashboards" element={<V2Route><SelectedWorksDashboards /></V2Route>} />
        <Route path="/selected-works/data-tables" element={<V2Route><SelectedWorksDataTables /></V2Route>} />
        <Route path="/selected-works/data-extraction" element={<V2Route><SelectedWorksDataExtraction /></V2Route>} />
        <Route path="/selected-works/form-flows" element={<V2Route><SelectedWorksFormFlows /></V2Route>} />
        <Route path="/selected-works/mobile-ui" element={<V2Route><SelectedWorksMobileUI /></V2Route>} />
        <Route path="/selected-works/chat-messaging" element={<V2Route><SelectedWorksChatMessaging /></V2Route>} />
        <Route path="/selected-works/auth-flows" element={<V2Route><SelectedWorksAuthFlows /></V2Route>} />
        <Route path="/selected-works/marketing-design" element={<V2Route><SelectedWorksMarketingDesign /></V2Route>} />

        <Route path="/selected-works" element={<V2Route><SelectedWorksAll /></V2Route>} />



        {/* V2 Archived Routes */}
        <Route path="/archived-large-thumbnails" element={<V2Route><HomeV2LargeThumbnails /></V2Route>} />

        {/* V1 Archived Routes */}
        <Route element={<MainLayoutV1 />}>
          <Route path="/archived-geometrical" element={<HomeV1 />} />
          <Route path="/archived-geometrical/#projects" element={<HomeV1 />} />
          <Route path="/archived-geometrical/#about" element={<HomeV1 />} />
          <Route path="/archived-geometrical/about" element={<AboutV1 />} />
          <Route path="/archived-geometrical/project/:id" element={<ProjectV1 />} />
          <Route path="/archived-geometrical/resume" element={<ResumeV1 />} />
          {/* Personal Projects */}
          <Route path="/archived-geometrical/femhealth" element={<FemHealthV1 />} />
          <Route path="/archived-geometrical/swiftbikes" element={<SwiftBikesV1 />} />
          <Route path="/archived-geometrical/svaasthya" element={<SvaasthyaV1 />} />
          {/* Professional Projects */}
          <Route path="/archived-geometrical/intelligent-campaign-builder" element={<IntelligentCampaignBuilderV1 />} />
          <Route path="/archived-geometrical/loan-app-experience-optimization" element={<LoanAppExperienceOptimizationV1 />} />
          <Route path="/archived-geometrical/admissions-process-acceleration" element={<AdmissionsProcessAccelerationV1 />} />
          <Route path="/archived-geometrical/insurance-company-website-redesign" element={<InsuranceCompanyWebsiteRedesignV1 />} />
          {featureFlagsV1.showRamenNagi && <Route path="/archived-geometrical/ramen-nagi" element={<RamenNagiCaseStudyV1 />} />}
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
