import { ArrowUpRight, Compass, Eye, Gem, MoveUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <div className="about-hero-copy"><p className="eyebrow"><span /> ABOUT YGM GLOBAL</p><h1>Built around<br />a <em>meaningful connection.</em></h1><p>YGM Global Private Limited was established with a vision to connect India’s natural stone industry with international markets.</p><Link className="text-link" to="/contact#enquiry">Let’s begin a conversation <ArrowUpRight size={16} /></Link></div>
        <div className="about-hero-visual"><img src="/images/quarry.webp" alt="Active granite quarry in India showing geological strata and extraction" /><span className="about-image-index">AN INDIAN SOURCING PARTNER</span></div>
      </section>

      <section className="story-section section-pad"><div className="container story-grid"><div className="story-aside"><p className="eyebrow">OUR STORY</p><span className="story-line" /><span>INDIA, WITH A WORLDWIDE VIEW</span></div><div className="story-body"><h2>Natural stone is local by origin.<br /><em>Sourcing brings it closer.</em></h2><p>India is home to an exceptional range of natural stones, including premium granite and limestone. We believe these resources offer valuable opportunities for businesses across the world.</p><p>At YGM Global, our journey is centred around understanding global buyer requirements, developing relationships with Indian stone suppliers and creating meaningful business connections.</p><p>As a growing export company, we are committed to learning, improving and building long-term relationships through transparency, professional communication and a customer-focused approach.</p><p>Our goal is to make sourcing Indian natural stones more accessible for international buyers.</p></div></div></section>

      <section className="belief-section"><div className="container belief-grid"><article className="belief-card"><div className="belief-icon"><Compass size={24} strokeWidth={1.3} /></div><p className="eyebrow eyebrow-light">OUR MISSION</p><h2>Bridge the sourcing<br /><em>conversation.</em></h2><p>Our mission is to connect international buyers with India’s natural stone industry by providing buyer-focused sourcing assistance, transparent communication and dependable business coordination. We aim to build lasting partnerships while promoting the diversity of Indian natural stones in global markets.</p></article><article className="belief-card belief-card-light"><div className="belief-icon"><Eye size={24} strokeWidth={1.3} /></div><p className="eyebrow">OUR VISION</p><h2>Build trust, <em>over time.</em></h2><p>Our vision is to establish YGM Global as a recognised Indian natural stone sourcing and export partner in international markets, known for professional service, strong supplier relationships, transparent business practices and long-term customer partnerships.</p></article></div></section>

      <section className="values-section section-pad"><div className="container values-inner"><div><p className="eyebrow">HOW WE APPROACH THE WORK</p><h2>Good sourcing begins<br />with <em>good questions.</em></h2></div><div className="value-list"><div><Gem size={18} /><div><h3>Understand first</h3><p>Start with the application, specifications and priorities behind your enquiry.</p></div></div><div><Compass size={18} /><div><h3>Communicate clearly</h3><p>Make product possibilities and next steps easier to discuss.</p></div></div><div><MoveUpRight size={18} /><div><h3>Build for the long term</h3><p>Make room for durable business relationships with buyers and suppliers.</p></div></div></div></div></section>

      <section className="about-cta"><div className="container about-cta-inner"><p className="eyebrow eyebrow-light">A CONNECTION WORTH MAKING</p><h2>Have a sourcing<br /><em>challenge in mind?</em></h2><Link className="button button-sand" to="/contact#enquiry">Talk with YGM Global <ArrowUpRight size={16} /></Link></div></section>
    </>
  );
}
