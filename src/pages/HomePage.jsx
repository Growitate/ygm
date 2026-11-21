import { ArrowRight, ArrowUpRight, BadgeCheck, Boxes, Compass, MessageCircle, MoveUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products.js';

const benefits = [
  { icon: <Compass size={20} strokeWidth={1.6} />, label: 'A clear starting point', title: 'Sourcing, centred on you', body: 'We begin with your intended use, the stone you have in mind and the details that matter to your business.' },
  { icon: <Boxes size={20} strokeWidth={1.6} />, label: 'Curated stone collections', title: 'Granite & limestone', body: 'Explore Indian granite and limestone collections through one dedicated business contact.' },
  { icon: <MessageCircle size={20} strokeWidth={1.6} />, label: 'Straightforward dialogue', title: 'Clear communication', body: 'Discuss product possibilities, source options and next steps in a focused, buyer-led conversation.' },
];

const heroFanSlabs = [
  { id: 'black-galaxy', image: '/images/Black-Galaxy-Counter-Top.webp', alt: 'Polished Black Galaxy granite countertop slab with golden specks', imageClass: 'stone-granite' },
  { id: 'limestone-slab', image: '/images/limestone.webp', alt: 'Authentic Indian limestone slab showing natural textured surface', imageClass: 'stone-marble' },
  { id: 'limestone', image: '/images/limestone.jpg', alt: 'Honed beige limestone block showing fine natural texture', imageClass: 'stone-limestone' },
  { id: 'sandstone', image: '/images/sandstone.jpg', alt: 'Warm honey-toned sandstone slab with natural sedimentary bands', imageClass: 'stone-sandstone' },
  { id: 'slate', image: '/images/slate.jpg', alt: 'Layered dark slate showing its natural cleft texture', imageClass: 'stone-slate' },
];

export default function HomePage() {
  return (
    <>
      <section className="hero hero-home">
        <div className="hero-content container">
          <p className="eyebrow"><span /> YGM GLOBAL · FROM INDIAN QUARRIES TO GLOBAL MARKETS</p>
          <h1>Bringing the Beauty of<br />Indian Natural Stones<br className="hero-break" /> to the World</h1>
          <p className="hero-copy">Connecting international buyers with India’s natural-stone sourcing network—thoughtfully, clearly and around your requirements.</p>
          <div className="hero-actions"><Link className="button button-sand" to="/contact#enquiry">Request sourcing information <ArrowUpRight size={16} /></Link><Link className="text-link" to="/products">Explore stone categories <ArrowRight size={15} /></Link></div>
        </div>
        <div className="hero-stone-fan" aria-label="An arrangement of Indian natural stone samples">
          {heroFanSlabs.map((slab, index) => <div className={`fan-slab fan-slab-${index + 1} ${slab.imageClass}`} key={slab.id}><img src={slab.image} alt={slab.alt} /></div>)}
        </div>
        <div className="container hero-proof-strip">
          <article className="proof-card"><span className="proof-icon"><BadgeCheck size={19} /></span><div><small>HOW WE WORK</small><strong>Buyer-focused sourcing</strong><p>Options shaped around your brief</p></div></article>
          <article className="proof-card"><span className="proof-icon"><Boxes size={19} /></span><div><small>WHAT WE SOURCE</small><strong>Granite & limestone</strong><p>One point of business contact</p></div></article>
          <article className="proof-card"><span className="proof-icon"><MessageCircle size={19} /></span><div><small>HOW WE CONNECT</small><strong>Clear product conversations</strong><p>Direct enquiry. Thoughtful follow-through.</p></div></article>
        </div>
      </section>

      <section className="benefits-section section-pad">
        <div className="container">
          <div className="section-heading centered-heading"><p className="eyebrow">A MORE CONSIDERED WAY TO SOURCE</p><h2>India’s stone network.<br /><span>One clear conversation.</span></h2><p>YGM Global helps international buyers navigate product options and connect with relevant Indian suppliers.</p></div>
          <div className="benefit-grid">{benefits.map((benefit) => <article className="benefit-card" key={benefit.title}><div className="benefit-top"><span className="benefit-icon">{benefit.icon}</span><small>{benefit.label}</small></div><h3>{benefit.title}</h3><p>{benefit.body}</p></article>)}</div>
          <div className="who-we-are-extension" id="who-we-are">
            <div className="who-we-are-inner">
              <div className="who-we-are-media">
                <div className="who-we-are-video-frame">
                  <video
                    src="/images/video_6623%20(1)%20(1)%20(1).mp4?v=2"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    aria-label="YGM Global company introduction video"
                  />
                  <span className="who-we-are-video-badge">YGM GLOBAL FACILITY</span>
                </div>
              </div>
              <div className="who-we-are-content">
                <div className="who-we-are-heading">
                  <p className="eyebrow"><span /> WHO WE ARE</p>
                  <h2>Who We <span>Are</span></h2>
                </div>
                <div className="who-we-are-body">
                  <p className="who-we-are-copy">
                    YGM Global Private Limited is an India-based natural stone sourcing and export company focused on connecting global buyers with quality Indian natural stones. We aim to understand our customer requirements and provide suitable sourcing solutions through professional communication, transparent business practices and reliable supplier coordination. Our goal is to build long-term partnerships and bring India&#39;s natural stone resources to international markets.
                  </p>
                  <Link className="text-link" to="/about">
                    Learn more about YGM Global <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-catalogue section-pad">
        <div className="container">
          <div className="catalogue-heading"><div><p className="eyebrow">THE NATURAL STONE COLLECTION</p><h2>Find the material<br />for your next <span>project.</span></h2></div><div className="catalogue-heading-side"><p>Premium granite &amp; limestone collections.<br />Sourcing enquiries tailored to you.</p><Link className="text-link" to="/products">View all stone categories <ArrowRight size={15} /></Link></div></div>
          <div className="home-product-grid">{products.map((product) => <article className="home-stone-card" key={product.id}><Link className={`home-stone-photo ${product.imageClass}`} to={`/products/${product.id}`} aria-label={`Explore ${product.name}`}><img src={product.image} alt={product.alt} loading="lazy" /><span className="stone-card-arrow"><ArrowUpRight size={16} /></span></Link><div className="home-stone-info"><div><small>{product.descriptor}</small><h3><Link to={`/products/${product.id}`}>{product.name}</Link></h3></div><Link to={`/products/${product.id}`} aria-label={`Explore ${product.name} products`}><ArrowUpRight size={16} /></Link></div><p className="home-stone-note">Pricing and sourcing details on request.</p></article>)}</div>
          <div className="catalogue-disclaimer"><span className="disclaimer-dot" /> Stone appearance and availability vary by source, finish and specification. Ask us about options for your requirements.</div>
        </div>
      </section>

      <section className="source-feature"><div className="source-feature-photo"><img src="/images/images.jpg" alt="Natural stone processing facility with granite slabs in Andhra Pradesh, India" loading="lazy" /><span>STONE HAS A PLACE OF ORIGIN. SOURCING BUILDS A BRIDGE.</span></div><div className="source-feature-copy"><p className="eyebrow">FROM INDIA TO GLOBAL MARKETS</p><h2>A sourcing partner,<br />not just a <span>stone list.</span></h2><p>YGM Global was established to make Indian natural stone sourcing more accessible for international buyers. We listen to your requirements, help explore relevant supplier connections and keep the conversation clear at every step.</p><Link className="button button-outline" to="/about">Learn about YGM Global <ArrowRight size={15} /></Link></div></section>

      <section className="orange-cta"><div className="container orange-cta-inner"><div><p className="eyebrow eyebrow-light">YOUR REQUIREMENTS COME FIRST</p><h2>Looking for a natural<br />stone sourcing partner?</h2><p>Tell us what you need. We’ll help you find the right place to start.</p></div><Link className="button button-white" to="/contact#enquiry">Start an enquiry <ArrowUpRight size={16} /></Link><div className="cta-stone-stamp" aria-hidden="true"><img src="/images/granite.jpg" alt="" /></div></div></section>
    </>
  );
}
