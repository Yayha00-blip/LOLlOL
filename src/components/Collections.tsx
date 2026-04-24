import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const collections = [
  {
    name: 'Classique',
    description: 'Intemporel & soigné',
    count: 18,
    slug: 'classique',
    bg: 'var(--espresso)',
    textColor: 'var(--cream)',
    subColor: 'var(--tan)',
  },
  {
    name: 'Lin & Été',
    description: 'Légèreté & fraîcheur',
    count: 12,
    slug: 'lin-ete',
    bg: 'var(--cream-dark)',
    textColor: 'var(--ink)',
    subColor: 'var(--brown)',
  },
  {
    name: 'Cérémonie',
    description: 'Élégance & prestige',
    count: 9,
    slug: 'ceremonie',
    bg: 'var(--tan)',
    textColor: 'var(--espresso)',
    subColor: 'var(--brown)',
  },
  {
    name: 'Casual',
    description: 'Décontracté & moderne',
    count: 15,
    slug: 'casual',
    bg: 'var(--cream-mid)',
    textColor: 'var(--espresso)',
    subColor: 'var(--brown)',
  },
]

export default function Collections() {
  return (
    <section
      id="collections"
      style={{ padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 64px)' }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          marginBottom: '40px',
        }}
      >
        <div>
          <p className="eyebrow" style={{ marginBottom: '10px' }}>
            Nos Collections
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(28px, 3vw, 40px)',
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            Chaque style,{' '}
            <em style={{ fontStyle: 'italic' }}>une histoire</em>
          </h2>
        </div>
        <Link
          href="/collections"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '10px',
            fontWeight: 500,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--brown)',
            borderBottom: '0.5px solid var(--brown)',
            paddingBottom: '2px',
            transition: 'color 0.2s',
          }}
        >
          Tout voir
          <ArrowRight size={12} strokeWidth={1.5} />
        </Link>
      </div>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
        }}
      >
        {collections.map((col, i) => (
          <Link
            key={col.slug}
            href={`/collections/${col.slug}`}
            style={{
              display: 'block',
              background: col.bg,
              aspectRatio: '3/4',
              position: 'relative',
              overflow: 'hidden',
              textDecoration: 'none',
              animationDelay: `${i * 0.1}s`,
            }}
            className="animate-fade-up collection-card"
          >
            {/* Image placeholder — replace with <Image /> */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0.15,
              }}
            >
              <div
                style={{
                  width: '40%',
                  aspectRatio: '2/3',
                  background: 'currentColor',
                  borderRadius: '2px',
                }}
              />
            </div>

            {/* Content */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}
            >
              <p
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: col.subColor,
                  marginBottom: '6px',
                }}
              >
                {col.count} pièces
              </p>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(20px, 2vw, 26px)',
                  fontWeight: 400,
                  color: col.textColor,
                  marginBottom: '4px',
                }}
              >
                {col.name}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-alt)',
                  fontSize: '14px',
                  fontWeight: 300,
                  color: col.subColor,
                  letterSpacing: '0.04em',
                }}
              >
                {col.description}
              </p>

              {/* Arrow appears on hover */}
              <div
                className="card-arrow"
                style={{
                  marginTop: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '10px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: col.textColor,
                  opacity: 0,
                  transform: 'translateX(-8px)',
                  transition: 'opacity 0.3s, transform 0.3s',
                }}
              >
                Découvrir <ArrowRight size={12} strokeWidth={1.5} />
              </div>
            </div>

            {/* Hover overlay */}
            <div
              className="card-overlay"
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(44,36,22,0)',
                transition: 'background 0.35s',
              }}
            />
          </Link>
        ))}
      </div>

      <style jsx>{`
        .collection-card:hover .card-overlay {
          background: rgba(44, 36, 22, 0.12);
        }
        .collection-card:hover .card-arrow {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>
    </section>
  )
}