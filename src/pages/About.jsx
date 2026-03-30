import React from 'react';
import { PageHero } from './LayoutComponents';

const About = () => (
  <div>
    <PageHero title="About Us" subtitle="Learning about our history, mission, and the people behind CNI Foundation." />
    <section className="container">
      <div className="max-w-3xl">
        <h2 className="text-3xl text-primary mb-6 text-left">Our Mission</h2>
        <p className="text-text text-lg leading-relaxed mb-6 text-left">
          CNI Foundation is dedicated to empowering marginalized communities through sustainable developmental programs. We believe in transparency, accountability, and a community-centric approach.
        </p>
        <p className="text-text leading-relaxed text-left">
          Founded in 2010, we have grown from a small local initiative to a globally recognized foundation impacting thousands of lives every year.
        </p>
      </div>
    </section>
  </div>
);

export default About;
