import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products.js';

export default function ProductsPage() {
  return (
    <>
      <section className="catalogue-page-hero">
        <div className="container catalogue-page-hero-inner"><p className="eyebrow"><span /> NATURAL STONE · INDIA</p><h1>Materials with<br /><span>a sense of origin.</span></h1><p>Discover India’s natural-stone possibilities for your project or business. Share your preferred stone, finish or specification to begin a sourcing enquiry.</p><Link className="button button-sand" to="/contact#enquiry">Ask about availability <ArrowUpRight size={16} /></Link><div className="catalogue-tabs" aria-label="Stone category shortcuts">{products.map((product) => <Link to={`/products/${product.id}`} key={product.id}>{product.name}</Link>)}</div></div>
        <div className="catalogue-hero-swatches" aria-hidden="true"><div className="catalogue-swatch swatch-one"><img src="/images/Black-Galaxy-Counter-Top%20img.webp" alt="Granite swatch" /></div><div className="catalogue-swatch swatch-two"><img src="/images/limestone%20img.webp" alt="Limestone swatch" /></div></div>
      </section>

      <section className="catalogue-grid-section section-pad"><div className="container"><div className="section-heading catalogue-page-heading"><p className="eyebrow">EXPLORE THE COLLECTION</p><h2>Indian natural stone,<br /><span>by category.</span></h2><p>Availability and product details depend on the source. Pricing is shared on enquiry.</p></div>
        <div className="catalogue-cards">{products.map((product) => <Link className="catalogue-card catalogue-card-link" id={product.id} key={product.id} to={`/products/${product.id}`} aria-label={`View ${product.name} products`}><div className={`catalogue-card-image ${product.imageClass}`}><img src={product.image} alt={product.alt} loading="lazy" /><span className="catalogue-card-image-arrow"><ArrowUpRight size={17} /></span></div><div className="catalogue-card-copy"><small>{product.descriptor}</small><h3>{product.name}</h3><p>{product.description}</p><div className="catalogue-card-bottom"><span>PRICING ON REQUEST</span><span className="catalogue-card-action">View {product.name.toLowerCase()} products <ArrowRight size={14} /></span></div></div></Link>)}</div>
      </div></section>

      <section className="catalogue-inquiry-band"><div className="container inquiry-band-inner"><div><p className="eyebrow eyebrow-light">A PROJECT IN MIND?</p><h2>Let’s discuss the<br />right <span>material.</span></h2><p>Share a product, finish or sourcing requirement. We’ll help clarify the next step.</p></div><Link className="button button-white" to="/contact#enquiry">Enquire with YGM Global <ArrowUpRight size={16} /></Link><div className="inquiry-band-texture" aria-hidden="true">YGM</div></div></section>
    </>
  );
}
