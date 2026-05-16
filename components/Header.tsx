import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';
import { site } from '@/lib/site';

export function Header() {
  return <>
    <div className="top-strip">
      <div className="container contact-row">
        <a href={`tel:${site.phone}`}><Phone size={14} /> {site.phone}</a>
        <a href={`mailto:${site.email}`}><Mail size={14} /> {site.email}</a>
      </div>
    </div>
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="logo-link" href="/"><img src={site.logo} alt="Spectrum Veterinary Surgical Services Logo White" /></Link>
        <nav className="main-nav" aria-label="Main navigation">
          <Link href="/" className="active">Home</Link>
          <div className="nav-group">
            <Link href="/about-us">About Us</Link>
            <div className="dropdown">
              <Link href="/veterinarian-bedminster-nj">Our Team</Link>
              <Link href="/testimonials">Testimonials</Link>
            </div>
          </div>
          <div className="nav-group">
            <span>Services</span>
            <div className="dropdown">
              <Link href="/services/orthopedic-surgery">Orthopedic Surgery</Link>
              <Link href="/services/tplo-surgery">TPLO Surgery</Link>
              <Link href="/services/soft-tissue-surgery">Soft Tissue Surgery</Link>
              <Link href="/services/large-animal-surgery">Large Animal Surgery</Link>
              <Link href="/services/veterinary-consultations">Veterinary Consultations</Link>
            </div>
          </div>
          <div className="nav-group">
            <span>Resources</span>
            <div className="dropdown">
              <Link href="/online-forms">Online Forms</Link>
              <Link href="/payment-options">Payment Options</Link>
            </div>
          </div>
          <Link href="/contact" className="nav-contact">Contact</Link>
          <Link className="nav-button" href="/book-appointment">Book Appointment</Link>
        </nav>
      </div>
    </header>
  </>;
}
