import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Icon } from '@iconify/react';
import HeaderV2 from '../../components/HeaderV2/HeaderV2';
import Typography from '../../components/Typography';
import { useAnalytics } from '../../hooks/useAnalytics';
import { useScrollTracking } from '../../hooks/useScrollTracking';
import { useTimeTracking } from '../../hooks/useTimeTracking';

const ASSET_PATH = '/v2/images/projects/loan-app-experience-optimization';

const TOC = [
  { id: 'intro', label: 'Intro' },
  { id: 'problem', label: 'Problem' },
  { id: 'discovery', label: 'Constraints' },
  { id: 'key-decisions', label: 'Solution' },
  { id: 'outcome', label: 'Outcomes' },
  { id: 'tradeoffs', label: 'Tradeoffs' },
  { id: 'reflection', label: 'Reflection' },
];

const images = {
  hero: 'hero-mobile-dashboard.png',
  audit: 'original-application-audit.png',
  dropdownSlider: 'dropdown-slider-flow.png',
  progressiveDisclosure: 'progressive-disclosure-flow.png',
  milestoneIllustrations: 'milestone-illustrations-flow.png',
  finalFlow: 'outcome.png',
};

const Section = ({ id, title, children, className = '' }) => (
  <section id={id} className={`scroll-mt-28 ${className || 'mb-12 md:mb-[88px]'}`}>
    {title && (
      <Typography as="h2" variant="h6Medium" className="mb-8 text-gray-900">
        {title}
      </Typography>
    )}
    {children}
  </section>
);

const Paragraph = ({ children, className = '' }) => (
  <Typography
    as="p"
    variant="bodyRegular"
    className={`text-gray-900 ${className}`}
  >
    {children}
  </Typography>
);

const Label = ({ children, className = '' }) => (
  <Typography as="h3" variant="bodySemibold" className={`text-gray-900 ${className}`}>
    {children}
  </Typography>
);

const Caption = ({ children, className = '' }) => (
  <Typography
    as="p"
    variant="smallRegular"
    className={`text-gray-900 ${className}`}
  >
    {children}
  </Typography>
);

const ImageFrame = ({
  src,
  alt,
  caption,
  className = 'w-full max-w-[360px] justify-self-center lg:justify-self-end',
  frameClassName = 'relative aspect-[4/5]',
  imgClassName = 'absolute w-[80%] max-w-none object-contain',
}) => {
  const frameRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasSettled, setHasSettled] = useState(false);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame || isVisible) return undefined;

    const revealWhenVisible = () => {
      const rect = frame.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.top < viewportHeight * 0.78 && rect.bottom > viewportHeight * 0.2) {
        setIsVisible(true);
      }
    };

    revealWhenVisible();
    window.addEventListener('scroll', revealWhenVisible, { passive: true });
    window.addEventListener('resize', revealWhenVisible);

    return () => {
      window.removeEventListener('scroll', revealWhenVisible);
      window.removeEventListener('resize', revealWhenVisible);
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return undefined;

    const settleTimer = window.setTimeout(() => setHasSettled(true), 1200);
    return () => window.clearTimeout(settleTimer);
  }, [isVisible]);

  return (
    <figure className={className}>
      <div
        ref={frameRef}
        className={`overflow-hidden rounded-[20px] bg-gray-900 ${frameClassName}`}
      >
        <img
          key={hasSettled ? 'settled' : 'revealing'}
          src={`${ASSET_PATH}/${src}`}
          alt={alt}
          className={`${imgClassName} ${hasSettled ? '' : 'transition-[top] duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)]'}`}
          style={{
            left: '50%',
            top: isVisible ? '40px' : '100%',
            transform: 'translateX(-50%)',
          }}
        />
      </div>
      {caption && <Caption className="mt-2">{caption}</Caption>}
    </figure>
  );
};

const ProblemBlock = ({ title, children }) => (
  <div>
    <Typography as="h3" variant="h6Medium" className="mb-4 text-gray-900">
      {title}
    </Typography>
    <Typography as="p" variant="h6Regular" className="text-gray-900">
      {children}
    </Typography>
  </div>
);

const InsightCallout = () => (
  <div className="mb-12 mt-12 md:mt-[100px]">
    <div className="flex items-center gap-5">
      <Icon
        icon="material-symbols-light:gpp-bad-outline"
        className="size-[60px] flex-shrink-0 text-[#0795EE]"
      />
      <Label className="mb-0">
        The form wasn't just long. It was asking pre-approved customers to provide information the bank already had.
      </Label>
    </div>
    <Paragraph className="ml-20 mt-5">
      For a customer who's just been told "you qualify," an 11-screen interrogation doesn't feel like a formality. It feels like the bank doesn't trust them at the exact moment they're about to commit. The UX problem was real. But underneath it was a trust problem.
    </Paragraph>
  </div>
);

const WireframeExamples = () => (
  <figure>
    <div className="flex items-center justify-center overflow-hidden rounded-[20px] bg-gray-900 p-8">
      <img
        src={`${ASSET_PATH}/${images.audit}`}
        alt="Original application audit"
        className="h-auto w-full object-contain"
      />
    </div>
    <Caption className="mt-2 text-gray-900">
      Wireframe examples.
    </Caption>
  </figure>
);



const LoanAppExperienceOptimization = () => {
  useAnalytics('project_detail', {
    projectName: 'loan-app-experience-optimization',
    projectType: 'professional',
  });
  useScrollTracking();
  useTimeTracking();

  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const handleScroll = () => {
      let currentActiveId = 'intro';
      TOC.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element && element.getBoundingClientRect().top <= 140) {
          currentActiveId = item.id;
        }
      });

      // If we reach the bottom of the page, force the last section to be active.
      // We check if the viewport is within 100px of the bottom of the page to handle zoom, dynamic heights, or scaled displays robustly.
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      if (isAtBottom) {
        currentActiveId = TOC[TOC.length - 1].id;
      }

      setActiveSection(currentActiveId);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 100, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gradient-to-br from-white to-[#EBEBEB] min-h-screen text-gray-900">
      <HeaderV2 />

      <div className="mx-auto flex max-w-[1440px] px-5 pb-32 pt-10 lg:px-10">
        <aside className="sticky top-[130px] hidden max-h-[calc(100vh-140px)] w-[180px] flex-shrink-0 self-start overflow-y-auto lg:block">
          <nav className="flex flex-col gap-[40px]">
            <Link to="/" className="back-link-group -ml-1 inline-flex items-center gap-1 text-base font-medium text-gray-500 transition-colors duration-200">
              <ChevronLeft size={20} className="icon-solid-hover transition-colors duration-200" />
              <Typography as="span" variant="smallLight" className="shimmer-text">Home</Typography>
            </Link>
            <div className="flex flex-col gap-[12px]">
              {TOC.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(event) => scrollToSection(event, item.id)}
                  className={`transition-colors ${activeSection === item.id ? 'text-gray-900' : 'text-gray-500 nav-item-shimmer'}`}
                >
                  <Typography as="span" variant={activeSection === item.id ? 'smallRegular' : 'smallLight'}>{item.label}</Typography>
                </a>
              ))}
            </div>
          </nav>
        </aside>

        <main className="mx-auto w-full max-w-[860px] lg:ml-20 xl:ml-32">
          <section id="intro" className="scroll-mt-28 mb-10 md:mb-[84px]">
            <Typography as="h1" variant="h2Regular" className="mb-12 md:mb-[100px] max-w-[720px] text-gray-900">
              Slashing projected loan application time by 36% by redesigning for trust and efficiency.
            </Typography>

            <div className="mb-12 md:mb-[100px] flex flex-col gap-1 text-gray-500">
              <div className="flex gap-4">
                <Typography as="span" variant="bodyRegular" className="w-[74px] flex-shrink-0">Role</Typography>
                <Typography as="span" variant="bodyRegular">UX/UI Designer, 4 weeks</Typography>
              </div>
              <div className="flex gap-4">
                <Typography as="span" variant="bodyRegular" className="w-[74px] flex-shrink-0">Team</Typography>
                <Typography as="span" variant="bodyRegular">Project Manager, UX/UI Designer</Typography>
              </div>
            </div>

            <div className="grid items-center gap-10 lg:grid-cols-[minmax(270px,0.85fr)_minmax(420px,1.15fr)]">
              <Typography
                as="p"
                variant="bodyRegular"
                className="max-w-[380px] text-gray-900"
              >
                80% of digital loan applicants were pre-approved. The bank had already assessed their eligibility, already decided to offer them a loan. These should have been the easiest conversions in the funnel. They weren't.
              </Typography>

              <figure className="flex flex-col items-center">
                <div className="flex aspect-square w-full max-w-[520px] items-center justify-center overflow-hidden rounded-[20px] bg-[#F5F5F5] p-10">
                  <img
                    src={`${ASSET_PATH}/${images.hero}`}
                    alt="Redesigned loan application mobile dashboard"
                    className="h-full max-h-[440px] w-auto object-contain"
                  />
                </div>
                <Caption className="mt-2 w-full text-gray-900">
                  Redesigned landing page of the bank app.
                </Caption>
              </figure>
            </div>
          </section>

          <Section id="problem" title="" className="mb-12 md:mb-[100px]">
            <blockquote className="border-l-[8px] border-gray-900 pl-5">
              <ProblemBlock title="Problem for the business:">
                High drop-off on a critical revenue channel, despite a pre-approved pool that should have converted easily.
              </ProblemBlock>
              <div className="mt-8">
                <ProblemBlock title="Problem for the customer:">
                  An 11-screen form that asked for excessive information, created fatigue, and gave no sense of progress or end in sight.
                </ProblemBlock>
              </div>
            </blockquote>

            <InsightCallout />
          </Section>

          <Section id="discovery" title="Designing under constraint">
            <div className="mt-10 flex gap-7">
              <Icon
                icon="material-symbols-light:calendar-clock-outline"
                className="-mt-3 size-[60px] flex-shrink-0 text-[#0795EE]"
              />
              <div>
                <Label className="mb-0">
                  A 1-month timeline ruled out a formal research phase.
                </Label>
                <Paragraph>
                  The more significant constraint was access. The client couldn't facilitate direct contact with end users, typical of large banking engagements. No user interviews, no analytics, no usability testing.
                </Paragraph>
              </div>
            </div>

            <div className="mt-14 grid items-center gap-12 lg:grid-cols-[minmax(260px,0.8fr)_minmax(420px,1.2fr)]">
              <Paragraph className="max-w-[360px]">
                What I had: the client stakeholder and consistent thematic feedback from their customer-facing teams; complaints centered on form length, and a repetitive experience that gave no sense of progress.
              </Paragraph>
              <WireframeExamples />
            </div>

            <blockquote className="mt-16 border-l-[8px] border-gray-900 pl-7">
              <Typography as="p" variant="h6Regular" className="text-gray-900">
                Each field was mapped against two questions: does the bank already have this? Does it affect eligibility? This heuristic audit covered every screen and field in the existing 11-screen flow.
              </Typography>
              <Typography as="p" variant="h6Regular" className="mt-10 text-gray-900">
                Fields that failed both questions were removed. What remained was regrouped into a logical sequence - Personal Info, Financials, Review.
              </Typography>
            </blockquote>
          </Section>

          <Section id="key-decisions" title="Decisions that shaped the design">
            <div className="mt-10 flex flex-col gap-12 md:gap-[100px]">
              <div className="grid items-center gap-12 lg:grid-cols-[minmax(340px,1fr)_minmax(300px,360px)]">
                <div>
                  <Label className="mb-6 max-w-[430px]">
                    Replacing the dropdown with an interactive slider
                  </Label>
                  <Paragraph className="max-w-[460px]">
                    The original required three steps to do one thing: open a dropdown, select a term, wait for the rate to update. The slider collapsed those into a single gesture and changed the nature of the decision. Users can now explore the tradeoff between term length and monthly payment in real time, building confidence before they commit.
                  </Paragraph>
                </div>

                <ImageFrame
                  src={images.dropdownSlider}
                  alt="Loan details screen with interactive term and payment sliders"
                  caption="Loan details screen: slider lets users explore term length and monthly payment in real time before committing."
                />
              </div>

              <div className="grid items-center gap-12 lg:grid-cols-[minmax(340px,1fr)_minmax(300px,360px)]">
                <div>
                  <Label className="mb-6 max-w-[430px]">
                    Progressive disclosure
                  </Label>
                  <Paragraph className="max-w-[460px]">
                    The single long form created a cognitive load problem: no sense of structure, no sense of progress. Breaking the flow into named sections gave users a mental model of where they were and what remained. Each section had a clear scope, so no field felt out of place.
                  </Paragraph>
                </div>

                <ImageFrame
                  src={images.progressiveDisclosure}
                  alt="Placeholder for progressive disclosure screen"
                  caption="Named sections and a progress bar orient users through the flow."
                />
              </div>

              <div className="grid items-center gap-12 lg:grid-cols-[minmax(340px,1fr)_minmax(300px,360px)]">
                <div>
                  <Label className="mb-6 max-w-[430px]">
                    Milestone illustrations
                  </Label>
                  <Paragraph className="max-w-[460px]">
                    Multi-step forms create anxiety, and anxiety causes abandonment. At three points in the flow, milestone illustrations and short messages acknowledge progress and reframe what's left as achievable. Completion feels earned, not just reached.
                  </Paragraph>
                </div>

                <ImageFrame
                  src={images.milestoneIllustrations}
                  alt="Placeholder for milestone illustration screens"
                  caption="Named sections and a progress bar orient users through the flow."
                />
              </div>
            </div>
          </Section>

          <Section id="outcome" title="What changed">
            <blockquote className="mb-14 border-l-[8px] border-gray-900 pl-7">
              <Typography as="p" variant="h6Regular" className="text-gray-900">
                The redesigned flow reduced the application from 11 screens to 7, a 36% reduction based on screen count and interaction audit.
              </Typography>
              <Typography as="p" variant="h6Regular" className="mt-10 text-gray-900">
                Redundant fields were removed; some others were converted from input fields to review fields, pre-populated with data the bank already had. The slider reduced a 3-step interaction to one.
              </Typography>
            </blockquote>

            <figure className="mb-14">
              <div className="flex items-center justify-center overflow-hidden rounded-[20px] bg-gray-900">
                <img
                  src={`${ASSET_PATH}/${images.finalFlow}`}
                  alt="The redesigned 7-screen flow"
                  className="h-auto w-full object-contain"
                />
              </div>
              <Caption className="mt-2 text-gray-900">
                The redesigned 7-screen flow.
              </Caption>
            </figure>

            <Paragraph>
              The redesign was handed off to the client's internal dev team and the engagement ended at handoff. The 36% is a projection grounded in structural changes made, not a measured result.
            </Paragraph>
          </Section>

          <Section id="tradeoffs" title="The gaps I designed around">
            <Label className="mb-4">Stakeholder feedback vs. user truth</Label>
            <Paragraph className="mb-12">
              The field audit relied on stakeholder-reported complaints rather than direct user input. With no access to users or analytics, heuristic analysis became the primary lens for identifying issues; a deliberate call given the constraints. Stakeholders interpret user feedback through their own priorities, and what they surface may not reflect where users actually struggled. The problem definition was never validated directly with users.
            </Paragraph>

            <Label className="mb-4">Screen reduction vs. cognitive load</Label>
            <Paragraph className="mb-16">
              Fewer screens reduce steps but don't automatically reduce cognitive load. The decision rested on the removals being genuine: fields eliminated, not reshuffled, and some converted to pre-populated review fields. But without usability testing, it remains unconfirmed that the consolidation hit the right balance.
            </Paragraph>
          </Section>

          <Section id="reflection" title="" className="mb-0">
            <Typography as="h2" variant="h6Medium" className="mb-8 text-gray-900">
              What I'd do differently
            </Typography>
            <Paragraph>
              I'd push the client to share funnel analytics before starting. Without data on where users dropped off, the redesign was solving for a pattern rather than a specific problem. Even rough drop-off rates by screen would have sharpened prioritization and made the outcome measurable rather than projected.
            </Paragraph>
          </Section>
        </main>
      </div>
    </div>
  );
};

export default LoanAppExperienceOptimization;
