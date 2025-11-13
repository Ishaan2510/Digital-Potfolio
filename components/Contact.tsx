
import React from 'react';

interface ContactProps {
    email: string;
}

export const Contact: React.FC<ContactProps> = ({ email }) => {
    return (
        <div className="text-center">
            <p className="max-w-xl mx-auto mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious team. Feel free to reach out.
            </p>
            <a 
                href={`mailto:${email}`}
                className="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-md hover:bg-indigo-700 transition-colors duration-300 shadow-sm"
            >
                Say Hello
            </a>

            <div className="mt-12 text-left max-w-lg mx-auto p-8 border border-slate-200 rounded-lg bg-white shadow-sm">
                 <h3 className="text-lg font-semibold text-slate-800 mb-4">Or leave a message</h3>
                 <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-600">Name</label>
                        <input type="text" id="name" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Your Name" disabled />
                    </div>
                     <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-600">Email</label>
                        <input type="email" id="email" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Your Email" disabled />
                    </div>
                     <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-600">Message</label>
                        <textarea id="message" rows={4} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Your message..." disabled></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-slate-300 text-slate-500 font-semibold py-2 px-4 rounded-md cursor-not-allowed" disabled>
                            Send Message (UI Only)
                        </button>
                    </div>
                 </form>
            </div>
        </div>
    );
};
