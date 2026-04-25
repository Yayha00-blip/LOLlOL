'use client'

import { useState, useMemo, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Search, X, Heart, ArrowRight } from 'lucide-react'

// Catalogue complet — même data que les autres pages
const allProducts = [
  { id:1,  name:'Chemise Oxford Premium', collection:'Classique', price:89,  slug:'chemise-oxford-premium', badge:'Bestseller', image:'/images/1.jpg',  tags:['oxford','coton','classique','bureau','slim'] },
  { id:2,  name:'Popeline Blanche',        collection:'Classique', price:79,  slug:'popeline-blanche',       badge:null,         image:'/images/2.jpg',  tags:['popeline','blanc','classique','mariage','slim'] },
  { id:3,  name:'Rayures Fines Navy',      collection:'Classique', price:110, slug:'rayures-fines-navy',     badge:'Nouveau',    image:'/images/3.jpg',  tags:['rayures','navy','bleu','classique','bureau'] },
  { id:4,  name:'Flanelle Bleu Nuit',      collection:'Classique', price:118, slug:'flanelle-bleu-nuit',     badge:null,         image:'/images/4.jpg',  tags:['flanelle','bleu','nuit','hiver','chaud'] },
  { id:5,  name:'Oxford Bleu Ciel',        collection:'Classique', price:89,  slug:'oxford-bleu-ciel',       badge:null,         image:'/images/5.jpg',  tags:['oxford','bleu','ciel','classique','bureau'] },
  { id:6,  name:'Popeline Rayée',          collection:'Classique', price:95,  slug:'popeline-rayee',         badge:null,         image:'/images/6.jpg',  tags:['popeline','rayures','classique'] },
  { id:7,  name:'Chemise Lin Blanc',       collection:'Lin & Été', price:95,  slug:'chemise-lin-blanc',      badge:null,         image:'/images/7.jpg',  tags:['lin','blanc','été','léger','casual'] },
  { id:8,  name:'Lin Sable',               collection:'Lin & Été', price:98,  slug:'lin-sable',              badge:null,         image:'/images/8.jpg',  tags:['lin','sable','beige','été','léger'] },
  { id:9,  name:'Lin Terracotta',          collection:'Lin & Été', price:102, slug:'lin-terracotta',         badge:'Nouveau',    image:'/images/9.jpg',  tags:['lin','terracotta','rouge','été','casual'] },
  { id:10, name:'Lin Sauge',               collection:'Lin & Été', price:98,  slug:'lin-sauge',              badge:null,         image:'/images/10.jpg', tags:['lin','sauge','vert','été','casual'] },
  { id:11, name:'Smoking Blanc',           collection:'Cérémonie', price:145, slug:'smoking-blanc',          badge:'Exclusif',   image:'/images/11.jpg', tags:['smoking','blanc','cérémonie','mariage','soirée'] },
  { id:12, name:'Smoking Noir',            collection:'Cérémonie', price:135, slug:'chemise-smoking-noir',   badge:'Exclusif',   image:'/images/12.jpg', tags:['smoking','noir','cérémonie','soirée','élégant'] },
  { id:13, name:'Plastron Ivoire',         collection:'Cérémonie', price:160, slug:'plastron-ivoire',        badge:null,         image:'/images/13.jpg', tags:['plastron','ivoire','cérémonie','mariage','soirée'] },
  { id:14, name:'Vichy Terracotta',        collection:'Casual',    price:92,  slug:'vichy-terracotta',       badge:'Nouveau',    image:'/images/14.jpg', tags:['vichy','carreaux','terracotta','casual','week-end'] },
  { id:15, name:'Chambray Indigo',         collection:'Casual',    price:88,  slug:'chambray-indigo',        badge:null,         image:'/images/15.jpg', tags:['chambray','indigo','bleu','casual','week-end'] },
  { id:16, name:'Flanelle Carreaux',       collection:'Casual',    price:105, slug:'flanelle-carreaux',      badge:null,         image:'/images/16.jpg', tags:['flanelle','carreaux','casual','hiver','week-end'] },
]

const suggestions = ['Oxford', 'Lin', 'Blanc', 'Bleu', 'Mariage', 'Smoking', 'Casual', 'Rayures', 'Été']
const popular = allProducts.filter(p => p.badge === 'Bestseller' || p.badge === 'Exclusif').slice(0, 4)

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const [wished, setWished] = useState<Set<number>>(new Set())
  const [hovered, setHovered] = useState<number | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => { inputRef.current?.focus() }, [])

  const results = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase().trim()
    return allProducts.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.collection.toLowerCase().includes(q) ||
      p.tags.some(t => t.includes(q))
    )
  }, [query])

  const toggleWish = (id: number) => setWished(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n })

  const showEmpty   = query.trim().length > 0 && results.length === 0
  const showResults = results.length > 0
  const showDefault = query.trim().length === 0

  return (
    <div style={{ minHeight:'80vh', background:'var(--cream)' }}>

      {/* ── Barre de recherche ── */}
      <div style={{ background:'var(--cream)', borderBottom:'0.5px solid var(--tan)', padding:'clamp(32px,4vw,56px) clamp(24px,5vw,64px) 0' }}>
        <div style={{ maxWidth:'720px', margin:'0 auto' }}>
          <p style={{ fontFamily:'var(--font-sans)', fontSize:'10px', fontWeight:500, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--brown-light)', marginBottom:'20px', textAlign:'center' }}>
            Recherche
          </p>

          {/* Input */}
          <div style={{ position:'relative', marginBottom:'32px' }}>
            <Search size={18} strokeWidth={1.5} style={{ position:'absolute', left:'20px', top:'50%', transform:'translateY(-50%)', color:'var(--brown)', pointerEvents:'none' }} />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Rechercher une chemise, une couleur, une matière…"
              style={{ width:'100%', padding:'18px 48px 18px 52px', background:'var(--cream-dark)', border:'0.5px solid var(--tan)', fontSize:'16px', fontFamily:'var(--font-sans)', color:'var(--ink)', outline:'none', boxSizing:'border-box', letterSpacing:'0.02em', transition:'border-color 0.2s' }}
              onFocus={e => (e.currentTarget.style.borderColor = 'var(--espresso)')}
              onBlur={e  => (e.currentTarget.style.borderColor = 'var(--tan)')}
            />
            {query && (
              <button onClick={() => setQuery('')} style={{ position:'absolute', right:'16px', top:'50%', transform:'translateY(-50%)', background:'none', border:'none', cursor:'pointer', color:'var(--brown)', display:'flex', padding:'4px' }}>
                <X size={16} strokeWidth={1.5} />
              </button>
            )}
          </div>

          {/* Suggestions rapides */}
          {showDefault && (
            <div style={{ display:'flex', gap:'8px', flexWrap:'wrap', paddingBottom:'24px' }}>
              {suggestions.map(s => (
                <button key={s} onClick={() => setQuery(s)} style={{ padding:'7px 16px', background:'var(--cream)', border:'0.5px solid var(--tan)', cursor:'pointer', fontSize:'12px', letterSpacing:'0.08em', color:'var(--brown)', fontFamily:'var(--font-sans)', transition:'all 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--espresso)'; (e.currentTarget as HTMLElement).style.color = 'var(--cream)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--espresso)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--cream)'; (e.currentTarget as HTMLElement).style.color = 'var(--brown)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--tan)' }}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Compteur résultats */}
          {showResults && (
            <div style={{ paddingBottom:'16px' }}>
              <p style={{ fontSize:'12px', color:'var(--brown-light)', letterSpacing:'0.06em' }}>
                <strong style={{ color:'var(--ink)' }}>{results.length}</strong> résultat{results.length > 1 ? 's' : ''} pour «&nbsp;<em>{query}</em>&nbsp;»
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ── Contenu ── */}
      <div style={{ padding:'clamp(32px,4vw,56px) clamp(24px,5vw,64px)' }}>
        <div style={{ maxWidth:'1200px', margin:'0 auto' }}>

          {/* État vide */}
          {showEmpty && (
            <div style={{ textAlign:'center', padding:'48px 0 32px' }}>
              <p style={{ fontFamily:'var(--font-serif)', fontSize:'clamp(22px,3vw,32px)', fontWeight:400, marginBottom:'12px' }}>
                Aucun résultat pour «&nbsp;<em style={{ fontStyle:'italic' }}>{query}</em>&nbsp;»
              </p>
              <p style={{ fontSize:'14px', color:'var(--brown)', marginBottom:'40px', letterSpacing:'0.04em' }}>
                Essayez un autre terme — couleur, matière, occasion…
              </p>
              <div style={{ display:'flex', gap:'10px', justifyContent:'center', flexWrap:'wrap' }}>
                {suggestions.slice(0,5).map(s => (
                  <button key={s} onClick={() => setQuery(s)} style={{ padding:'8px 18px', background:'var(--cream-dark)', border:'0.5px solid var(--tan)', cursor:'pointer', fontSize:'12px', letterSpacing:'0.08em', color:'var(--brown)', fontFamily:'var(--font-sans)' }}>{s}</button>
                ))}
              </div>
            </div>
          )}

          {/* Résultats */}
          {showResults && (
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:'28px 16px' }}>
              {results.map(product => (
                <div key={product.id} style={{ position:'relative' }}
                  onMouseEnter={() => setHovered(product.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <Link href={`/produits/${product.slug}`} style={{ display:'block', textDecoration:'none', color:'inherit' }}>
                    <div style={{ position:'relative', width:'100%', height:'300px', overflow:'hidden', marginBottom:'12px' }}>
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{ width:'100%', height:'100%', objectFit:'cover', display:'block', transition:'transform 0.5s ease', transform: hovered===product.id ? 'scale(1.04)' : 'scale(1)' }}
                      />
                      {product.badge && (
                        <div style={{ position:'absolute', top:'12px', left:'12px', zIndex:1, background: product.badge==='Bestseller'||product.badge==='Exclusif' ? 'var(--gold)' : 'var(--espresso)', color: product.badge==='Bestseller'||product.badge==='Exclusif' ? 'var(--ink)' : 'var(--gold)', fontSize:'9px', fontWeight:500, letterSpacing:'0.12em', textTransform:'uppercase', padding:'4px 10px' }}>
                          {product.badge}
                        </div>
                      )}
                      <div style={{ position:'absolute', bottom:0, left:0, right:0, background:'rgba(44,36,22,0.92)', color:'var(--cream)', textAlign:'center', fontSize:'10px', fontWeight:500, letterSpacing:'0.16em', textTransform:'uppercase', padding:'13px', transform: hovered===product.id ? 'translateY(0)' : 'translateY(100%)', transition:'transform 0.3s ease', zIndex:1 }}>
                        Voir le produit →
                      </div>
                    </div>
                    <p style={{ fontFamily:'var(--font-alt)', fontSize:'15px', fontWeight:400, marginBottom:'3px' }}>{product.name}</p>
                    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                      <p style={{ fontSize:'11px', color:'var(--brown)', letterSpacing:'0.06em' }}>{product.collection}</p>
                      <p style={{ fontSize:'13px', fontWeight:500 }}>{product.price} €</p>
                    </div>
                  </Link>
                  <button onClick={() => toggleWish(product.id)} style={{ position:'absolute', top:'12px', right:'12px', background:'rgba(245,240,232,0.9)', border:'none', width:'32px', height:'32px', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', color: wished.has(product.id) ? 'var(--gold)' : 'var(--brown)' }} aria-label="Favoris">
                    <Heart size={13} strokeWidth={1.5} fill={wished.has(product.id) ? 'var(--gold)' : 'none'} />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* État par défaut — populaires */}
          {showDefault && (
            <div>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:'28px' }}>
                <h2 style={{ fontFamily:'var(--font-serif)', fontSize:'clamp(22px,2.5vw,32px)', fontWeight:400 }}>
                  Les <em style={{ fontStyle:'italic' }}>incontournables</em>
                </h2>
                <Link href="/collections" style={{ fontSize:'10px', fontWeight:500, letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--brown)', borderBottom:'0.5px solid var(--brown)', paddingBottom:'2px', textDecoration:'none', display:'flex', alignItems:'center', gap:'5px' }}>
                  Voir tout <ArrowRight size={11} strokeWidth={1.5} />
                </Link>
              </div>

              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:'28px 16px' }}>
                {popular.map(product => (
                  <div key={product.id} style={{ position:'relative' }}
                    onMouseEnter={() => setHovered(product.id)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <Link href={`/produits/${product.slug}`} style={{ display:'block', textDecoration:'none', color:'inherit' }}>
                      <div style={{ position:'relative', width:'100%', height:'300px', overflow:'hidden', marginBottom:'12px' }}>
                        <img src={product.image} alt={product.name} style={{ width:'100%', height:'100%', objectFit:'cover', display:'block', transition:'transform 0.5s ease', transform: hovered===product.id ? 'scale(1.04)' : 'scale(1)' }} />
                        {product.badge && (
                          <div style={{ position:'absolute', top:'12px', left:'12px', zIndex:1, background:'var(--gold)', color:'var(--ink)', fontSize:'9px', fontWeight:500, letterSpacing:'0.12em', textTransform:'uppercase', padding:'4px 10px' }}>
                            {product.badge}
                          </div>
                        )}
                        <div style={{ position:'absolute', bottom:0, left:0, right:0, background:'rgba(44,36,22,0.92)', color:'var(--cream)', textAlign:'center', fontSize:'10px', fontWeight:500, letterSpacing:'0.16em', textTransform:'uppercase', padding:'13px', transform: hovered===product.id ? 'translateY(0)' : 'translateY(100%)', transition:'transform 0.3s ease', zIndex:1 }}>
                          Voir le produit →
                        </div>
                      </div>
                      <p style={{ fontFamily:'var(--font-alt)', fontSize:'15px', fontWeight:400, marginBottom:'3px' }}>{product.name}</p>
                      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                        <p style={{ fontSize:'11px', color:'var(--brown)', letterSpacing:'0.06em' }}>{product.collection}</p>
                        <p style={{ fontSize:'13px', fontWeight:500 }}>{product.price} €</p>
                      </div>
                    </Link>
                    <button onClick={() => toggleWish(product.id)} style={{ position:'absolute', top:'12px', right:'12px', background:'rgba(245,240,232,0.9)', border:'none', width:'32px', height:'32px', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', color: wished.has(product.id) ? 'var(--gold)' : 'var(--brown)' }} aria-label="Favoris">
                      <Heart size={13} strokeWidth={1.5} fill={wished.has(product.id) ? 'var(--gold)' : 'none'} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}