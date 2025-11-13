

import React, { useState, useEffect, useRef } from 'react';
import { portfolioData, sections } from './data';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { Education, Experience, Projects, Skills, CompetitiveProgramming } from './components/ResumeSections';
import { SWOTAnalysis } from './components/PlaceholderSections';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';
import { IntroductionSection, CollaborationSection, EthicsSection, FutureAspirationsSection, ConclusionSection, TestimonialsSection } from './components/ContentSections';


const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('introduction');
  const sectionRefs = useRef<{ [key: string]: HTMLElement }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -50% 0px', threshold: 0.1 }
    );

    const currentRefs = sectionRefs.current;
    Object.values(currentRefs).forEach((el) => {
        if(el) observer.observe(el);
    });

    return () => {
        Object.values(currentRefs).forEach((el) => {
            if(el) observer.unobserve(el);
        });
    };
  }, []);
  
  const setRef = (id: string) => (el: HTMLElement | null) => {
    if (el) {
      sectionRefs.current[id] = el;
    }
  };


  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-700">
      <Navbar sections={sections} activeSection={activeSection} />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        
        <Header data={portfolioData} />
        
        <div className="mt-16 space-y-16">
          <Section id="introduction" title="Introduction" ref={setRef('introduction')}>
            <IntroductionSection content={portfolioData.introduction} />
          </Section>

          <Section id="resume" title="Resume / CV" ref={setRef('resume')}>
            <div className="space-y-12">
              <Education items={portfolioData.education} />
              <Experience items={portfolioData.experience} />
              <Projects items={portfolioData.projects} />
              <Skills items={portfolioData.technicalSkills} />
              <CompetitiveProgramming items={portfolioData.competitiveProgramming} />
            </div>
          </Section>

          <Section id="leadership" title={portfolioData.collaboration.title} ref={setRef('leadership')}>
             <CollaborationSection content={portfolioData.collaboration} />
          </Section>
          
          <Section id="ethics" title={portfolioData.ethics.title} ref={setRef('ethics')}>
            <EthicsSection content={portfolioData.ethics} />
          </Section>

          <Section id="future" title={portfolioData.futureAspirations.title} ref={setRef('future')}>
             <FutureAspirationsSection content={portfolioData.futureAspirations} />
          </Section>

          <Section id="conclusion" title={portfolioData.conclusion.title} ref={setRef('conclusion')}>
             <ConclusionSection content={portfolioData.conclusion} />
             {/* Fix: Pass portfolioData to SWOTAnalysis component */}
             <SWOTAnalysis data={portfolioData} />
          </Section>
          
          <Section id="testimonials" title="Testimonials" ref={setRef('testimonials')}>
             <TestimonialsSection testimonials={portfolioData.testimonials} />
          </Section>

          <Section id="contact" title="Get in Touch" ref={setRef('contact')}>
            <Contact email={portfolioData.contactEmail}/>
          </Section>
        </div>

        <Footer data={portfolioData} />
      </main>
    </div>
  );
};

export default App;