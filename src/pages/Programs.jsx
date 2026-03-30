import React from 'react';
import { PageHero } from './LayoutComponents';

const Programs = () => (
  <div>
    <PageHero title="Programs & Initiatives" subtitle="Our diverse range of projects aimed at creating lasting impact." />
    <section className="container">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
           <h3 className="text-2xl text-primary mb-4">Rural Education</h3>
           <p className="text-text leading-relaxed">Providing quality primary and secondary education to children in remote areas through school construction and teacher training.</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
           <h3 className="text-2xl text-primary mb-4">Healthcare Access</h3>
           <p className="text-text leading-relaxed">Operating mobile clinics and supporting community health centers to ensure essential medical services for underserved populations.</p>
        </div>
      </div>
    </section>
  </div>
);

export default Programs;
