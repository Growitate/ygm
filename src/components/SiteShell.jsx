import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ArrowUpRight, Menu, Phone, X } from 'lucide-react';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export function BrandMark({ light = false }) {
  return (
    <Link className={`brand-lockup${light ? ' brand-lockup-light' : ''}`} to="/" aria-label="YGM Global home">
      <span className="brand-logo-frame">
        <img className="brand-logo-img" src="/images/logo.jpeg" alt="YGM Global Pvt. Ltd." />
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <BrandMark />
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          {navItems.map((item) => <NavLink key={item.to} to={item.to} end={item.to === '/'} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setMenuOpen(false)}>{item.label}</NavLink>)}
        </nav>
        <div className="header-actions"><a className="header-phone" href="tel:+918792720101"><Phone size={14} /><span>+91 87927 20101</span></a><Link className="nav-cta" to="/contact#enquiry" onClick={() => setMenuOpen(false)}>Enquire now <ArrowUpRight size={14} /></Link></div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-col"><BrandMark /><p>From Indian Quarries<br />to Global Markets</p><span className="footer-note">INDIA · NATURAL STONE SOURCING</span><address className="footer-address">244, 3rd cross, Maruthi Layout, Hebbal, Dasarahalli,<br />Bangaluru, Karnataka - 560024, India.</address></div>
        <div className="footer-col"><span className="footer-label">Explore</span><Link to="/products">Stone categories</Link><Link to="/about">About YGM Global</Link><Link to="/contact">Make an enquiry</Link><Link to="/privacy">Privacy</Link></div>
        <div className="footer-col"><span className="footer-label">Email</span><a href="mailto:contact@ygmglobal.in">contact@ygmglobal.in</a><a href="https://www.instagram.com/ygmglobal01?dlrf=MTAybzBtN2hsNzg4aA==" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={13} /></a><a href="https://www.facebook.com/share/16MzTaXjM6y/" target="_blank" rel="noreferrer">Facebook <ArrowUpRight size={13} /></a><a href="https://www.linkedin.com/in/ygm-global-98182344a" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} /></a></div>
        <div className="footer-col"><span className="footer-label">Call / WhatsApp</span><a href="tel:+918792720101">+91 87927 20101</a><a href="https://wa.me/918792720101" target="_blank" rel="noreferrer">Message us on WhatsApp <ArrowUpRight size={13} /></a></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} YGM Global Private Limited</span><span className="footer-tagline">Natural stone connections, from India to the world.</span><span className="footer-built-by">Built by <a href="https://growitate.com" target="_blank" rel="noopener noreferrer">Growitate</a></span><Link to="/privacy">Privacy &amp; enquiries</Link></div>
    </footer>
  );
}
