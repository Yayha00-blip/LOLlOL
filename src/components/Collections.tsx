import Link from 'next/link'

const collections = [
  {
    name: 'Classique',
    description: 'Intemporel & soigné',
    count: 6,
    slug: 'classique',
    image: '/images/1.jpg',
  },
  {
    name: 'Lin & Été',
    description: 'Légèreté & fraîcheur',
    count: 4,
    slug: 'lin-ete',
    image: '/images/7.jpg',
  },
  {
    name: 'Cérémonie',
    description: 'Élégance & prestige',
    count: 3,
    slug: 'ceremonie',
    image: '/images/11.jpg',
  },
  {
    name: 'Casual',
    description: 'Décontracté & moderne',
    count: 3,
    slug: 'casual',
    image: '/images/14.jpg',
  },
]

export default function Collections() {
  return (
    <section
      id="collections"
      style={{ padding: 'clamp(48px,6vw,80px) clamp(24px,5vw,64px)' }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          gap: '16px',
          marginBottom: '40px',
          flexWrap: 'wrap',
        }}
      >
        <div>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--brown-light)',
              marginBottom: '10px',
            }}
          >
            Nos Collections
          </p>

          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(28px,3vw,40px)',
              fontWeight: 400,
              lineHeight: 1.2,
              color: 'var(--espresso)',
            }}
          >
            Chaque style, <em style={{ fontStyle: 'italic' }}>une histoire</em>
          </h2>
        </div>

        <Link
          href="/collections"
          style={{
            fontSize: '10px',
            fontWeight: 500,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--brown)',
            borderBottom: '0.5px solid var(--brown)',
            paddingBottom: '2px',
            textDecoration: 'none',
          }}
        >
          Tout voir →
        </Link>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
        }}
      >
        {collections.map((col) => (
          <Link
            key={col.slug}
            href={`/collections/${col.slug}`}
            style={{
              display: 'block',
              textDecoration: 'none',
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '18px',
            }}
          >
            <div
              style={{
                position: 'relative',
                paddingBottom: '133%',
                overflow: 'hidden',
                borderRadius: '18px',
                backgroundColor: '#eee',
              }}
            >
              <img
                src={col.image}
                alt={col.name}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />

              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to top, rgba(26,22,17,0.78) 0%, rgba(26,22,17,0.08) 60%)',
                  zIndex: 1,
                }}
              />

              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '20px',
                  zIndex: 2,
                }}
              >
                <p
                  style={{
                    fontSize: '10px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'rgba(200,189,168,0.8)',
                    marginBottom: '6px',
                  }}
                >
                  {col.count} pièces
                </p>

                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(18px,2vw,24px)',
                    fontWeight: 400,
                    color: 'var(--cream)',
                    marginBottom: '4px',
                  }}
                >
                  {col.name}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-alt)',
                    fontSize: '13px',
                    fontWeight: 300,
                    color: 'rgba(200,189,168,0.8)',
                    margin: 0,
                  }}
                >
                  {col.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}