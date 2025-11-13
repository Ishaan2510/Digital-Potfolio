
import React from 'react';
import type { PortfolioData } from '../types';

interface FooterProps {
    data: PortfolioData;
}

export const Footer: React.FC<FooterProps> = ({ data }) => {
    return (
        <footer className="border-t border-slate-200 mt-20 py-8 text-center">
            <div className="flex justify-center space-x-6 mb-4">
                <a href={data.contact.github.url} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-600 transition-colors">
                    <i className="fab fa-github fa-lg"></i>
                </a>
                <a href={data.contact.linkedin.url} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-600 transition-colors">
                    <i className="fab fa-linkedin fa-lg"></i>
                </a>
                <a href={data.contact.email.url} className="text-slate-500 hover:text-indigo-600 transition-colors">
                    <i className="fas fa-envelope fa-lg"></i>
                </a>
            </div>
            <p className="text-sm text-slate-500">
                &copy; {new Date().getFullYear()} {data.fullName}. All Rights Reserved.
            </p>
             <p className="text-xs text-slate-400 mt-1">
                Learning through curiosity and creation.
            </p>
        </footer>
    );
};
