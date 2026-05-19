import Link from 'next/link'

export default function OfferCard({ icon, title, tagline, features, href, cta = 'Découvrir' }) {
  return (
    <article className="offer-card">
      <div className="offer-card-icon" aria-hidden="true">{icon}</div>
      <h3 className="offer-card-title">{title}</h3>
      <p className="offer-card-tagline">{tagline}</p>
      {features && (
        <ul className="offer-card-features">
          {features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      )}
      <Link href={href} className="btn btn-outline btn-sm offer-card-cta">
        {cta} →
      </Link>
    </article>
  )
}
