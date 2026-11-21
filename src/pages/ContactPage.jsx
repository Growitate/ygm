import { useState } from 'react';
import { ArrowUpRight, Check, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products.js';

const emailAddress = 'contact@ygmglobal.in';

function WhatsAppIcon({ size = 17, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.53c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.44.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.71 4.3 3.79.6.26 1.07.41 1.44.53.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.12-.22-.19-.47-.31" />
    </svg>
  );
}

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const rawStone = searchParams.get('stone') || '';
  const selectedStone =
    rawStone === 'Granite' || rawStone === 'Granite (Others)' ? 'Granite (Others)' :
    rawStone === 'Limestone' || rawStone === 'Limestone (Others)' ? 'Limestone (Others)' :
    rawStone;
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setFormError('');
    const form = new FormData(event.currentTarget);
    const name = form.get('name').trim();
    const email = form.get('email').trim();
    const stone = form.get('stone');
    const message = form.get('message').trim();
    if (!name || !email || !message) {
      setFormError('Please complete the required fields before continuing.');
      return;
    }
    const subject = encodeURIComponent(`Natural stone enquiry${stone ? ` — ${stone}` : ''}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${form.get('company') || 'Not provided'}\nStone of interest: ${stone || 'Not selected'}\n\nRequirements:\n${message}`);
    setSubmitted(true);
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <section className="contact-hero"><div className="container contact-hero-inner"><div><p className="eyebrow"><span /> YOUR ENQUIRY STARTS HERE</p><h1>Good sourcing<br />begins with <em>a conversation.</em></h1></div><p>Tell us what you are looking for. We’ll take the time to understand your requirements and explore the right place to begin.</p></div></section>
      <section className="contact-section" id="enquiry"><div className="container contact-grid">
        <div className="contact-form-wrap"><p className="eyebrow">SHARE YOUR REQUIREMENTS</p><h2>What can we<br /><em>help you source?</em></h2><p className="form-intro">A few details will help us understand your enquiry. Pricing is shared on request.</p>
          <form className="enquiry-form" onSubmit={handleSubmit}>
            <div className="form-row"><label>Your name <span>*</span><input name="name" type="text" autoComplete="name" placeholder="Name" required /></label><label>Business email <span>*</span><input name="email" type="email" autoComplete="email" placeholder="you@company.com" required /></label></div>
            <div className="form-row"><label>Company <span className="optional">OPTIONAL</span><input name="company" type="text" autoComplete="organization" placeholder="Company name" /></label><label>Stone of interest <span className="optional">OPTIONAL</span><select name="stone" key={selectedStone} defaultValue={selectedStone}><option value="">Select a material</option><option value="Granite (Others)">Granite (Others)</option>{products.find((p) => p.id === 'granite')?.varieties.map((v) => <option key={v.id} value={`Granite — ${v.name}`}>Granite — {v.name}</option>)}<option value="Limestone (Others)">Limestone (Others)</option>{products.find((p) => p.id === 'limestone')?.varieties.map((v) => <option key={v.id} value={`Limestone — ${v.name}`}>Limestone — {v.name}</option>)}<option value="Others">Others</option></select></label></div>
            <label>Tell us about your requirements <span>*</span><textarea name="message" rows="4" placeholder="Stone type, colour, finish, application or any other details that matter to you…" required /></label>
            <div className="form-action"><button className="button button-dark" type="submit">Prepare your enquiry <ArrowUpRight size={16} /></button><span>Opens a new email in your email app.</span></div>
            {formError && <p className="form-error" role="alert">{formError}</p>}
            {submitted && <p className="form-success" role="status"><Check size={15} /> Your email app should open with your enquiry. If it does not, write to <a href={`mailto:${emailAddress}`}>{emailAddress}</a>.</p>}
            <p className="form-privacy">Your message is not sent or stored on this website. Submitting prepares a draft email in your device’s email application.</p>
          </form>
        </div>

        <aside className="contact-aside"><div className="contact-aside-photo"><img src="/images/limestone.jpg" alt="Natural Indian limestone material with finely textured surface" loading="lazy" /><span>MAKE THE FIRST CONNECTION</span></div><div className="contact-details"><p className="eyebrow">DIRECT CONTACT</p><a className="contact-detail" href="https://maps.google.com/?q=244,+3rd+cross,+Maruthi+Layout,+Hebbal,+Dasarahalli,+Bengaluru,+Karnataka+560024,+India" target="_blank" rel="noreferrer"><span><MapPin size={17} /></span><div><small>OFFICE ADDRESS</small><strong>244, 3rd cross, Maruthi Layout, Hebbal, Dasarahalli, Bangaluru, Karnataka - 560024, India.</strong></div><ArrowUpRight size={15} /></a><a className="contact-detail" href={`mailto:${emailAddress}`}><span><Mail size={17} /></span><div><small>EMAIL</small><strong>{emailAddress}</strong></div><ArrowUpRight size={15} /></a><a className="contact-detail" href="tel:+918792720101"><span><Phone size={17} /></span><div><small>PHONE / WHATSAPP</small><strong>+91 87927 20101</strong></div><ArrowUpRight size={15} /></a><a className="contact-detail contact-detail-whatsapp" href="https://wa.me/918792720101" target="_blank" rel="noreferrer"><span><WhatsAppIcon size={17} /></span><div><small>WHATSAPP</small><strong>Start a WhatsApp chat</strong></div><ArrowUpRight size={15} /></a><a className="contact-detail" href="https://www.instagram.com/ygmglobal01?dlrf=MTAybzBtN2hsNzg4aA==" target="_blank" rel="noreferrer"><span><Instagram size={17} /></span><div><small>FOLLOW ALONG</small><strong>Instagram · @ygmglobal01</strong></div><ArrowUpRight size={15} /></a><a className="contact-detail" href="https://www.facebook.com/share/16MzTaXjM6y/" target="_blank" rel="noreferrer"><span><Facebook size={17} /></span><div><small>FOLLOW ALONG</small><strong>Facebook · YGM Global</strong></div><ArrowUpRight size={15} /></a><a className="contact-detail" href="https://www.linkedin.com/in/ygm-global-98182344a" target="_blank" rel="noreferrer"><span><Linkedin size={17} /></span><div><small>CONNECT</small><strong>LinkedIn · YGM Global</strong></div><ArrowUpRight size={15} /></a></div></aside>
      </div></section>
    </>
  );
}
