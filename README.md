This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Ajouter des images en local (VS Code)

Si tu ne vois pas les images sur `localhost`, suis ces étapes dans ton projet local :

1. **Place tes fichiers image dans `public/images/`**
   - Exemple : `public/images/1.jpg`
   - Le dossier `public` est servi à la racine (`/`).

2. **Utilise un chemin qui commence par `/images/...`**
   - ✅ Correct : `"/images/1.jpg"`
   - ❌ Incorrect : `"public/images/1.jpg"`

3. **Affiche les images avec `next/image`**

```tsx
import Image from 'next/image'

export default function Example() {
  return (
    <div style={{ position: 'relative', width: 300, height: 400 }}>
      <Image
        src="/images/1.jpg"
        alt="Chemise"
        fill
        style={{ objectFit: 'cover' }}
      />
    </div>
  )
}
```

4. **Redémarre le serveur après ajout de nouvelles images**

```bash
npm run dev
```

5. **Vérifie l'URL de l'image dans le navigateur**
   - Ouvre directement : `http://localhost:3000/images/1.jpg`
   - Si ça répond `404`, le fichier n'est pas au bon emplacement ou le nom ne correspond pas (majuscules/minuscules).

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
