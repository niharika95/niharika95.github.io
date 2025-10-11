import { Icon } from '@iconify/react';
import React from 'react';

// Reusable components for this case study's theme

const Tag = ({ children }) => (
  <span className='bg-[#fddde4] text-[#a00028] rounded-full px-4 py-1 text-sm font-medium'>
    {children}
  </span>
);

const ContentContainer = ({ children, className }) => (
    <div className={`max-w-[1440px] mx-auto px-5 lg:px-[100px] ${className || ''}`}>
        {children}
    </div>
);

const Metric = ({ name, before, after, improvement, icon }) => (
    <div className="grid grid-cols-4 items-center gap-4 text-center border-b border-gray-700 py-3">
        <div className="flex items-center gap-3 text-left">
            <Icon icon={icon} className="text-xl text-gray-400" />
            <span>{name}</span>
        </div>
        <span>{before}</span>
        <span>{after}</span>
        <span className="font-bold text-green-400">{improvement}</span>
    </div>
);


const InsuranceCompanyWebsiteRedesign = () => {
  const dotsTopLeft = {
    backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 2px, transparent 2px)',
    backgroundSize: '20px 20px',
  };
  const lightDotsPattern = {
    backgroundImage: 'radial-gradient(rgba(160, 0, 40, 0.05) 2px, transparent 2px)',
    backgroundSize: '22px 22px',
  };

  const tags = [
    'Figma', 'FigJam', 'Product Design', 'UX Research', 'Wireframing',
    'Interaction Design', 'Visual Design', 'Responsive Design', 'Design QA'
  ];

  const metrics = [
      { name: 'Desktop Performance', before: '64', after: '88', improvement: '+37.5%', icon: 'mdi:desktop-mac' },
      { name: 'Accessibility Score', before: '88', after: '90', improvement: '+2.3%', icon: 'mdi:accessibility' },
      { name: 'Best Practices', before: '76', after: '96', improvement: '+28%', icon: 'mdi:star-check' },
      { name: 'SEO Score', before: '64', after: '92', improvement: '+43.7%', icon: 'mdi:magnify' },
  ];

  return (
    <div className='relative bg-white text-gray-900 font-sans'>
      {/* Hero: Red background */}
      <header className='w-full bg-[#A00028]'>
        <ContentContainer className='relative overflow-hidden min-h-[450px] flex items-center py-5 md:py-[50px] lg:py-[100px]'>
            <div className='text-white'>
                <h1 className='text-4xl md:text-5xl font-extrabold leading-tight tracking-tight'>
                Insurance Company Website Redesign
                </h1>
                <p className='text-lg md:text-xl mt-4 opacity-95 max-w-3xl'>
                0-1 redesign that boosted SEO performance by 44% and overall site performance by 37%, creating a platform built for growth.
                </p>
                <div className='flex flex-wrap gap-2 mt-6'>
                {tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                ))}
                </div>
            </div>
            <div
                className='absolute -top-4 -left-4 w-48 h-48 opacity-60 pointer-events-none'
                style={dotsTopLeft}
            />
        </ContentContainer>
      </header>

      <main className='w-full'>
        {/* Meta row */}
        <section className="py-5 md:py-[50px] lg:py-[100px]">
          <ContentContainer>
            <div className="grid grid-cols-[auto,1fr] justify-start gap-x-4 gap-y-4 items-start">
                <div className="col-start-1 flex items-center whitespace-nowrap">
                    <Icon icon='mdi:user' className='text-2xl text-gray-500 mr-4' />
                    <h3 className='font-bold text-lg'>Role:</h3>
                </div>
                <p className='col-start-2 text-gray-600 text-lg'>UX/UI Designer</p>

                <div className="col-start-1 flex items-center whitespace-nowrap">
                    <Icon icon='mdi:account-group' className='text-2xl text-gray-500 mr-4' />
                    <h3 className='font-bold text-lg'>Team:</h3>
                </div>
                <p className='col-start-2 text-gray-600 text-lg'>
                Product Manager, Product Owner, 2 UX/UI Designers, Content Writer, Webflow Developer, Drupal Developer
                </p>

                <div className="col-start-1 flex items-center whitespace-nowrap">
                    <Icon icon='mdi:clock-outline' className='text-2xl text-gray-500 mr-4' />
                    <h3 className='font-bold text-lg'>Duration:</h3>
                </div>
                <p className='col-start-2 text-gray-600 text-lg'>10 months</p>
            </div>
          </ContentContainer>
        </section>

        <div className='py-2'>
            <ContentContainer>
                <hr className='border-[#fddde4] mb-12' />
            </ContentContainer>
        </div>

        {/* Context & Digital Experience */}
        <section className="relative py-5 md:py-[50px] lg:py-[100px] overflow-hidden">
          <ContentContainer>
            <div className="grid md:grid-cols-2 gap-x-12">
                <div>
                    <h2 className='text-3xl font-bold mb-4'>Context</h2>
                    <p className='text-lg leading-relaxed mb-12'>
                    A mid-sized, third-fastest-growing U.S. home insurance provider, on a trajectory to reach $1 billion in revenue, sought to overhaul its public-facing website. The existing site suffered from an outdated design, poor usability, and low conversion rates, failing to reflect the company's market position as a tech-forward industry leader. I joined the project as one of two UX/UI designers tasked with redesigning the user experience from the ground up. We began with a proof of concept (POC) for the home page, successfully winning the contract, and then proceeded to a full-scale redesign of their marketing website.
                    </p>

                    <h2 className='text-3xl font-bold mb-4'>A Digital Experience Lagging Behind Business Ambition</h2>
                    <blockquote className="relative my-8 p-6 bg-gray-50 border-l-4 border-[#A00028]">
                        <Icon icon="mdi:format-quote-open" className="absolute top-2 left-2 text-4xl text-[#A00028] opacity-20" />
                        <p className="text-lg italic text-gray-700">The new site must be visually striking, bold, and impactful, with seamless functionality and exceptional B2B and B2C content. We aim to create an enjoyable experience where customers, independent agents, prospective customers, employees and potential investors can easily find what they need and accomplish their tasks with minimal efforts and few clicks.</p>
                        <footer className="text-right mt-4 text-gray-600">— Client</footer>
                    </blockquote>

                    <p className='text-lg leading-relaxed mt-8'>Their core problems were clear:</p>
                    <ul className='list-disc list-inside text-lg leading-relaxed space-y-2 mt-4'>
                        <li><span className='font-bold'>Outdated & Inconsistent design:</span> The visual design was aged, and inconsistent UI elements created a disjointed user experience.</li>
                        <li><span className='font-bold'>Poor Usability:</span> The site was text-heavy, difficult to scan, and offered a poor mobile experience.</li>
                        <li><span className='font-bold'>Low Performance:</span> The site was failing to convert visitors, and its brand visibility lagged behind competitors in search rankings.</li>
                        <li><span className='font-bold'>Technical Debt:</span> The existing WordPress CMS was no longer scalable or usable for their internal teams.</li>
                    </ul>
                    <p className='text-lg leading-relaxed mt-4'>Our goal was to create an "out-of-this-world" digital experience that not only solved these issues but also established a new benchmark in the insurance industry, supporting their expansion into new states and their ambitious financial goals.</p>
                </div>
                <div className="hidden md:block"></div>
            </div>
          </ContentContainer>
          <div
            className='absolute top-1/4 -right-24 w-48 h-full pointer-events-none'
            style={lightDotsPattern}
          />
        </section>

        {/* Diagnosis & Discovery */}
        <section className="pt-5 md:pt-[50px] lg:pt-[100px] pb-0">
          <ContentContainer>
            <h2 className='text-3xl font-bold mb-4'>Diagnosis & Discovery</h2>
            <p className='text-lg leading-relaxed'>
            Before designing a solution, we needed to deeply understand the existing problems. My first task was to lead a comprehensive audit of the existing website.
            </p>
          </ContentContainer>
        </section>

        {/* Red Band Section 1 */}
        <section className='w-full bg-[#A00028] text-white py-5 md:py-[50px] lg:py-[100px] mt-12'>
          <ContentContainer>
            <div className='grid md:grid-cols-2 gap-12'>
                <div>
                    <h3 className='text-2xl font-bold mb-4'>Heuristic Evaluation & Gap Analysis</h3>
                    <p className='mb-4'>We systematically analyzed every page of the existing site against Nielsen's 10 Usability Heuristics.</p>
                    <ul className='list-disc list-inside space-y-2'>
                        <li>The audit culminated in a 27-page report identifying 56 distinct issues. The most problematic areas were 'Consistency and Standards', 'Flexibility and Efficiency of Use', and 'Aesthetic and Minimalist Design'.</li>
                        <li>The home page and individual product pages had the highest concentration of usability flaws.</li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-2xl font-bold mb-4'>Accessibility Assessment</h3>
                    <p className='mb-4'>We also conducted an accessibility audit where we used a combination of automated code scanning (Lighthouse), visual review for readability, and manual testing with screen readers.</p>
                    <ul className='list-disc list-inside space-y-2'>
                        <li>The site had a baseline Lighthouse accessibility score of 89.85, but manual testing revealed critical gaps.</li>
                        <li>Images lacked proper alt-text, keyboard navigation was broken, color contrast was insufficient, and heading structures were not sequential (h2 to h6), making the site difficult for users with disabilities to navigate.</li>
                    </ul>
                </div>
            </div>
          </ContentContainer>
        </section>
        <div className='bg-black h-32 md:h-64' />

        {/* Rebuilding & Crafting */}
        <section className="relative py-5 md:py-[50px] lg:py-[100px] overflow-hidden">
          <ContentContainer>
            <div className="grid md:grid-cols-2 gap-x-12">
                <div>
                    <h2 className='text-3xl font-bold mb-4'>Understanding the Audience</h2>
                    <p className='text-lg leading-relaxed mb-12'>
                    The client serves two distinct primary audiences: Customers (homeowners) and Agents (B2B partners). We created personas, informed by demographic data provided by the client. Creating these personas was critical as it built empathy, focused our decision-making on user needs, and created alignment between our team and the client who we were building for.
                    </p>

                    <h2 className='text-3xl font-bold mb-4'>Rebuilding the Foundation</h2>
                    <p className='text-lg leading-relaxed mb-6'>The existing site's structure was convoluted. Our process to fix it involved:</p>
                    <ul className='space-y-4 text-lg'>
                        <li><p><span className='font-bold'>Information Architecture Audit:</span> We mapped the current sitemap and identified redundant pages and misplaced components.</p></li>
                        <li><p><span className='font-bold'>Competitive Analysis:</span> We analyzed other competitor websites, uncovering opportunities to include valuable features the client was missing, such as a Spanish language option, a prominent 'Find an Agent' tool, and dedicated sections for 'Investors' and 'Sustainability' to build trust.</p></li>
                        <li><p><span className='font-bold'>Strategic Alignment:</span> A key debate emerged: should the site have separate experiences for agents and customers, or a unified view? Since agents were as crucial to their business as customers, we presented the pros and cons of each approach. After several discussions with the client and iterations, we landed on a finalized, user-centric sitemap.</p></li>
                    </ul>
                </div>
                <div className="hidden md:block"></div>
            </div>
          </ContentContainer>
          <div
            className='absolute top-1/4 -right-24 w-48 h-full pointer-events-none'
            style={lightDotsPattern}
          />
        </section>
        <div className='bg-black h-32 md:h-64' />

        <section className="py-5 md:py-[50px] lg:py-[100px]">
          <ContentContainer>
            <h2 className='text-3xl font-bold mb-4'>Crafting the Experience</h2>
            <p className='text-lg leading-relaxed mb-6'>With a solid architectural foundation, we moved into stylistic exploration. We explored four distinct stylistic directions to push the creative boundaries, based on our analysis of competitor websites:</p>
            <ol className='list-decimal list-inside text-lg space-y-2 mb-6'>
                <li>Friendly & Approachable</li>
                <li>Modern & Sleek</li>
                <li>Futuristic & Tech-Forward</li>
                <li>Playful & Illustrated</li>
            </ol>
            <p className='text-lg leading-relaxed'>We presented these themes as mood boards, each with typography pairings and a guide outlining its pros and cons. The client rejected 'Playful' as off-brand and felt 'Futuristic' lacked a human touch. They were drawn to a hybrid of 'Friendly & Approachable' and 'Modern & Sleek', giving us a clear, nuanced direction.</p>
          </ContentContainer>
        </section>
        <div className='bg-gray-200 h-32 md:h-64' />

        {/* Red Band Section 2 */}
        <section className='w-full bg-[#A00028] text-white py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer>
            <h2 className='text-3xl font-bold mb-4'>A Stakeholder-driven Pivot</h2>
            <p className='text-lg leading-relaxed opacity-95'>Based on the 'Hybrid' style, we developed a high-fidelity visual design with a light, airy, and open feel. The light theme projected friendliness and the use of airy / negative space gave the impression of modernness. Until now, we had been working with the client's marketing team and receiving feedback from them. However, in a demo with the CEO and CTO, the hybrid design was met with disapproval. The upper leadership had envisioned a dark, and bold theme. This was a critical moment. We quickly pivoted, revisiting our design explorations and adopted them into a sophisticated dark theme. Over a few iterations involving continuous feedback from the upper leadership, the revised mockup was presented to the client, including the CEO and CTO, and it was met with an enthusiastic approval. This was our finalized direction.</p>
          </ContentContainer>
        </section>

        {/* Designing for Scalability */}
        <section className="py-5 md:py-[50px] lg:py-[100px]">
          <ContentContainer>
            <h2 className='text-3xl font-bold mb-4'>Designing for Scalability</h2>
            <p className='text-lg leading-relaxed mb-4'>We wireframed layouts for the home page, exploring multiple versions for each section. This upfront exploration gave us a library of section layouts we could adapt later.</p>
            <p className='text-lg leading-relaxed mb-4'>With the visual style locked in, we designed the remaining pages. To ensure consistency and efficiency, we developed a component-based system.</p>
            <ul className='list-disc list-inside text-lg space-y-2'>
                <li>We created 30+ reusable components and section templates.</li>
                <li>This system allowed us to design over 40+ unique screens cohesively.</li>
                <li>It also streamlined the development process, ensuring visual consistency and speeding up implementation.</li>
            </ul>
          </ContentContainer>
        </section>

        {/* The Impact: dark band with table */}
        <section className='bg-[#222222] text-white py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer>
            <h2 className='text-3xl font-bold mb-4'>The Impact: A Transformation in Performance & Perception</h2>
            <p className='text-lg leading-relaxed mb-8 opacity-95'>
            The new website launched successfully, delivering immediate and measurable improvements. We had tracked KPIs at the beginning of the project and measured them again shortly after launch.
            </p>
            <div className="border border-gray-700 rounded-lg p-6">
                <div className="grid grid-cols-4 items-center gap-4 text-center font-bold border-b border-gray-600 pb-3 mb-3">
                    <span className="text-left">Metric</span>
                    <span>Before Launch</span>
                    <span>After Launch</span>
                    <span>Improvement</span>
                </div>
                {metrics.map((metric) => (
                    <Metric key={metric.name} {...metric} />
                ))}
            </div>
            <p className='text-lg leading-relaxed mt-8 opacity-95'>
            By combining a rigorous UX process with the flexibility to adapt to senior stakeholder feedback, we transformed an underperforming website into a visually striking, highly functional, and scalable platform. The new site now accurately reflects the client's position as an industry leader and is equipped to support their continued growth towards becoming a billion-dollar company.
            </p>
          </ContentContainer>
        </section>

        {/* Challenges & Learnings */}
        <section className="py-5 md:py-[50px] lg:py-[100px]">
          <ContentContainer>
            <h2 className='text-3xl font-bold mb-4'>Challenges & Learnings</h2>
            <p className='text-lg leading-relaxed mb-8'>
            No project is without its hurdles. Navigating these challenges provided valuable lessons for future engagements:
            </p>
            <ul className='space-y-6'>
                <li className='flex items-start gap-4'>
                    <Icon icon='mdi:account-group' className='text-2xl text-[#A00028] mt-1 flex-shrink-0' />
                    <p className='text-lg'>Engage final decision-makers early and often. Securing their buy-in on foundational elements is crucial to prevent wasted cycles.</p>
                </li>
                <li className='flex items-start gap-4'>
                    <Icon icon='mdi:lightbulb-on-outline' className='text-2xl text-[#A00028] mt-1 flex-shrink-0' />
                    <p className='text-lg'>A strong brand foundation is a prerequisite for a strong website. In the future, I would advocate for a brand strategy engagement before commencing a full site redesign.</p>
                </li>
                <li className='flex items-start gap-4'>
                    <Icon icon='mdi:clock-outline' className='text-2xl text-[#A00028] mt-1 flex-shrink-0' />
                    <p className='text-lg'>Delays in client feedback and approvals pushed our timeline back by several weeks. Set clear expectations for feedback turnaround times in the project plan and proactively communicate the impact of delays on the timeline.</p>
                </li>
            </ul>
          </ContentContainer>
        </section>
      </main>
    </div>
  );
};

export default InsuranceCompanyWebsiteRedesign;