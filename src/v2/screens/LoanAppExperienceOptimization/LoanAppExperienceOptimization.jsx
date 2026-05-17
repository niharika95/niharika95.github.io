import React, { useEffect, useState } from 'react';
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
  { id: 'problem', label: 'Problem in a nutshell' },
  { id: 'discovery', label: 'Discovery under pressure' },
  { id: 'key-decisions', label: 'Key Decisions' },
  { id: 'outcome', label: 'Measurable Impact' },
  { id: 'tradeoffs', label: 'Challenges & Learnings' },
];

const images = {
  hero: 'hero-mobile-dashboard.png',
  audit: 'original-application-audit.png',
  dropdownSlider: 'dropdown-slider-flow.png',
  progressiveDisclosure: 'progressive-disclosure-flow.png',
  milestoneIllustrations: 'milestone-illustrations-flow.png',
};

const Section = ({ id, title, children, className = '' }) => (
  <section id={id} className={`scroll-mt-28 mb-[88px] ${className}`}>
    {title && (
      <Typography as="h2" variant="h6Regular" className="mb-8 text-[#1A1A1A]">
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
    className={`text-[#1E1E1E] ${className}`}
    style={{ lineHeight: '30px' }}
  >
    {children}
  </Typography>
);

const Label = ({ children, className = '' }) => (
  <Typography as="h3" variant="bodySemibold" className={`text-[#1A1A1A] ${className}`}>
    {children}
  </Typography>
);

const Caption = ({ children, className = '' }) => (
  <Typography
    as="p"
    variant="extraSmallRegular"
    className={`text-[#555] ${className}`}
    style={{ lineHeight: '18px' }}
  >
    {children}
  </Typography>
);

const ImageFrame = ({ src, alt, caption, className = '', imgClassName = 'w-full h-auto' }) => (
  <figure className={className}>
    <div className="bg-[#F3F3F3] rounded-[10px] p-5 md:p-7 overflow-hidden">
      <img src={`${ASSET_PATH}/${src}`} alt={alt} className={`${imgClassName} mx-auto`} />
    </div>
    {caption && <Caption className="mt-3">{caption}</Caption>}
  </figure>
);

const ProblemBlock = ({ title, children }) => (
  <div>
    <Label className="mb-2">{title}</Label>
    <Paragraph>{children}</Paragraph>
  </div>
);

const InsightCallout = () => (
  <div className="my-12 flex items-start gap-5">
    <div className="mt-1 flex size-8 flex-shrink-0 items-center justify-center rounded-full border border-[#0A3D78] text-[#0A3D78]">
      <Icon icon="material-symbols:verified-outline-rounded" className="text-[20px]" />
    </div>
    <div>
      <Label className="mb-3">
        The form was not just long. It was asking pre-approved customers to provide information the bank already had.
      </Label>
      <Paragraph>
        For a customer who had just been told "you qualify," an 11-screen interrogation doesn't feel like a formality. It feels like the bank doesn't trust them at the exact moment they are about to commit. The UX problem was real. But underneath it was a trust problem.
      </Paragraph>
    </div>
  </div>
);

const OutcomeMetric = ({ icon, title }) => (
  <div className="min-w-0">
    <Icon icon={icon} className="mb-5 text-[68px] text-[#1A1A1A]" />
    <Typography as="h3" variant="bodySemibold" className="max-w-[230px] text-[#1A1A1A]" style={{ lineHeight: '25px' }}>
      {title}
    </Typography>
  </div>
);

const OutcomePanel = () => (
  <figure className="mb-10">
    <div className="grid gap-10 rounded-[10px] bg-[#F3F3F3] px-9 py-12 sm:grid-cols-2 sm:px-12">
      <OutcomeMetric
        icon="material-symbols:pie-chart-rounded"
        title={<>Projected 36% Reduction in Application Completion Time</>}
      />
      <OutcomeMetric
        icon="material-symbols:kid-star-rounded"
        title={<>Improved User Confidence</>}
      />
    </div>
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
    <div className="min-h-screen bg-white text-[#1A1A1A]">
      <HeaderV2 />

      <div className="mx-auto flex max-w-[1440px] px-5 pb-32 pt-10 lg:px-10">
        <aside className="sticky top-[130px] hidden max-h-[calc(100vh-140px)] w-[180px] flex-shrink-0 self-start overflow-y-auto lg:block">
          <nav className="flex flex-col gap-[40px]">
            <Link to="/v2" className="back-link-group -ml-1 inline-flex items-center gap-1 text-base font-medium text-[#999] transition-colors duration-200">
              <ChevronLeft size={20} className="icon-solid-hover transition-colors duration-200" />
              <Typography as="span" variant="smallLight" className="shimmer-text">Home</Typography>
            </Link>
            <div className="flex flex-col gap-[12px]">
              {TOC.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(event) => scrollToSection(event, item.id)}
                  className={`transition-colors ${activeSection === item.id ? 'text-[#000]' : 'text-[#A0A0A0] nav-item-shimmer'}`}
                >
                  <Typography as="span" variant="extraSmallRegular">{item.label}</Typography>
                </a>
              ))}
            </div>
          </nav>
        </aside>

        <main className="mx-auto w-full max-w-[720px] lg:ml-20 xl:ml-32">
          <section id="intro" className="scroll-mt-28 mb-[84px]">
            <Typography as="h1" variant="h5Regular" className="mb-10 max-w-[650px] text-[#1A1A1A]" style={{ lineHeight: '38px' }}>
              Slashing projected loan application time by 36% by redesigning for trust and efficiency.
            </Typography>

            <div className="mb-12 flex flex-col gap-1 text-[#686868]">
              <div className="flex gap-4">
                <Typography as="span" variant="bodyRegular" className="w-[74px] flex-shrink-0">Role</Typography>
                <Typography as="span" variant="bodyRegular">UX/UI Designer, 4 weeks</Typography>
              </div>
              <div className="flex gap-4">
                <Typography as="span" variant="bodyRegular" className="w-[74px] flex-shrink-0">Team</Typography>
                <Typography as="span" variant="bodyRegular">Project Manager, UX/UI Designer</Typography>
              </div>
              <div className="flex gap-4">
                <Typography as="span" variant="bodyRegular" className="w-[74px] flex-shrink-0">Client</Typography>
                <Typography as="span" variant="bodyRegular">Top-tier global bank, 10K+ customers</Typography>
              </div>
            </div>

            <ImageFrame
              src={images.hero}
              alt="Placeholder for redesigned loan application mobile dashboard"
              caption="Redesigned loan application dashboard showing a pre-approved offer and next steps."
              className="mb-12"
              imgClassName="w-full max-w-[520px] h-auto"
            />

            <Paragraph>
              80% of digital loan applicants were pre-approved. The bank had already assessed their eligibility, already decided to offer them a loan. These should have been the easiest conversions in the funnel. They weren't.
            </Paragraph>
          </section>

          <Section id="problem" title="">
            <blockquote className="border-l-[8px] border-[#1A1A1A] pl-5">
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
            <ImageFrame
              src={images.audit}
              alt="Placeholder for original 11-screen loan application audit"
              className="mb-10"
              imgClassName="w-full max-w-[520px] h-auto"
            />

            <Paragraph className="mb-5">
              A 1-month timeline ruled out a formal research phase. No user interviews. No analytics showing where exactly people dropped off. No usability testing on the existing flow. What I had: direct access to the client stakeholder, consistent secondhand user feedback, and the ability to do a rigorous heuristic audit of every screen, field, and interaction in the existing flow.
            </Paragraph>
            <Paragraph>
              I mapped every field against two questions: does the bank already have this? Does this affect loan eligibility? Fields that failed both were candidates for removal. Fields that survived were regrouped into a logical sequence: Personal info, Financials, Review, so each section felt coherent rather than arbitrary.
            </Paragraph>
          </Section>

          <Section id="key-decisions" title="Key Decisions">
            <Label className="mb-6">Replacing the dropdown with an interactive slider</Label>
            <ImageFrame
              src={images.dropdownSlider}
              alt="Placeholder for loan amount slider flow"
              className="mb-10"
              imgClassName="w-full max-w-[520px] h-auto"
            />
            <Paragraph className="mb-14">
              The original loan term selection required three steps: open a dropdown, select a term, wait for the rate to update. Those interactions do one thing: hide cause and effect. The redesigned flow uses a single continuous gesture. As users adjust the loan duration, the monthly payment updates in real time. This isn't just fewer taps. It changes the nature of the decision. Users can explore the tradeoff between term length and monthly payment fluidly, which builds confidence before they commit.
            </Paragraph>

            <Label className="mb-6">Progressive disclosure</Label>
            <ImageFrame
              src={images.progressiveDisclosure}
              alt="Placeholder for progressive disclosure screen"
              className="mb-10"
              imgClassName="w-full max-w-[520px] h-auto"
            />
            <Paragraph className="mb-14">
              The single long form created a cognitive load problem: no sense of structure, no sense of progress. Breaking the flow into named sections gave users a mental model of where they were and what remained. Each section had a clear scope, so no field felt out of place.
            </Paragraph>

            <Label className="mb-6">Milestone illustrations</Label>
            <ImageFrame
              src={images.milestoneIllustrations}
              alt="Placeholder for milestone illustration screens"
              className="mb-10"
              imgClassName="w-full max-w-[520px] h-auto"
            />
            <Paragraph>
              At three points in the flow, after personal information, after loan terms, and at final confirmation, I introduced milestone moments with illustrations and short encouraging messages. These aren't decoration. Multi-step forms create anxiety, and anxiety causes abandonment. Acknowledging completion at key points does two things: it rewards the effort already made, and it reframes what's left as achievable. The final milestone, "All set. Your loan rate has been emailed to you," provides clear closure, which matters as much as getting users through as getting them to feel good about having done it.
            </Paragraph>
          </Section>

          <Section id="outcome" title="Outcome">
            <OutcomePanel />
            <Paragraph className="mb-5">
              The redesigned flow reduced the application from 11 screens to 7, a 36% reduction in steps, based on screen count and interaction audit. Redundant fields were removed, real trust was restored. The slider reduced a 3-step interaction to one.
            </Paragraph>
            <Paragraph>
              Because the redesign was handed off directly to the client's internal dev team and the engagement ended at handoff, I don't have post-launch data on completion rates or abandonment. The 36% is a projection grounded in the structural changes made, not a measured result.
            </Paragraph>
          </Section>

          <Section id="tradeoffs" title="Tradeoffs">
            <Label className="mb-4">Stakeholder feedback vs. user truth</Label>
            <Paragraph className="mb-12">
              The field audit was shaped by stakeholder-reported complaints, secondhand accounts of what users found frustrating. That's a filtered signal. Stakeholders interpret user feedback through their own organizational priorities, and what they surface may not reflect the full picture of where users actually struggled.
            </Paragraph>

            <Label className="mb-4">Screen reduction vs. cognitive load</Label>
            <Paragraph className="mb-16">
              Fewer screens reduce steps. They don't automatically reduce cognitive load. They can concentrate it. A 7-screen flow where each screen is dense could be worse than an 11-screen flow with breathing room. The decision rested on removing redundant fields and grouping related inputs coherently.
            </Paragraph>

            <Typography as="h2" variant="h6Regular" className="mb-8 text-[#1A1A1A]">
              What I'd do differently
            </Typography>
            <Paragraph>
              Establish baseline metrics before starting. Without data on where users dropped off in the original flow, the redesign was solving for a pattern rather than a specific problem. Even rough analytics, funnel drop-off by screen, would have sharpened the prioritization and made the outcome measurable rather than projected.
            </Paragraph>
          </Section>
        </main>
      </div>
    </div>
  );
};

export default LoanAppExperienceOptimization;
