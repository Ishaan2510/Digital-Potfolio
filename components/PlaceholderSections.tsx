
import React from 'react';
import { PortfolioData } from '../types';

interface SWOTAnalysisProps {
    data: PortfolioData;
}

interface SWOTPointProps {
    title: string;
    points: string[];
}

const SWOTPoint: React.FC<SWOTPointProps> = ({ title, points }) => {
    return (
        <div>
            <h4 className="font-bold text-md text-slate-700 mt-4 mb-2">{title}</h4>
            <ul className="list-disc list-inside space-y-1">
                {points.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>
        </div>
    );
}

export const SWOTAnalysis: React.FC<SWOTAnalysisProps> = ({ data }) => {
    const swotData = {
        strengths: [
            "Strong foundation in data analysis with hands-on experience in Python, SQL, and data visualization tools",
            "Demonstrated ability to work on real-world projects like customer segmentation and predictive modeling",
            "Proficient in multiple programming languages and frameworks, showcasing adaptability and quick learning",
            "Active participation in competitive programming, demonstrating problem-solving skills"
        ],
        weaknesses: [
            "Limited industry experience as currently transitioning from academic to professional environment",
            "Need more exposure to large-scale production data systems and enterprise tools",
            "Could benefit from more advanced machine learning and deep learning certifications"
        ],
        opportunities: [
            "Growing demand for data analysts and data scientists across industries",
            "Opportunity to specialize in emerging fields like AI/ML, big data, and cloud analytics",
            "Potential to leverage existing skills in web development to become a full-stack data professional",
            "Networking opportunities through competitive programming and tech communities"
        ],
        threats: [
            "Highly competitive field with many qualified candidates entering the market",
            "Rapid evolution of data science tools requiring continuous upskilling",
            "Market preference for candidates with more years of industry experience"
        ]
    };

    return (
        <div className="mt-12 p-6 bg-white border border-slate-200 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Self-Assessment: SWOT Analysis</h3>
            <p className="text-sm text-slate-500 mb-4">A comprehensive analysis of my professional strengths, areas for improvement, opportunities, and potential challenges.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-slate-600">
                <SWOTPoint title="Strengths" points={swotData.strengths} />
                <SWOTPoint title="Weaknesses" points={swotData.weaknesses} />
                <SWOTPoint title="Opportunities" points={swotData.opportunities} />
                <SWOTPoint title="Threats" points={swotData.threats} />
            </div>
        </div>
    );
};
