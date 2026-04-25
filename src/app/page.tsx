import Hero from '../components/Hero'
import Collections from '../components/Collections'
import Bestsellers from '../components/Bestsellers'

export default function Home() {
  return (
    <>
      <Hero />

      <section
        style={{
          padding: '80px 32px',
          textAlign: 'center',
          background: 'var(--cream)',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(24px, 4vw, 36px)',
              color: 'var(--espresso)',
              marginBottom: '24px',
            }}
          >
            L'Excellence du Savoir-Faire
          </h2>

          <p
            style={{
              color: 'var(--brown)',
              lineHeight: 1.8,
              fontSize: '16px',
              letterSpacing: '0.01em',
            }}
          >
            Chaque chemise est confectionnée avec les plus beaux tissus italiens
            et un souci du détail qui définit l&apos;élégance moderne.
            Découvrez une collection pensée pour l&apos;homme exigeant.
          </p>
        </div>
      </section>

      <Collections />

      <section style={{ paddingBottom: '40px' }}>
        <Bestsellers />
      </section>
    </>
  )
}