import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { SiteFooter, SiteHeader } from './components/SiteShell.jsx';
import HomePage from './pages/HomePage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import CategoryProductsPage from './pages/CategoryProductsPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import PrivacyPage from './pages/PrivacyPage.jsx';

const routeMetadata = {
  '/': { title: 'YGM Global — From Indian Quarries to Global Markets', description: 'YGM Global connects international buyers with Indian granite and limestone sourcing opportunities.' },
  '/products': { title: 'Natural Stone Products — YGM Global', description: 'Explore Indian granite and limestone sourcing opportunities with YGM Global.' },
  '/products/granite': { title: 'Indian Granite Collection — YGM Global', description: 'Explore Absolute Black, Black Galaxy, Black Pearl, Imperial Red, Steel Grey, Tan Brown and Viscount White granite with YGM Global.' },
  '/products/limestone': { title: 'Indian Limestone Collection — YGM Global', description: 'Explore Kadappa Black, Kota Blue, Tandur Grey and Tandur Yellow limestone with YGM Global.' },
  '/about': { title: 'About YGM Global — A Natural Stone Sourcing Partner', description: 'Learn about YGM Global’s India-to-global-market focus, story, mission and vision.' },
  '/contact': { title: 'Contact YGM Global — Natural Stone Enquiries', description: 'Share your natural stone sourcing requirements with YGM Global by enquiry, email, phone or WhatsApp.' },
  '/privacy': { title: 'Privacy — YGM Global', description: 'Website privacy information and details about how YGM Global enquiries are handled.' },
};

function RouteEffects() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const currentPage = routeMetadata[pathname] ?? routeMetadata['/'];
    document.title = currentPage.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', currentPage.description);
    if (hash) {
      const timer = window.setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <RouteEffects />
      <SiteHeader />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:categoryId" element={<CategoryProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <SiteFooter />
    </>
  );
}
