import { site } from '@/lib/site';

export function AreasServed() {
  return <section className="areas">
    <div className="container">
      <h2>Areas We Serve</h2>
      <p>We&rsquo;re proud to offer mobile veterinary surgical services to practices throughout:</p>
      <strong>{site.areas}</strong>
      <p>Not sure if your clinic is in our service area? Give us a call&mdash;we&rsquo;re happy to help.</p>
    </div>
  </section>;
}
