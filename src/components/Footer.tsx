'use client'

import Link from 'next/link'

const footerLinks = {
  'Collections': ['Classique', 'Lin & Été', 'Cérémonie', 'Casual', 'Soldes'],
  'Service Client': ['Mon compte', 'Suivi de commande', 'Retours & échanges', 'Guide des tailles', 'FAQ'],
  'La Marque': ['Notre histoire', 'Nos ateliers', 'Engagement durable', 'Presse', 'Contact'],
}

// Icônes réseaux sociaux décoratives
function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
    </svg>
  )
}

function IconFacebook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer
      style={{
        background: '#1a1611', // Ton `--ink` mais un peu plus clair
        color: 'var(--cream)',
        padding: 'clamp(60px, 8vw, 100px) clamp(24px, 5vw, 64px) 32px',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* ── Top grid (4 colonnes asymétriques) ── */}
        <div
          className="footer-grid"
          style={{ display: 'grid', gridTemplateColumns: '1.5fr repeat(3, 1fr)', gap: '48px', marginBottom: '64px' }}
        >
          {/* Brand + Newsletter */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '22px',
                fontWeight: 400,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}
            >
              La Chemiserie
            </p>
            <p
              style={{
                fontFamily: 'var(--font-alt)',
                fontSize: '15px',
                fontWeight: 300,
                color: 'var(--brown-light)',
                lineHeight: 1.75,
                marginBottom: '28px',
                maxWidth: '280px',
              }}
            >
              Des chemises pour homme pensées avec soin, taillées pour durer, et portées avec élégance.
            </p>
            {/* Newsletter design */}
            <p style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--tan)', marginBottom: '12px' }}>
              Newsletter
            </p>
            <div style={{ display: 'flex', maxWidth: '300px' }}>
              <input
                type="email"
                placeholder="Votre adresse email"
                style={{
                  flex: 1,
                  background: 'rgba(245, 240, 232, 0.07)',
                  border: '0.5px solid rgba(200, 189, 168, 0.25)',
                  borderRight: 'none',
                  color: 'var(--cream)',
                  padding: '12px 16px',
                  fontSize: '12px',
                  outline: 'none',
                  fontFamily: 'var(--font-sans)',
                }}
              />
              <button
                style={{
                  background: 'var(--gold)',
                  color: 'var(--espresso)',
                  border: 'none',
                  padding: '0 20px',
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                OK
              </button>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--tan)', marginBottom: '20px' }}>
                {title}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0 }}>
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      style={{
                        fontSize: '13px',
                        color: 'var(--brown-light)',
                        textDecoration: 'none',
                        letterSpacing: '0.04em',
                      }}
                      className="footer-link"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom row (Copyright) ── */}
        <div
          style={{
            borderTop: '0.5px solid rgba(200, 189, 168, 0.15)',
            paddingTop: '32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <p style={{ fontSize: '11px', color: 'var(--brown)', letterSpacing: '0.06em' }}>
            © {new Date().getFullYear()} La Chemiserie. Tous droits réservés.
          </p>

          <div style={{ display: 'flex', gap: '16px' }}>
            <Link href="#" aria-label="Instagram" style={{ color: 'var(--brown-light)', textDecoration: 'none' }}><IconInstagram /></Link>
            <Link href="#" aria-label="Facebook" style={{ color: 'var(--brown-light)', textDecoration: 'none' }}><IconFacebook /></Link>
          </div>

          <div style={{ display: 'flex', gap: '24px' }}>
            {['Mentions légales', 'CGV'].map((l) => (
              <Link key={l} href="#" style={{ fontSize: '10px', color: 'var(--brown)', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 968px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
        .footer-link:hover {
          color: var(--tan) !important;
          text-decoration: underline !important;
        }
      `}</style>
    </footer>
  )
}