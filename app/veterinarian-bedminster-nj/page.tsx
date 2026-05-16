import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { CTA } from '@/components/CTA';
import { SubHero } from '@/components/SubHero';
import { AreasServed } from '@/components/AreasServed';

const PORTRAIT_IMG = '/baia_photo_optimized.jpg';
const DOG_RUN_IMG = 'https://images.unsplash.com/photo-1558929996-da64ba858215?auto=format&fit=crop&w=1400&q=70';

const expertise = [
  'Orthopedic Surgery for Dogs and Cats',
  'Minimally Invasive Surgical Techniques',
  'Rehabilitation of Musculoskeletal Injuries',
  'Client and Clinic Education on Post-operative Care',
];

const standards = [
  'Consistent, board-certified surgical expertise',
  'Collaborative, clinic-focused communication',
  'Personalized surgical solutions for pets of all shapes and sizes',
  'A compassionate, client-centered approach to care',
];

export default function Team() {
  return <>
    <SubHero
      kicker="Trusted Veterinary Surgical Team in Bedminster, NJ"
      title="Meet Our Surgical Expert"
      body={<>
        <p>At <strong>Spectrum Veterinary Surgical Services</strong>, the heart of our practice lies in the skilled hands and compassionate care of our board-certified surgeon, Dr. Petrisor Baia. With decades of experience, a deep commitment to advancing veterinary medicine, and a reputation for excellence, Dr. Baia provides specialized surgical services that bring expert-level care directly to the clinics and pets that need it most.</p>
        <p>We proudly serve pet owners and veterinary clinics throughout Bedminster, NJ, and surrounding communities, delivering advanced mobile surgical care that prioritizes precision, safety, and patient comfort.</p>
      </>}
    />

    <section className="section section-gray">
      <div className="container two-col">
        <img className="portrait-img" src={PORTRAIT_IMG} alt="Dr. Petrisor Baia, DVM MS DACVS-LA" />
        <div>
          <p className="kicker dual-kicker">Board-Certified Veterinary Surgeon</p>
          <p className="kicker dual-kicker">Diplomate, American College of Veterinary Surgeons &ndash; Large Animal</p>
          <h2>Dr. Petrisor Baia, DVM MS DACVS-LA</h2>
          <p>Dr. Petrisor Baia is an experienced veterinary surgeon with over 20 years of practice. Originally from Severin, Romania, he graduated from the School of Veterinary Medicine in Timisoara-Ro in 2004. Dr. Baia pursued advanced surgical training, and in 2013, he completed a combined Surgical Residency and Master of Science degree in Biomechanics at Louisiana State University. He became board-certified by the American College of Veterinary Surgeons in 2016.</p>
          <p>From 2013 to 2023, Dr. Baia worked in equine private referral surgical centers, specializing in advanced orthopedic and minimally invasive procedures. His expertise allowed him to operate on some of the finest four-legged athletes in the world, earning recognition for his precision and dedication.</p>
          <p>In recent years, Dr. Baia expanded his surgical focus to include companion animals, combining his elite skillset with a growing passion for helping pets and their families. His professional interests lie in:</p>
          <div className="expertise-list">
            {expertise.map(item => (
              <article className="feature" key={item}>
                <CheckCircle2 className="check-icon" />
                <h3>{item}</h3>
              </article>
            ))}
          </div>
          <p>Dr. Baia&rsquo;s approach blends technical excellence with a deep understanding of the emotional and physical needs of both patients and their owners. He believes that successful outcomes begin with compassion and communication, and his mobile services are designed to bring gold-standard surgery directly to local veterinary teams and the communities they serve.</p>
          <p>Outside of veterinary medicine, Dr. Baia is a dedicated husband and father of three. He enjoys outdoor sports, traveling, and spending quality time with his family.</p>
        </div>
      </div>
    </section>

    <section className="section section-white">
      <div className="container two-col">
        <div>
          <p className="kicker">Care You Can Feel Confident Choosing</p>
          <h2>A Higher Standard of Mobile Surgical Care</h2>
          <p>Whether it&rsquo;s a routine orthopedic procedure or a complex soft tissue surgery, clients and veterinary partners trust Dr. Baia for:</p>
          <div className="features">
            {standards.map(item => (
              <article className="feature" key={item}>
                <CheckCircle2 className="check-icon" />
                <h3>{item}</h3>
              </article>
            ))}
          </div>
          <p>Our mission at <strong>Spectrum Veterinary Surgical Services</strong> is to provide advanced mobile surgery with the same level of quality and commitment found at major surgical centers&mdash;right here in Bedminster, New Jersey, and surrounding areas.</p>
        </div>
        <img className="why-image" src={DOG_RUN_IMG} alt="Dog running through a field" />
      </div>
    </section>

    <section className="center-cta">
      <div className="container">
        <h2>Ready to Refer a Case or Learn More?</h2>
        <p>Reach out today to schedule a procedure, discuss a case, or learn more about our mobile surgical offerings. At <strong>Spectrum Veterinary Surgical Services</strong>, expert-level care is never far away.</p>
        <div className="button-row">
          <Link className="button" href="/contact">Contact Us</Link>
          <Link className="button" href="/book-appointment">Appointment</Link>
        </div>
      </div>
    </section>

    <section className="dark-strip">
      <div className="container">
        <p className="kicker">Expanded Access to Trusted Surgical Care</p>
        <h2>Serving Veterinary Clinics Across New Jersey</h2>
        <p>Dr. Baia partners with general practices, emergency clinics, and specialty hospitals throughout New Jersey, offering trusted mobile surgery services to elevate patient care without the need for referral transport.</p>
        <p>Whether you&rsquo;re a clinic in need of a surgical partner or a pet owner navigating next steps in your pet&rsquo;s health journey, we&rsquo;re here to help.</p>
      </div>
    </section>

    <CTA />
    <AreasServed />
  </>;
}
