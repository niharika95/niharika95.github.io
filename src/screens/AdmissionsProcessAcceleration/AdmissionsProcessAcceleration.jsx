import { DecorativeDots, StrokeAnimation } from '../../common';

import { Icon } from '@iconify/react';
import React from 'react';
import { useAnalytics } from '../../hooks/useAnalytics';
import { useScrollTracking } from '../../hooks/useScrollTracking';
import { useTimeTracking } from '../../hooks/useTimeTracking';

// Reusable components, adapted for this case study's theme

const Tag = ({ children }) => (
  <span className='bg-[#E8DEF7] text-[#000000] rounded-full px-4 py-1 text-sm font-medium'>
    {children}
  </span>
);

const Result = ({ icon, title, children }) => (
  <div>
    <div className='mb-4'>
      <Icon icon={icon} width="100px" height="100px" style={{ color: '#E8DEF7', fontWeight: 200 }} />
    </div>
    <h3 className='font-playfair text-xl font-bold mb-2'>{title}</h3>
    <p className='font-mulish opacity-95'>{children}</p>
  </div>
);

const ContentContainer = ({ children, className }) => (
  <div
    className={`max-w-[1440px] mx-auto px-5 lg:px-[100px] ${className || ''}`}
  >
    {children}
  </div>
);

const AdmissionsProcessAcceleration = () => {
  // Track page view, scroll depth, and time on page
  useAnalytics('project_detail', {
    projectName: 'admissions-process-acceleration',
    projectType: 'professional'
  });
  useScrollTracking();
  useTimeTracking();

  const tags = [
    'Figma',
    'UX Design',
    'Visual Design',
    'Prototyping',
    'Design QA',
  ];

  const coreProblems = [
    {
      title: 'High Inefficiency',
      text: 'The manual process was incredibly time-consuming, creating a backlog that delayed offers to qualified students.',
    },
    {
      title: 'Risk of Human Error',
      text: 'Repetitive data entry and manual cross-referencing frequently led to mistakes, requiring lengthy corrections and damaging system trust.',
    },
    {
      title: 'Competitive Disadvantage',
      text: 'In the race for top talent, our slow processing speed meant we were losing promising applicants to universities that could provide credit evaluations and admissions offers faster.',
    },
  ];

  const results = [
    {
      icon: 'material-symbols:trending-up',
      title: '60% Increase in Productivity',
      text: 'Counselors could now evaluate an average of 25 transcripts per day, a significant leap from the previous average of 16.',
    },
    {
      icon: 'material-symbols:mindfulness',
      title: 'Reduced Cognitive Load',
      text: 'By automating the tedious parts of the job, the tool dramatically reduced user frustration and burnout.',
    },
    {
      icon: 'material-symbols:radar',
      title: 'Strategic Business Advantage',
      text: 'The accelerated timeline allowed the university to extend offers to students faster, improving acceptance rates and strengthening its competitive position.',
    },
  ];

  return (
    <div className='relative bg-white text-gray-900 font-sans'>
      {/* Hero: Purple background */}
      <header className='w-full bg-[#522398]'>
        <ContentContainer className='relative flex flex-col md:flex-row'>
          <div className='text-white max-w-2xl py-5 md:py-[50px] lg:py-[100px]'>
            <h1 className='font-playfair text-4xl md:text-5xl font-extrabold leading-tight tracking-tight'>
              Admissions Process Acceleration
            </h1>
            <p className='font-mulish text-lg md:text-xl mt-4 opacity-95'>
              How user-centric design unlocked a <StrokeAnimation strokeColor="FB4E0B">60% productivity gain</StrokeAnimation> and
              empowered counselors to focus on high-value decisions.
            </p>
            <div className='flex flex-wrap gap-2 mt-4 md:mt-6'>
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
          <img
            src='/Frame167.png'
            alt='Frame 167'
            className='w-full max-w[600px] self-end h-auto object-contain max-h-[500px]'
          />
          <DecorativeDots color="522398" position="top-left" />
        </ContentContainer>
      </header>

      <main className='w-full'>
        {/* Meta row */}
        <section className='py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer>
            <div className='grid grid-cols-[auto,1fr] justify-start gap-x-4 gap-y-4 items-start'>
              {/* Role */}
              <div className='col-start-1 flex items-center whitespace-nowrap'>
                <Icon
                  icon='material-symbols:person-outline'
                  className='text-2xl text-black mr-4'
                />
                <h3 className='font-mulish font-bold text-lg'>Role:</h3>
              </div>
              <p className='font-mulish col-start-2 text-gray-600 text-lg'>
                UX/UI Designer
              </p>

              {/* Team */}
              <div className='col-start-1 flex items-center whitespace-nowrap'>
                <Icon
                  icon='material-symbols:groups-outline'
                  className='text-2xl text-black mr-4'
                  style={{ fill: 'none', fontWeight: 100 }}
                />
                <h3 className='font-mulish font-bold text-lg'>Team:</h3>
              </div>
              <p className='font-mulish col-start-2 text-gray-600 text-lg'>
                Product Owner, UX/UI Designer, 2 Front-end Developer, 2 Back-end
                Developers, QA Tester
              </p>

              {/* Duration */}
              <div className='col-start-1 flex items-center whitespace-nowrap'>
                <Icon
                  icon='mdi:clock-outline'
                  className='text-2xl text-black mr-4'
                />
                <h3 className='font-mulish font-bold text-lg'>Duration:</h3>
              </div>
              <p className='font-mulish col-start-2 text-gray-600 text-lg'>4 months</p>
            </div>
          </ContentContainer>
        </section>

        <div>
          <ContentContainer>
            <hr className='border-[#522398] mb-12' />
          </ContentContainer>
        </div>

        {/* Context & Challenge */}
        <section className='py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer className='relative overflow-hidden'>
            <DecorativeDots color="522398" position="top-right" />
            <div className='flex flex-col gap-12'>
              <div>
                <h2 className='font-playfair text-3xl font-bold mb-4'>Context</h2>
                <p className='font-mulish text-lg leading-relaxed bg-[#fff]/90 max-w-[800px]'>
                  University admissions counselors were burdened by a manual,
                  error-prone process for evaluating student transfer credits,
                  leading to significant delays and risking the loss of top
                  applicants to competing institutions. I led the user
                  experience design for a new internal tool that automated this
                  workflow. The solution resulted in a 60% increase in counselor
                  productivity and significantly reduced user frustration,
                  securing a key strategic advantage for the university.
                </p>
              </div>
              <div className='relative'>
                <h2 className='font-playfair text-3xl font-bold mb-4'>
                  The Challenge of a High-Volume Manual Workflow
                </h2>
                <p className='font-mulish text-lg leading-relaxed max-w-[800px]'>
                  The university's admissions process was facing a critical
                  bottleneck. Counselors were manually evaluating every
                  student's transfer credits against a complex set of
                  institutional rules. This workflow was not just inefficient;
                  it was a major source of stress and burnout.
                </p>
                <p className='font-mulish text-lg leading-relaxed mt-4 max-w-[800px]'>
                  During discovery, I identified three core problems. We needed
                  to redesign this process from the ground up to empower
                  counselors, eliminate errors, and accelerate the entire
                  admissions timeline.
                </p>
              </div>
            </div>
          </ContentContainer>
        </section>

        {/* Core Problems: full-width purple band */}
        <section className='w-full bg-[#522398] text-white py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer>
            <div className='grid md:grid-cols-3 gap-8 items-start'>
              <h2 className='font-playfair text-2xl md:text-3xl font-bold self-center'>
                Core problems
              </h2>
              <div className='md:col-span-2 grid gap-8'>
                {coreProblems.map((problem) => (
                  <div key={problem.title}>
                    <h3 className='font-playfair font-bold text-xl mb-2'>{problem.title}</h3>
                    <p className='font-mulish opacity-90'>{problem.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </ContentContainer>
        </section>

        {/* Defining the Path & The Solution */}
        <section className='py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer className='relative overflow-hidden'>
            <DecorativeDots color="522398" position="top-right" />
            <div className='flex flex-col gap-12'>
              <div>
                <h2 className='font-playfair text-3xl font-bold mb-4'>
                  Defining the Path Forward
                </h2>
                <p className='font-mulish relative text-lg leading-relaxed bg-[#fff] max-w-[800px]'>
                  We fostered a close partnership with university stakeholders
                  who acted as a proxy for the end-users. By synthesizing their
                  deep institutional knowledge and the extensive feedback they
                  had collected from counselors, we were able to map the core
                  challenges of the manual workflow and define our user-centered
                  goals.
                </p>
                <p className='font-mulish text-lg leading-relaxed mt-4 max-w-[800px]'>
                  Collaborating closely with the product owner, my primary role
                  during this phase was to champion the user's voice, constantly
                  referencing the counselor feedback we'd received from the
                  client. This approach was crucial for ensuring our collective
                  decisions were always weighed against the real-world
                  challenges of the counselors, keeping the project firmly
                  grounded in their perspective.
                </p>
              </div>
              <div>
                <h2 className='font-playfair text-3xl font-bold mb-4'>
                  The Solution: An Intelligent Evaluation Tool
                </h2>
                <p className='font-mulish text-lg leading-relaxed max-w-[800px]'>
                  The final product was a clean, powerful application designed
                  to reduce complexity and provide clarity. The core feature was
                  a rules engine that intelligently automated the credit
                  evaluation. This sophisticated back-end rules engine performed
                  the initial, heavy-lifting analysis of a student's transcript.
                  The results were then auto-populated in the appropriate fields
                  and mapped against the appropriate courses offered by the
                  university, in a clear, digestible manner.
                </p>
              </div>
            </div>
          </ContentContainer>
        </section>

        {/* New section with images and steps */}
        <section className='w-full bg-[#522398] text-white py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer>
            <div className='flex flex-col gap-12'>
              <div className='flex flex-row items-center gap-8'>
                <img
                  src='/admissions-process-acceleration/image 25.png'
                  alt='Step 1 and 2'
                  className='w-full lg:w-4/5 object-contain'
                />
                <div className='flex-1'>
                  <p className='font-mulish text-lg leading-relaxed mb-4'>
                    <strong>Step 1</strong><br />
                    The counselor enters course information from the transcripts.
                  </p>
                  <p className='font-mulish text-lg leading-relaxed'>
                    <strong>Step 2</strong><br />
                    Once entered, they mark this step as complete.
                  </p>
                </div>
              </div>
              <div className='flex flex-row items-center gap-8'>
                <img
                  src='/admissions-process-acceleration/image 28.png'
                  alt='Step 3 and 4'
                  className='w-full lg:w-4/5 object-contain'
                />
                <div className='flex-1'>
                  <p className='font-mulish text-lg leading-relaxed mb-4'>
                    <strong>Step 3</strong><br />
                    They add programs against which they want to calculate the transfer credits.
                  </p>
                  <p className='font-mulish text-lg leading-relaxed'>
                    <strong>Step 4</strong><br />
                    They start the process of evaluating against selected programs.
                  </p>
                </div>
              </div>
              <div className='flex flex-row items-center gap-8'>
                <img
                  src='/admissions-process-acceleration/image 26.png'
                  alt='Step 5 and 6'
                  className='w-full lg:w-4/5 object-contain'
                />
                <div className='flex-1'>
                  <p className='font-mulish text-lg leading-relaxed mb-4'>
                    <strong>Step 5</strong><br />
                    The rules engine maps the transfer credits of the student to the respective courses which reduces a large chunk of the counselor's workload.
                  </p>
                  <p className='font-mulish text-lg leading-relaxed'>
                    <strong>Step 6</strong><br />
                    The counselor reviews the mapped courses to ensure its correctness, and as a final step sends it to the requestor.
                  </p>
                </div>
              </div>
            </div>
          </ContentContainer>
        </section>

        {/* Measurable & Meaningful Results: dark band with icons */}
        {/* Measurable & Meaningful Results: dark band with icons */}
        <section className='bg-[#222222] text-white py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer>
            <h2 className='font-playfair text-3xl font-bold mb-4'>
              Measurable & Meaningful Results
            </h2>
            <p className='font-mulish text-lg leading-relaxed mb-8 opacity-95 max-w-[800px]'>
              The new tool was transformative for the admissions department. The
              impact was felt immediately in both quantitative and qualitative
              terms. Beyond solving an internal workflow issue, this project
              reinforced the value of user-centered design in driving real
              business outcomes. It empowered employees, improved efficiency,
              and ultimately, helped the university achieve its core mission of
              attracting the best and brightest students.
            </p>
            <div className='grid md:grid-cols-3 gap-10'>
              {results.map((result) => (
                <Result key={result.title} {...result}>
                  {result.text}
                </Result>
              ))}
            </div>
          </ContentContainer>
        </section>

        {/* Key Takeaways */}
        <section className='py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer className='relative overflow-hidden'>
            <DecorativeDots color="522398" position="top-right" />
            <h2 className='font-playfair text-3xl font-bold mb-4'>
              Reflections & Future Scope
            </h2>
            <p className='font-mulish text-lg leading-relaxed max-w-[800px] mb-5'>
              The most rewarding aspect of this project was seeing the tangible
              impact on the counselors' work. By collaborating closely with
              their managers, we gained a deep understanding of their daily
              frustrations, which led to a 60% jump in productivity. This was
              meaningful because it represented more than a metric. It meant
              less stress for the counselors and a real advantage for the
              university, proving that when you focus on making people's work
              lives better, everyone wins.
            </p>
            <p className='font-mulish text-lg leading-relaxed max-w-[800px]'>
              As a future step, I would want to build on this success by
              automating the initial data entry. Allowing the system to scan and
              auto-fill transcript information would reduce their workload even
              further and be a powerful next enhancement.
            </p>
          </ContentContainer>
        </section>
      </main>
    </div>
  );
};

export default AdmissionsProcessAcceleration;
