import { site } from '@/lib/site';
export function Footer() {
  return <footer className="footer"><div className="container footer-inner">
    <div><img src={site.logo} alt="Spectrum Veterinary Surgical Services" className="footer-logo" /><p>Mobile veterinary surgical care serving Central New Jersey, Eastern Pennsylvania, and Southern New York.</p></div>
    <div><h4>Get in Touch</h4><p>Phone: {site.phone}<br/>Email: {site.email}<br/>Mailing Address: {site.address}</p></div>
    <div><h4>Hours of Operation</h4><p>Monday – Friday: 9:00 AM – 5:00 PM<br/>Saturday – Sunday: Closed</p></div>
  </div><div className="footer-bottom">© 2026 Spectrum Veterinary Surgical Services | Privacy Policy | Accessibility Statement | Sitemap</div></footer>;
}
