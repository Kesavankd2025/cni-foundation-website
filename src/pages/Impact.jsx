import React from 'react';
import { PageHero } from './LayoutComponents';

const Impact = () => (
  <div>
    <PageHero title="Our Impact" subtitle="Measuring our success through the lives we've changed." />
    <section className="container">
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div className="p-10 bg-white rounded-2xl shadow-sm">
          <span className="text-5xl font-bold text-primary block mb-2">50k+</span>
          <span className="text-text font-semibold uppercase tracking-wider text-sm">Lives Touched</span>
        </div>
        <div className="p-10 bg-white rounded-2xl shadow-sm">
          <span className="text-5xl font-bold text-primary block mb-2">200+</span>
          <span className="text-text font-semibold uppercase tracking-wider text-sm">Schools Built</span>
        </div>
        <div className="p-10 bg-white rounded-2xl shadow-sm">
          <span className="text-5xl font-bold text-primary block mb-2">15</span>
          <span className="text-text font-semibold uppercase tracking-wider text-sm">Countries Active</span>
        </div>
      </div>
    </section>
  </div>
);

export default Impact;
