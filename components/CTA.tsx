import { Phone, Clock, Asterisk } from 'lucide-react';
import { site } from '@/lib/site';

export function CTA() {
  return <section className="questions">
    <div className="container">
      <p className="kicker">We&rsquo;re Just a Call or Email Away</p>
      <h2>Questions?</h2>
      <p className="lead">Whether you&rsquo;re scheduling a procedure, seeking a second opinion, or need more information, we&rsquo;re here to support you. At Spectrum Veterinary Surgical Services, you&rsquo;ll always reach a real person ready to help.</p>
      <p>Call <a href={`tel:${site.phone}`}>{site.phone}</a> or send us a message.</p>
      <p>Let&rsquo;s work together to deliver the highest standard of surgical care to your patients.</p>
      <div className="info-grid">
        <article>
          <span className="icon"><Phone /></span>
          <h3>Get in Touch</h3>
          <p>Phone: {site.phone}<br/>Email: {site.email}<br/>Mailing Address: {site.address}</p>
          <p>We are a mobile veterinary surgical service. All procedures and consultations take place on-site at your referring veterinary clinic.</p>
        </article>
        <article>
          <span className="icon"><Clock /></span>
          <h3>Hours of Operation</h3>
          <p>Monday &ndash; Friday: 9:00 AM &ndash; 5:00 PM<br/>Saturday &ndash; Sunday: Closed</p>
        </article>
        <article>
          <span className="icon"><Asterisk /></span>
          <h3>Referring a Case?</h3>
          <p>Veterinary teams can reach out directly via phone or email. We aim to respond to all inquiries within one business day. When referring a patient, please include all relevant records, lab results, and diagnostic images.</p>
          <p>Ready to collaborate? Send us a message now.</p>
        </article>
      </div>
    </div>
  </section>;
}
