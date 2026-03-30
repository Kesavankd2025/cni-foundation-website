import React from 'react';
import { PageHero } from './LayoutComponents';

const Contact = () => (
  <div>
    <PageHero title="Contact Us" subtitle="We're here to answer your questions and hear your stories." />
    <section className="container">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl text-primary mb-8 font-poppins">Get in Touch</h2>
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary">Full Name</label>
                <input type="text" className="w-full p-4 bg-slate-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary">Email Address</label>
                <input type="email" className="w-full p-4 bg-slate-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-primary">Subject</label>
              <input type="text" className="w-full p-4 bg-slate-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-primary">Message</label>
              <textarea rows="6" className="w-full p-4 bg-slate-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50"></textarea>
            </div>
            <button type="submit" className="btn-primary w-full py-5 text-lg">Send Message</button>
          </form>
        </div>
        
        <div className="bg-primary text-white p-12 rounded-3xl">
          <h2 className="text-3xl mb-8 font-poppins font-bold">Office Information</h2>
          <div className="space-y-10">
            <div>
              <h4 className="text-secondary font-bold uppercase tracking-widest text-sm mb-3">Headquarters</h4>
              <p className="text-blue-100">123 Charity Way, Giving Plaza,<br />Global City, GC 56789</p>
            </div>
            <div>
              <h4 className="text-secondary font-bold uppercase tracking-widest text-sm mb-3">Reach Us</h4>
              <p className="text-blue-100">Email: info@cnifoundation.org<br />Phone: +1 (234) 567-8900</p>
            </div>
            <div>
              <h4 className="text-secondary font-bold uppercase tracking-widest text-sm mb-3">Working Hours</h4>
              <p className="text-blue-100">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Contact;
