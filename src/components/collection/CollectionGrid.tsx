'use client'

export default function CollectionGrid({ products, collectionName }: { products: any[]; collectionName: string }) {
  return (
    <div style={{ padding: '50px', background: 'white' }}>
      <h2 style={{ color: 'red' }}>DEBUG : {products.length} produits reçus</h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
        gap: '20px' 
      }}>
        {products.map((p) => (
          <div key={p.id} style={{ border: '1px solid black', padding: '10px' }}>
            <div style={{ position: 'relative', aspectRatio: '3/4', background: '#eee', marginBottom: '10px' }}>
              <img 
                src={p.image} 
                alt={p.name}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  border: '2px solid red' // Bordure rouge pour voir l'image
                }}
              />
              <div style={{ position: 'absolute', bottom: 0, background: 'rgba(255,255,255,0.8)', fontSize: '10px', width: '100%' }}>
                Source: {p.image}
              </div>
            </div>
            <p style={{ fontWeight: 'bold' }}>{p.name}</p>
            <p>{p.price} €</p>
          </div>
        ))}
      </div>
    </div>
  )
}