/* eslint-disable max-len */
import React from 'react';
// FemHealth
import femhealthPersona1Julia from '../../assets/images/femhealthPersona1Julia.png';
import femhealthPersona2Eve from '../../assets/images/femhealthPersona2Eve.png';
import femhealthUserflow from '../../assets/images/femhealthUserflow.png';
import femhealthPaperWireframes from '../../assets/images/femhealthPaperWireframes.png';
import femhealthLofiWireframesMobile from '../../assets/images/femhealthLofiWireframesMobile.png';
import femhealthLofiWireframesDesktop from '../../assets/images/femhealthLofiWireframesDesktop.png';
import femhealthHifiWireframesDesktop1 from '../../assets/images/femhealthHifiWireframesDesktop1.png';
import femhealthHifiWireframesDesktop2 from '../../assets/images/femhealthHifiWireframesDesktop2.png';
import femhealthHifiWireframesDesktop3 from '../../assets/images/femhealthHifiWireframesDesktop3.png';
import femhealthHifiWireframesDesktop4 from '../../assets/images/femhealthHifiWireframesDesktop4.png';
import femhealthHifiWireframesMobile from '../../assets/images/femhealthHifiWireframesMobile.png';
import femhealthHifiWireframesTablet from '../../assets/images/femhealthHifiWireframesTablet.png';
// Swift Bikes
import swiftbikesPersona1Matthew from '../../assets/images/swiftbikesPersona1Matthew.png';
import swiftbikesPersona2Kate from '../../assets/images/swiftbikesPersona2Kate.png';
import swiftbikesPaperWireframes from '../../assets/images/swiftbikesPaperWireframes.png';
import swiftbikesLofiWireframesMobile from '../../assets/images/swiftbikesLofiWireframesMobile.png';
import swiftbikesLofiWireframesDesktop from '../../assets/images/swiftbikesLofiWireframesDesktop.png';
import swiftbikesHifiWireframesMobile from '../../assets/images/swiftbikesHifiWireframesMobile.png';
import swiftbikesHifiWireframesDesktop from '../../assets/images/swiftbikesHifiWireframesDesktop.png';
// Svaasthya
import svaasthyaPersona1Priya from '../../assets/images/svaasthyaPersona1Priya.png';
import svaasthyaPersona2Rakesh from '../../assets/images/svaasthyaPersona2Rakesh.png';
import svaasthyaPaperWireframes from '../../assets/images/svaasthyaPaperWireframes.png';
import svaasthyaLofiWireframesMobile from '../../assets/images/svaasthyaLofiWireframesMobile.png';
import svaasthyaHifiWireframesMobile from '../../assets/images/svaasthyaHifiWireframesMobile.png';
import svaasthyaStyleGuide from '../../assets/images/svaasthyaStyleGuide.png';

const caseStudyData = {
  femhealth: {
    title: 'FemHealth',
    subtitle: 'A platform for Women to get access to Health Resources',
    description: 'It can often be awkward for women to talk about their health problems. Health consultations can be expensive and sometimes it is difficult to find clinics that accept certain insurances. And while looking for answers online can help, it is not always reliable. FemHealth is a platform for women of all ages which provides them with access to information related to their health and answers to health related questions from verified sources.',
    color: '#3E122D',
    caseStudyInfo: [
      {
        title: 'GOALS',
        description: 'The goal of this product is to help women feel comfortable when asking health related questions, provide resources to help them maintain a healthy lifestyle, and locate clinics near their area that accept the medical insurance they have.',
      },
      {
        title: 'PAIN POINTS',
        list: [
          'Consultations are expensive',
          'Many clinics do not accept specific insurance and not sure how to find those clinics which do',
          'It is awkward to talk about female health problems',
          'Looking for answers to health related questions online is not reliable',
        ],
      },
      {
        title: 'TARGET AUDIENCE',
        description: 'Women of all ages who have health questions they want answered anonymously or get access to information to lead a healthy lifestyle.',
      },

      {
        title: 'ROLES',
        list: [
          'UX researcher',
          'UX designer',
          'Interaction designer',
          'Visual designer',
          'Usability Tester',
        ],
      },
      {
        title: 'TOOLS',
        list: [
          'Figma',
          'Paper (wireframing)',
          'Google Jamboard',
        ],
      },
    ],
    designInfo: [
      {
        title: 'USER RESEARCH',
        description: 'The user research for this project was done by sending out surveys to women between the ages of 20 and 60. The questions in the survey were based around how how their experience (if any) had been getting help regarding women\'s health problems.',
        personas: [
          {
            img: femhealthPersona1Julia,
            description: 'Julia is a working woman who needs to find affordable health clinics near her area that accept her medical insurance because many other clinics do not and the services there are expensive.',
          },
          {
            img: femhealthPersona2Eve,
            description: 'Eve is a middle-aged woman who needs to find answers to questions related to women\'s health anonymously because she feels hesitant to talk about the topic openly.',
          },
        ],
      },
      {
        title: 'USER FLOW',
        description: 'Designing the user flow helped organize the features and their heirarchy in the app. The high-level details of each screen made it easier to draw a mental picture of the components.',
        img: femhealthUserflow,
      },
      {
        title: 'LO-FI WIREFRAMES',
        description: 'Started off with some paper wireframes to create quick drafts of what some of the screens might look like; including different ideas for layouts of elements on the screens.',
        img: femhealthPaperWireframes,
      },
      {
        title: '',
        description: 'The next step was to create digital wireframes for all screens. A combination of layouts from the paper wireframes helped with deciding the design for the digital wireframes.',
        img: femhealthLofiWireframesMobile,
      },
      {
        title: '',
        description: '',
        img: femhealthLofiWireframesDesktop,
      },
      {
        title: 'HI-FI WIREFRAMES',
        description: 'Once the wireframes were ready, adding some color and functionality to them was the next step. As an app being designed to make lives of women easier, I also thought that it needed to make women feel strong and provide a positive boost. Using a combination of dark purple and orange would bring out feelings of sophistication and boldness. Let us walk through the features of the app with the help of Quincy!',
        img: femhealthHifiWireframesDesktop1,
      },
      {
        title: '',
        description: '',
        img: femhealthHifiWireframesDesktop2,
      },
      {
        title: '',
        description: '',
        img: femhealthHifiWireframesDesktop3,
      },
      {
        title: '',
        description: '',
        img: femhealthHifiWireframesDesktop4,
      },
      {
        title: '',
        description: 'The mobile and tablet screens',
        img: femhealthHifiWireframesMobile,
      },
      {
        title: '',
        description: '',
        img: femhealthHifiWireframesTablet,
      },
      {
        title: 'PROTOTYPE',
        element: (
          <iframe
            title="FemHealth prototype"
            width="100%"
            height="1080"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FdJpKC8pF1EXYbl0OpCtgU7%2FFemhealth%3Fnode-id%3D116%253A77%26scaling%3Dmin-zoom%26page-id%3D57%253A12%26starting-point-node-id%3D116%253A77%26show-proto-sidebar%3D1"
            allowFullScreen
          />
        ),
      },
      {
        title: 'TAKEAWAY',
        description: 'My most significant takeaway from this project is to always remember the target audience/users who the app is being designed for and how your designs can best help them achieve what they want to achieve. Really and clearly understanding the users’ problems will help to find the best solution.',
      },
    ],
  },
  swiftbikes: {
    title: 'Swift Bikes',
    subtitle: 'An online solution to buying custom bikes',
    description: 'Swift is an online platform where people who need or want a bike for work, athletic or leisure purposes can buy pre-made ones or customize their own. Often times after using their bikes, people find certain parts of it uncomfortable or not necessarily useful. This platform offers them a solution to select parts of a bike to build it to their liking.',
    color: '#FF980A',
    caseStudyInfo: [
      {
        title: 'GOAL',
        description: 'The goal of this product is to design a responsive application that will let users customize their bikes as per their own needs on both the desktop and mobile devices.',
      },
      {
        title: 'PAIN POINTS',
        list: [
          'Pre-made bikes often don\'t meet the needs',
          'Difficult to find bikes which are have a combination of the specifications one would like to have. Sometimes, specific bike parts need to be changed after buying the bike',
          'Stores do not always have a wide variety and range of bikes to select from',
          'Not enough knowledge about bikes to really know what would be good for them',
        ],
      },
      {
        title: 'TARGET AUDIENCE',
        description: 'Individuals who need a new bike and would like to explore the different ways to customize it based on their needs.',
      },
      {
        title: 'ROLES',
        list: [
          'UX researcher',
          'UX designer',
          'Interaction designer',
          'Visual designer',
        ],
      },
      {
        title: 'TOOLS',
        list: [
          'Adobe XD',
          'Paper (wireframing)',
        ],
      },
    ],
    designInfo: [
      {
        title: 'USER RESEARCH',
        description: 'People who owned bikes felt that while some parts of the bike seemed comfortable, there were other features that did not necessarily fulfil their’ needs. The users wanted a bike that looked and felt as if it was made just for them. While some wanted to use it just as a means for a short commute and did not focus much on their bike’s features, others who spent more time riding it felt they needed a bike which was more suited to their needs.',
        personas: [
          {
            img: swiftbikesPersona1Matthew,
            description: '',
          },
          {
            img: swiftbikesPersona2Kate,
            description: '',
          },
        ],
      },
      {
        title: 'LO-FI WIREFRAMES',
        description: '',
        img: swiftbikesPaperWireframes,
      },
      {
        title: '',
        description: '',
        img: swiftbikesLofiWireframesMobile,
      },
      {
        title: '',
        description: '',
        img: swiftbikesLofiWireframesDesktop,
      },
      {
        title: 'HI-FI WIREFRAMES',
        description: '',
        img: swiftbikesHifiWireframesMobile,
      },
      {
        title: '',
        description: '',
        img: swiftbikesHifiWireframesDesktop,
      },
      {
        title: 'TAKEAWAY',
        description: 'My primary takeaway from this project was that properly getting to know the target audience and their pain points goes a long way into designing something that will actually help the users - initial interviews to know the correct requirements are a very important part of the UX process.',
      },
    ],
  },
  svaasthya: {
    title: 'Svaasthya',
    subtitle: 'A Support Chatbot for a Hospital in India',
    description: 'Svaasthya is a support chatbot application for a hospital in India. Hospitals in India often have long wait times on the phones or even long lines at the hospital itself which makes it difficult and tedious for individuals to get help with their questions or services they need.',
    color: '#1D5D82',
    caseStudyInfo: [
      {
        title: 'GOAL',
        description: 'The goal of this product is to design an application that will help individuals in India carry out tasks such as booking appointments or getting hospital related information quickly and conveniently.',
      },
      {
        title: 'PAIN POINTS',
        list: [
          'Getting hospital admin information or cost estimations for services is tedious',
          'Payments cannot be done online',
          'Long wait on phones and long lines at the hospital',
          'Unnecessary formalities at hospitals',
        ],
      },
      {
        title: 'TARGET AUDIENCE',
        description: 'People in India who want to get information about the hospital, have queries or questions, or need to book appointments',
      },
      {
        title: 'ROLES',
        list: [
          'UX researcher',
          'UX designer',
          'Interaction designer',
          'Visual designer',
        ],
      },
      {
        title: 'TOOLS',
        list: [
          'Figma',
          'Paper (wireframing)',
        ],
      },
    ],
    designInfo: [
      {
        title: 'PERSONAS',
        description: '',
        personas: [
          {
            img: svaasthyaPersona1Priya,
            description: '',
          },
          {
            img: svaasthyaPersona2Rakesh,
            description: '',
          },
        ],
      },
      {
        title: 'LO-FI WIREFRAMES',
        description: '',
        img: svaasthyaPaperWireframes,
      },
      {
        title: '',
        description: '',
        img: svaasthyaLofiWireframesMobile,
      },
      {
        title: 'HI-FI WIREFRAMES',
        description: '',
        img: svaasthyaHifiWireframesMobile,
      },
      {
        title: 'STYLE GUIDE',
        description: '',
        img: svaasthyaStyleGuide,
      },
      {
        title: 'PROTOTYPE',
        element: (
          <iframe
            title="swasthya prototype"
            width="100%"
            height="1080"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FpP5zBlO0iivjZQnRnpfhXA%2FSvaasthya---Support-Chatbot-for-a-Hospital-in-India---Wireframes%3Fpage-id%3D133%253A593%26node-id%3D223%253A4546%26viewport%3D241%252C48%252C0.13%26scaling%3Dscale-down%26starting-point-node-id%3D161%253A676%26show-proto-sidebar%3D1"
            allowFullScreen
          />
        ),
      },
      {
        title: 'TAKEAWAY',
        description: 'This project helped me understand and explore the entire process of user experience. My most significant takeaway is to always remember who you are building the app for and how can your designs best help them to achieve what they want to achieve.',
      },
    ],
  },
};

export default caseStudyData;
