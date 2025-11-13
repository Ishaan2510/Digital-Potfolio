
import React, { useState } from 'react';

interface ContactProps {
    email: string;
}

export const Contact: React.FC<ContactProps> = ({ email }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');
        setErrorMessage('');

        try {
            // Using Formspree - form configured for ishaangoswami735@gmail.com
            const response = await fetch('https://formspree.io/f/mblqlqgl', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            setStatus('error');
            setErrorMessage('Failed to send message. Please try emailing directly.');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <div className="text-center">
            <p className="max-w-xl mx-auto mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious team. Feel free to reach out.
            </p>

            <div className="text-left max-w-lg mx-auto p-8 border border-slate-200 rounded-lg bg-white shadow-sm">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Send me a message</h3>
                
                {status === 'success' && (
                    <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-md">
                        <p className="text-green-700 text-sm">✓ Message sent successfully! I'll get back to you soon.</p>
                    </div>
                )}
                
                {status === 'error' && (
                    <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
                        <p className="text-red-700 text-sm">✗ {errorMessage}</p>
                    </div>
                )}

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-600">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                            placeholder="Your Name" 
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-600">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                            placeholder="Your Email" 
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-600">Message</label>
                        <textarea 
                            id="message" 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={4} 
                            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                            placeholder="Your message..."
                        />
                    </div>
                    <div>
                        <button 
                            type="submit" 
                            disabled={status === 'sending'}
                            className={`w-full font-semibold py-2 px-4 rounded-md transition-colors ${
                                status === 'sending'
                                    ? 'bg-slate-400 text-white cursor-wait'
                                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                            }`}
                        >
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
