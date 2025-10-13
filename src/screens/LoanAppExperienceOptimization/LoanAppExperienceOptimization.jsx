import { Icon } from '@iconify/react';
import React from 'react';

// Reusable components for this case study's theme

const Tag = ({ children }) => (
  <span className='bg-[#dbeafe] text-[#1e40af] rounded-full px-4 py-1 text-sm font-medium'>
    {children}
  </span>
);

const ContentContainer = ({ children, className }) => (
    <div className={`max-w-[1440px] mx-auto px-5 lg:px-[100px] ${className || ''}`}>
        {children}
    </div>
);

const KeyInsight = ({ number, children }) => (
  <div className="flex items-start gap-6">
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white text-gray-900 font-bold flex items-center justify-center text-xl">
      {number}
    </div>
    <p className="font-mulish text-lg leading-relaxed opacity-95 pt-2">{children}</p>
  </div>
);

const Result = ({ icon, title, children }) => (
  <div>
    <div className='mb-4'>
      <Icon icon={icon} width="100px" height="100px" style={{ color: '#dbeafe', fontWeight: 200 }} />
    </div>
    <h3 className='font-playfair text-xl font-bold mb-2'>{title}</h3>
    <p className='font-mulish opacity-95'>{children}</p>
  </div>
);


const LoanAppExperienceOptimization = () => {
  const dotsTopLeft = {
    backgroundImage: 'url(/pattern-diamond-white.svg)',
    backgroundSize: '242px 242px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top left',
  };
  const lightDotsPattern = {
    backgroundImage: 'url(/pattern-diamond-purple.svg)',
    backgroundSize: '242px 242px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top right',
  };

  const tags = [
    'Figma', 'Balsamiq', 'UX Research', 'Wireframing', 'UX Design',
    'Visual Design', 'Prototyping', 'Time Management', 'Mobile App'
  ];

  const results = [
    {
      icon: 'material-symbols:trending-up',
      title: 'Projected 40% Reduction in Application Completion Time',
      text: 'Based on the audit of the original flow, the new design eliminated a significant number of screens, clicks, and redundant fields. This analysis allowed us to estimate a 40% reduction in the time needed for a user to complete their application.',
    },
    {
      icon: 'material-symbols:mindfulness',
      title: 'Improved User Confidence',
      text: 'The simplified UI and clear progress indicators were designed to feel more modern, trustworthy, and respectful of the user\'s time.',
    },
  ];

  return (
    <div className='relative bg-white text-gray-900 font-sans'>
      {/* Hero: split composition (left blue, right light-blue) */}
      <header className='w-full bg-[#1E3A8A]'>
        <div className='max-w-[1440px] mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 min-h-[450px]'>
                <div className='relative bg-[#1E3A8A] overflow-hidden flex items-center py-5 md:py-[50px] lg:py-[100px] px-5 lg:px-[100px]'>
                    <div>
                        <div className='text-white'>
                            <h1 className='font-playfair text-4xl md:text-5xl font-extrabold leading-tight tracking-tight'>
                            Loan App Experience Optimization
                            </h1>
                            <p className='font-mulish text-lg md:text-xl mt-4 opacity-95'>
                            Slashing projected loan application time by 40% by redesigning for trust and efficiency.
                            </p>
                            <div className='flex flex-wrap gap-3 mt-6'>
                            {tags.map((tag) => (
                                <Tag key={tag}>{tag}</Tag>
                            ))}
                            </div>
                        </div>
                    </div>
                    <div
                      className='absolute -top-4 -left-4 w-[242px] h-[242px] opacity-60 pointer-events-none'
                      style={dotsTopLeft}
                    />
                </div>

                <div className='bg-blue-50 min-h-[280px]' />
            </div>
        </div>
      </header>

      <main className='w-full'>
        {/* Meta row */}
        <section className="py-5 md:py-[50px] lg:py-[100px]">
          <ContentContainer>
            <div className='grid grid-cols-[auto,1fr] justify-start gap-x-4 gap-y-4 items-start'>
              {/* Role */}
              <div className='col-start-1 flex items-center whitespace-nowrap'>
                <Icon
                  icon='material-symbols:person-outline'
                  className='text-2xl text-black mr-4'
                />
                <h3 className='font-playfair font-bold text-lg'>Role:</h3>
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
                <h3 className='font-playfair font-bold text-lg'>Team:</h3>
              </div>
              <p className='font-mulish col-start-2 text-gray-600 text-lg'>
                Project Manager, UX/UI Designer
              </p>

              {/* Duration */}
              <div className='col-start-1 flex items-center whitespace-nowrap'>
                <Icon
                  icon='mdi:clock-outline'
                  className='text-2xl text-black mr-4'
                />
                <h3 className='font-playfair font-bold text-lg'>Duration:</h3>
              </div>
              <p className='font-mulish col-start-2 text-gray-600 text-lg'>2 months</p>
            </div>
          </ContentContainer>
        </section>

        <div className='py-2'>
            <ContentContainer>
                <hr className='border-[#dbeafe] mb-12' />
            </ContentContainer>
        </div>

        {/* Context */}
        <section className='py-5 md:py-[50px] lg:py-[100px] overflow-hidden'>
          <ContentContainer className='relative z-10'>
            <div
              className='absolute top-0 -right-20 w-[242px] h-[242px] pointer-events-none'
              style={lightDotsPattern}
            />
            <div className='flex flex-col gap-12'>
              <div>
                <h2 className='font-playfair text-3xl font-bold mb-4'>Context</h2>
                <p className='font-mulish text-lg leading-relaxed max-w-[800px]'>
                  A top-tier global bank's digital loan application was underperforming. Despite having a pool of pre-qualified candidates, the platform was seeing significant user drop-off. I joined the project to lead the UX/UI design effort, tasked with overhauling this critical experience on an accelerated 2-month timeline. The primary goal was to deliver a finalized, streamlined design for a seamless handoff to the client's internal development team for implementation.
                </p>
              </div>
            </div>
          </ContentContainer>
        </section>

        {/* Problem in a nutshell */}
        <section className='w-full bg-[#1E3A8A] text-white py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer>
            <div className='grid md:grid-cols-3 gap-8 items-center'>
              <h2 className='font-playfair text-2xl md:text-3xl font-bold self-center'>
                Problem in a nutshell
              </h2>
              <div className='md:col-span-2 grid gap-8'>
                <div>
                  <h3 className='font-playfair font-bold text-xl mb-2'>For the business:</h3>
                  <p className='font-mulish opacity-90 text-lg leading-relaxed'>High user drop-off rate and low number of submitted applications.</p>
                </div>
                <div>
                  <h3 className='font-playfair font-bold text-xl mb-2'>For the customer:</h3>
                  <p className='font-mulish opacity-90 text-lg leading-relaxed'>Forced through a 11-page long form that asked for excessive information, leading to fatigue and abandonment.</p>
                </div>
              </div>
            </div>
          </ContentContainer>
        </section>

        {/* Discovery Under Pressure */}
        <section className='py-5 md:py-[50px] lg:py-[100px] overflow-hidden'>
          <ContentContainer className='relative z-10'>
            <div
              className='absolute top-0 -right-20 w-[242px] h-[242px] pointer-events-none'
              style={lightDotsPattern}
            />
            <div className='flex flex-col gap-12'>
              <div>
                <h2 className='font-playfair text-3xl font-bold mb-4'>Discovery Under Pressure</h2>
                <p className='font-mulish text-lg leading-relaxed mb-6 max-w-[800px]'>
                  With a tight deadline preventing a full-fledged research phase, I focused on a pragmatic and collaborative approach to gain insights quickly.
                </p>
                <div className="space-y-6 max-w-[800px]">
                  <div>
                    <h3 className="font-playfair font-bold text-xl mb-2">Leveraging Client Insights & Existing Feedback</h3>
                    <p className='font-mulish text-lg leading-relaxed'>Through in-depth discussions with the client, we analyzed their business pain points and existing customer feedback. This strategy provided a rapid path to understanding user needs.</p>
                  </div>
                  <div>
                    <h3 className="font-playfair font-bold text-xl mb-2">Auditing the Existing Flow</h3>
                    <p className='font-mulish text-lg leading-relaxed'>I audited the original application by mapping every screen, field, and click. This process established a clear, quantitative baseline for user friction and pinpointed key areas for optimization.</p>
                  </div>
                </div>
              </div>
            </div>
          </ContentContainer>
        </section>

        {/* Key Insights */}
        <section className='bg-[#222222] text-white py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer>
            <h2 className='font-playfair text-3xl font-bold mb-8'>Key Insights</h2>
            <div className='grid md:grid-cols-2 gap-12'>
              <KeyInsight number="1">
                Asking pre-qualified users for information the bank already possessed was a major source of friction.
              </KeyInsight>
              <KeyInsight number="2">
                A common theme in user complaints was the overwhelming nature of the single, long application form, which created high cognitive load.
              </KeyInsight>
            </div>
          </ContentContainer>
        </section>

        {/* A Streamlined, Human-Centered Workflow */}
        <section className='py-5 md:py-[50px] lg:py-[100px] overflow-hidden'>
          <ContentContainer className='relative z-10'>
            <div
              className='absolute top-0 -right-20 w-[242px] h-[242px] pointer-events-none'
              style={lightDotsPattern}
            />
            <div className='flex flex-col gap-12'>
              <div>
                <h2 className='font-playfair text-3xl font-bold mb-4'>A Streamlined, Human-Centered Workflow</h2>
                <p className='font-mulish text-lg leading-relaxed mb-6 max-w-[800px]'>
                  My solution was centered on three principles: progressive disclosure, smart defaults, and motivational design.
                </p>
                <div className="font-mulish space-y-6 text-lg leading-relaxed max-w-[800px]">
                  <p>I reorganized the form sections into logical chunks (e.g., Personal Information, Financials, Review). A prominent progress bar was introduced to manage user expectations and clearly show them how close they were to the end.</p>
                  <p>Leveraging the bank's existing design system, I scrutinized every form field. Inefficient components were replaced with more effective alternatives. For example, I introduced an interactive slider for the loan amount. As a user adjusted the slider, their estimated monthly payment updated in real-time, allowing them to make informed decisions more quickly.</p>
                  <p>To reduce application anxiety and frustration, I introduced subtle, encouraging illustrations at key milestones. For instance, after a user successfully completed the personal information section, an illustration would appear, reinforcing their progress and motivating them to continue to the next step.</p>
                </div>
              </div>
            </div>
          </ContentContainer>
        </section>

        {/* A Measurable Impact */}
        <section className='bg-[#222222] text-white py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer>
            <h2 className='font-playfair text-3xl font-bold mb-4'>A Measurable Impact</h2>
            <p className='font-mulish text-lg leading-relaxed mb-8 opacity-95 max-w-[800px]'>
              While the implementation was handled by the client's development team post-handoff, the redesigned flow was projected to deliver significant improvements.
            </p>
            <div className='grid md:grid-cols-2 gap-10'>
              {results.map((result) => (
                <Result key={result.title} {...result}>
                  {result.text}
                </Result>
              ))}
            </div>
          </ContentContainer>
        </section>

        {/* Challenges & Learnings */}
        <section className='py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer>
            <h2 className='font-playfair text-3xl font-bold mb-4'>Challenges & Learnings</h2>
            <p className='font-mulish text-lg leading-relaxed max-w-[800px] mb-5'>
              The most challenging trade-off on this project was balancing time with certainty. We made the strategic decision to move forward without a formal round of usability testing to meet the tight deadline, relying on stakeholder insights and UX best practices instead.
            </p>
            <p className='font-mulish text-lg leading-relaxed max-w-[800px]'>
              If this project were to continue, my top recommendation would be to validate our design with a data-driven feedback loop. I would advocate for conducting moderated usability tests with 5-7 real users. This would provide important qualitative feedback to confirm our design assumptions and uncover any remaining friction points.
            </p>
          </ContentContainer>
        </section>
      </main>
    </div>
  );
};

export default LoanAppExperienceOptimization;