import { usePortfolio } from "../context/PortfolioContext";

export default function Hero() {
  const { name, title, contact } = usePortfolio();
  const initials = name.split(" ").map((w) => w[0]).join("").slice(0, 2);

  return (
    <section className="hero">
      <div className="hero-avatar">{initials}</div>
      <h1>{name}</h1>
      <p className="hero-title">{title}</p>
      <div className="contact-links">
        {contact.map(({ icon: Icon, href, title: tip }) =>
          href ? (
            <a key={tip} href={href} target="_blank" rel="noreferrer" title={tip}><Icon /></a>
          ) : (
            <span key={tip} title={tip}><Icon /></span>
          )
        )}
      </div>
    </section>
  );
}
