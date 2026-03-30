import React from 'react';
import { PageHero } from './LayoutComponents';

const GetInvolved = () => (
  <div>
    <PageHero title="Get Involved" subtitle="Find out how you can contribute your time and skills to our cause." />
    <section className="container">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl text-primary mb-8">Join Our Mission</h2>
        <p className="text-text text-lg mb-12">Whether you are an individual wanting to volunteer or a corporate entity looking for a CSR partner, we have a place for you.</p>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-slate-50 p-8 rounded-xl border border-dashed border-gray-300">
            <h4 className="font-bold mb-4">Volunteer</h4>
            <p className="text-sm text-text mb-6">Contribute your skills directly in the field or remotely.</p>
            <button className="btn-primary w-full text-sm">Apply Now</button>
          </div>
          <div className="bg-slate-50 p-8 rounded-xl border border-dashed border-gray-300">
            <h4 className="font-bold mb-4">Partner With Us</h4>
            <p className="text-sm text-text mb-6">Let's collaborate on large-scale sustainable projects.</p>
            <button className="btn-primary w-full text-sm">Inquire Here</button>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default GetInvolved;
