const ASSET_ROOT = '/v2/images/home/selected-works';

export const selectedWorksCatalog = [
  {
    slug: 'dashboards',
    label: 'Dashboards',
    path: '/selected-works/dashboards',
    items: [
      {
        slug: 'campaign-audience-segmentation',
        title: 'Campaign & Audience Segmentation Platform',
        description: 'Design of a self-serve marketing platform for building target segments and launching campaigns. The tool guides users from cohort creation to multi-channel execution.',
        images: [`${ASSET_ROOT}/selected-works-dashboards/Campaign & Audience Segmentation Platform.png`]
      },
      {
        slug: 'operational-analytics',
        title: 'Operational Analytics Dashboard',
        description: 'Design of a real-time analytics dashboard that provides operations managers with visibility into system status, queue performance, agent metrics, and customer interaction volumes.',
        images: [`${ASSET_ROOT}/selected-works-dashboards/Operational Analytics Dashboard.png`]
      },
      {
        slug: 'new-business-submission',
        title: 'New Business Submission Case Management',
        description: 'Internal workflow application for insurance underwriters to manage and evaluate incoming new business submissions. The solution balances high information density with visual hierarchy, offering both light and dark modes to accommodate individual workspaces.',
        images: [
          `${ASSET_ROOT}/selected-works-dashboards/New Business Submission Case Management - light.png`,
          `${ASSET_ROOT}/selected-works-dashboards/New Business Submission Case Management - dark.png`
        ]
      },
      {
        slug: 'interaction-intent-analytics',
        title: 'Interaction Intent Analytics Dashboard',
        description: 'This dashboard tracks customer intent across interactive voice response (IVR) and digital channels. It surfaces intent distribution, containment rates, and escalation paths to help designers optimize self-service interactions.',
        images: [`${ASSET_ROOT}/selected-works-dashboards/Interaction Intent Analytics Dashboard.png`]
      },
      {
        slug: 'financial-audit-risk',
        title: 'Financial Audit & Risk Management Dashboard',
        description: 'This dashboard provides financial auditors with a comprehensive view of audit progress, risk distribution, and compliance violations across business entities. The system aggregates risk exposure metrics to flag high-priority entities.',
        images: [`${ASSET_ROOT}/selected-works-dashboards/Financial Audit & Risk Management Dashboard.png`]
      }
    ]
  },
  {
    slug: 'data-tables',
    label: 'Data Tables',
    path: '/selected-works/data-tables',
    items: [
      {
        slug: 'omnichannel-campaign-analytics',
        title: 'Omnichannel Campaign Execution & Analytics Platform',
        description: 'This interface visualizes active campaign analytics alongside structured list views, prioritizing clean typography and robust search filtering to help operations teams monitor performance.',
        images: [
          `${ASSET_ROOT}/selected-works-data-tables/Omnichannel Campaign Execution & Analytics Platform - 1.png`,
          `${ASSET_ROOT}/selected-works-data-tables/Omnichannel Campaign Execution & Analytics Platform - 2.png`
        ]
      },
      {
        slug: 'job-queue-monitoring',
        title: 'Job Queue & Process Monitoring Platform',
        description: 'High-density operations dashboard for real-time background job execution tracking. The tabular view surfaces system logs, task durations, queue ordering, and retry triggers.',
        images: [`${ASSET_ROOT}/selected-works-data-tables/Job Queue & Process Monitoring Platform.png`]
      },
      {
        slug: 'task-validation-ledger',
        title: 'Enterprise Task Management & Validation Ledger',
        description: 'Audit interface that surfaces pending task items and verification ledger history. The grid layout optimizes row densities and action item wayfinding for rapid review workflows.',
        images: [`${ASSET_ROOT}/selected-works-data-tables/Enterprise Task Management & Validation Ledger.png`]
      },
      {
        slug: 'document-asset-management',
        title: 'Document Generation & Asset Management Data Table',
        description: 'This document-centric interface manages asset generation states and distribution queues. The table surfaces template versions, document formats, delivery channels, and recipient metrics.',
        images: [`${ASSET_ROOT}/selected-works-data-tables/Document Generation & Asset Management Data Table.png`]
      },
      {
        slug: 'financial-data-extraction',
        title: 'Financial Data Extraction',
        description: 'Data auditing portal that showcases tabular summaries alongside extracted line item details, emphasizing precise cell alignments, status badges, and vertical grid structures.',
        images: [`${ASSET_ROOT}/selected-works-data-tables/Financial Data Extraction.png`]
      },
      {
        slug: 'user-service-configuration',
        title: 'User Management & Service Configuration',
        description: 'Settings view that manages system permissions and service allocations. The interface displays active user counts, role mappings, authentication methods, and direct profile controls.',
        images: [`${ASSET_ROOT}/selected-works-data-tables/User Management & Service Configuration.png`]
      }
    ]
  },
  {
    slug: 'data-extraction',
    label: 'Data Extraction',
    path: '/selected-works/data-extraction',
    items: [
      {
        slug: 'intelligent-document-extraction',
        title: 'Intelligent Document Extraction & Verification',
        description: 'Designed to automate document processing workflows, this interactive document viewer enables users to cross-reference digitized textual information against original unstructured assets and modify parsed fields directly.',
        images: [
          `${ASSET_ROOT}/selected-works-data-extraction/Intelligent Document Extraction & Verification - 1.png`,
          `${ASSET_ROOT}/selected-works-data-extraction/Intelligent Document Extraction & Verification - 2.png`
        ]
      },
      {
        slug: 'automated-check-analysis',
        title: 'Automated Check Extraction & Fraud Analysis Platform',
        description: 'This interface handles check extraction workflows by pulling data from scanned check images and comparing them against verification scores for criteria like signature validity and handwriting alterations to help risk teams evaluate check integrity.',
        images: [`${ASSET_ROOT}/selected-works-data-extraction/Automated Check Extraction & Fraud Analysis Platform.png`]
      },
      {
        slug: 'multi-page-document-extraction',
        title: 'Multi-Page Document Data Extraction Portal',
        description: 'This interface handles data extraction from unstructured multi-page documents, utilizing a split-screen layout that allows users to review categorized data fields directly alongside the original file while displaying confidence scores for each extracted item.',
        images: [`${ASSET_ROOT}/selected-works-data-extraction/Multi-Page Document Data Extraction Portal.png`]
      }
    ]
  },
  {
    slug: 'form-flows',
    label: 'Form Flows',
    path: '/selected-works/form-flows',
    items: [
      {
        slug: 'insurance-quote-enrollment',
        title: 'Multi-Step Insurance Quote & Enrollment Flow',
        description: 'This dynamic multi-step flow guides users through purchasing insurance policies, featuring interactive fields and calculators.',
        images: [`${ASSET_ROOT}/selected-works-form-flows/Multi-Step Insurance Quote & Enrollment Flow.png`]
      },
      {
        slug: 'omnichannel-campaign-creation',
        title: 'Omnichannel Campaign Creation Flow',
        description: 'This wizard-style interface simplifies complex digital marketing campaign setup by guiding users through parameters, audience targeting, channels, and budget configurations.',
        images: [`${ASSET_ROOT}/selected-works-form-flows/Omnichannel Campaign Creation Flow.png`]
      },
      {
        slug: 'insurance-claim-submission',
        title: 'Insurance Claim Submission Form',
        description: 'Internal and external portal for filing insurance claims, emphasizing clean form layouts, validation states, and document upload functionality.',
        images: [`${ASSET_ROOT}/selected-works-form-flows/Insurance Claim Submission Form.png`]
      }
    ]
  },
  {
    slug: 'mobile-ui',
    label: 'Mobile UI',
    path: '/selected-works/mobile-ui',
    display: 'mobile',
    items: [
      {
        slug: 'restaurant-booking-ordering',
        title: 'Restaurant Booking & Ordering App',
        description: 'A streamlined mobile interface designed to eliminate wait times through virtual queuing, reservations, and pre-ordering. Developed from ideation to high-fidelity design using AI tools like Gemini, Figma AI, and Google Antigravity.',
        caseStudyPath: '/ramen-nagi',
        images: [
          `${ASSET_ROOT}/selected-works-mobile-ui/Ramen Nagi images/landing page.png?v=2`,
          `${ASSET_ROOT}/selected-works-mobile-ui/Ramen Nagi images/menu.png?v=2`,
          `${ASSET_ROOT}/selected-works-mobile-ui/Ramen Nagi images/QR code.png?v=2`
        ]
      },
      {
        slug: 'sports-arena-companion',
        title: 'Sports Event & Arena Companion App',
        description: 'A conversational mobile interface designed to elevate the live game day experience. It allows fans to instantly discover upcoming events, seamlessly book tickets, and navigate arena concessions to order food directly to their section.',
        imageStyle: 'pbr',
        images: [
          `${ASSET_ROOT}/selected-works-mobile-ui/PBR images/events-transparent.png`,
          `${ASSET_ROOT}/selected-works-mobile-ui/PBR images/food-transparent.png`,
          `${ASSET_ROOT}/selected-works-mobile-ui/PBR images/ticket-transparent.png`
        ]
      },
      {
        slug: 'credit-card-application',
        title: 'Credit Card Application Flow',
        description: 'A streamlined digital application designed to help users navigate personal and financial disclosures with clarity. It uses a structured progress indicator and clean input layouts to guide applicants smoothly toward final approval and card acceptance.',
        images: [
          `${ASSET_ROOT}/selected-works-mobile-ui/TD bank images/security.png?v=2`,
          `${ASSET_ROOT}/selected-works-mobile-ui/TD bank images/financial.png?v=2`,
          `${ASSET_ROOT}/selected-works-mobile-ui/TD bank images/approved.png?v=2`
        ]
      },
      {
        slug: 'mobile-lending-verification',
        title: 'Mobile Lending & Verification Flow',
        description: 'An optimized mobile banking experience designed to streamline complex loan selection. The flow reduces operational drop-offs by simplifying term selection with interactive sliders and offering step-wise progress towards final approval.',
        caseStudyPath: '/loan-app-experience-optimization',
        images: [
          `${ASSET_ROOT}/selected-works-mobile-ui/Loan app images/loan details.png?v=2`,
          `${ASSET_ROOT}/selected-works-mobile-ui/Loan app images/bank account details.png?v=2`,
          `${ASSET_ROOT}/selected-works-mobile-ui/Loan app images/approval.png?v=2`
        ]
      }
    ]
  },
  {
    slug: 'chat-messaging',
    label: 'Chat & Messaging',
    path: '/selected-works/chat-messaging',
    items: [
      {
        slug: 'ai-document-synthesis',
        title: 'AI-Assisted Document Synthesis',
        description: 'A split-screen workspace featuring a contextual AI chat interface positioned alongside generated outputs. Users can seamlessly query, refine, and extract deep insights from their uploaded documents in real-time.',
        images: [`${ASSET_ROOT}/selected works-chat-and-messaging/BA copilot.png`]
      },
      {
        slug: 'rental-messaging-hub',
        title: 'Multi-Party Rental Messaging Hub',
        description: 'A unified dashboard pairing a proximity-based vendor directory with an active communication thread. Operational agents can instantly coordinate vehicle availability, request logs, and trigger status approvals directly within the chat view.',
        images: [`${ASSET_ROOT}/selected works-chat-and-messaging/Vehicle.png`]
      },
      {
        slug: 'conversational-event-assistant',
        title: 'Multimodal Conversational Event Assistant',
        description: 'A sequential, multi-step chat flow guiding users through rich, media-driven interactions. Users can seamlessly access embedded ticketing, localized food options, and contextual event details, with feedback loops to continuously refine the conversational logic.',
        display: 'mobile',
        imageStyle: 'pbr',
        images: [
          `${ASSET_ROOT}/selected works-chat-and-messaging/PBR images - chat & messaging/apps-transparent.png`,
          `${ASSET_ROOT}/selected works-chat-and-messaging/PBR images - chat & messaging/food-transparent.png`,
          `${ASSET_ROOT}/selected works-chat-and-messaging/PBR images - chat & messaging/rating-transparent.png`
        ]
      }
    ]
  },
  {
    slug: 'auth-flows',
    label: 'Auth Flows',
    path: '/selected-works/auth-flows',
    hideOnLanding: true,
    items: [
      {
        slug: 'enterprise-access-verification',
        title: 'Enterprise Access & Verification',
        description: 'Design of a login and welcome portal. The layout balances a clean input form with an engaging brand section. The welcome section highlights product features and security guidelines.',
        images: [`${ASSET_ROOT}/selected-works-auth-flows/NBS login.png`]
      },
      {
        slug: 'platform-gateway-experience',
        title: 'Platform Gateway Experience',
        description: 'This sequence illustrates a complete authentication flow. It includes screens for initial login, one-time passcode confirmation, password recovery, verification success state, user registration, and account creation confirmation.',
        images: [
          `${ASSET_ROOT}/selected-works-auth-flows/Henry - images/Sign in - code sent.png`,
          `${ASSET_ROOT}/selected-works-auth-flows/Henry - images/Sign in - code typed in.png`,
          `${ASSET_ROOT}/selected-works-auth-flows/Henry - images/Sign in - forgot password.png`,
          `${ASSET_ROOT}/selected-works-auth-flows/Henry - images/Sign in - password reset.png`,
          `${ASSET_ROOT}/selected-works-auth-flows/Henry - images/Sign up - filled.png`,
          `${ASSET_ROOT}/selected-works-auth-flows/Henry - images/Sign up - password created.png`
        ]
      }
    ]
  },
  {
    slug: 'marketing-design',
    label: 'Marketing Design',
    path: '/selected-works/marketing-design',
    hideOnLanding: true,
    items: [
      {
        slug: 'conversion-driven-web-design',
        title: 'Conversion-Driven Web Design',
        description: 'Design of a clean and conversion-driven marketing page that features clear value propositions, interactive UI showcases, and direct calls to action to drive user registration.',
        images: [`${ASSET_ROOT}/selected-works-marketing-design/orion.png`]
      },
      {
        slug: 'interactive-ui-challenge',
        title: 'Interactive UI Challenge',
        description: 'A marketing page for a design challenge. It features a clean hero layout with a high-fidelity lightbulb mockup, followed by interactive feature cards and structured design challenges.',
        images: [`${ASSET_ROOT}/selected-works-marketing-design/drippy.png`]
      },
      {
        slug: 'design-system-component-lab',
        title: 'Design System & Component Lab',
        description: 'A dark mode developer portal showcasing design system components, interactive color palettes, code snippets, and responsive layout templates to accelerate web application building.',
        images: [`${ASSET_ROOT}/selected-works-marketing-design/ds.png`]
      }
    ]
  }
];

export const getSelectedWorkCategory = (slug) => (
  selectedWorksCatalog.find((category) => category.slug === slug)
);

export const getSelectedWorkImageId = (categorySlug, itemSlug, imageIndex) => (
  `selected-work-${categorySlug}-${itemSlug}-${imageIndex + 1}`
);

const galleryPicks = [
  ['dashboards', 'campaign-audience-segmentation', 0],
  ['dashboards', 'new-business-submission', 1],
  ['data-tables', 'omnichannel-campaign-analytics', 0],
  ['mobile-ui', 'restaurant-booking-ordering', 0],
  ['form-flows', 'insurance-quote-enrollment', 0],
  ['data-extraction', 'intelligent-document-extraction', 1],
  ['auth-flows', 'enterprise-access-verification', 0],
  ['mobile-ui', 'sports-arena-companion', 1],
  ['data-tables', 'job-queue-monitoring', 0]
];

export const selectedWorkGalleryItems = galleryPicks.map(([categorySlug, itemSlug, imageIndex]) => {
  const category = getSelectedWorkCategory(categorySlug);
  const item = category.items.find((candidate) => candidate.slug === itemSlug);

  return {
    id: getSelectedWorkImageId(categorySlug, itemSlug, imageIndex),
    src: item.images[imageIndex],
    alt: `${item.title} interface`,
    title: item.title,
    categoryLabel: category.label,
    path: category.path,
    isMobile: (item.display || category.display) === 'mobile',
    imageStyle: item.imageStyle
  };
});
