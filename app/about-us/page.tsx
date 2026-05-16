import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { CTA } from '@/components/CTA';
import { SubHero } from '@/components/SubHero';
import { AreasServed } from '@/components/AreasServed';

const PORTRAIT_IMG = '/baia_photo_optimized.jpg';
const PUPPY_IMG = 'https://images.unsplash.com/photo-1591946614720-90a587da4a36?auto=format&fit=crop&w=1400&q=70';
const CATDOG_IMG = 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?auto=format&fit=crop&w=1400&q=70';
const ACVS_LOGO = 'https://www.acvs.org/wp-content/uploads/2019/02/ACVS-logo-horizontal.png';

const trust = [
  ['Board-Certified Surgical Expertise', 'Dr. Baia is ACVS-certified and has decades of experience with both large and small animals.'],
  ['Clinic-Based Mobile Service', 'All procedures are performed in your clinic&rsquo;s surgical suite, using our specialized mobile equipment.'],
  ['Trusted Collaboration', 'We prioritize your clinic&rsquo;s workflow, support your team, and act as a surgical extension of your practice.'],
  ['Clear Communication', 'Our consultative approach ensures transparency and alignment from first contact through post-op recovery.'],
  ['Focused on Outcomes', 'Every case is handled with surgical precision, medical integrity, and a genuine commitment to patient well-being.'],
];

export default function AboutUs() {
  return <>
    <SubHero
      kicker="Expert Surgical Care for Pets in Central New Jersey & Beyond"
      title="About Spectrum Veterinary Surgical Services"
      body={<p><strong>Spectrum Veterinary Surgical Services</strong> brings board-certified mobile surgery directly to your clinic, serving pets across Central New Jersey, Eastern Pennsylvania, and Southern New York. Founded by Dr. Petrisor Baia, we partner with veterinary <strong>teams</strong> to provide advanced, collaborative care that supports pets, clients, and clinics alike.</p>}
    />

    <section className="section section-gray">
      <div className="container two-col">
        <img className="portrait-img" src={PORTRAIT_IMG} alt="Dr. Petrisor Baia, DVM MS DACVS-LA" />
        <div>
          <p className="kicker">A Dedicated Surgeon with Over 20 Years of Experience</p>
          <h2>Meet Dr. Petrisor Baia,<br/>DVM MS DACVS-LA</h2>
          <p>Dr. Petrisor Baia, DVM MS DACVS-LA, is an experienced veterinary surgeon with over 20 years of practice. Originally from Severin, Romania, he graduated from the School of Veterinary Medicine in Timisoara, Romania, in 2004. Dr. Baia pursued advanced surgical training and, in 2013, he completed a combined Surgical Residency and Master of Science degree in Biomechanics at Louisiana State University. He became board-certified by the American College of Veterinary Surgeons in 2016.</p>
          <p>From 2013 to 2023, Dr. Baia worked in equine private referral surgical centers, specializing in advanced orthopedic and minimally invasive procedures. His expertise allowed him to operate on some of the finest four-legged athletes in the world. Over the last few years, he expanded his focus to include companion animal surgery, offering his skillset to help pets and their families across the region.</p>
          <p>Dr. Baia&rsquo;s professional interests lie in orthopedic surgeries, joint stabilization, and minimally invasive techniques, with a deep passion for restoring mobility, comfort, and quality of life. Outside of veterinary medicine, he&rsquo;s a devoted husband and father to three children. He enjoys outdoor sports, traveling, and spending quality time with his family.</p>
        </div>
      </div>
    </section>

    <section className="section section-white">
      <div className="container two-col">
        <div>
          <p className="kicker">Partnership-Focused, Patient-Centered</p>
          <h2>A Modern Approach to Mobile Veterinary Surgery</h2>
          <p><strong>Spectrum Veterinary Surgical Services</strong> was founded to meet a growing need among veterinary clinics: reliable, high-level surgical care performed onsite by a trusted, board-certified expert. By offering a mobile model, we eliminate the need for client referrals to distant facilities while improving patient outcomes through seamless, in-clinic treatment.</p>
          <p>Our goal is to support veterinary teams&mdash;not compete with them. From pre-surgical consultations to follow-up guidance, we work closely with each clinic to tailor surgical plans, respect existing client relationships, and elevate standards of care.</p>
          <img className="acvs-logo" src={ACVS_LOGO} alt="American College of Veterinary Surgeons" />
        </div>
        <img className="services-image" src={PUPPY_IMG} alt="Golden retriever puppy" />
      </div>
    </section>

    <section className="dark-strip">
      <div className="container">
        <p className="kicker">Local Reach, Regional Impact</p>
        <h2>Serving the Heart of the Tri-State Region</h2>
        <p>We proudly serve veterinary clinics throughout Central New Jersey, Eastern Pennsylvania, and Southern New York. With flexible scheduling and a collaborative mindset, we&rsquo;re here to help clinics meet their surgical needs without logistical hurdles or long referral wait times.</p>
      </div>
    </section>

    <section className="section section-white">
      <div className="container two-col">
        <img className="why-image" src={CATDOG_IMG} alt="A cat and a dog together" />
        <div>
          <p className="kicker">Precision, Partnership, and Trust</p>
          <h2>Why Veterinary Clinics Trust Spectrum</h2>
          <div className="features">
            {trust.map(([title, text]) => (
              <article className="feature" key={title}>
                <CheckCircle2 className="check-icon" />
                <div>
                  <h3>{title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: text }} />
                </div>
              </article>
            ))}
          </div>
          <Link className="button" href="/testimonials">Read Our Reviews</Link>
        </div>
      </div>
    </section>

    <CTA />
    <AreasServed />
  </>;
}
