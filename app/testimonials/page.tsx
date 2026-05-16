import { Quote } from 'lucide-react';
import { CTA } from '@/components/CTA';
import { SubHero } from '@/components/SubHero';
import { AreasServed } from '@/components/AreasServed';

const reviews = ['David B.', 'Kelly C.', 'Walt W.'];

export default function Testimonials() {
  return <>
    <SubHero
      kicker="Trusted Care Through the Eyes of Pet Parents in Somerset County and Central NJ"
      title="Testimonials"
      body={<p>At <strong>Spectrum Veterinary Surgical Services</strong>, our mission is simple: deliver exceptional surgical care with compassion, precision, and professionalism &mdash; right where your patients need it most.</p>}
    />

    <section className="section testimonials">
      <div className="container">
        <p className="kicker">Trusted Care, Shared by Pet Owners</p>
        <h2>What Pet Owners Share About Their<br/>Experience Across Central New Jersey</h2>
        <p className="lead narrow">As a trusted mobile veterinary surgical center based in Bedminster, NJ, we&rsquo;re proud to collaborate with local veterinarians across New Jersey and beyond to improve surgical outcomes and elevate patient care. Nothing means more to us than the kind words we receive from our referring veterinarians and their clients. These testimonials reflect our unwavering commitment to excellence, advanced surgical expertise, and respectful communication throughout every case.</p>
        <p>We invite you to explore the stories below to see how Spectrum is making a meaningful impact on pets, families, and <a href="/veterinarian-bedminster-nj">veterinary teams</a> across the region.</p>
        <div className="testimonial-grid">
          {reviews.map(name => (
            <article className="testimonial" key={name}>
              <Quote className="quote-icon" />
              <h3>{name}</h3>
              <p>Coming Soon</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <CTA />
    <AreasServed />
  </>;
}
