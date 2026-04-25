'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Heart, SlidersHorizontal, X, ChevronDown } from 'lucide-react'

interface Product {
  id: number; name: string; collection: string; price: number; slug: string
  badge: string | null; image: string; colors: string[]; available: boolean
}

type SortOption = 'pertinence' | 'prix-asc' | 'prix-desc' | 'nouveautes'
const sortLabels: Record<SortOption, string> = { pertinence:'Pertinence', 'prix-asc':'Prix croissant', 'prix-desc':'Prix décroissant', nouveautes:'Nouveautés' }
const priceRanges = [{ label:'Moins de 90 €', min:0, max:90 }, { label:'90 € — 110 €', min:90, max:110 }, { label:'Plus de 110 €', min:110, max:9999 }]

export default function CollectionGrid({ products, collectionName }: { products: Product[]; collectionName: string }) {
  const [sort, setSort]               = useState<SortOption>('pertinence')
  const [showFilters, setShowFilters] = useState(false)
  const [priceFilter, setPriceFilter] = useState<number | null>(null)
  const [availOnly, setAvailOnly]     = useState(false)
  const [wished, setWished]           = useState<Set<number>>(new Set())
  const [sortOpen, setSortOpen]       = useState(false)
  const [view, setView]               = useState<'grid'|'large'>('grid')
  const [hoveredId, setHoveredId]     = useState<number | null>(null)

  const filtered = useMemo(() => {
    let list = [...products]
    if (availOnly) list = list.filter(p => p.available)
    if (priceFilter !== null) { const r = priceRanges[priceFilter]; list = list.filter(p => p.price >= r.min && p.price < r.max) }
    if (sort === 'prix-asc')   list.sort((a,b) => a.price - b.price)
    if (sort === 'prix-desc')  list.sort((a,b) => b.price - a.price)
    if (sort === 'nouveautes') list.sort((a,b) => (a.badge === 'Nouveau' ? -1 : 1))
    return list
  }, [products, sort, priceFilter, availOnly])

  const activeCount = (priceFilter !== null ? 1 : 0) + (availOnly ? 1 : 0)
  const toggleWish = (id: number) => setWished(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n })

  return (
    <div style={{ padding:'0 clamp(24px,5vw,64px) clamp(48px,6vw,80px)' }}>

      {/* Toolbar */}
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'20px 0', borderBottom:'0.5px solid var(--tan)', marginBottom:'32px', gap:'12px', flexWrap:'wrap' }}>
        <div style={{ display:'flex', alignItems:'center', gap:'12px', flexWrap:'wrap' }}>
          <button onClick={() => setShowFilters(f => !f)} style={{ display:'flex', alignItems:'center', gap:'8px', border:'0.5px solid var(--tan)', padding:'10px 18px', cursor:'pointer', fontSize:'10px', fontWeight:500, letterSpacing:'0.15em', textTransform:'uppercase', fontFamily:'var(--font-sans)', background: showFilters ? 'var(--espresso)' : 'none', color: showFilters ? 'var(--cream)' : 'var(--brown)' }}>
            <SlidersHorizontal size={13} strokeWidth={1.5} /> Filtres
            {activeCount > 0 && <span style={{ background:'var(--gold)', color:'var(--ink)', width:'18px', height:'18px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'9px', fontWeight:700 }}>{activeCount}</span>}
          </button>
          <p style={{ fontSize:'12px', color:'var(--brown-light)', letterSpacing:'0.06em' }}>{filtered.length} résultat{filtered.length > 1 ? 's' : ''}</p>
          {priceFilter !== null && <button onClick={() => setPriceFilter(null)} style={{ display:'flex', alignItems:'center', gap:'5px', background:'var(--cream-dark)', border:'0.5px solid var(--tan)', padding:'5px 10px', cursor:'pointer', fontSize:'10px', color:'var(--brown)', fontFamily:'var(--font-sans)' }}>{priceRanges[priceFilter].label} <X size={10} strokeWidth={2} /></button>}
          {availOnly && <button onClick={() => setAvailOnly(false)} style={{ display:'flex', alignItems:'center', gap:'5px', background:'var(--cream-dark)', border:'0.5px solid var(--tan)', padding:'5px 10px', cursor:'pointer', fontSize:'10px', color:'var(--brown)', fontFamily:'var(--font-sans)' }}>En stock <X size={10} strokeWidth={2} /></button>}
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:'12px' }}>
          <div style={{ display:'flex', border:'0.5px solid var(--tan)' }}>
            {(['grid','large'] as const).map(v => (
              <button key={v} onClick={() => setView(v)} style={{ width:'36px', height:'36px', background: view===v ? 'var(--espresso)' : 'none', border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', color: view===v ? 'var(--cream)' : 'var(--brown)' }}>
                {v==='grid' ? <svg width="13" height="13" viewBox="0 0 12 12" fill="currentColor"><rect x="0" y="0" width="5" height="5"/><rect x="7" y="0" width="5" height="5"/><rect x="0" y="7" width="5" height="5"/><rect x="7" y="7" width="5" height="5"/></svg>
                            : <svg width="13" height="13" viewBox="0 0 12 12" fill="currentColor"><rect x="0" y="0" width="5" height="12"/><rect x="7" y="0" width="5" height="12"/></svg>}
              </button>
            ))}
          </div>
          <div style={{ position:'relative' }}>
            <button onClick={() => setSortOpen(o => !o)} style={{ display:'flex', alignItems:'center', gap:'8px', background:'none', border:'0.5px solid var(--tan)', padding:'10px 16px', cursor:'pointer', fontSize:'10px', fontWeight:500, letterSpacing:'0.12em', textTransform:'uppercase', fontFamily:'var(--font-sans)', color:'var(--brown)' }}>
              {sortLabels[sort]} <ChevronDown size={12} strokeWidth={1.5} style={{ transform: sortOpen ? 'rotate(180deg)' : 'none', transition:'transform 0.2s' }} />
            </button>
            {sortOpen && (
              <div style={{ position:'absolute', top:'calc(100% + 4px)', right:0, background:'var(--cream)', border:'0.5px solid var(--tan)', minWidth:'180px', zIndex:20, padding:'4px 0' }}>
                {(Object.keys(sortLabels) as SortOption[]).map(s => (
                  <button key={s} onClick={() => { setSort(s); setSortOpen(false) }} style={{ display:'block', width:'100%', padding:'11px 18px', background: sort===s ? 'var(--cream-dark)' : 'none', border:'none', cursor:'pointer', textAlign:'left', fontSize:'12px', letterSpacing:'0.06em', color: sort===s ? 'var(--ink)' : 'var(--brown)', fontFamily:'var(--font-sans)', fontWeight: sort===s ? 500 : 400 }}>
                    {sortLabels[s]}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div style={{ display:'flex', gap:'32px', alignItems:'flex-start' }}>
        {/* Filters */}
        {showFilters && (
          <div style={{ width:'220px', flexShrink:0, position:'sticky', top:'112px' }}>
            <div style={{ marginBottom:'28px' }}>
              <p style={{ fontSize:'10px', fontWeight:500, letterSpacing:'0.2em', textTransform:'uppercase', marginBottom:'14px' }}>Prix</p>
              {priceRanges.map((range, i) => (
                <label key={range.label} style={{ display:'flex', alignItems:'center', gap:'10px', padding:'9px 0', cursor:'pointer', fontSize:'13px', color: priceFilter===i ? 'var(--ink)' : 'var(--brown)', borderBottom:'0.5px solid var(--cream-dark)' }}>
                  <input type="radio" name="price" checked={priceFilter===i} onChange={() => setPriceFilter(priceFilter===i ? null : i)} style={{ accentColor:'var(--espresso)', width:'14px', height:'14px' }} />
                  {range.label}
                </label>
              ))}
            </div>
            <div style={{ marginBottom:'28px' }}>
              <p style={{ fontSize:'10px', fontWeight:500, letterSpacing:'0.2em', textTransform:'uppercase', marginBottom:'14px' }}>Disponibilité</p>
              <label style={{ display:'flex', alignItems:'center', gap:'10px', cursor:'pointer', fontSize:'13px', color:'var(--brown)' }}>
                <input type="checkbox" checked={availOnly} onChange={e => setAvailOnly(e.target.checked)} style={{ accentColor:'var(--espresso)', width:'14px', height:'14px' }} />
                En stock uniquement
              </label>
            </div>
            {activeCount > 0 && <button onClick={() => { setPriceFilter(null); setAvailOnly(false) }} style={{ fontSize:'10px', letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--brown)', background:'none', border:'none', cursor:'pointer', padding:0, textDecoration:'underline', fontFamily:'var(--font-sans)' }}>Réinitialiser</button>}
          </div>
        )}

        {/* Grid */}
        <div style={{ flex:1 }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign:'center', padding:'64px 0' }}>
              <p style={{ fontFamily:'var(--font-serif)', fontSize:'22px', fontWeight:400, marginBottom:'12px' }}>Aucun résultat</p>
              <p style={{ fontSize:'13px', color:'var(--brown)' }}>Essayez de modifier vos filtres.</p>
            </div>
          ) : (
            <div style={{ display:'grid', gridTemplateColumns: view==='large' ? 'repeat(2,1fr)' : 'repeat(auto-fill,minmax(220px,1fr))', gap: view==='large' ? '32px' : '28px 16px' }}>
              {filtered.map(product => (
                <div key={product.id} style={{ position:'relative' }}
                  onMouseEnter={() => setHoveredId(product.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <Link href={`/produits/${product.slug}`} style={{ display:'block', textDecoration:'none', color:'inherit' }}>
                    <div style={{ position:'relative', paddingBottom:'133%', overflow:'hidden', marginBottom:'12px', opacity: product.available ? 1 : 0.65 }}>
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{ position:'absolute', top:0, left:0, width:'100%', height:'100%', objectFit:'cover', display:'block', transition:'transform 0.5s ease', transform: hoveredId===product.id ? 'scale(1.04)' : 'scale(1)' }}
                      />
                      {product.badge && (
                        <div style={{ position:'absolute', top:'12px', left:'12px', zIndex:1, background: product.badge==='Bestseller'||product.badge==='Exclusif' ? 'var(--gold)' : 'var(--espresso)', color: product.badge==='Bestseller'||product.badge==='Exclusif' ? 'var(--ink)' : 'var(--gold)', fontSize:'9px', fontWeight:500, letterSpacing:'0.12em', textTransform:'uppercase', padding:'4px 10px' }}>
                          {product.badge}
                        </div>
                      )}
                      {!product.available && (
                        <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', background:'rgba(245,240,232,0.45)', zIndex:1 }}>
                          <span style={{ fontSize:'10px', fontWeight:500, letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--brown)', background:'var(--cream)', padding:'8px 16px' }}>Épuisé</span>
                        </div>
                      )}
                      {product.available && (
                        <div style={{ position:'absolute', bottom:0, left:0, right:0, background:'rgba(44,36,22,0.92)', color:'var(--cream)', textAlign:'center', fontSize:'10px', fontWeight:500, letterSpacing:'0.16em', textTransform:'uppercase', padding:'14px', transform: hoveredId===product.id ? 'translateY(0)' : 'translateY(100%)', transition:'transform 0.3s ease', zIndex:1 }}>
                          Choisir ma taille
                        </div>
                      )}
                    </div>
                    <p style={{ fontFamily:'var(--font-alt)', fontSize:'15px', fontWeight:400, marginBottom:'3px', color:'var(--ink)' }}>{product.name}</p>
                    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'8px' }}>
                      <p style={{ fontSize:'11px', color:'var(--brown)', letterSpacing:'0.06em' }}>{collectionName}</p>
                      <p style={{ fontSize:'13px', fontWeight:500, color:'var(--ink)' }}>{product.price} €</p>
                    </div>
                  </Link>
                  <div style={{ display:'flex', gap:'5px' }}>
                    {product.colors.map(c => <div key={c} style={{ width:'11px', height:'11px', borderRadius:'50%', background:c, border:'0.5px solid var(--tan)' }} />)}
                  </div>
                  <button onClick={() => toggleWish(product.id)} style={{ position:'absolute', top:'12px', right:'12px', background:'rgba(245,240,232,0.9)', border:'none', width:'32px', height:'32px', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', color: wished.has(product.id) ? 'var(--gold)' : 'var(--brown)' }} aria-label="Favoris">
                    <Heart size={13} strokeWidth={1.5} fill={wished.has(product.id) ? 'var(--gold)' : 'none'} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}