import Link from 'next/link'

const products = [
  { name: 'Lin sable', price: '990 MAD', image: '/images/2.jpg' },
  { name: 'Lin blanc cassé', price: '1 020 MAD', image: '/images/1.jpg' },
  { name: 'Lin bleu clair', price: '1 020 MAD', image: '/images/3.jpg' },
]

export default function LinEtePage() {
  return (
    <main style={{ background: 'var(--cream)' }}>
      <section
        style={{
          padding: 'clamp(56px,8vw,104px) clamp(24px,5vw,64px)',
          background: '#f6f1e8',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Link href="/collections" style={{ color: 'var(--brown)', textDecoration: 'none', fontSize: '12px' }}>
            ← Retour aux collections
          </Link>

          <p style={{ marginTop: '24px', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--brown-light)' }}>
            Lin & Été
          </p>

          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(40px,6vw,80px)',
              fontWeight: 400,
              lineHeight: 1.04,
              color: 'var(--espresso)',
              margin: '16px 0',
            }}
          >
            La légèreté
            <br />
            <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>de la saison</em>
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-alt)',
              fontSize: '17px',
              lineHeight: 1.85,
              color: 'var(--brown)',
              maxWidth: '56ch',
            }}
          >
            Des tissus respirants, une main plus vivante et des nuances plus
            claires pour accompagner les journées chaudes sans renoncer à
            l’élégance.
          </p>
        </div>
      </section>

      <section style={{ padding: 'clamp(40px,6vw,88px) clamp(24px,5vw,64px)' }}>
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '24px',
          }}
        >
          {products.map((product) => (
            <article
              key={product.name}
              style={{
                background: '#fbf8f3',
                border: '1px solid rgba(111,86,70,0.12)',
                overflow: 'hidden',
              }}
            >
              <div style={{ aspectRatio: '4 / 5', overflow: 'hidden' }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div style={{ padding: '18px' }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 400, color: 'var(--espresso)', marginBottom: '8px' }}>
                  {product.name}
                </h2>
                <p style={{ color: 'var(--brown)', marginBottom: '16px', fontSize: '14px' }}>{product.price}</p>
                <button
                  style={{
                    background: 'var(--espresso)',
                    color: 'var(--cream)',
                    border: 'none',
                    padding: '12px 18px',
                    fontSize: '10px',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                  }}
                >
                  Ajouter au panier
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}