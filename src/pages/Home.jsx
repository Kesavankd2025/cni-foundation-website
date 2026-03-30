import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ChevronRight, HardHat, GraduationCap, Briefcase,
  Users, Award, TrendingUp, CheckCircle, Quote, Calendar,
  MapPin, Phone, Mail, ArrowUpRight, Star, Building2
} from 'lucide-react';

/* ── Animated Counter Hook ─────────────────────────────────────── */
const useCountUp = (target, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return { count, ref };
};

/* ── Elite Stat Card ─────────────────────────────────────────────── */
const EliteStatCard = ({ target, suffix = '+', label, icon: Icon, color = '#d4a017' }) => {
  const { count, ref } = useCountUp(target);
  return (
    <div ref={ref} className="flex flex-col items-center text-center group px-6 py-4 relative">
      {/* Outer glow ring */}
      <div className="relative mb-6">
        <svg width="90" height="90" viewBox="0 0 90 90" className="absolute inset-0 -m-2 opacity-30 group-hover:opacity-70 transition-opacity duration-500">
          <circle cx="45" cy="45" r="42" fill="none" stroke="#d4a017" strokeWidth="1" strokeDasharray="6 4" />
        </svg>
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center relative z-10 transition-all duration-500 group-hover:scale-110"
          style={{ background: 'rgba(212,160,23,0.12)', border: '1.5px solid rgba(212,160,23,0.4)', boxShadow: '0 0 15px rgba(212,160,23,0.1)' }}
        >
          <Icon size={18} style={{ color }} className="group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>
      {/* Number */}
      <div
        className="font-black leading-none mb-2 transition-all duration-300"
        style={{
          fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
          background: 'linear-gradient(135deg, #f0b429 0%, #d4a017 50%, #f0c050 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textShadow: 'none',
          filter: 'drop-shadow(0 0 12px rgba(212,160,23,0.3))',
        }}
      >
        {count}{suffix}
      </div>
      {/* Label */}
      <div className="text-white/65 text-xs font-bold uppercase tracking-[0.2em] group-hover:text-white/90 transition-colors duration-300">
        {label}
      </div>
    </div>
  );
};

/* ── Home Component ─────────────────────────────────────────────── */
const Home = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  /* volunteer modal */
  const [volunteerOpen, setVolunteerOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const handleForm = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    setVolunteerOpen(false);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="overflow-x-hidden">

      {/* ══════════════════════════════════════════════════════════
          1. HERO / BANNER
      ══════════════════════════════════════════════════════════ */}
      <section className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden p-0" style={{paddingTop:0, paddingBottom:0}}>
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/hero_bg.png"
            alt="CNI Foundation – Empowering Communities"
            className="w-full h-full object-cover animate-subtle-zoom"
          />
          <div className="absolute inset-0" style={{background: 'linear-gradient(120deg, rgba(10,20,60,0.88) 0%, rgba(10,20,60,0.65) 55%, rgba(10,20,60,0.3) 100%)'}} />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(10,20,60,0.75) 0%, transparent 50%)'}} />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(10,20,60,0.5) 0%, transparent 20%)'}} />
        </div>

        {/* Gold accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1" style={{background: 'linear-gradient(90deg, #d4a017, #f0b429, #d4a017)'}} />

        {/* Content */}
        <div className="container relative z-10 text-white">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6 animate-fade-in-up">
              <div className="gold-divider" />
              <span className="section-label text-secondary">CNI Foundation</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.05] animate-fade-in-up delay-100">
              Building Skills for<br />
              <span className="hero-gradient-text">Construction &amp; Allied</span><br />
              Industries
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl animate-fade-in-up delay-200">
              Empowering the rural, tribal, and deprived communities with practical skill training and employment opportunities in India's fastest-growing sectors.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <a href="#programs" className="btn-secondary">
                Explore Programs <ArrowRight size={18} />
              </a>
              <button onClick={() => setVolunteerOpen(true)} className="btn-outline-white">
                Volunteer Enquiry <Users size={18} />
              </button>
            </div>
          </div>
        </div>


      </section>

      {/* Spacer below banner */}
      <div className="h-20 bg-white" />



      {/* ══════════════════════════════════════════════════════════
          2. PLAYABLE COUNTS (Stats) — Elite v3
      ══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{paddingTop:0, paddingBottom:0}}>
        {/* Full-bleed background */}
        <img
          src="/hero_bg.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{filter:'brightness(0.22) saturate(0.7)'}}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0" style={{background:'linear-gradient(to right, rgba(7,15,50,0.85) 0%, rgba(10,20,65,0.65) 50%, rgba(7,15,50,0.85) 100%)'}} />

        {/* Gold top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px]" style={{background:'linear-gradient(90deg,transparent,#d4a017 30%,#f0b429 50%,#d4a017 70%,transparent)'}} />
        {/* Gold bottom accent bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{background:'linear-gradient(90deg,transparent,#d4a017 30%,#f0b429 50%,#d4a017 70%,transparent)'}} />

        <div className="container relative z-10" style={{paddingTop:'3rem', paddingBottom:'3rem'}}>
          {/* Header */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="gold-divider" />
              <span className="section-label">Our Impact</span>
              <div className="gold-divider" />
            </div>
            <h2 className="font-black text-white" style={{fontSize:'clamp(1.5rem, 3vw, 2.2rem)', letterSpacing:'-0.02em'}}>
              Numbers That <span style={{background:'linear-gradient(90deg,#d4a017,#f0b429)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>Speak</span>
            </h2>
          </div>

          {/* Stats row with vertical gold dividers */}
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {[
              { target: 1200, suffix: '+', label: 'Students Supported',       icon: GraduationCap },
              { target: 300,  suffix: '+', label: 'Youth People Trained',     icon: HardHat },
              { target: 80,   suffix: '+', label: 'Internship Opportunities', icon: Briefcase },
              { target: 15,   suffix: '+', label: 'Institutional Partners',   icon: Building2 },
            ].map(({ target, suffix, label, icon }, i) => (
              <div key={i} className="relative" style={{borderLeft: i > 0 ? '1px solid rgba(212,160,23,0.2)' : 'none'}}>
                <EliteStatCard target={target} suffix={suffix} label={label} icon={icon} />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          3. ABOUT
      ══════════════════════════════════════════════════════════ */}
      <section id="about" className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image collage */}
            <div className="relative animate-fade-in-left">
              <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                <img src="/gallery_2.png" alt="CNI Foundation – Skill Training" className="w-full h-full object-cover" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 glass-dark rounded-2xl p-5 shadow-2xl animate-float" style={{background:'rgba(15,32,80,0.92)', border:'1px solid rgba(212,160,23,0.35)'}}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <Award size={22} className="text-secondary" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">15+ Years</div>
                    <div className="text-white/60 text-xs">of Excellence</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="animate-fade-in-right">
              <div className="flex items-center gap-3 mb-5">
                <div className="gold-divider" />
                <span className="section-label">Who We Are</span>
              </div>
              <h2 className="text-4xl md:text-5xl text-primary font-black mb-6 leading-tight">
                Transforming Lives Through<br />
                <span className="text-secondary">Practical Skill Training</span>
              </h2>
              <p className="text-text-muted text-lg leading-relaxed mb-8">
                CNI Foundation is a value-based skill and training centre dedicated to the construction and its allied industries. We bridge the gap between raw potential and real opportunity for rural, tribal, and deprived communities.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Hands-on practical training in construction trades',
                  'Industry-linked internships & job placement support',
                  'Education sponsorship for deserving youth',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-secondary mt-0.5 shrink-0" />
                    <span className="text-text font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn-primary">
                Learn More About Us <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          4. PROGRAMS
      ══════════════════════════════════════════════════════════ */}
      <section id="programs" className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="gold-divider" />
              <span className="section-label">What We Offer</span>
              <div className="gold-divider" />
            </div>
            <h2 className="text-4xl md:text-5xl text-primary font-black mb-4">Our Core Programs</h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Specialized initiatives designed to create job-ready professionals for India's construction sector.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: HardHat,
                tag: 'Vocational',
                title: 'Hands-on Skill Training',
                desc: 'Intensive technical workshops covering masonry, steel fixing, plumbing, electrical work and more — designed with industry experts.',
                image: '/prog_skill_training.png',
                color: '#0f2050',
              },
              {
                icon: Building2,
                tag: 'Engineering',
                title: 'Civil Engineering Internship',
                desc: 'On-site internships with leading construction firms, giving students real-world project experience under expert guidance.',
                image: '/prog_civil_eng.png',
                color: '#1a3570',
              },
              {
                icon: GraduationCap,
                tag: 'Sponsorship',
                title: 'Education Support',
                desc: 'Financial aid, mentorship, and academic resources ensuring talented students from deprived backgrounds can achieve their goals.',
                image: '/prog_education.png',
                color: '#0f2050',
              },
            ].map((prog, i) => (
              <div key={i} className="card-elite group">
                <div className="aspect-video overflow-hidden">
                  <img src={prog.image} alt={prog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-3 py-1 rounded-full">{prog.tag}</span>
                  <h3 className="text-xl font-bold text-primary mt-4 mb-3 group-hover:text-secondary transition-colors duration-300">
                    {prog.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-6">{prog.desc}</p>
                  <Link to="/programs" className="flex items-center gap-2 text-primary font-bold text-sm group-hover:text-secondary transition-colors">
                    Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/programs" className="btn-primary">
              View All Programs <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          5. VISION & MISSION  (v3 layout)
      ══════════════════════════════════════════════════════════ */}
      <section id="vision-mission" className="relative" style={{paddingTop:0, paddingBottom:0}}>
        {/* Two-column split — no container, full bleed */}
        <div className="grid lg:grid-cols-2 min-h-[600px]">

          {/* LEFT — Vision (dark navy) */}
          <div className="relative flex flex-col justify-center px-10 py-20 lg:px-20" style={{background:'linear-gradient(135deg,#070f32 0%,#0e1f55 100%)'}}>
            {/* Blueprint bg faint */}
            <img src="/vision_mission_bg.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" aria-hidden="true" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="gold-divider" />
                <span className="section-label">Our Foundation</span>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{background:'linear-gradient(135deg,#d4a017,#f0b429)'}}>
                  <Star size={28} className="text-primary" fill="currentColor" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Vision</h2>
              </div>
              <div className="w-16 h-1 rounded-full mb-8" style={{background:'linear-gradient(90deg,#d4a017,#f0b429)'}} />
              <p className="text-white/85 text-lg md:text-xl leading-relaxed font-light">
                CNI Foundation envisages for a{' '}
                <strong className="font-black" style={{color:'#f0b429'}}>value based, competent practical skill and training centre</strong>{' '}
                essential for the construction and its allied industries.
              </p>
            </div>
          </div>

          {/* RIGHT — Mission (gold-tinted dark) */}
          <div className="relative flex flex-col justify-center px-10 py-20 lg:px-16" style={{background:'linear-gradient(135deg,#0a1540 0%,#0f2050 100%)'}}>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{background:'rgba(212,160,23,0.15)', border:'1px solid rgba(212,160,23,0.4)'}}>
                  <TrendingUp size={26} style={{color:'#f0b429'}} />
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Mission</h2>
              </div>
              <div className="w-16 h-1 rounded-full mb-8" style={{background:'linear-gradient(90deg,#d4a017,#f0b429)'}} />
              <ul className="space-y-5">
                {[
                  'To provide opportunities in the construction and its allied industries to the rural, tribal and the deprived section of the society.',
                  'To enhance the skill and the knowledge to pursue self employment in the construction and its allied industries.',
                  'To provide practical training and hands on experience in preparing the needy for the wide range of careers in the construction industry.',
                  'To increase the productive potential in the construction and its allied industries.',
                  'To train and utilize manpower to the fullest extent in the construction and its allied industries.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <span className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-xs font-black mt-0.5 transition-all duration-300 group-hover:scale-110" style={{background:'linear-gradient(135deg,#d4a017,#f0b429)', color:'#0f2050'}}>
                      {i + 1}
                    </span>
                    <span className="text-white/75 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          6. EVENTS
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white" id="events">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="gold-divider" />
                <span className="section-label">What's Happening</span>
              </div>
              <h2 className="text-4xl md:text-5xl text-primary font-black">Upcoming Events</h2>
            </div>
            <Link to="/news" className="flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors">
              View All Events <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                date: '15 Apr 2025',
                month: 'APR',
                day: '15',
                tag: 'Workshop',
                title: 'Construction Safety & Site Management Workshop',
                location: 'CNI Training Centre, Mumbai',
                time: '9:00 AM – 5:00 PM',
                image: '/news_1.png',
              },
              {
                date: '22 Apr 2025',
                month: 'APR',
                day: '22',
                tag: 'Internship Drive',
                title: 'Industry Internship Placement Drive – Q2 2025',
                location: 'Horizon Construction HQ, Pune',
                time: '10:00 AM – 4:00 PM',
                image: '/news_2.png',
              },
              {
                date: '10 May 2025',
                month: 'MAY',
                day: '10',
                tag: 'Graduation',
                title: 'Batch 14 Skill Training Graduation Ceremony',
                location: 'CNI Foundation Auditorium',
                time: '11:00 AM – 2:00 PM',
                image: '/news_3.png',
              },
            ].map((ev, i) => (
              <div key={i} className="card-elite group overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <img src={ev.image} alt={ev.title} className="gallery-img" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                  <div className="absolute top-4 left-4 bg-secondary text-primary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {ev.tag}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-3xl font-black leading-none">{ev.day}</div>
                    <div className="text-xs font-bold uppercase tracking-widest opacity-80">{ev.month} 2025</div>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-base font-bold text-primary mb-4 group-hover:text-secondary transition-colors leading-snug">
                    {ev.title}
                  </h3>
                  <div className="space-y-2 text-text-muted text-sm">
                    <div className="flex items-center gap-2"><MapPin size={14} className="text-secondary shrink-0" /> {ev.location}</div>
                    <div className="flex items-center gap-2"><Calendar size={14} className="text-secondary shrink-0" /> {ev.time}</div>
                  </div>
                  <Link to="/news" className="mt-5 flex items-center gap-2 text-primary font-bold text-sm group-hover:text-secondary transition-colors">
                    Register Now <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          7. GALLERY  (v3 — editorial layout)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-background" id="gallery">
        <div className="container">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="gold-divider" />
              <span className="section-label">In Action</span>
              <div className="gold-divider" />
            </div>
            <h2 className="text-4xl md:text-5xl text-primary font-black mb-3">Our Gallery</h2>
            <p className="text-text-muted text-base">Real moments from our training centres, construction sites and graduation ceremonies</p>
          </div>

          {/* Editorial grid: large feature left + 2×2 grid right */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4" style={{height:'auto'}}>

            {/* Feature — spans 2 cols, full height */}
            <div className="lg:col-span-2 gallery-item rounded-3xl overflow-hidden relative group" style={{minHeight:'520px'}}>
              <img src="/hero_bg.png" alt="CNI Foundation Team on site" className="gallery-img w-full h-full object-cover" style={{height:'100%', minHeight:'520px'}} />
              <div className="absolute inset-0" style={{background:'linear-gradient(to top, rgba(10,20,60,0.85) 0%, transparent 55%)'}} />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3" style={{background:'#d4a017', color:'#0f2050'}}>Featured</span>
                <h3 className="text-white text-2xl font-black leading-tight">Building India's Future, One Skill at a Time</h3>
                <p className="text-white/70 text-sm mt-2">Our students at an active construction site</p>
              </div>
            </div>

            {/* 2×2 right grid */}
            <div className="grid grid-rows-2 gap-4">
              {[
                { src: '/gallery_1.png', label: 'Survey', caption: 'Field Surveying' },
                { src: '/gallery_2.png', label: 'Class', caption: 'Classroom Training' },
              ].map(({ src, label, caption }) => (
                <div key={label} className="gallery-item rounded-3xl overflow-hidden relative group">
                  <img src={src} alt={caption} className="gallery-img w-full h-full object-cover" style={{height:'100%', minHeight:'248px'}} />
                  <div className="absolute inset-0" style={{background:'linear-gradient(to top, rgba(10,20,60,0.7) 0%, transparent 60%)'}} />
                  <div className="absolute bottom-5 left-5">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{background:'rgba(212,160,23,0.9)', color:'#0f2050'}}>{label}</span>
                    <p className="text-white text-sm font-semibold mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom row — 3 equal tiles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {[
              { src: '/gallery_3.png',        label: 'Internship', caption: 'On-site Internship' },
              { src: '/gallery_4.png',        label: 'Graduation', caption: 'Graduation Ceremony' },
              { src: '/prog_skill_training.png', label: 'Vocational', caption: 'Skill Workshop' },
            ].map(({ src, label, caption }) => (
              <div key={label} className="gallery-item rounded-3xl overflow-hidden relative group" style={{height:'240px'}}>
                <img src={src} alt={caption} className="gallery-img w-full h-full object-cover" />
                <div className="absolute inset-0" style={{background:'linear-gradient(to top, rgba(10,20,60,0.75) 0%, transparent 55%)'}} />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{background:'rgba(212,160,23,0.9)', color:'#0f2050'}}>{label}</span>
                    <p className="text-white text-sm font-semibold mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{caption}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shrink-0" style={{background:'rgba(255,255,255,0.15)', backdropFilter:'blur(8px)'}}>
                    <ArrowRight size={14} className="text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          8. TESTIMONIALS
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white" id="testimonials">
        <div className="container">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="gold-divider" />
              <span className="section-label">Alumni Voices</span>
              <div className="gold-divider" />
            </div>
            <h2 className="text-4xl md:text-5xl text-primary font-black">What Our Students Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The skill training I received at CNI Foundation completely transformed my life. I went from having no technical knowledge to leading a team at a major construction company within two years.",
                name: 'Ravi Kumar',
                role: 'Site Supervisor – Horizon Construction',
                initials: 'RK',
              },
              {
                quote: "CNI Foundation's internship program gave me real hands-on experience that no classroom could offer. The mentors were exceptional and the industry connections opened every door for me.",
                name: 'Priya Sharma',
                role: 'Civil Engineer – BuildRight India',
                initials: 'PS',
              },
              {
                quote: "Coming from a tribal community, I never imagined I would one day be a self-employed contractor. CNI Foundation trained me and helped me get my first project through their industry network.",
                name: 'Suresh Babu',
                role: 'Independent Contractor, Andhra Pradesh',
                initials: 'SB',
              },
            ].map((t, i) => (
              <div key={i} className="testimonial-card p-8 flex flex-col">
                <Quote size={36} className="text-secondary mb-5 shrink-0" fill="rgba(212,160,23,0.2)" />
                <p className="text-text text-base leading-relaxed flex-grow mb-8 italic">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-primary font-bold text-sm">{t.name}</div>
                    <div className="text-text-muted text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          9. VOLUNTEER ENQUIRY CTA
      ══════════════════════════════════════════════════════════ */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/gallery_3.png" alt="Volunteer" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{background:'linear-gradient(135deg, rgba(10,20,60,0.92) 0%, rgba(10,20,60,0.78) 100%)'}} />
        </div>
        <div className="absolute top-0 left-0 right-0 h-1" style={{background:'linear-gradient(90deg,#d4a017,#f0b429,#d4a017)'}} />

        <div className="container relative z-10 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="gold-divider" />
              <span className="section-label">Join the Movement</span>
              <div className="gold-divider" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Become a Volunteer &amp;<br />
              <span className="hero-gradient-text">Make a Difference</span>
            </h2>
            <p className="text-white/75 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Your expertise, time, and passion can transform lives. Join CNI Foundation's volunteer network and help us build a skilled India.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button onClick={() => setVolunteerOpen(true)} className="btn-secondary text-lg px-10 py-5">
                <Users size={20} /> Volunteer Enquiry
              </button>
              <Link to="/donate" className="btn-outline-white text-lg px-10 py-5">
                Donate Now <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          VOLUNTEER ENQUIRY MODAL
      ══════════════════════════════════════════════════════════ */}
      {volunteerOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4" style={{background:'rgba(5,10,30,0.8)', backdropFilter:'blur(8px)'}}>
          <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden">
            <div className="p-8" style={{background:'linear-gradient(135deg, #0f2050, #1a3570)'}}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-black text-white">Volunteer Enquiry</h3>
                  <p className="text-white/60 text-sm mt-1">Join CNI Foundation's volunteer network</p>
                </div>
                <button onClick={() => setVolunteerOpen(false)} className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
                  ✕
                </button>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="p-8 space-y-5">
              {[
                { name:'name', label:'Full Name', type:'text', placeholder:'Your full name' },
                { name:'email', label:'Email Address', type:'email', placeholder:'your@email.com' },
                { name:'phone', label:'Phone Number', type:'tel', placeholder:'+91 98765 43210' },
              ].map((f) => (
                <div key={f.name}>
                  <label className="block text-sm font-semibold text-text mb-2">{f.label}</label>
                  <input
                    type={f.type}
                    name={f.name}
                    value={form[f.name]}
                    onChange={handleForm}
                    placeholder={f.placeholder}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-secondary text-text text-sm transition-colors"
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-semibold text-text mb-2">How would you like to help?</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleForm}
                  rows={3}
                  placeholder="Tell us your skills and availability..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-secondary text-text text-sm transition-colors resize-none"
                />
              </div>
              <button type="submit" className="btn-secondary w-full text-base py-4 mt-2">
                Submit Enquiry <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default Home;
