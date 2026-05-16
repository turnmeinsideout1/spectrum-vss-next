import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle2 } from 'lucide-react';
import { CTA } from '@/components/CTA';
import { SubHero } from '@/components/SubHero';
import { AreasServed } from '@/components/AreasServed';
import { services } from '@/lib/site';

export function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }));
}

const COLLIE_IMG = 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?auto=format&fit=crop&w=1400&q=70';
const LAB_IMG = 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=1400&q=70';

const orthoServices = [
  ['Cruciate Ligament Repair (TPLO, Lateral Suture)', 'One of the most common orthopedic issues in dogs, cranial cruciate ligament (CCL) tears, requires surgical stabilization to restore knee function. We offer both Tibial Plateau Leveling Osteotomy (TPLO) and lateral suture stabilization based on patient needs.'],
  ['Patellar Luxation Correction', 'A misaligned kneecap can cause lameness and joint damage over time. We realign and stabilize the patella to improve movement and comfort.'],
  ['Fracture Repair', 'From simple breaks to complex fractures, we provide internal or external fixation techniques to stabilize healing bones and restore limb use.'],
  ['Femoral Head Ostectomy (FHO)', 'This procedure removes the head of the femur to relieve pain from hip dysplasia or trauma, especially effective for small dogs and cats.'],
  ['Limb Amputations', 'When a limb is non-functional or severely injured, amputation can provide a pain-free, mobile life. We perform this procedure with careful consideration and postoperative support.'],
];

function OrthopedicPage() {
  return <>
    <SubHero
      kicker="Restoring Mobility. Reducing Pain. Improving Quality of Life."
      title="Orthopedic Surgery for Pets in Central New Jersey"
      body={<p>When a pet experiences orthopedic pain or injury, it can have a significant impact on their comfort, mobility, and long-term health. At <strong>Spectrum Veterinary Surgical Services</strong>, we specialize in advanced orthopedic surgery for dogs and cats, providing expert care directly at your veterinary clinic. From cruciate ligament repair to complex fracture stabilization, our board-certified <strong>mobile surgical team</strong> is here to help pets move better and feel better&mdash;without the stress of referral travel.</p>}
    />

    <section className="section section-gray">
      <div className="container two-col">
        <div>
          <h2>What Is Veterinary Orthopedic Surgery?</h2>
          <p>Orthopedic surgery focuses on correcting conditions involving the bones, joints, ligaments, and tendons. Whether caused by trauma, degenerative disease, or congenital abnormalities, orthopedic issues often lead to pain, stiffness, and reduced function if left untreated. Prompt surgical intervention can restore comfort, improve limb use, and prevent further joint deterioration.</p>
          <p>Dr. Petrisor Baia, DVM MS DACVS-LA, leads <strong>our mobile surgical team</strong>. With over 20 years of surgical experience&mdash;including advanced training in biomechanics and board certification from the American College of Veterinary Surgeons&mdash;Dr. Baia offers unmatched skill and expertise in a wide range of orthopedic procedures. Serving veterinary clinics in Somerset County, Central New Jersey, Eastern Pennsylvania, and Southern New York, we collaborate directly with your veterinary team to deliver specialized orthopedic procedures with precision and compassion.</p>
        </div>
        <img className="services-image" src={COLLIE_IMG} alt="Border collie running in a field" />
      </div>
    </section>

    <section className="section section-white">
      <div className="container two-col">
        <img className="why-image" src={LAB_IMG} alt="Chocolate labrador walking" />
        <div>
          <p className="kicker">Specialized Orthopedic Care Without Referral Delays</p>
          <h2>Our Orthopedic Services</h2>
          <p>We provide a full spectrum of orthopedic procedures onsite in your clinic&rsquo;s surgical suite, using state-of-the-art mobile equipment and techniques that prioritize safety, pain management, and outcomes.</p>
          <p>Our orthopedic services include:</p>
          <div className="features">
            {orthoServices.map(([title, text]) => (
              <article className="feature" key={title}>
                <CheckCircle2 className="check-icon" />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
          <p>Each surgery includes a detailed case review, pre-operative consultation, intra-operative support, and post-surgical follow-up with your referring <a href="/veterinarian-bedminster-nj">veterinarian</a>.</p>
          <Link className="button" href="/contact">Request a Consultation</Link>
        </div>
      </div>
    </section>

    <section className="dark-strip">
      <div className="container">
        <p className="kicker">Specialist Support Without Disrupting Care</p>
        <h2>Expert Care, Right Where You Need It</h2>
        <p>What sets <strong>Spectrum Veterinary Surgical Services</strong> apart is our mobile model and collaborative approach. We come directly to your clinic, bringing the experience of a board-certified veterinary surgeon and the tools needed to perform orthopedic procedures on-site. This reduces stress for pets and owners while keeping the continuity of care with your trusted veterinary team.</p>
        <p>Dr. Baia&rsquo;s background in advanced orthopedic surgery and biomechanics, paired with decades of hands-on experience, ensures every patient receives thoughtful, tailored care.</p>
        <p>We are committed to providing precise, patient-focused orthopedic surgery that meets the highest standards of veterinary care.</p>
        <Link className="button" href="/veterinarian-bedminster-nj">Meet Our Team</Link>
      </div>
    </section>

    <section className="center-cta">
      <div className="container">
        <h2>Schedule an Orthopedic Consultation Today</h2>
        <p>If your pet is experiencing mobility issues or has been diagnosed with an orthopedic condition, <strong>Spectrum Veterinary Surgical Services</strong> is here to help. We provide trusted, board-certified orthopedic care&mdash;without the hassle of traveling to a referral hospital.</p>
        <Link className="button" href="/contact">Contact Us</Link>
      </div>
    </section>

    <section className="service-buttons">
      <div className="container">
        <h2>Surgical Services of Spectrum VSS</h2>
        <div className="button-grid">
          {services.map(s => (
            <Link key={s.slug} className="button" href={`/services/${s.slug}`}>{s.title}</Link>
          ))}
        </div>
      </div>
    </section>

    <CTA />
    <AreasServed />
  </>;
}

function GenericServicePage({ slug }: { slug: string }) {
  const service = services.find(s => s.slug === slug)!;
  return <>
    <SubHero
      kicker={service.eyebrow}
      title={service.title}
      body={<p>{service.summary}</p>}
    />
    <section className="section section-gray">
      <div className="container two-col">
        <div>
          <h2>How Spectrum can help</h2>
          <p>We provide onsite support in your clinic&rsquo;s surgical suite with a workflow designed around safety, communication, and continuity of care.</p>
          <div className="features">
            {service.points.map(point => (
              <article className="feature" key={point}>
                <CheckCircle2 className="check-icon" />
                <h3>{point}</h3>
              </article>
            ))}
          </div>
          <Link className="button" href="/contact">Request a Consultation</Link>
        </div>
        <div>
          <h3 style={{color:'var(--deep)',marginBottom:'12px'}}>Surgical Services of Spectrum VSS</h3>
          {services.map(s => (
            <p key={s.slug}><Link href={`/services/${s.slug}`}>{s.title}</Link></p>
          ))}
        </div>
      </div>
    </section>
    <CTA />
    <AreasServed />
  </>;
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);
  if (!service) return notFound();
  if (slug === 'orthopedic-surgery') return <OrthopedicPage />;
  return <GenericServicePage slug={slug} />;
}
