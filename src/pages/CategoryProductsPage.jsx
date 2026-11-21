import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { products } from '../data/products.js';

export default function CategoryProductsPage() {
  const { categoryId } = useParams();
  const category = products.find((item) => item.id === categoryId);

  if (!category) {
    return <Navigate to="/products" replace />;
  }

  return (
    <>
      <section className="catalogue-page-hero category-detail-hero">
        <div className="container catalogue-page-hero-inner">
          <Link className="category-back-link" to="/products">
            <ArrowLeft size={14} /> Back to stone categories
          </Link>
          <p className="eyebrow">
            <span /> NATURAL STONE · {category.name.toUpperCase()} COLLECTION
          </p>
          <h1>
            Indian <span>{category.name}</span>
          </h1>
          <p>{category.description}</p>
          <div className="catalogue-tabs" aria-label="Switch stone category">
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className={product.id === category.id ? 'active' : ''}
              >
                {product.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="catalogue-grid-section section-pad">
        <div className="container">
          <div className="section-heading catalogue-page-heading">
            <p className="eyebrow">SELECT A STONE TO ENQUIRE</p>
            <h2>
              {category.name} <span>varieties.</span>
            </h2>
            <p>Click any {category.name.toLowerCase()} card below to proceed directly to an enquiry.</p>
          </div>

          <div className="variety-grid">
            {category.varieties.map((item) => {
              const stoneQuery =
                item.name.toLowerCase() === category.name.toLowerCase()
                  ? category.name
                  : `${category.name} — ${item.name}`;

              return (
                <Link
                  className="variety-card"
                  key={item.id}
                  to={`/contact?stone=${encodeURIComponent(stoneQuery)}#enquiry`}
                  aria-label={`Enquire now about ${item.name}`}
                >
                  <div className="variety-card-image">
                    <img src={item.image} alt={item.alt} loading="lazy" />
                    <span className="catalogue-card-image-arrow">
                      <ArrowUpRight size={17} />
                    </span>
                  </div>
                  <div className="variety-card-copy">
                    <small>{category.name.toUpperCase()}</small>
                    <h3>{item.name}</h3>
                    <div className="catalogue-card-bottom">
                      <span>PRICING ON REQUEST</span>
                      <span className="variety-card-cta">
                        Enquire now <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="catalogue-inquiry-band">
        <div className="container inquiry-band-inner">
          <div>
            <p className="eyebrow eyebrow-light">A PROJECT IN MIND?</p>
            <h2>
              Let’s discuss the
              <br />
              right <span>material.</span>
            </h2>
            <p>Share a product, finish or sourcing requirement. We’ll help clarify the next step.</p>
          </div>
          <Link
            className="button button-white"
            to={`/contact?stone=${encodeURIComponent(category.name)}#enquiry`}
          >
            Enquire with YGM Global <ArrowUpRight size={16} />
          </Link>
          <div className="inquiry-band-texture" aria-hidden="true">
            YGM
          </div>
        </div>
      </section>
    </>
  );
}

