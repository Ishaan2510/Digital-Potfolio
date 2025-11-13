
import React from 'react';
import type { EducationEntry, ExperienceEntry, ProjectEntry, SkillCategory, CompetitiveProgrammingEntry } from '../types';

const SubSectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h3 className="text-2xl font-semibold text-slate-700 mb-4">{children}</h3>
);

const ExternalLinkIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 inline-block group-hover:text-indigo-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);


export const Education: React.FC<{ items: EducationEntry[] }> = ({ items }) => (
    <div>
        <SubSectionTitle>Education</SubSectionTitle>
        <div className="space-y-4">
            {items.map((item, index) => (
                <div key={index} className="p-4 rounded-lg bg-white border border-slate-200 shadow-sm">
                    <div className="flex justify-between items-start">
                        <div>
                            <h4 className="font-bold text-lg text-slate-800">{item.institution}</h4>
                            <p className="text-md text-slate-600">{item.degree}</p>
                            <p className="text-sm text-slate-500">{item.details}</p>
                        </div>
                        <p className="text-sm font-medium text-slate-500 text-right flex-shrink-0 ml-4">{item.period}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export const Experience: React.FC<{ items: ExperienceEntry[] }> = ({ items }) => (
    <div>
        <SubSectionTitle>Experience</SubSectionTitle>
        <div className="space-y-6">
            {items.map((item, index) => (
                <div key={index} className="p-4 rounded-lg bg-white border border-slate-200 shadow-sm">
                    <div className="flex justify-between items-start">
                        <div>
                            <h4 className="font-bold text-lg text-slate-800">{item.company}</h4>
                            <p className="text-md text-slate-600">{item.role}</p>
                             <p className="text-sm text-slate-500">{item.location}</p>
                        </div>
                        <p className="text-sm font-medium text-slate-500 text-right flex-shrink-0 ml-4">{item.period}</p>
                    </div>
                    <ul className="mt-3 list-disc list-inside space-y-2 text-slate-600">
                        {item.description.map((desc, i) => <li key={i}>{desc}</li>)}
                    </ul>
                </div>
            ))}
        </div>
    </div>
);

export const Projects: React.FC<{ items: ProjectEntry[] }> = ({ items }) => (
    <div>
        <SubSectionTitle>Projects</SubSectionTitle>
        <div className="space-y-6">
            {items.map((item, index) => (
                <div key={index} className="p-4 rounded-lg bg-white border border-slate-200 shadow-sm">
                    <h4 className="font-bold text-lg text-slate-800">{item.name}</h4>
                    <p className="text-sm font-semibold text-indigo-600 mb-2">Technologies: {item.technologies}</p>
                    <ul className="list-disc list-inside space-y-2 text-slate-600">
                        {item.description.map((desc, i) => <li key={i}>{desc}</li>)}
                    </ul>
                </div>
            ))}
        </div>
    </div>
);

export const Skills: React.FC<{ items: SkillCategory[] }> = ({ items }) => (
    <div>
        <SubSectionTitle>Technical Skills</SubSectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((category, index) => (
                <div key={index} className="p-4 rounded-lg bg-white border border-slate-200 shadow-sm">
                    <h4 className="font-bold text-md text-slate-800 mb-2">{category.title}</h4>
                    <p className="text-sm text-slate-600">{category.skills}</p>
                </div>
            ))}
        </div>
    </div>
);

export const CompetitiveProgramming: React.FC<{ items: CompetitiveProgrammingEntry[] }> = ({ items }) => (
    <div>
        <SubSectionTitle>Competitive Programming</SubSectionTitle>
        <div className="space-y-3">
            {items.map((item, index) => (
                <div key={index} className="p-3 rounded-lg bg-white border border-slate-200 transition-all duration-300 hover:shadow-md hover:border-indigo-300">
                     <div className="flex items-center justify-between">
                        <div>
                            <span className="font-bold text-slate-800 mr-2">{item.platform}:</span>
                            <span className="text-slate-600">{item.details}</span>
                        </div>
                        {item.url && (
                            <a href={item.url} target="_blank" rel="noopener noreferrer" className="group text-slate-500 hover:text-indigo-600 transition-colors">
                               <ExternalLinkIcon />
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </div>
    </div>
);
