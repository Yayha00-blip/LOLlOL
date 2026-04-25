interface CollectionInfo {
  name: string; description: string; bg: string; textColor: string; slug: string; count: number; image: string
}

export default function CollectionHero({ collection }: { collection: CollectionInfo }) {
  return (
    <section style={{ position:'relative', overflow:'hidden', minHeight:'360px', display:'flex', flexDirection:'column', justifyContent:'flex-end' }}>
      {/* Image en absolute pour remplir la section */}
      <img
        src={collection.image}
        alt={collection.name}
        style={{ position:'absolute', top:0, left:0, width:'100%', height:'100%', objectFit:'cover', objectPosition:'center top', display:'block' }}
      />
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(26,22,17,0.85) 0%, rgba(26,22,17,0.3) 50%, rgba(26,22,17,0.1) 100%)' }} />
      <div style={{ position:'absolute', top:'28px', left:'clamp(24px,5vw,64px)', display:'flex', gap:'8px', fontSize:'10px', letterSpacing:'0.1em', color:'var(--tan)', zIndex:1 }}>
        <a href="/" style={{ color:'inherit', textDecoration:'none' }}>Accueil</a>
        <span>/</span>
        <a href="/collections" style={{ color:'inherit', textDecoration:'none' }}>Collections</a>
        <span>/</span>
        <span style={{ color:'var(--cream)' }}>{collection.name}</span>
      </div>
      <div style={{ position:'relative', zIndex:1, padding:'clamp(48px,8vw,96px) clamp(24px,5vw,64px) clamp(32px,4vw,56px)' }}>
        <p style={{ fontFamily:'var(--font-sans)', fontSize:'10px', fontWeight:500, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--tan)', marginBottom:'12px' }}>{collection.count} pièces</p>
        <h1 style={{ fontFamily:'var(--font-serif)', fontSize:'clamp(40px,6vw,72px)', fontWeight:400, color:'var(--cream)', lineHeight:1.1, marginBottom:'16px' }}>{collection.name}</h1>
        <p style={{ fontFamily:'var(--font-alt)', fontSize:'17px', fontWeight:300, color:'rgba(245,240,232,0.8)', maxWidth:'520px', lineHeight:1.7 }}>{collection.description}</p>
      </div>
      <div style={{ position:'absolute', bottom:0, left:'clamp(24px,5vw,64px)', width:'48px', height:'2px', background:'var(--gold)', zIndex:1 }} />
    </section>
  )
}