
import React, { forwardRef } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export const Section = forwardRef<HTMLElement, SectionProps>(({ id, title, children }, ref) => {
  return (
    <section id={id} ref={ref} className="py-12">
      <div className="relative mb-8">
        <h2 className="text-3xl font-bold text-slate-800">{title}</h2>
        <div className="absolute bottom-0 left-0 h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <div className="space-y-6 text-slate-600">
        {children}
      </div>
    </section>
  );
});
