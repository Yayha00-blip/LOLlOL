'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, ArrowRight } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Chemise Oxford Premium',
    collection: 'Classique',
    price: 89,
    slug: 'chemise-oxford-premium',
    badge: 'Bestseller',
    badgeStyle: { background: 'var(--gold)', color: 'var(--ink)' },
    bg: 'var(--cream-dark)',
    image: '/images/2.jpg',
    colors: ['#2C2416', '#C8BDA8', '#F5F0E8'],
  },
  {
    id: 2,
    name: 'Chemise Lin Blanc',
    collection: 'Lin & Été',
    price: 95,
    slug: 'chemise-lin-blanc',
    badge: null,
    bg: '#D8CEBC',
    image: '/images/8.jpg',
    colors: ['#F5F0E8', '#D8CEBC', '#2C2416'],
  },
  {
    id: 3,
    name: 'Rayures Fines Navy',
    collection: 'Classique',
    price: 110,
    slug: 'rayures-fines-navy',
    badge: 'Nouveau',
    badgeStyle: { background: 'var(--espresso)', color: 'var(--gold)' },
    bg: '#B8C4D4',
    image: '/images/4.jpg',
    colors: ['#2C3E5C', '#F5F0E8'],
  },
  {
    id: 4,
    name: 'Chemise Smoking Noir',
    collection: 'Cérémonie',
    price: 135,
    slug: 'chemise-smoking-noir',
    badge: 'Exclusif',
    badgeStyle: { background: 'var(--gold)', color: 'var(--ink)' },
    bg: 'var(--espresso)',
    image: '/images/11.jpg',
    colors: ['#1a1611', '#D4A853'],
  },
  {
    id: 5,
    name: 'Popeline Blanche',
    collection: 'Classique',
    price: 79,
    slug: 'popeline-blanche',
    badge: null,
    bg: '#EDE7DC',
    image: '/images/3.jpg',
    colors: ['#F5F0E8', '#2C2416', '#C8BDA8'],
  },
  {
    id: 6,
    name: 'Vichy Terracotta',
    collection: 'Casual',
    price: 92,
    slug: 'vichy-terracotta',
    badge: 'Nouveau',
    badgeStyle: { background: 'var(--espresso)', color: 'var(--gold)' },
    bg: '#D4906A',
    image: '/images/15.jpg',
    colors: ['#D4906A', '#F5F0E8', '#2C2416'],
  },
  {
    id: 7,
    name: 'Lin Sable',
    collection: 'Lin & Été',
    price: 98,
    slug: 'lin-sable',
    badge: null,
    bg: '#C8B898',
    image: '/images/9.jpg',
    colors: ['#C8B898', '#F5F0E8'],
  },
  {
    id: 8,
    name: 'Flanelle Bleu Nuit',
    collection: 'Classique',
    price: 118,
    slug: 'flanelle-bleu-nuit',
    badge: null,
    bg: '#3A4A5C',
    image: '/images/14.jpg',
    colors: ['#3A4A5C', '#F5F0E8', '#D4A853'],
  },
]

interface ProductCardProps {
  product: typeof products[0]
}

function ProductCard({ product }: ProductCardProps) {
  const [wished, setWished] = useState(false)
  const [hovered, setHovered] = useState(false)

  return (
    <div
      style={{ position: 'relative' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image area */}
      <Link href={`/produits/${product.slug}`} style={{ display: 'block' }}>
        <div
          style={{
            background: product.bg,
            aspectRatio: '3/4',
            position: 'relative',
            overflow: 'hidden',
            marginBottom: '12px',
          }}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: 'cover' }}
          />

          {/* Badge */}
          {product.badge && (
            <div
              style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                ...product.badgeStyle,
                fontSize: '9px',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '4px 10px',
              }}
            >
              {product.badge}
            </div>
          )}

          {/* Quick add button */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'var(--espresso)',
              color: 'var(--cream)',
              textAlign: 'center',
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              padding: '14px',
              transform: hovered ? 'translateY(0)' : 'translateY(100%)',
              transition: 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            Choisir ma taille
          </div>
        </div>
      </Link>

      {/* Wishlist button */}
      <button
        onClick={() => setWished(!wished)}
        style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          background: 'var(--cream)',
          border: 'none',
          width: '32px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: wished ? '#D4A853' : 'var(--brown)',
          transition: 'color 0.2s, transform 0.2s',
          transform: hovered ? 'scale(1)' : 'scale(0.85)',
          opacity: hovered || wished ? 1 : 0,
        }}
        aria-label="Ajouter aux favoris"
      >
        <Heart
          size={14}
          strokeWidth={1.5}
          fill={wished ? '#D4A853' : 'none'}
        />
      </button>

      {/* Product info */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2px' }}>
          <Link
            href={`/produits/${product.slug}`}
            style={{
              fontFamily: 'var(--font-alt)',
              fontSize: '15px',
              fontWeight: 400,
              color: 'var(--ink)',
              letterSpacing: '0.02em',
            }}
          >
            {product.name}
          </Link>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: '11px', color: 'var(--brown)', letterSpacing: '0.08em' }}>
            {product.collection}
          </p>
          <p style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.06em' }}>
            {product.price} €
          </p>
        </div>

        {/* Color dots */}
        <div style={{ display: 'flex', gap: '5px', marginTop: '8px' }}>
          {product.colors.map((c) => (
            <div
              key={c}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: c,
                border: '0.5px solid var(--tan)',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Bestsellers() {
  return (
    <section
      id="bestsellers"
      style={{
        padding: '0 clamp(24px, 5vw, 64px) clamp(48px, 6vw, 80px)',
      }}
    >
      {/* Divider */}
      <div
        style={{
          height: '0.5px',
          background: 'var(--tan)',
          marginBottom: 'clamp(48px, 6vw, 80px)',
        }}
      />

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
            Meilleures Ventes
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(28px, 3vw, 40px)',
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            Les incontournables <em style={{ fontStyle: 'italic' }}>de la saison</em>
          </h2>
        </div>
        <Link
          href="/produits"
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
          }}
        >
          Tout voir
          <ArrowRight size={12} strokeWidth={1.5} />
        </Link>
      </div>

      {/* Products grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '24px 16px',
        }}
      >
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
