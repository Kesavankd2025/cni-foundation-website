import React from 'react';
import { PageHero } from './LayoutComponents';
import { Heart } from 'lucide-react';

const Donate = () => (
  <div>
    <PageHero title="Donate" subtitle="Your generosity fuels our mission. Every contribution counts." />
    <section className="container text-center">
      <div className="max-w-2xl mx-auto bg-white p-12 rounded-3xl shadow-xl border border-gray-50">
        <div className="w-20 h-20 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-8">
          <Heart fill="currentColor" size={40} />
        </div>
        <h2 className="text-3xl text-primary mb-6">Support Our Cause</h2>
        <p className="text-text mb-10 text-lg leading-relaxed">
          The CNI Foundation relies on the support of people like you. Your donations go directly towards our programs in education, healthcare, and community development.
        </p>
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[10, 50, 100].map(amt => (
            <button key={amt} className="py-4 border-2 border-primary/10 rounded-xl font-bold hover:border-secondary transition-all">
              ${amt}
            </button>
          ))}
        </div>
        <button className="btn-secondary w-full py-5 text-xl">Proceed to Donation</button>
        <p className="mt-6 text-xs text-gray-400 italic">Trusted by thousands of donors globally. Tax receipts provided.</p>
      </div>
    </section>
  </div>
);

export default Donate;
