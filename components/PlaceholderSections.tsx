
import React, { useState, useEffect } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { PortfolioData } from '../types';

interface SWOTAnalysisProps {
    data: PortfolioData;
}

const SWOTPoint: React.FC<{ title: string, content: string | undefined }> = ({ title, content }) => {
    if (!content) return null;
    return (
        <div>
            <h4 className="font-bold text-md text-slate-700 mt-4 mb-2">{title}</h4>
            <ul className="list-disc list-inside space-y-1">
                {content.split('\n').filter(line => line.trim().startsWith('*') || line.trim().startsWith('-')).map((point, i) => (
                    <li key={i}>{point.replace(/[-*]\s*/, '').replace(/\*\*/g, '').trim()}</li>
                ))}
            </ul>
        </div>
    );
}

export const SWOTAnalysis: React.FC<SWOTAnalysisProps> = ({ data }) => {
    const [swot, setSwot] = useState<{ strengths?: string; weaknesses?: string; opportunities?: string; threats?: string; } | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const generateSwot = async () => {
            if (!process.env.API_KEY) {
                setError("This is a placeholder for an AI-generated SWOT analysis. To enable this feature, please configure the API_KEY environment variable.");
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
                
                const portfolioSummary = `
                    Name: ${data.fullName}
                    Career Goal: Transition from student to a Data Analyst, and eventually a Data Scientist.
                    Summary: ${data.introduction.summary}
                    Experience: ${data.experience.map(e => `${e.role} at ${e.company}: ${e.description.join(' ')}`).join('. ')}
                    Projects: ${data.projects.map(p => `${p.name}: ${p.description.join(' ')}`).join('. ')}
                    Skills: ${data.technicalSkills.map(s => `${s.title}: ${s.skills}`).join(', ')}
                `;

                const prompt = `Based on this portfolio summary, generate a SWOT analysis (Strengths, Weaknesses, Opportunities, Threats) for an aspiring Data Analyst/Scientist. Write it from the perspective of the individual (${data.fullName}), in the first person (e.g., "My strengths are..."). For each of the four sections, provide 2-3 bullet points as a single string, with each point starting with '*' and separated by a newline. Do not use any other markdown like bolding.
                
                Portfolio Summary:
                ${portfolioSummary}`;
                
                const swotSchema = {
                    type: Type.OBJECT,
                    properties: {
                        strengths: { type: Type.STRING, description: "My strengths, as a single string with newline-separated bullet points." },
                        weaknesses: { type: Type.STRING, description: "My weaknesses, as a single string with newline-separated bullet points." },
                        opportunities: { type: Type.STRING, description: "My opportunities, as a single string with newline-separated bullet points." },
                        threats: { type: Type.STRING, description: "My threats, as a single string with newline-separated bullet points." },
                    },
                    required: ['strengths', 'weaknesses', 'opportunities', 'threats']
                };

                const response = await ai.models.generateContent({
                    model: 'gemini-2.5-flash',
                    contents: prompt,
                    config: {
                        responseMimeType: "application/json",
                        responseSchema: swotSchema,
                    }
                });
                
                const text = response.text;
                const parsedSwot = JSON.parse(text);
                setSwot(parsedSwot);

            } catch (e) {
                console.error("Error generating SWOT analysis:", e);
                setError('Failed to generate SWOT analysis. The model may have returned an unexpected response.');
            } finally {
                setLoading(false);
            }
        };

        generateSwot();
    }, [data]);

    if (loading) {
        return (
            <div className="mt-12 p-6 bg-slate-100 border border-slate-200 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Self-Assessment: SWOT Analysis</h3>
                <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <p className="text-slate-600">Generating AI-powered analysis...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="mt-12 p-6 bg-amber-50 border border-amber-200 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-800 mb-2">Analysis Unavailable</h3>
                <p className="text-amber-700">{error}</p>
            </div>
        );
    }
    
    if (!swot) {
        return null;
    }

    return (
        <div className="mt-12 p-6 bg-white border border-slate-200 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Self-Assessment: SWOT Analysis</h3>
             <p className="text-sm text-slate-500 mb-4">This analysis was generated by Google's Gemini model based on the content of this portfolio.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-slate-600">
                <SWOTPoint title="Strengths" content={swot.strengths} />
                <SWOTPoint title="Weaknesses" content={swot.weaknesses} />
                <SWOTPoint title="Opportunities" content={swot.opportunities} />
                <SWOTPoint title="Threats" content={swot.threats} />
            </div>
        </div>
    );
};
