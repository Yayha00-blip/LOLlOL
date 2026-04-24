import Hero from '../components/Hero'

// Tu peux importer d'autres sections ici au fur et à mesure
// import ProductGrid from '../components/ProductGrid'
// import AboutSection from '../components/AboutSection'

export default function Home() {
  return (
    <>
      {/* 1. Section Principale (Hero) */}
      <Hero />

      {/* 2. Section de contenu (Exemple : Une petite introduction) */}
      <section style={{ padding: '80px 32px', textAlign: 'center', background: 'var(--cream)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: 'clamp(24px, 4vw, 36px)', 
            color: 'var(--espresso)',
            marginBottom: '24px' 
          }}>
            L'Excellence du Savoir-Faire
          </h2>
          <p style={{ 
            color: 'var(--brown)', 
            lineHeight: 1.8, 
            fontSize: '16px',
            letterSpacing: '0.01em'
          }}>
            Chaque chemise est confectionnée avec les plus beaux tissus italiens et un souci du détail 
            qui définit l'élégance moderne. Découvrez une collection pensée pour l'homme exigeant.
          </p>
        </div>
      </section>

      {/* 3. Espace pour tes futures collections */}
      <section style={{ paddingBottom: '100px' }}>
        {/* <ProductGrid /> */}
      </section>
    </>
  )
}