import React from 'react';

const PageHero = ({ title, subtitle }) => (
  <section className="bg-primary text-white pt-40 pb-20 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
    <div className="container relative z-10">
      <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-4 animate-fade-in">{title}</h1>
      <p className="text-blue-100 text-lg max-w-2xl animate-fade-in-delayed">{subtitle || "Working together for a brighter future."}</p>
    </div>
  </section>
);

export { PageHero };
