import { DecorativeDots, StrokeAnimation } from '../../common';

import { Icon } from '@iconify/react';
import React from 'react';
import { useAnalytics } from '../../hooks/useAnalytics';
import { useScrollTracking } from '../../hooks/useScrollTracking';
import { useTimeTracking } from '../../hooks/useTimeTracking';

// Reusable components for this case study's theme

const Tag = ({ children }) => (
  <span className='bg-[#fddde4] text-black rounded-full px-4 py-1 text-sm font-medium'>
    {children}
  </span>
);

const Result = ({ icon, title, children }) => (
  <div>
    <div className='mb-4'>
      <Icon icon={icon} width="100px" height="100px" style={{ color: '#fddde4', fontWeight: 200 }} />
    </div>
    <h3 className='font-playfair text-xl font-bold mb-2'>{title}</h3>
    <p className='font-mulish opacity-95'>{children}</p>
  </div>
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
  // Track page view, scroll depth, and time on page
  useAnalytics('project_detail', {
    projectName: 'insurance-company-website-redesign',
    projectType: 'professional'
  });
  useScrollTracking();
  useTimeTracking();

  const tags = [
    'Figma', 'FigJam', 'Product Design', 'UX Research', 'Wireframing',
    'Interaction Design', 'Visual Design', 'Responsive Design', 'Design QA', 'Drupal CMS'
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
      <header className='w-full bg-[#A10026]'>
        <ContentContainer className='relative flex flex-col md:flex-row'>
          <div className='text-white max-w-2xl py-5 md:py-[50px] lg:py-[100px]'>
            <h1 className='font-playfair text-4xl md:text-5xl font-extrabold leading-tight tracking-tight'>
              Building Trust in Fintech: A 0→1 Redesign for a $1B Growth Company
            </h1>
            <p className='font-mulish text-lg md:text-xl mt-4 opacity-95'>
              Redesign that reduced heuristic violations by 90% and overall <StrokeAnimation strokeColor="000000">site performance by 37%</StrokeAnimation>, creating a platform built for growth.
            </p>
            <div className='flex flex-wrap gap-2 mt-6'>
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
          <img
            src='/insurance-company-website-design/hero.png'
            alt='Insurance Company Website Redesign Hero'
            className='w-full max-w-[600px] self-end h-auto object-cover max-h-[500px] md:mt-50'
            style={{ boxShadow: '0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 -4px 6px -2px rgba(0, 0, 0, 0.05)' }}
          />
          <DecorativeDots color="A10026" position="top-left" />
        </ContentContainer>
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
                Product Manager, Product Owner, 2 UX/UI Designers, Content Writer, Webflow Developer, Drupal Developer
              </p>

              {/* Duration */}
              <div className='col-start-1 flex items-center whitespace-nowrap'>
                <Icon
                  icon='mdi:clock-outline'
                  className='text-2xl text-black mr-4'
                />
                <h3 className='font-mulish font-bold text-lg'>Duration:</h3>
              </div>
              <p className='font-mulish col-start-2 text-gray-600 text-lg'>10 months</p>
            </div>
          </ContentContainer>
        </section>

        <div>
            <ContentContainer>
                <hr className='border-[#fddde4] mb-12' />
            </ContentContainer>
        </div>

        {/* Context & Digital Experience */}
        <section className='py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer className='relative overflow-hidden'>
            <DecorativeDots color="A10026" position="top-right" />
            <div className='flex flex-col gap-12'>
              <div>
                <h2 className='font-playfair text-3xl font-bold mb-4'>Context</h2>
                <p className='font-mulish text-lg leading-relaxed max-w-[800px]'>
                  A mid-sized, third-fastest-growing U.S. home insurance provider, on a trajectory to reach $1 billion in revenue, sought to overhaul its public-facing website. The existing site suffered from an outdated design, poor usability, and low conversion rates, failing to reflect the company's market position as a tech-forward industry leader. I joined the project as one of two UX/UI designers tasked with redesigning the user experience from the ground up. We began with a proof of concept (POC) for the home page, successfully winning the contract, and then proceeded to a full-scale redesign of their marketing website.
                </p>
              </div>
              <div>
                <h2 className='font-playfair text-3xl font-bold mb-4'>A Digital Experience Lagging Behind Business Ambition</h2>
                <blockquote className="relative my-8 p-6 bg-gray-50 border-l-4 border-[#A10026]">
                  <p className="font-mulish text-lg italic text-gray-700">The new site must be visually striking, bold, and impactful, with seamless functionality and exceptional B2B and B2C content. We aim to create an enjoyable experience where customers, independent agents, prospective customers, employees and potential investors can easily find what they need and accomplish their tasks with minimal efforts and few clicks.</p>
                  <footer className="text-right mt-4 text-gray-600">— Client</footer>
                </blockquote>

                <p className='font-mulish text-lg leading-relaxed mt-8 max-w-[800px]'>Their core problems were clear:</p>
                <ul className='font-mulish list-disc list-inside text-lg leading-relaxed space-y-2 mt-4 max-w-[800px]'>
                  <li><span className='font-bold'>Outdated & Inconsistent design:</span> The visual design was aged, and inconsistent UI elements created a disjointed user experience.</li>
                  <li><span className='font-bold'>Poor Usability:</span> The site was text-heavy, difficult to scan, and offered a poor mobile experience.</li>
                  <li><span className='font-bold'>Low Performance:</span> The site was failing to convert visitors, and its brand visibility lagged behind competitors in search rankings.</li>
                  <li><span className='font-bold'>Technical Debt:</span> The existing WordPress CMS was no longer scalable or usable for their internal teams.</li>
                </ul>
                <p className='font-mulish text-lg leading-relaxed mt-4 max-w-[800px]'>Our goal was to create an "out-of-this-world" digital experience that not only solved these issues but also established a new benchmark in the insurance industry, supporting their expansion into new states and their ambitious financial goals.</p>
              </div>
            </div>
          </ContentContainer>
        </section>

        {/* Diagnosis & Discovery */}
        <section className='py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer>
            <h2 className='font-playfair text-3xl font-bold mb-4'>Diagnosis & Discovery</h2>
            <p className='font-mulish text-lg leading-relaxed max-w-[800px]'>
              Before designing a solution, we needed to deeply understand the existing problems. My first task was to lead a comprehensive audit of the existing website.
            </p>
          </ContentContainer>
        </section>

        {/* Red Band Section 1 */}
        <section className='w-full bg-[#A10026] text-white py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer>
            <div className='grid md:grid-cols-2 gap-12'>
              <div>
                <h3 className='font-playfair text-2xl font-bold mb-4'>Heuristic Evaluation & Gap Analysis</h3>
                <p className='font-mulish text-lg leading-relaxed mb-4 opacity-90'>We systematically analyzed every page of the existing site against Nielsen's 10 Usability Heuristics.</p>
                <ul className='font-mulish list-disc list-inside text-lg leading-relaxed space-y-2 opacity-90'>
                  <li>The audit culminated in a 27-page report identifying 56 distinct issues. The most problematic areas were 'Consistency and Standards', 'Flexibility and Efficiency of Use', and 'Aesthetic and Minimalist Design'.</li>
                  <li>The home page and individual product pages had the highest concentration of usability flaws.</li>
                </ul>
              </div>
              <div>
                <h3 className='font-playfair text-2xl font-bold mb-4'>Accessibility Assessment</h3>
                <p className='font-mulish text-lg leading-relaxed mb-4 opacity-90'>We also conducted an accessibility audit where we used a combination of automated code scanning (Lighthouse), visual review for readability, and manual testing with screen readers.</p>
                <ul className='font-mulish list-disc list-inside text-lg leading-relaxed space-y-2 opacity-90'>
                  <li>The site had a baseline Lighthouse accessibility score of 89.85, but manual testing revealed critical gaps.</li>
                  <li>Images lacked proper alt-text, keyboard navigation was broken, color contrast was insufficient, and heading structures were not sequential (h2 to h6), making the site difficult for users with disabilities to navigate.</li>
                </ul>
              </div>
            </div>
          </ContentContainer>
        </section>

        {/* Rebuilding & Crafting */}
        <section className='py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer className='relative overflow-hidden'>
            <DecorativeDots color="A10026" position="top-right" />
            <div className='flex flex-col gap-12'>
              <div>
                <h2 className='font-playfair text-3xl font-bold mb-4'>Understanding the Audience</h2>
                <p className='font-mulish text-lg leading-relaxed max-w-[800px]'>
                  The client serves two distinct primary audiences: Customers (homeowners) and Agents (B2B partners). We created personas, informed by demographic data provided by the client. Creating these personas was critical as it built empathy, focused our decision-making on user needs, and created alignment between our team and the client who we were building for.
                </p>
                <div className='flex flex-col md:flex-row gap-4 mt-8'>
                  <img src='/insurance-company-website-design/persona1.png' alt='Persona 1' className='w-full md:w-1/2 h-auto' />
                  <img src='/insurance-company-website-design/persona2.png' alt='Persona 2' className='w-full md:w-1/2 h-auto object-cover' />
                </div>
              </div>
              <div>
                <h2 className='font-playfair text-3xl font-bold mb-4'>Rebuilding the Foundation</h2>
                <p className='font-mulish text-lg leading-relaxed mb-6 max-w-[800px]'>The existing site's structure was convoluted. Our process to fix it involved:</p>
                <ul className='font-mulish space-y-4 text-lg max-w-[800px]'>
                  <li><p className='font-mulish'><span className='font-bold'>Information Architecture Audit:</span> We mapped the current sitemap and identified redundant pages and misplaced components.</p></li>
                  <li><p className='font-mulish'><span className='font-bold'>Competitive Analysis:</span> We analyzed other competitor websites, uncovering opportunities to include valuable features the client was missing, such as a Spanish language option, a prominent 'Find an Agent' tool, and dedicated sections for 'Investors' and 'Sustainability' to build trust.</p></li>
                  <li><p className='font-mulish'><span className='font-bold'>Strategic Alignment:</span> A key debate emerged: should the site have separate experiences for agents and customers, or a unified view? Since agents were as crucial to their business as customers, we presented the pros and cons of each approach. After several discussions with the client and iterations, we landed on a finalized, user-centric sitemap.</p></li>
                </ul>
              </div>
            </div>
          </ContentContainer>
        </section>

        <section className='w-full'>
          <img src='/insurance-company-website-design/foundation.png' alt='Foundation' className='w-full h-auto' />
        </section>

        <section className='py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer>
            <h2 className='font-playfair text-3xl font-bold mb-4'>Crafting the Experience</h2>
            <p className='font-mulish text-lg leading-relaxed mb-6 max-w-[800px]'>With a solid architectural foundation, we moved into stylistic exploration. We explored four distinct stylistic directions to push the creative boundaries, based on our analysis of competitor websites:</p>
            <ol className='font-mulish list-decimal list-inside text-lg leading-relaxed space-y-2 mb-6 max-w-[800px]'>
              <li>Friendly & Approachable</li>
              <li>Modern & Sleek</li>
              <li>Futuristic & Tech-Forward</li>
              <li>Playful & Illustrated</li>
            </ol>
            <p className='font-mulish text-lg leading-relaxed max-w-[800px]'>We presented these themes as mood boards, each with typography pairings and a guide outlining its pros and cons. The client rejected 'Playful' as off-brand and felt 'Futuristic' lacked a human touch. They were drawn to a hybrid of 'Friendly & Approachable' and 'Modern & Sleek', giving us a clear, nuanced direction.</p>
          </ContentContainer>
        </section>

        {/* Red Band Section 2 */}
        <section className='w-full bg-[#A10026] text-white py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer>
            <h2 className='font-playfair text-3xl font-bold mb-4'>A Stakeholder-driven Pivot</h2>
            <p className='font-mulish text-lg leading-relaxed opacity-90 max-w-[800px]'>Based on the 'Hybrid' style, we developed a high-fidelity visual design with a light, airy, and open feel. The light theme projected friendliness and the use of airy / negative space gave the impression of modernness. Until now, we had been working with the client's marketing team and receiving feedback from them. However, in a demo with the CEO and CTO, the hybrid design was met with disapproval. The upper leadership had envisioned a dark, and bold theme. This was a critical moment. We quickly pivoted, revisiting our design explorations and adopted them into a sophisticated dark theme. Over a few iterations involving continuous feedback from the upper leadership, the revised mockup was presented to the client, including the CEO and CTO, and it was met with an enthusiastic approval. This was our finalized direction.</p>
          </ContentContainer>
        </section>

        {/* Designing for Scalability */}
        <section className='py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer className='relative overflow-hidden'>
            <DecorativeDots color="A10026" position="top-right" />
            <h2 className='font-playfair text-3xl font-bold mb-4'>Designing for Scalability</h2>
            <p className='font-mulish text-lg leading-relaxed mb-4 max-w-[800px]'>We wireframed layouts for the home page, exploring multiple versions for each section. This upfront exploration gave us a library of section layouts we could adapt later.</p>
            <p className='font-mulish text-lg leading-relaxed mb-4 max-w-[800px]'>With the visual style locked in, we designed the remaining pages. To ensure consistency and efficiency, we developed a component-based system.</p>
            <ul className='font-mulish list-disc list-inside text-lg leading-relaxed space-y-2 max-w-[800px]'>
              <li>We created 30+ reusable components and section templates.</li>
              <li>This system allowed us to design over 40+ unique screens cohesively.</li>
              <li>It also streamlined the development process, ensuring visual consistency and speeding up implementation.</li>
            </ul>
          </ContentContainer>
        </section>

        <section className='w-full'>
          <img src='/insurance-company-website-design/impact.png' alt='Impact' className='w-full h-auto' />
        </section>

        {/* The Impact: dark band with table */}
        <section className='bg-[#222222] text-white py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer>
            <h2 className='font-playfair text-3xl font-bold mb-4'>
              The Impact: A Transformation in Performance & Perception
            </h2>
            <p className='font-mulish text-lg leading-relaxed mb-8 opacity-95 max-w-[800px]'>
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
            <p className='font-mulish text-lg leading-relaxed mt-8 opacity-95 max-w-[800px]'>
              By combining a rigorous UX process with the flexibility to adapt to senior stakeholder feedback, we transformed an underperforming website into a visually striking, highly functional, and scalable platform. The new site now accurately reflects the client's position as an industry leader and is equipped to support their continued growth towards becoming a billion-dollar company.
            </p>
          </ContentContainer>
        </section>

        {/* Challenges & Learnings */}
        <section className='py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer className='relative overflow-hidden'>
            <DecorativeDots color="A10026" position="top-right" />
            <h2 className='font-playfair text-3xl font-bold mb-4'>Challenges & Learnings</h2>
            <p className='font-mulish text-lg leading-relaxed mb-8 max-w-[800px]'>
              No project is without its hurdles. Navigating these challenges provided valuable lessons for future engagements:
            </p>
            <ul className='space-y-6 max-w-[800px]'>
              <li className='flex items-start gap-4'>
                <Icon icon='mdi:account-group' className='text-2xl text-[#A10026] mt-1 flex-shrink-0' />
                <p className='font-mulish text-lg leading-relaxed'>Engage final decision-makers early and often. Securing their buy-in on foundational elements is crucial to prevent wasted cycles.</p>
              </li>
              <li className='flex items-start gap-4'>
                <Icon icon='mdi:lightbulb-on-outline' className='text-2xl text-[#A10026] mt-1 flex-shrink-0' />
                <p className='font-mulish text-lg leading-relaxed'>A strong brand foundation is a prerequisite for a strong website. In the future, I would advocate for a brand strategy engagement before commencing a full site redesign.</p>
              </li>
              <li className='flex items-start gap-4'>
                <Icon icon='mdi:clock-outline' className='text-2xl text-[#A10026] mt-1 flex-shrink-0' />
                <p className='font-mulish text-lg leading-relaxed'>Delays in client feedback and approvals pushed our timeline back by several weeks. Set clear expectations for feedback turnaround times in the project plan and proactively communicate the impact of delays on the timeline.</p>
              </li>
            </ul>
          </ContentContainer>
        </section>
      </main>
    </div>
  );
};

export default InsuranceCompanyWebsiteRedesign;