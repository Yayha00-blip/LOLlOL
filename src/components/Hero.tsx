'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Plus } from 'lucide-react'

export default function Hero() {
  return (
    <section style={{ 
      minHeight: '90vh', 
      background: '#F9F7F4', 
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      padding: '0 5%' 
    }}>
      {/* --- Lignes de structure (Style architectural) --- */}
      <div style={{ position: 'absolute', top: 0, left: '50%', width: '1px', height: '100%', background: '#EAE2D7', zIndex: 0 }} />
      <div style={{ position: 'absolute', top: '50%', left: 0, width: '100%', height: '1px', background: '#EAE2D7', zIndex: 0 }} />

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        width: '100%', 
        zIndex: 1,
        gap: '40px'
      }} className="hero-grid">
        
        {/* --- CÔTÉ GAUCHE : LA TYPO --- */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <div style={{ width: '20px', height: '1px', background: 'var(--gold)' }} />
            <span style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--tan)' }}>
              Édition Limitée
            </span>
          </div>

          <h1 style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: 'clamp(50px, 8vw, 140px)', 
            lineHeight: '0.8', 
            margin: 0, 
            color: 'var(--espresso)',
            letterSpacing: '-0.02em'
          }}>
            La <br />
            <span style={{ marginLeft: '15%', color: 'var(--gold)', fontStyle: 'italic' }}>Chemise</span>
          </h1>

          <div style={{ marginTop: '40px', maxWidth: '380px', alignSelf: 'flex-end' }}>
            <p style={{ fontSize: '15px', color: 'var(--brown)', lineHeight: '1.7', marginBottom: '30px' }}>
              Une silhouette architecturale, une matière d'exception. 
              L'essence même du vestiaire masculin repensée par nos ateliers.
            </p>
            <Link href="#shop" style={{ 
              fontSize: '11px', 
              textTransform: 'uppercase', 
              letterSpacing: '0.2em', 
              fontWeight: 700, 
              color: 'var(--espresso)', 
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              Explorer la collection <Plus size={14} color="var(--gold)" />
            </Link>
          </div>
        </div>

        {/* --- CÔTÉ DROIT : LE VISUEL ÉDITORIAL --- */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          
          {/* L'image devient un élément flottant avec un cadre minimaliste */}
          <div style={{ 
            width: '70%', 
            aspectRatio: '3/4', 
            position: 'relative',
            padding: '15px',
            background: 'white',
            boxShadow: '0 40px 100px rgba(0,0,0,0.05)'
          }}>
            {/* On utilise ton image test.jpeg ici */}
            <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
              <Image 
                src="/images/1.jpg" 
                alt="Détail Matière" 
                fill 
                style={{ objectFit: 'cover' }} 
              />
            </div>

            {/* Infos techniques flottantes sur l'image */}
            <div style={{ 
              position: 'absolute', 
              top: '-20px', 
              right: '-20px', 
              background: 'var(--espresso)', 
              color: 'white', 
              padding: '15px', 
              fontSize: '10px', 
              letterSpacing: '0.1em' 
            }}>
              N° 001 — POPELINE
            </div>
          </div>

          {/* Petit texte vertical discret pour habiller le côté */}
          <div style={{ 
            position: 'absolute', 
            right: 0, 
            transform: 'rotate(90deg) translateY(-100%)', 
            fontSize: '9px', 
            color: 'var(--tan)', 
            letterSpacing: '0.3em',
            textTransform: 'uppercase'
          }}>
            Ateliers de Confection — 2026
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 968px) {
          .hero-grid { grid-template-columns: 1fr; padding-top: 60px; }
          .hero-grid > div:last-child { min-height: 450px; }
        }
      `}</style>
    </section>
  )
}