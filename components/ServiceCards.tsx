import { services } from '@/lib/site';
export function ServiceCards() { return <div className="service-grid">{services.slice(0,2).map(service => <article className="service-card" key={service.slug}><span className="checkmark">Z</span><h3>{service.title}</h3><p>{service.summary}</p></article>)}</div> }
