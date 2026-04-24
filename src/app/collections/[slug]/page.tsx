import CollectionHero from '@/components/collection/CollectionHero'
import CollectionGrid from '@/components/collection/CollectionGrid'

const allProducts = [
  { id: 1, name: 'Chemise Oxford Premium', collection: 'classique', price: 89, slug: 'chemise-oxford-premium', badge: 'Bestseller', bg: 'var(--cream-dark)', colors: ['#F5F0E8'], available: true, image: '/images/2.jpg' },
  { id: 2, name: 'Popeline Blanche', collection: 'classique', price: 79, slug: 'popeline-blanche', badge: null, bg: '#EDE7DC', colors: ['#F5F0E8'], available: true, image: '/images/3.jpg' },
  { id: 3, name: 'Rayures Fines Navy', collection: 'classique', price: 110, slug: 'rayures-fines-navy', badge: 'Nouveau', bg: '#B8C4D4', colors: ['#2C3E5C'], available: true, image: '/images/4.jpg' },
  { id: 7, name: 'Chemise Lin Blanc', collection: 'lin-ete', price: 95, slug: 'chemise-lin-blanc', badge: null, bg: '#D8CEBC', colors: ['#F5F0E8'], available: true, image: '/images/8.jpg' },
  { id: 11, name: 'Smoking Blanc', collection: 'ceremonie', price: 145, slug: 'smoking-blanc', badge: 'Exclusif', bg: '#EDE7DC', colors: ['#F5F0E8'], available: true, image: '/images/12.jpg' },
  { id: 14, name: 'Vichy Terracotta', collection: 'casual', price: 92, slug: 'vichy-terracotta', badge: 'Nouveau', bg: '#D4906A', colors: ['#D4906A'], available: true, image: '/images/15.jpg' },
]

export default function CollectionPage({ params }: { params: { slug: string } }) {
  const slugRecu = params.slug.toLowerCase();
  
  // ICI ON FORCE : Si le filtrage ne marche pas, on prend TOUT pour tester
  let products = allProducts.filter(p => p.collection === slugRecu);
  
  if (products.length === 0) {
      console.log("⚠️ Aucun produit trouvé pour le slug :", slugRecu);
      products = allProducts; // On affiche tout le monde si le filtre échoue
  }

  return (
    <main>
      <CollectionHero collection={{ 
          name: slugRecu.toUpperCase(), 
          description: "Mode test activé", 
          bg: '#f4f4f4', 
          textColor: '#000', 
          slug: slugRecu, 
          count: products.length 
      }} />
      <CollectionGrid products={products} collectionName={slugRecu} />
    </main>
  )
}