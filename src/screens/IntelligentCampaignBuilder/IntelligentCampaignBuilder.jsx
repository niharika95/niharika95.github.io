import { Icon } from '@iconify/react';
import React from 'react';

const Tag = ({ children }) => (
  <span className='bg-[#ffded2] text-black rounded-full px-4 py-1 text-sm font-medium'>
    {children}
  </span>
);

const Insight = ({ number, text }) => (
  <div>
    <span className='w-12 h-12 rounded-full bg-[#ffded2] text-gray-900 font-bold flex items-center justify-center mb-4 text-xl'>
      {number}
    </span>
    <p className='font-mulish text-lg leading-relaxed opacity-95'>{text}</p>
  </div>
);

const Result = ({ icon, title, children }) => (
  <div>
    <div className='mb-4'>
      <Icon
        icon={icon}
        width='100px'
        height='100px'
        style={{ color: '#ffded2', fontWeight: 200 }}
      />
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

const IntelligentCampaignBuilder = () => {
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
    'Figma',
    'UX Research',
    'Wireframing',
    'UX Design',
    'Visual Design',
    'Design System',
    'Prototyping',
  ];
  const insights = [
    {
      number: 1,
      text: 'Users needed a clearer, step-by-step process for segmentation.',
    },
    {
      number: 2,
      text: 'Navigation was cumbersome, requiring too many clicks to access essential campaign assets.',
    },
    {
      number: 3,
      text: 'The lack of design patterns resulted in a steep learning curve and inconsistent user flows.',
    },
  ];
  const outcomes = [
    {
      icon: 'material-symbols:rocket-launch',
      title: 'Enhanced Usability & Efficiency',
      text: 'By simplifying the UI and clarifying the segmentation workflow, we significantly reduced user friction.',
    },
    {
      icon: 'material-symbols:palette',
      title: 'Strengthened Brand Presence',
      text: 'The unified visual language and modern UI created a cohesive and trustworthy brand experience.',
    },
    {
      icon: 'material-symbols:bolt',
      title: 'Accelerated Development Cycles',
      text: 'Reusable components enabled faster iteration, streamlined handoffs, and sustained design consistency.',
    },
  ];

  return (
    <div className='relative bg-white text-gray-900 font-sans'>
      {/* Hero: split composition (left orange, right hero image) */}
      <header className='w-full bg-[#fb4e0b]'>
        <ContentContainer className='relative flex flex-col md:flex-row'>
          <div className='text-white max-w-2xl py-5 md:py-[50px] lg:py-[100px]'>
            <h1 className='font-playfair text-4xl md:text-5xl font-extrabold leading-tight tracking-tight'>
              Intelligent Campaign Builder Overhaul
            </h1>
            <p className='font-mulish text-lg md:text-xl mt-4 opacity-95'>
              Empowering Marketers with a Data-Driven, Intuitive Lead Generation
              Engine.
            </p>
            <div className='flex flex-wrap gap-2 mt-4 md:mt-6'>
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
          <img
            src='/intelligent-campaign-builder-overhaul/hero.png'
            alt='Intelligent Campaign Builder Hero'
            className='w-full max-w-[600px] self-end h-auto object-contain max-h-[500px]'
          />
          <div
            className='absolute -top-4 -left-4 w-[242px] h-[242px] opacity-60 pointer-events-none'
            style={dotsTopLeft}
          />
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
                Product Owner, UX/UI Designer, Tech Lead, Front-end Developer, 2
                Back-end Developers
              </p>

              {/* Duration */}
              <div className='col-start-1 flex items-center whitespace-nowrap'>
                <Icon
                  icon='mdi:clock-outline'
                  className='text-2xl text-black mr-4'
                />
                <h3 className='font-playfair font-bold text-lg'>Duration:</h3>
              </div>
              <p className='font-mulish col-start-2 text-gray-600 text-lg'>6 months</p>
            </div>
          </ContentContainer>
        </section>

        <div className='py-2'>
          <ContentContainer>
            <hr className='border-[#fb4e0b] mb-12' />
          </ContentContainer>
        </div>

        {/* Context */}
        <section className='py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer>
            <h2 className='font-playfair text-3xl font-bold mb-4'>Context</h2>
            <p className='font-mulish text-lg leading-relaxed max-w-[800px]'>
              For marketers, speed and precision are everything. EXL's platform
              offered the data for precision, but its complex interface was a
              significant barrier to speed. This project tackled that challenge
              directly, overhauling the platform to be as intuitive as it was
              powerful. Through a comprehensive UX strategy, we simplified core
              workflows and established a scalable design system, enabling
              marketers to build targeted campaigns with confidence and
              efficiency.
            </p>
          </ContentContainer>
        </section>

        {/* Unlocking Power Through Usability */}
        <section className='py-5 md:py-[50px] lg:py-[100px] overflow-hidden'>
          <ContentContainer className='relative z-10'>
            <div
              className='absolute top-0 -right-20 w-[242px] h-[242px] pointer-events-none'
              style={lightDotsPattern}
            />
            <div className='flex flex-col gap-12'>
              <div>
                <h2 className='font-playfair text-3xl font-bold mb-4'>
                  Unlocking Power Through Usability
                </h2>
                <p className='font-mulish text-lg leading-relaxed mb-4 max-w-[800px]'>
                  The existing platform was a robust lead-generation engine,
                  rich with data and powerful capabilities. However, its
                  potential was bottlenecked by a challenging user experience.
                  Marketers, our primary users, were struggling to execute core
                  tasks efficiently.
                </p>
                <p className='font-mulish text-lg leading-relaxed max-w-[800px]'>
                  From initial discovery and user feedback, we identified three
                  core problems:
                </p>
                <ul className='font-mulish list-disc list-inside text-lg leading-relaxed space-y-2 mt-4 max-w-[800px]'>
                  <li>
                    <span className='font-bold'>Cognitive Overload:</span> The
                    interface presented too many options simultaneously, making
                    it difficult for users to focus and navigate the campaign
                    creation process.
                  </li>
                  <li>
                    <span className='font-bold'>Unclear Workflows:</span> The
                    crucial process of segmenting an audience was confusing and
                    lacked a clear, guided path, leading to user friction and
                    errors.
                  </li>
                  <li>
                    <span className='font-bold'>Inconsistent Identity:</span>{' '}
                    The lack of a cohesive design language across the platform
                    diluted brand presence and user trust.
                  </li>
                </ul>
              </div>
            </div>
          </ContentContainer>
        </section>

        {/* The Challenge: full-width orange band with right callout */}
        <section className='w-full bg-[#FF4F00] text-white py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer>
            <div className='grid md:grid-cols-3 gap-8 items-center'>
              <h2 className='font-playfair text-2xl md:text-3xl font-bold self-center'>
                The Challenge
              </h2>
              <div className='md:col-span-2 grid gap-8'>
                <p className='font-mulish text-lg md:text-xl leading-relaxed opacity-90'>
                  How could we redesign the experience to guide users toward
                  their goals, organize functionality with intention, and
                  establish a strong, trustworthy brand identity?
                </p>
              </div>
            </div>
          </ContentContainer>
        </section>

        {/* Discovery & Key Insights: dark band */}
        <section className='bg-[#222222] text-white py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer>
            <h2 className='font-playfair text-3xl font-bold mb-4'>
              Discovery & Key Insights
            </h2>
            <p className='font-mulish text-lg leading-relaxed mb-8 opacity-95'>
              I analyzed existing user workflows and gathered qualitative
              feedback from users who used the platform daily. This research
              phase yielded critical insights which became the foundation of our
              design strategy, highlighting a clear need for reusable components
              that would not only improve design consistency but also accelerate
              the development cycle.
            </p>
            <div className='grid md:grid-cols-3 gap-8'>
              {insights.map((insight) => (
                <Insight key={insight.number} {...insight} />
              ))}
            </div>
          </ContentContainer>
        </section>

        {/* Laying the Foundation */}
        <section className='py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer>
            <h2 className='font-playfair text-3xl font-bold mb-4'>
              Laying the Foundation for a Simpler Experience
            </h2>
            <p className='font-mulish text-lg leading-relaxed max-w-[800px]'>
              My process was grounded in close collaboration with the product
              owner and engineers to ensure every decision was rooted in user
              needs and business goals. We worked iteratively, focusing on
              validating our approach at each stage to de-risk our design
              direction.
            </p>
            <p className='font-mulish text-lg leading-relaxed mt-4 max-w-[800px]'>
              To address inconsistency, I designed and implemented a set of
              reusable components, patterns, and styles. This modular design
              system not only unified the visual language across the platform
              but also enabled our development team to build and iterate faster.
              The refreshed, modern visual identity reinforced a sense of trust
              and professionalism.
            </p>
          </ContentContainer>
        </section>
        {/* Images for Laying the Foundation */}
        <section className='w-full bg-[#222222] pt-5 md:pt-[50px] lg:pt-[100px] pb-0'>
          <ContentContainer>
            <div className='grid grid-cols-3 gap-[30px] items-end'>
              <img
                src='/intelligent-campaign-builder-overhaul/laying1.png'
                alt='Laying the Foundation Image 1'
                className='w-full h-auto object-cover'
              />
              <img
                src='/intelligent-campaign-builder-overhaul/laying2.png'
                alt='Laying the Foundation Image 2'
                className='w-full h-auto object-cover'
              />
              <img
                src='/intelligent-campaign-builder-overhaul/laying3.png'
                alt='Laying the Foundation Image 3'
                className='w-full h-auto object-cover'
              />
            </div>
          </ContentContainer>
        </section>

        {/* A Design for Clarity and Consistency */}
        <section className='py-5 md:py-[50px] lg:py-[100px] overflow-hidden'>
          <ContentContainer className='relative z-10'>
            <div
              className='absolute top-0 -right-20 w-[242px] h-[242px] pointer-events-none'
              style={lightDotsPattern}
            />
            <div className='flex flex-col gap-12'>
              <div>
                <h2 className='font-playfair text-3xl font-bold mb-4'>
                  A Design for Clarity and Consistency
                </h2>
                <p className='font-mulish text-lg leading-relaxed max-w-[800px]'>
                  I streamlined the primary interface, moving from a cluttered
                  dashboard to a guided, step-by-step process. This simplified
                  the UI, reduced distractions, and allowed marketers to focus
                  on one key task at a time, from audience segmentation to final
                  deployment.
                </p>
                <p className='font-mulish text-lg leading-relaxed mt-4 max-w-[800px]'>
                  The segmentation workflow was completely reimagined. I
                  introduced clear visual cues and real-time feedback, making
                  the process of targeting specific audiences more intuitive and
                  actionable.
                </p>
                <p className='font-mulish text-lg leading-relaxed mt-4 max-w-[800px]'>
                  To address inconsistency, I designed and implemented a set of
                  reusable components, patterns, and styles. This modular design
                  system not only unified the visual language across the
                  platform but also enabled our development team to build and
                  iterate faster. The refreshed, modern visual identity
                  reinforced a sense of trust and professionalism.
                </p>
              </div>
            </div>
          </ContentContainer>
        </section>

        {/* Clarity Design Section */}
        <section className='flex w-full bg-[#fb4e0b] text-white'>
          <ContentContainer className='py-5 md:py-[50px] lg:py-[100px]'>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-8 items-center'>
              <img
                src='/intelligent-campaign-builder-overhaul/clarity1.png'
                alt='Clarity Design Image'
                className='w-full md:col-span-8'
              />
              <p className='font-mulish text-md leading-relaxed md:col-span-4'>
                We streamlined the primary interface, moving from a cluttered
                dashboard to a guided, step-by-step process. The segmentation
                workflow was completely reimagined. We introduced clear visual
                cues and real-time feedback, making the process of targeting
                specific audiences more intuitive and actionable.
              </p>
            </div>
          </ContentContainer>
        </section>

        {/* Clarity Design Section 2 */}
        <section className='flex w-full bg-[#fb4e0b] text-white'>
          <ContentContainer className='py-5 md:py-[50px] lg:py-[100px]'>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-8 items-center'>
              <img
                src='/intelligent-campaign-builder-overhaul/clarity2.png'
                alt='Clarity Design Image'
                className='w-full md:col-span-8'
              />
              <p className='font-mulish text-md leading-relaxed md:col-span-4'>
                Previously, marketers applied filters without seeing the immediate impact. Now, as they select a specific attribute like 'Education' or fine-tune a range for 'Income,' they can see how the target population changes on the same screen. This immediate feedback loop turns blind choices into confident exploration, empowering them to precisely sculpt the perfect audience for their campaign.
              </p>
            </div>
          </ContentContainer>
        </section>

        {/* Clarity Design Section 3 */}
        <section className='flex w-full bg-[#fb4e0b] text-white'>
          <ContentContainer className='py-5 md:py-[50px] lg:py-[100px]'>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-8 items-center'>
              <img
                src='/intelligent-campaign-builder-overhaul/clarity3.png'
                alt='Clarity Design Image'
                className='w-full md:col-span-8'
              />
              <p className='font-mulish text-md leading-relaxed md:col-span-4'>
                With their ideal audience defined, the marketer can see the crucial output which provides a clear list of targetable geographic regions along with key demographic profiles of the people within them.  This bridges the gap between data and action providing the marketer with the exact intelligence needed to deploy their marketing materials effectively and with total confidence.
              </p>
            </div>
          </ContentContainer>
        </section>

        {/* Clarity Design Section 4 */}
        <section className='flex w-full bg-[#fb4e0b] text-white'>
          <ContentContainer className='py-5 md:py-[50px] lg:py-[100px]'>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-8 items-center'>
              <img
                src='/intelligent-campaign-builder-overhaul/clarity4.png'
                alt='Clarity Design Image'
                className='w-full md:col-span-8'
              />
              <p className='font-mulish text-md leading-relaxed md:col-span-4'>
                The platform allows marketers to set the schedule, select communication channels, attach necessary creative assets, and select pre-defined target audiences. This helps them publish a highly targeted campaign and bring their complete strategic vision to life.
              </p>
            </div>
          </ContentContainer>
        </section>

        {/* Outcomes & Impact: dark band with icons */}
        <section className='bg-[#222222] text-white py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer>
            <h2 className='font-playfair text-3xl font-bold mb-4'>Outcomes & Impact</h2>
            <p className='font-mulish text-lg leading-relaxed mb-8 opacity-95 max-w-[800px]'>
              The redesign had a significant and positive impact on both the
              user experience and the product's development lifecycle.
            </p>
            <div className='grid md:grid-cols-3 gap-10'>
              {outcomes.map((outcome) => (
                <Result key={outcome.title} {...outcome}>
                  {outcome.text}
                </Result>
              ))}
            </div>
          </ContentContainer>
        </section>

        {/* Key Takeaways */}
        <section className='py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer>
            <h2 className='font-playfair text-3xl font-bold mb-4'>Key Takeaways</h2>
            <p className='font-mulish text-lg leading-relaxed max-w-[800px]'>
              This project reinforced a core design principle: the more powerful
              the platform, the more crucial a simple, guided user experience
              becomes. Achieving this was a result of early alignment with
              product and engineering, which proved essential for translating
              user needs into feasible solutions.
            </p>
          </ContentContainer>
        </section>
      </main>
    </div>
  );
};

export default IntelligentCampaignBuilder;
