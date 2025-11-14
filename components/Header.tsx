
import React from 'react';
import type { PortfolioData } from '../types';
import { profilePhoto } from '../assets/profile';

interface HeaderProps {
    data: PortfolioData;
}

const SocialLinkButton: React.FC<{ link: {url: string; icon: string; name: string;} }> = ({ link }) => (
    <a 
        href={link.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-flex items-center justify-center space-x-2 px-4 py-2 text-sm font-semibold text-slate-600 bg-slate-100 rounded-md hover:bg-slate-200 transition-colors duration-300"
    >
        <i className={`${link.icon} text-slate-500`}></i>
        <span>{link.name}</span>
    </a>
);

export const Header: React.FC<HeaderProps> = ({ data }) => {
    const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handleResumeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        // Open PDF in new tab
        window.open('/My_resume.pdf', '_blank');
    };

    return (
        <header id="home" className="flex flex-col items-center justify-center text-center py-16">
            <div className="relative mb-6">
                <img src={profilePhoto} alt="Ishaan Goswami" className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg" />
                 <span className="absolute bottom-2 right-2 block h-6 w-6 rounded-full bg-green-400 border-4 border-white ring-2 ring-green-400"></span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">{data.fullName}</h1>
            <p className="mt-2 text-md text-slate-600">{data.program}, {data.institution}</p>
            <p className="mt-2 text-base font-medium text-slate-700">Submission Date: {data.submissionDate}</p>
            <p className="mt-4 text-lg font-semibold text-indigo-600">"{data.tagline}"</p>
            
            <p className="mt-6 max-w-2xl text-slate-600">
                {data.introduction.summary}
            </p>

            <div className="mt-8 flex items-center justify-center gap-3">
                <a 
                    href="/My_resume.pdf" 
                    onClick={handleResumeClick}
                    className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors duration-300 shadow-sm"
                >
                    <i className="fa-solid fa-file-pdf mr-2"></i>
                    View Resume
                </a>
                <SocialLinkButton link={data.contact.github} />
                <SocialLinkButton link={data.contact.linkedin} />
            </div>
        </header>
    );
};
