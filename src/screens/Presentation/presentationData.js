import femhealthImg from '../../assets/images/femhealth.png';
import femhealthLofiMobile from '../../assets/images/femhealthLofiWireframesMobile.png';
import femhealthLofiDesktop from '../../assets/images/femhealthLofiWireframesDesktop.png';
import femhealthHifiDesktop1 from '../../assets/images/femhealthHifiWireframesDesktop1.png';
import femhealthHifiMobile from '../../assets/images/femhealthHifiWireframesMobile.png';
import femhealthPersona1 from '../../assets/images/femhealthPersona1Julia.png';

import svaasthyaImg from '../../assets/images/svaasthya.png';
import svaasthyaWireframes from '../../assets/images/svaasthyaHifiWireframesMobile.png';
import svaasthyaPersona from '../../assets/images/svaasthyaPersona1Priya.png';
import svaasthyaStyleGuide from '../../assets/images/svaasthyaStyleGuide.png';

import swiftbikesImg from '../../assets/images/swiftbikes.png';
import swiftbikesWireframes from '../../assets/images/swiftbikesHifiWireframesDesktop.png';
import swiftbikesLofi from '../../assets/images/swiftbikesLofiWireframesDesktop.png';
import swiftbikesPersona from '../../assets/images/swiftbikesPersona1Matthew.png';

import ramenNagiImg from '../../assets/RamenNagiCaseStudy/Ramen nagi app in hand.png';

export const professionalProjectsData = [
  {
    id: 'ramen-nagi',
    title: 'Ramen Nagi: Eliminating the 2-Hour Wait',
    color: 'DC0411',
    sections: [
      {
        id: 'ramen-nagi-context',
        sectionTitle: 'Context & Impact',
        contentParagraphs: [
          'A hybrid queuing system that eliminates wait times, preserving operational speed while giving customers their time back.',
        ],
        image: ramenNagiImg,
        bullets: [
          'Identified massive drop-offs in the 2-hour queue.',
          'Digitized the walk-in experience.',
          'Seamless operational integration.'
        ]
      },
      {
        id: 'ramen-nagi-problem',
        sectionTitle: 'Problem Space',
        contentParagraphs: [
          'Customers were abandoning the physical queue leading to significant revenue loss and poor brand experience.',
        ],
        bullets: [
          'No visibility into current wait times.',
          'Physical confinement to the restaurant front.',
          'Inefficient staff management during rushes.'
        ]
      },
      {
        id: 'ramen-nagi-solution',
        sectionTitle: 'The Solution',
        contentParagraphs: [
          'A hybrid digital-physical model that notifies users dynamically as their table becomes ready.',
        ],
        image: ramenNagiImg,
        bullets: [
          'SMS and App-based push notifications.',
          'Dynamic wait-time algorithm.',
          'Increased retention by 45%.'
        ]
      }
    ]
  },
  {
    id: 'admissions-process-acceleration',
    title: 'Admissions Process Acceleration',
    color: '522398',
    sections: [
      {
        id: 'admissions-context',
        sectionTitle: 'Context & Challenge',
        contentParagraphs: [
          "University admissions counselors were burdened by a manual, error-prone process for evaluating student transfer credits, leading to significant delays and risking the loss of top applicants to competing institutions.",
          "I led the user experience design for a new internal tool that automated this workflow. The solution resulted in a 60% increase in counselor productivity and significantly reduced user frustration, securing a key strategic advantage for the university.",
          "The university's admissions process was facing a critical bottleneck. Counselors were manually evaluating every student's transfer credits against a complex set of institutional rules."
        ],
        image: '/Frame167.png'
      },
      {
        id: 'admissions-core-problems',
        sectionTitle: 'Core Problems',
        contentParagraphs: [
          "We identified three core problems impacting the admissions timeline and business disadvantage."
        ],
        keyMetrics: [
          { title: 'High Inefficiency', text: 'The manual process was incredibly time-consuming, creating a backlog that delayed offers.' },
          { title: 'Risk of Human Error', text: 'Repetitive data entry and manual cross-referencing frequently led to mistakes.' },
          { title: 'Competitive Disadvantage', text: 'Slow processing speed meant losing promising applicants to universities.'}
        ]
      },
      {
        id: 'admissions-path-forward',
        sectionTitle: 'Defining the Path Forward',
        contentParagraphs: [
          "We fostered a close partnership with university stakeholders who acted as a proxy for the end-users. By synthesizing their deep institutional knowledge and the extensive feedback they had collected from counselors, we were able to map the core challenges.",
          "Collaborating closely with the product owner, my primary role was to champion the user's voice, ensuring our collective decisions were always weighed against the real-world challenges of the counselors."
        ]
      },
      {
        id: 'admissions-solution',
        sectionTitle: 'The Solution',
        contentParagraphs: [
          "The final product was a clean, powerful application designed to reduce complexity and provide clarity. The core feature was a rules engine that intelligently automated the credit evaluation.",
          "This sophisticated back-end rules engine performed the initial, heavy-lifting analysis of a student's transcript. The results were then auto-populated in the appropriate fields and mapped against the appropriate courses."
        ]
      },
      {
        id: 'admissions-step1',
        sectionTitle: 'Step 1 & 2: Information Entry',
        contentParagraphs: [
          "Step 1: The counselor enters course information from the transcripts.",
          "Step 2: Once entered, they mark this step as complete."
        ],
        image: '/admissions-process-acceleration/image 25.png'
      },
      {
        id: 'admissions-step3',
        sectionTitle: 'Step 3 & 4: Evaluation Start',
        contentParagraphs: [
          "Step 3: They add programs against which they want to calculate the transfer credits.",
          "Step 4: They start the process of evaluating against selected programs."
        ],
        image: '/admissions-process-acceleration/image 28.png'
      },
      {
        id: 'admissions-step5',
        sectionTitle: 'Step 5 & 6: Review & Request',
        contentParagraphs: [
          "Step 5: The rules engine maps the transfer credits of the student to the respective courses which reduces a large chunk of the counselor's workload.",
          "Step 6: The counselor reviews the mapped courses to ensure its correctness, and as a final step sends it to the requestor."
        ],
        image: '/admissions-process-acceleration/image 26.png'
      },
      {
        id: 'admissions-impact',
        sectionTitle: 'Measurable Results',
        contentParagraphs: [
          "The new tool was transformative for the admissions department. The impact was felt immediately in both quantitative and qualitative terms."
        ],
        keyMetrics: [
          { title: '60% Increase in Productivity', text: 'Counselors could evaluate 25 transcripts per day, up from 16.' },
          { title: 'Reduced Cognitive Load', text: 'Automated tedious parts reduced burnout.' },
          { title: 'Strategic Business Advantage', text: 'Accelerated timeline allowed for faster offers.'}
        ]
      }
    ]
  },
  {
    id: 'insurance-redesign',
    title: 'Building Trust in Fintech: A 0→1 Redesign',
    color: 'A10026',
    sections: [
      {
        id: 'insurance-context',
        sectionTitle: 'Context',
        contentParagraphs: [
          "A mid-sized, third-fastest-growing U.S. home insurance provider, on a trajectory to reach $1 billion in revenue, sought to overhaul its public-facing website.",
          "The existing site suffered from an outdated design, poor usability, and low conversion rates, failing to reflect the company's market position as a tech-forward industry leader.",
          "I joined the project as one of two product designers tasked with redesigning the user experience from the ground up."
        ],
        image: '/insurance-company-website-design/hero.png'
      },
      {
        id: 'insurance-legacy',
        sectionTitle: 'Lagging Digital Experience',
        contentParagraphs: [
          "Their core problems were clear:",
          "1. Outdated & Inconsistent design creating a disjointed experience.",
          "2. Poor Usability resulting in a text-heavy, non-scannable site.",
          "3. Low Performance failing to convert visitors and lagging in SEO.",
          "4. Technical Debt with an unscalable WordPress CMS."
        ]
      },
      {
        id: 'insurance-discovery',
        sectionTitle: 'Diagnosis & Auditing',
        contentParagraphs: [
          "Heuristic Evaluation: We systematically analyzed every page of the existing site against Nielsen's 10 Usability Heuristics. The 27-page report identified 56 distinct issues.",
          "Accessibility Assessment: We found the site lacked alt-texts, broken keyboard navigation, and improper heading structures, excluding users with disabilities."
        ]
      },
      {
        id: 'insurance-audience',
        sectionTitle: 'Audience Understanding',
        contentParagraphs: [
          "The client serves two distinct primary audiences: Customers (homeowners) and Agents (B2B partners). We created personas to map out the journey effectively."
        ],
        image: '/insurance-company-website-design/persona1.png'
      },
      {
        id: 'insurance-foundation',
        sectionTitle: 'Information Architecture',
        contentParagraphs: [
          "We rebuilt the foundation by performing a deep Information Architecture audit to map redundant pages.",
          "Competitive analysis uncovered opportunities for Spanish localization and 'Find an Agent' integrations.",
          "We strategically aligned on a unified view for both agents and customers to ensure a streamlined structural flow."
        ],
        image: '/insurance-company-website-design/foundation.png'
      },
      {
        id: 'insurance-scalability',
        sectionTitle: 'Scalability & Systems',
        contentParagraphs: [
          "We wireframed layouts for the home page, exploring multiple versions for each section. This library of layout components was vital for scale.",
          "We created 30+ reusable components and section templates which allowed us to design over 40+ unique screens collaboratively without breaking consistency."
        ],
        image: '/insurance-company-website-design/impact.png'
      },
      {
        id: 'insurance-performance',
        sectionTitle: 'Impact: Transformation in Performance',
        contentParagraphs: [
          "By combining a rigorous UX process with the flexibility to adapt to senior stakeholder feedback, we transformed an underperforming website into a visually striking, highly functional, and scalable platform."
        ],
        keyMetrics: [
          { title: '+37.5% Performance', text: 'Desktop Performance rose from 64 to 88.' },
          { title: '+28% Best Practices', text: 'System-wide best practices rose from 76 to 96.' },
          { title: '+43.7% SEO Score', text: 'Search Optimization jumped from 64 to 92.'}
        ]
      }
    ]
  },
  {
    id: 'loan-app',
    title: 'Loan App Experience Optimization',
    color: '1E3A8A',
    sections: [
      {
        id: 'loan-context',
        sectionTitle: 'Context',
        contentParagraphs: [
          "A top-tier global bank's digital loan application was underperforming. Despite having a pool of pre-qualified candidates, the platform was seeing significant user drop-off.",
          "I joined the project to lead the UX/UI design effort, tasked with overhauling this critical experience on an accelerated 2-month timeline."
        ],
        image: '/loan-app-experience-optimization/hero.png'
      },
      {
        id: 'loan-problem',
        sectionTitle: 'Problem in a Nutshell',
        contentParagraphs: [
          "Business Issue: High user drop-off rate and low number of submitted applications.",
          "Customer Issue: Forced through an 11-page long form that asked for excessive information, leading to fatigue and abandonment."
        ]
      },
      {
        id: 'loan-discovery',
        sectionTitle: 'Discovery Under Pressure',
        contentParagraphs: [
          "With a tight deadline preventing a formal research phase, I audited the existing flow by mapping every screen, field, and click to establish a quantitative friction baseline.",
          "Key Insight 1: Asking pre-qualified users for information the bank already possessed.",
          "Key Insight 2: The overwhelming nature of the single long application created severe cognitive load."
        ],
        image: '/loan-app-experience-optimization/discovery_under_pressure.png'
      },
      {
        id: 'loan-workflow-1',
        sectionTitle: 'Reorganizing the Flow',
        contentParagraphs: [
          "I reorganized the form sections into logical chunks (e.g., Personal Information, Financials, Review). A prominent progress bar was introduced to manage user expectations and clearly show them how close they were to the end."
        ],
        image: '/loan-app-experience-optimization/workflow1.png'
      },
      {
        id: 'loan-workflow-2',
        sectionTitle: 'Rethinking Inputs',
        contentParagraphs: [
          "Leveraging the bank's existing design system, I scrutinized every form field. Inefficient components were replaced with more effective alternatives.",
          "For example, I introduced an interactive slider for the loan amount so that estimated monthly payments updated in real-time."
        ],
        image: '/loan-app-experience-optimization/workflow2.png'
      },
      {
        id: 'loan-workflow-3',
        sectionTitle: 'Motivational Design',
        contentParagraphs: [
          "To reduce application anxiety and frustration, I introduced subtle, encouraging illustrations at key milestones to reinforce their progress and motivate them to continue."
        ],
        image: '/loan-app-experience-optimization/workflow3.png'
      },
      {
        id: 'loan-impact',
        sectionTitle: 'Measurable Impact',
        contentParagraphs: [
          "The redesigned flow was projected to deliver significant improvements based on streamlined logic and reduced fields."
        ],
        keyMetrics: [
          { title: 'Projected 40% Reduction in Time', text: 'Eliminated redundant fields for massive efficiency gains.' },
          { title: 'Improved User Confidence', text: 'Simplified UI and progress tracking built trust.' }
        ]
      }
    ]
  },
  {
    id: 'campaign-builder',
    title: 'Intelligent Campaign Builder Overhaul',
    color: 'FB4E0B',
    sections: [
      {
        id: 'campaign-builder-context',
        sectionTitle: 'Context',
        contentParagraphs: [
          "For marketers, speed and precision are everything. EXL's platform offered the data for precision, but its complex interface was a significant barrier to speed.",
          "Through a comprehensive UX strategy, we simplified core workflows and established a scalable design system, enabling marketers to build targeted campaigns with confidence."
        ],
        image: '/intelligent-campaign-builder-overhaul/hero.png'
      },
      {
        id: 'campaign-builder-problem',
        sectionTitle: 'Bottlenecks in Usability',
        contentParagraphs: [
          "Cognitive Overload: The interface presented too many options simultaneously, making it difficult for users to focus.",
          "Unclear Workflows: The crucial process of segmenting an audience lacked a clear, guided path.",
          "Inconsistent Identity: The lack of a cohesive design language diluted brand presence."
        ]
      },
      {
        id: 'campaign-builder-clarity1',
        sectionTitle: 'Clarity & Consistency',
        contentParagraphs: [
          "We streamlined the primary interface, moving from a cluttered dashboard to a guided, step-by-step process. The segmentation workflow was completely reimagined with visual cues."
        ],
        image: '/intelligent-campaign-builder-overhaul/clarity1.png'
      },
      {
        id: 'campaign-builder-clarity2',
        sectionTitle: 'Real-time Feeback Engine',
        contentParagraphs: [
          "Previously, marketers applied filters without seeing the immediate impact. Now, as they fine-tune attributes like 'Income', they can see how the target population changes instantly."
        ],
        image: '/intelligent-campaign-builder-overhaul/clarity2.png'
      },
      {
        id: 'campaign-builder-outcomes',
        sectionTitle: 'Outcomes & Impact',
        contentParagraphs: [
          "The redesign had a significant and positive impact on both the user experience and the product's development lifecycle."
        ],
        keyMetrics: [
          { title: 'Enhanced Usability', text: 'Significantly reduced user friction in workflows.' },
          { title: 'Accelerated Dev Cycles', text: 'Reusable components enabled faster iteration and handoff.' },
          { title: 'Strengthened Brand', text: 'Unified visual components raised trust.' }
        ]
      }
    ]
  }
];

export const personalProjectsData = [
  {
    id: 'femhealth',
    title: 'FemHealth',
    color: '3E122D',
    sections: [
      {
        id: 'femhealth-context',
        sectionTitle: 'Context',
        contentParagraphs: [
          "It can often be awkward for women to talk about their health problems. Health consultations can be expensive and sometimes it is difficult to find clinics that accept certain insurances.",
          "FemHealth is a platform for women of all ages which provides them with access to information related to their health and answers to health-related questions from verified sources."
        ],
        image: femhealthImg
      },
      {
        id: 'femhealth-problem',
        sectionTitle: 'Pain Points',
        contentParagraphs: [
          "1. Consultations are expensive.",
          "2. Many clinics do not accept specific insurance and it's not clear how to verify this.",
          "3. Awkwardness surrounding specific health topics.",
          "4. Online answers are generally unreliable."
        ]
      },
      {
        id: 'femhealth-research',
        sectionTitle: 'User Research & Personas',
        contentParagraphs: [
          "User research was conducted through surveys sent to women aged 20-60, uncovering deep insights into their experiences finding anonymous help.",
          "Target Audience: Women of all ages who have health questions they want answered anonymously."
        ],
        image: femhealthPersona1
      },
      {
        id: 'femhealth-wireframes',
        sectionTitle: 'Wireframing',
        contentParagraphs: [
          "Digital wireframes translated our initial paper layouts into robust functional architecture focusing on clarity and straightforward navigation."
        ],
        image: femhealthLofiDesktop
      },
      {
        id: 'femhealth-hifi',
        sectionTitle: 'Hi-Fi Design Execution',
        contentParagraphs: [
          "Using a combination of dark purple and orange would bring out feelings of sophistication, boldness, and strength. The color choices emphasize a positive boost for users."
        ],
        image: femhealthHifiDesktop1
      }
    ]
  },
  {
    id: 'swiftbikes',
    title: 'Swift Bikes',
    color: 'FF980A',
    sections: [
      {
        id: 'swiftbikes-context',
        sectionTitle: 'Context',
        contentParagraphs: [
          "Swift is an online platform where people who need or want a bike for work, athletic or leisure purposes can buy pre-made ones or customize their own.",
          "Often times after using their bikes, people find certain parts of it uncomfortable. This platform offers them a solution to select parts of a bike to build it to their exact liking."
        ],
        image: swiftbikesImg
      },
      {
        id: 'swiftbikes-problem',
        sectionTitle: 'Pain Points',
        contentParagraphs: [
          "1. Pre-made bikes often don't meet needs.",
          "2. It is difficult to find a specific combination of specifications without modifying post-purchase.",
          "3. Stores lack wide variety in individual parts.",
          "4. General lack of knowledge prevents people from buying optimal parts."
        ]
      },
      {
        id: 'swiftbikes-research',
        sectionTitle: 'User Research',
        contentParagraphs: [
          "The users wanted a bike that looked and felt as if it was made just for them.",
          "While some wanted to use it just as a means for a short commute, others who spent more time riding needed fine-tuned specifications."
        ],
        image: swiftbikesPersona
      },
      {
        id: 'swiftbikes-lofi',
        sectionTitle: 'Layout Explorations',
        contentParagraphs: [
          "Starting with paper wireframes allowed for rapid exploration of different layout ideas and user flow concepts."
        ],
        image: swiftbikesLofi
      },
      {
        id: 'swiftbikes-hifi',
        sectionTitle: 'Hi-Fi Design Execution',
        contentParagraphs: [
          "The comprehensive desktop UI presents the customization configurator cleanly with progressive updates and a vibrant orange aesthetic."
        ],
        image: swiftbikesWireframes
      }
    ]
  },
  {
    id: 'svaasthya',
    title: 'Svaasthya',
    color: '1D5D82',
    sections: [
      {
        id: 'svaasthya-context',
        sectionTitle: 'Context',
        contentParagraphs: [
          "Svaasthya is a support chatbot application for a hospital in India. Hospitals in India often have long wait times on the phones or even long lines at the hospital itself.",
          "The goal of this product is to design an application that will help individuals in India carry out tasks such as booking appointments or getting hospital related information quickly and conveniently."
        ],
        image: svaasthyaImg
      },
      {
        id: 'svaasthya-problems',
        sectionTitle: 'Pain Points',
        contentParagraphs: [
          "1. Getting hospital admin information or cost estimations is tedious.",
          "2. Payments cannot be done online in traditional settings.",
          "3. Long waits on phones and physical lines.",
          "4. Unnecessary formalities at hospitals."
        ]
      },
      {
        id: 'svaasthya-research',
        sectionTitle: 'User Research & Identity',
        contentParagraphs: [
          "Our target audience covers a diverse demographic of tech proficiency. Constructing these personas revealed friction points around traditional navigation."
        ],
        image: svaasthyaPersona
      },
      {
        id: 'svaasthya-style',
        sectionTitle: 'Design System',
        contentParagraphs: [
          "A comprehensive style guide was created to ensure consistency across all screens and interactions, establishing a trustworthy and professional healthcare brand identity."
        ],
        image: svaasthyaStyleGuide
      },
      {
        id: 'svaasthya-hifi',
        sectionTitle: 'Chatbot Implementation',
        contentParagraphs: [
          "The high-fidelity wireframes bring the chatbot to life with a clean, medical-appropriate color scheme and intuitive conversation interface."
        ],
        image: svaasthyaWireframes
      }
    ]
  }
];

export const allProjects = [...professionalProjectsData, ...personalProjectsData];
