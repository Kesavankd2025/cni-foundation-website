import React from 'react';
import { PageHero } from './LayoutComponents';

const News = () => (
  <div>
    <PageHero title="News & Media" subtitle="Recent updates, press releases, and stories from the field." />
    <section className="container">
      <div className="space-y-12">
        <article className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-64 h-48 bg-gray-200 rounded-xl overflow-hidden shrink-0">
            <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=400" alt="News" className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="text-secondary font-bold text-sm">UPDATE</span>
            <h3 className="text-2xl text-primary font-bold mt-2 mb-4">CNI Foundation Expands Healthcare Initiative in South Asia</h3>
            <p className="text-text mb-4">We are thrilled to announce a new partnership that will bring mobile medical units to 50 additional districts by the end of this year.</p>
            <button className="text-primary font-bold hover:underline">Read More</button>
          </div>
        </article>
      </div>
    </section>
  </div>
);

export default News;
