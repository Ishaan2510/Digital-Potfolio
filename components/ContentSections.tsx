
import React from 'react';
import { IntroductionContent, CollaborationContent, EthicsContent, FutureAspirationsContent, ConclusionContent, Testimonial } from '../types';

const Subtitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-xl font-semibold text-slate-700 mt-8 mb-4">{children}</h3>
);

const PointList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="space-y-3 list-disc list-inside">
    {items.map((point, index) => <li key={index}>{point}</li>)}
  </ul>
);

export const IntroductionSection: React.FC<{ content: IntroductionContent }> = ({ content }) => (
  <div>
    <Subtitle>{content.philosophy.title}</Subtitle>
    <p>{content.philosophy.points.join(' ')}</p>
  </div>
);

export const CollaborationSection: React.FC<{ content: CollaborationContent }> = ({ content }) => (
    <div>
        <Subtitle>{content.hackathon.title}</Subtitle>
        <PointList items={content.hackathon.points} />
        <Subtitle>{content.internship.title}</Subtitle>
        <PointList items={content.internship.points} />
        <Subtitle>{content.communication.title}</Subtitle>
        <p>{content.communication.text}</p>
    </div>
);

export const EthicsSection: React.FC<{ content: EthicsContent }> = ({ content }) => (
    <div>
        {content.caseStudies.map((study, index) => (
            <div key={index} className="mb-6">
                <Subtitle>{study.title}</Subtitle>
                <p className="mb-3">{study.text}</p>
                <PointList items={study.points} />
            </div>
        ))}
        <blockquote className="mt-8 p-4 border-l-4 border-indigo-500 bg-slate-100 text-slate-800 italic">
            {content.reflection}
        </blockquote>
    </div>
);

export const FutureAspirationsSection: React.FC<{ content: FutureAspirationsContent }> = ({ content }) => (
    <div>
        <Subtitle>{content.shortTerm.title}</Subtitle>
        <PointList items={content.shortTerm.points} />
        <Subtitle>{content.longTerm.title}</Subtitle>
        <PointList items={content.longTerm.points} />
        <Subtitle>{content.learningStrategy.title}</Subtitle>
        <PointList items={content.learningStrategy.points} />
    </div>
);

export const ConclusionSection: React.FC<{ content: ConclusionContent }> = ({ content }) => (
    <div>
        <p className="font-semibold text-lg">{content.summary}</p>
        <p className="mt-4">{content.reflection}</p>
    </div>
);


export const TestimonialsSection: React.FC<{ testimonials: Testimonial[] }> = ({ testimonials }) => (
    <div className="space-y-8">
        {testimonials.map((testimonial, index) => (
            <figure key={index} className="p-6 bg-white border border-slate-200 rounded-lg shadow-sm">
                <blockquote className="text-slate-800 italic text-lg border-l-4 border-indigo-200 pl-4">
                    "{testimonial.quote}"
                </blockquote>
                <figcaption className="mt-4 text-right">
                    <p className="font-semibold text-slate-900">{testimonial.author}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                </figcaption>
            </figure>
        ))}
    </div>
);
