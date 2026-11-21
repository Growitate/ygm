import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPage() {
  return (
    <section className="privacy-page section-pad"><div className="container privacy-container"><Link className="text-link privacy-back" to="/"><ArrowLeft size={15} /> Back to YGM Global</Link><p className="eyebrow">WEBSITE INFORMATION</p><h1>Privacy, <em>plainly.</em></h1><p className="privacy-updated">YGM Global Private Limited · Website privacy information</p><div className="privacy-copy">
      <h2>Information you choose to share</h2><p>The enquiry form on this website does not submit information to a website server. When you choose “Prepare your enquiry,” the site opens your device’s email application with the details you entered, addressed to contact@ygmglobal.in. You can review, edit or cancel that draft before sending it. If you send it, the information is delivered through your email provider and received by YGM Global by email.</p>
      <h2>Direct contact</h2><p>If you contact YGM Global by email, phone, WhatsApp, Instagram, Facebook or LinkedIn, the details you share are handled through the relevant service. Please avoid including information that is not needed for your sourcing enquiry.</p>
      <h2>Website storage and tracking</h2><p>This website does not use a site-side enquiry database or submit the form to a mailing service. This implementation does not set advertising or analytics cookies. Your browser, network provider and third-party services used to display website content may process technical connection data under their own terms.</p>
      <h2>Questions or requests</h2><p>For a privacy question about information you have shared directly with YGM Global, please email <a href="mailto:contact@ygmglobal.in">contact@ygmglobal.in</a>.</p>
    </div><Link className="button button-dark" to="/contact#enquiry">Contact YGM Global <ArrowUpRight size={16} /></Link></div></section>
  );
}
