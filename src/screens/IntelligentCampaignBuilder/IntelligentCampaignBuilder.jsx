import { Icon } from '@iconify/react';
import React from 'react';

const Tag = ({ children }) => (
  <span className='bg-[#ffded2] text-black rounded-full px-4 py-1 text-sm'>
    {children}
  </span>
);

const Insight = ({ number, text }) => (
  <div>
    <span className='w-12 h-12 rounded-full bg-[#ffded2] text-gray-900 font-bold flex items-center justify-center mb-4'>
      {number}
    </span>
    <p>{text}</p>
  </div>
);

const Outcome = ({ icon, title, children }) => (
  <div>
    <div className='text-4xl mb-4'>
      <Icon icon={icon} style={{ color: '#ffded2', fontWeight: 200 }} />
    </div>
    <h3 className='text-xl font-bold mb-2'>{title}</h3>
    <p className='opacity-95'>{children}</p>
  </div>
);

const ContentContainer = ({ children, className }) => (
    <div className={`max-w-[1440px] mx-auto px-5 lg:px-[100px] ${className || ''}`}>
        {children}
    </div>
);

const IntelligentCampaignBuilder = () => {
  // Decorative dot patterns used in the composition
  const dotsTopLeft = {
    backgroundImage:
      'radial-gradient(rgba(255,255,255,0.45) 4px, transparent 4px)',
    backgroundSize: '22px 22px',
  };
  const dotsBottomRight = {
    backgroundImage:
      'radial-gradient(rgba(255,79,0,0.18) 4px, transparent 4px)',
    backgroundSize: '22px 22px',
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
      {/* Hero: split composition (left orange, right peach) */}
      <header className='w-full bg-[#fb4e0b]'>
        <div className='max-w-[1440px] mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 min-h-[500px]'>
                <div className='relative bg-[#fb4e0b] overflow-hidden flex items-center py-5 md:py-[50px] lg:py-[100px] px-5 lg:px-[100px]'>
                    <div>
                        <div className='text-white'>
                            <h1 className='text-4xl md:text-5xl font-extrabold leading-tight tracking-tight'>
                            Intelligent Campaign Builder Overhaul
                            </h1>
                            <p className='text-lg md:text-xl mt-4 opacity-95'>
                            Empowering Marketers with a Data-Driven, Intuitive Lead
                            Generation Engine.
                            </p>
                            <div className='flex flex-wrap gap-2 mt-6'>
                            {tags.map((tag) => (
                                <Tag key={tag}>{tag}</Tag>
                            ))}
                            </div>
                        </div>
                    </div>
                    <div
                        className='absolute -top-4 -left-4 w-40 h-40 opacity-60 pointer-events-none'
                        style={dotsTopLeft}
                    />
                </div>

                <div className='bg-[#FFE0D6] min-h-[280px]' />
            </div>
        </div>
      </header>

      <main className='w-full'>
        {/* Meta row */}
        <section className="py-5 md:py-[50px] lg:py-[100px]">
          <ContentContainer>
            <div className="grid grid-cols-[auto,auto] justify-start gap-x-2.5 gap-y-4 items-start">
                {/* Role */}
                <div className="col-start-1 flex items-center whitespace-nowrap">
                    <Icon icon='mdi:user' className='text-2xl text-gray-500 mr-4' />
                    <h3 className='font-bold text-lg'>Role:</h3>
                </div>
                <p className='col-start-2 text-gray-600 text-lg'>UX/UI Designer</p>

                {/* Team */}
                <div className="col-start-1 flex items-center whitespace-nowrap">
                    <Icon
                    icon='mdi:account-group'
                    className='text-2xl text-gray-500 mr-4'
                    />
                    <h3 className='font-bold text-lg'>Team:</h3>
                </div>
                <p className='col-start-2 text-gray-600 text-lg'>
                    Product Owner, UX/UI Designer, Tech Lead, Front-end Developer, 2
                    Back-end Developers
                </p>

                {/* Duration */}
                <div className="col-start-1 flex items-center whitespace-nowrap">
                    <Icon
                    icon='mdi:clock-outline'
                    className='text-2xl text-gray-500 mr-4'
                    />
                    <h3 className='font-bold text-lg'>Duration:</h3>
                </div>
                <p className='col-start-2 text-gray-600 text-lg'>6 months</p>
            </div>
          </ContentContainer>
        </section>

        <div className='py-2'>
            <ContentContainer>
                <hr className='border-[#fb4e0b] mb-12' />
            </ContentContainer>
        </div>

        {/* Context */}
        <section className="py-5 md:py-[50px] lg:py-[100px]">
          <ContentContainer>
            <h2 className='text-3xl font-bold mb-4'>Context</h2>
            <p className='text-lg leading-relaxed'>
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

        {/* Unlocking Power Through Usability with right-side peach block */}
        <section className='py-5 md:py-[50px] lg:py-[100px]'>
            <ContentContainer>
                <div className='grid md:grid-cols-2 gap-12'>
                    <div>
                        <h2 className='text-3xl font-bold mb-4'>
                        Unlocking Power Through Usability
                        </h2>
                        <p className='text-lg leading-relaxed mb-4'>
                        The existing platform was a robust lead-generation engine, rich
                        with data and powerful capabilities. However, its potential was
                        bottlenecked by a challenging user experience. Marketers, our
                        primary users, were struggling to execute core tasks efficiently.
                        </p>
                        <p className='text-lg leading-relaxed'>
                        From initial discovery and user feedback, we identified three core
                        problems:
                        </p>
                        <ul className='list-disc list-inside text-lg leading-relaxed space-y-2 mt-4'>
                        <li>
                            <span className='font-bold'>Cognitive Overload:</span> The
                            interface presented too many options simultaneously, making it
                            difficult for users to focus and navigate the campaign creation
                            process.
                        </li>
                        <li>
                            <span className='font-bold'>Unclear Workflows:</span> The
                            crucial process of segmenting an audience was confusing and
                            lacked a clear, guided path, leading to user friction and
                            errors.
                        </li>
                        <li>
                            <span className='font-bold'>Inconsistent Identity:</span> The
                            lack of a cohesive design language across the platform diluted
                            brand presence and user trust.
                        </li>
                        </ul>
                    </div>
                    <div className='hidden md:block'>
                        <div className='bg-[#FFE0D6] h-full w-full shadow-inner' />
                    </div>
                </div>
            </ContentContainer>
        </section>

        {/* The Challenge: full-width orange band with right callout */}
        <section className='w-full bg-[#FF4F00] text-white py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer>
            <div className='grid md:grid-cols-3 gap-8 items-center'>
              <h2 className='text-2xl md:text-3xl font-bold'>The Challenge</h2>
              <div className='md:col-span-2 text-white rounded-md p-6 md:p-8 text-lg md:text-xl leading-relaxed'>
                How could we redesign the experience to guide users toward their
                goals, organize functionality with intention, and establish a
                strong, trustworthy brand identity?
              </div>
            </div>
          </ContentContainer>
        </section>

        {/* Discovery & Key Insights: dark band */}
        <section className='bg-[#222222] text-white py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer>
            <h2 className='text-3xl font-bold mb-4'>Discovery & Key Insights</h2>
            <p className='text-lg leading-relaxed mb-8 opacity-95'>
              I analyzed existing user workflows and gathered qualitative feedback
              from users who used the platform daily. This research phase yielded
              critical insights which became the foundation of our design
              strategy, highlighting a clear need for reusable components that
              would not only improve design consistency but also accelerate the
              development cycle.
            </p>
            <div className='grid md:grid-cols-3 gap-8'>
              {insights.map((insight) => (
                <Insight key={insight.number} {...insight} />
              ))}
            </div>
          </ContentContainer>
        </section>

        {/* Laying the Foundation: text + large dark placeholder block */}
        <section className="py-5 md:py-[50px] lg:py-[100px]">
          <ContentContainer>
            <h2 className='text-3xl font-bold mb-4'>
              Laying the Foundation for a Simpler Experience
            </h2>
            <p className='text-lg leading-relaxed'>
              I collaborated closely with the product owner and engineers to
              ground every decision in user needs and business goals. My process
              was iterative and focused on validating the approach at each stage.
              With a clear understanding of the pain points, I moved into
              low-fidelity design. I developed wireframes that mapped out the core
              structure and key user flows of the redesigned application.
            </p>
            <p className='text-lg leading-relaxed mt-4'>
              These wireframes focused on:
            </p>
            <ul className='list-disc list-inside text-lg leading-relaxed space-y-2 mt-4'>
              <li>
                <span className='font-bold'>Information Architecture:</span>{' '}
                Restructuring the layout to create a logical hierarchy.
              </li>
              <li>
                <span className='font-bold'>Navigation Logic:</span> Simplifying
                the primary navigation to be task-oriented.
              </li>
              <li>
                <span className='font-bold'>User Flow Validation:</span> Outlining
                the ideal path for campaign creation and segmentation.
              </li>
            </ul>
            <p className='text-lg leading-relaxed mt-4'>
              Presenting these early drafts to stakeholders and the development
              team allowed us to align on the core usability and functionality
              before committing to high-fidelity visuals, saving valuable time and
              resources.
            </p>

            <div className='mt-8 bg-[#1F2937] h-64 md:h-72 rounded-lg' />
          </ContentContainer>
        </section>

        {/* A Design for Clarity and Consistency: two-column with right orange block */}
        <section className="py-5 md:py-[50px] lg:py-[100px]">
            <ContentContainer>
                <div className='grid md:grid-cols-2 gap-14'>
                    <div>
                        <h2 className='text-3xl font-bold mb-4'>
                        A Design for Clarity and Consistency
                        </h2>
                        <div className="flex flex-col gap-y-8 mt-8">
                            <p className='text-lg leading-relaxed'>
                                I streamlined the primary interface, moving from a cluttered
                                dashboard to a guided, step-by-step process. This simplified the
                                UI, reduced distractions, and allowed marketers to focus on one
                                key task at a time, from audience segmentation to final
                                deployment.
                            </p>
                            <p className='text-lg leading-relaxed'>
                                The segmentation workflow was completely reimagined. I
                                introduced clear visual cues and real-time feedback, making the
                                process of targeting specific audiences more intuitive and
                                actionable.
                            </p>
                            <p className='text-lg leading-relaxed'>
                                To address inconsistency, I designed and implemented a set of
                                reusable components, patterns, and styles. This modular design
                                system not only unified the visual language across the platform
                                but also enabled our development team to build and iterate
                                faster. The refreshed, modern visual identity reinforced a sense
                                of trust and professionalism.
                            </p>
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <div className='bg-[#FF4F00] h-full w-full' />
                    </div>
                </div>
            </ContentContainer>
        </section>

        {/* Outcomes & Impact: dark band with icons */}
        <section className='bg-[#222222] text-white py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer>
            <h2 className='text-3xl font-bold mb-8'>Outcomes & Impact</h2>
            <p className='text-lg leading-relaxed mb-8 opacity-95'>
              The redesign had a significant and positive impact on both the user
              experience and the product's development lifecycle.
            </p>
            <div className='grid md:grid-cols-3 gap-10'>
              {outcomes.map((outcome) => (
                <Outcome key={outcome.title} {...outcome}>
                  {outcome.text}
                </Outcome>
              ))}
            </div>
          </ContentContainer>
        </section>

        {/* Key Takeaways with bottom-right dots */}
        <section className="py-5 md:py-[50px] lg:py-[100px]">
          <ContentContainer>
            <h2 className='text-3xl font-bold mb-4'>Key Takeaways</h2>
            <p className='text-lg leading-relaxed'>
              This project reinforced a core design principle: the more powerful
              the platform, the more crucial a simple, guided user experience
              becomes. Achieving this was a result of early alignment with product
              and engineering, which proved essential for translating user needs
              into feasible solutions.
            </p>
            <div
              className='absolute -right-2 bottom-0 w-40 h-40 opacity-70 pointer-events-none'
              style={dotsBottomRight}
            />
          </ContentContainer>
        </section>
      </main>
    </div>
  );
};

export default IntelligentCampaignBuilder;
