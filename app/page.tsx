import Link from 'next/link';
import { CheckCircle2, Quote } from 'lucide-react';
import { CTA } from '@/components/CTA';
import { AreasServed } from '@/components/AreasServed';
import { services, whyChoose } from '@/lib/site';

const SERVICES_IMG = 'https://images.unsplash.com/photo-1591946614720-90a587da4a36?auto=format&fit=crop&w=1400&q=70';
const WHY_IMG = 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?auto=format&fit=crop&w=1400&q=70';

export default function Home() {
  const featured = services.filter(s => s.slug === 'orthopedic-surgery' || s.slug === 'soft-tissue-surgery');

  return <>
    <section className="hero">
      <div className="container hero-inner">
        <div>
          <p className="kicker">Advanced Surgical Care Delivered Directly to Your Practice</p>
          <h1>Mobile Veterinary Surgery Based in Central NJ</h1>
          <p className="lead">At <Link href="/about-us">Spectrum Veterinary Surgical Services</Link>, we provide board-certified mobile surgical care to veterinary clinics across Central New Jersey, Eastern Pennsylvania, and parts of Southern New York.</p>
          <Link className="button" href="/book-appointment">Appointment</Link>
        </div>
      </div>
    </section>

    <section className="section services-section">
      <div className="container two-col">
        <div className="services-copy">
          <h2>Surgical Services That Support Your Practice</h2>
          <p>We&rsquo;re here to enhance&mdash;not replace&mdash;your practice. As a trusted surgical partner, we offer a wide range of procedures to help your patients recover, heal, and thrive.</p>
          <p>Our services include:</p>
          <div className="service-list">
            {featured.map(service => (
              <article className="service-row" key={service.slug}>
                <CheckCircle2 className="check-icon" />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <img className="services-image" src={SERVICES_IMG} alt="Dog and cat together" />
      </div>
    </section>

    <section className="section why-section">
      <div className="container two-col">
        <img className="why-image" src={WHY_IMG} alt="Dog resting on a bed" />
        <div>
          <p className="kicker">Trusted Surgical Care That Comes to You</p>
          <h2>Why Veterinary Clinics Choose Spectrum Veterinary Surgical Services (SVSS)</h2>
          <div className="features">
            {whyChoose.map(([title, text]) => (
              <article className="feature" key={title}>
                <CheckCircle2 className="check-icon" />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
          <Link className="button" href="/about-us">More About Us</Link>
        </div>
      </div>
    </section>

    <section className="team-strip">
      <div className="container">
        <p className="kicker">Expert Surgical Leadership You Can Trust</p>
        <h2>Meet Our Surgical Team</h2>
        <p>Spectrum is led by Dr. Petrisor Baia, DVM, DACVS, a mobile board certified veterinary surgeon with advanced surgical training. His consultative approach makes him a valuable partner to veterinary clinics throughout the region.</p>
        <Link className="button" href="/veterinarian-bedminster-nj">Meet Our Team</Link>
      </div>
    </section>

    <section className="section testimonials">
      <div className="container">
        <p className="kicker">Expertise That Extends Your Practice</p>
        <h2>Trusted by Local Clinics<br/>Across Central New Jersey</h2>
        <p className="lead narrow">We&rsquo;re proud to be the surgical partner of choice for veterinary clinics in the surrounding areas of Central NJ, Eastern Pennsylvania, and parts of Southern New York. Our mobile model allows us to deliver high-quality care without compromise&mdash;while strengthening the bond between GPs and their clients.</p>
        <p>Hear what our referring clinics have to say.</p>
        <div className="testimonial-grid">
          {['David B.','Kelly C.','Walt W.'].map(name => (
            <article className="testimonial" key={name}>
              <Quote className="quote-icon" />
              <h3>{name}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae elit eu lorem commodo bibendum eu et erat. Proin ac congue enim. Nullam eu condimentum velit.</p>
            </article>
          ))}
        </div>
        <Link className="button" href="/testimonials">Read Our Reviews</Link>
      </div>
    </section>

    <CTA />
    <AreasServed />
  </>;
}
