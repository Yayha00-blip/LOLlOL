'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, Heart, ChevronDown } from 'lucide-react'
import CartButton from '@/components/cart/CartButton'

const collections = ['Classique', 'Lin & Été', 'Cérémonie', 'Casual']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [showCollections, setShowCollections] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      {/* ── Barre annonce ── */}
      <div style={{ background: 'var(--espresso)', color: 'var(--tan)', textAlign: 'center', padding: '9px 16px', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
        Livraison offerte dès 150 € &nbsp;·&nbsp; Retours gratuits 30 jours
      </div>

      {/* ── Navbar principale ── */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'var(--cream)',
        borderBottom: scrolled ? '0.5px solid var(--tan)' : '0.5px solid transparent',
        boxShadow: scrolled ? '0 2px 24px rgba(44,36,22,0.07)' : 'none',
        transition: 'border-color 0.3s, box-shadow 0.3s',
      }}>
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 clamp(20px,4vw,56px)', height: '68px', maxWidth: '1400px', margin: '0 auto' }}>

          {/* ── Gauche : liens ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '36px', flex: 1 }}>

            {/* Collections avec dropdown */}
            <div style={{ position: 'relative' }}
              onMouseEnter={() => setShowCollections(true)}
              onMouseLeave={() => setShowCollections(false)}
            >
              <button style={{ display: 'flex', alignItems: 'center', gap: '5px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '10px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--brown)', fontFamily: 'var(--font-sans)', padding: '8px 0' }}>
                Collections <ChevronDown size={11} strokeWidth={2} style={{ transition: 'transform 0.2s', transform: showCollections ? 'rotate(180deg)' : 'none' }} />
              </button>

              {/* Dropdown */}
              <div style={{
                position: 'absolute', top: '100%', left: '-20px',
                background: 'var(--cream)', border: '0.5px solid var(--tan)',
                minWidth: '200px', padding: '8px 0',
                opacity: showCollections ? 1 : 0,
                transform: showCollections ? 'translateY(0)' : 'translateY(-6px)',
                pointerEvents: showCollections ? 'all' : 'none',
                transition: 'opacity 0.2s, transform 0.2s',
                zIndex: 100,
              }}>
                {collections.map(col => (
                  <Link key={col} href={`/collections/${col.toLowerCase().replace(' & ', '-').replace('é', 'e').replace('ie', 'ie')}`}
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '11px 20px', fontSize: '12px', letterSpacing: '0.08em', color: 'var(--brown)', textDecoration: 'none', transition: 'background 0.15s, color 0.15s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--cream-dark)'; (e.currentTarget as HTMLElement).style.color = 'var(--ink)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'var(--brown)' }}
                  >
                    {col} <span style={{ fontSize: '10px', color: 'var(--tan)' }}>→</span>
                  </Link>
                ))}
                <div style={{ height: '0.5px', background: 'var(--cream-dark)', margin: '6px 0' }} />
                <Link href="/collections" style={{ display: 'block', padding: '10px 20px', fontSize: '10px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none' }}>
                  Voir tout →
                </Link>
              </div>
            </div>

            {/* Autres liens */}
            {[{ label: 'Nouveautés', href: '/#bestsellers' }, { label: 'Soldes', href: '/soldes' }].map(l => (
              <Link key={l.label} href={l.href} style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--brown)', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--ink)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--brown)')}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* ── Centre : Logo ── */}
          <Link href="/" style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 400, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink)', textDecoration: 'none', whiteSpace: 'nowrap', flex: 'none' }}>
            La Chemiserie
          </Link>

          {/* ── Droite : icônes ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '22px', flex: 1, justifyContent: 'flex-end' }}>

            {/* 🔍 Recherche → /recherche */}
            <Link href="/recherche" style={{ color: 'var(--brown)', display: 'flex', padding: 0 }} aria-label="Rechercher"
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--ink)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--brown)')}
            >
              <Search size={17} strokeWidth={1.5} />
            </Link>

            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--brown)', display: 'flex', padding: 0 }} aria-label="Favoris">
              <Heart size={17} strokeWidth={1.5} />
            </button>

            <CartButton />

            <Link href="/notre-histoire" style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--brown)', textDecoration: 'none', borderBottom: '0.5px solid var(--tan)', paddingBottom: '1px' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--espresso)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--tan)')}
            >
              Notre histoire
            </Link>
          </div>
        </nav>
      </header>
    </>
  )
}