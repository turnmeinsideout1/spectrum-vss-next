import Link from 'next/link';

type SubHeroProps = {
  kicker: string;
  title: string;
  body: React.ReactNode;
  buttonText?: string;
  buttonHref?: string;
};

export function SubHero({ kicker, title, body, buttonText = 'Appointment', buttonHref = '/book-appointment' }: SubHeroProps) {
  return <section className="subhero">
    <div className="container subhero-inner">
      <p className="kicker">{kicker}</p>
      <h1>{title}</h1>
      <div className="lead">{body}</div>
      {buttonText && <Link className="button" href={buttonHref}>{buttonText}</Link>}
    </div>
  </section>;
}
