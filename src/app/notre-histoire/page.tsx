import Link from 'next/link'

const timeline = [
  {
    year: '2012',
    title: 'La fondation',
    text: "Deux amis, une même obsession : créer une chemise juste, durable et élégante. La Chemiserie naît dans un petit atelier parisien avec cette idée simple.",
  },
  {
    year: '2015',
    title: 'Les premiers ateliers',
    text: "Nous construisons nos premiers partenariats avec des ateliers européens au Portugal et en Italie, choisis pour leur savoir-faire et leur exigence.",
  },
  {
    year: '2018',
    title: 'Le lin irlandais',
    text: "Découverte d’un lin d’exception qui devient la signature de notre collection estivale. Une matière légère, vivante et naturelle.",
  },
  {
    year: '2021',
    title: 'Le tournant durable',
    text: "Matières certifiées, emballages réduits, approche plus responsable. Nous faisons évoluer la marque sans renoncer à l’exigence.",
  },
  {
    year: '2024',
    title: 'Une marque internationale',
    text: "La Chemiserie expédie désormais dans plusieurs pays. Notre promesse reste la même : une chemise bien faite, portée avec confiance.",
  },
]

const values = [
  {
    title: 'Matières nobles',
    text: "Nous sélectionnons des tissus choisis pour leur tenue, leur douceur et leur capacité à bien vieillir.",
  },
  {
    title: 'Savoir-faire',
    text: "Nos chemises sont conçues avec une attention particulière portée aux finitions, aux cols et aux coutures.",
  },
  {
    title: 'Coupe précise',
    text: "Chaque patron est pensé pour offrir une silhouette nette, confortable et naturelle au porté.",
  },
]

const team = [
  { name: 'Souhail Anibou', role: 'Co-fondateur & Directeur créatif', image: '/images/5.jpg' },
  { name: 'Sarioui Younes', role: 'Co-fondateur & Directeur commercial', image: '/images/3.jpg' },
  { name: 'Jihane Anibou', role: 'Responsable des collections', image: '/images/7.jpg' },
]

export default function NotreHistoirePage() {
  return (
    <main>
      <section
        style={{
          position: 'relative',
          minHeight: '78vh',
          display: 'flex',
          alignItems: 'flex-end',
          overflow: 'hidden',
          background: 'var(--espresso)',
        }}
      >
        <img
          src="/images/2.jpg"
          alt="Notre histoire"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
            filter: 'saturate(0.92) contrast(1.02)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, rgba(26,22,17,0.9) 0%, rgba(26,22,17,0.45) 55%, rgba(26,22,17,0.1) 100%)',
          }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            padding: 'clamp(48px,8vw,96px) clamp(24px,5vw,64px)',
          }}
        >
          <div style={{ maxWidth: '900px' }}>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '10px',
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--tan)',
                marginBottom: '16px',
              }}
            >
              Fondée en 2012 · Paris, France
            </p>

            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(40px,6vw,84px)',
                fontWeight: 400,
                color: 'var(--cream)',
                lineHeight: 1.05,
                marginBottom: '24px',
                maxWidth: '10ch',
              }}
            >
              Une chemise,
              <br />
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>
                une histoire
              </em>
            </h1>

            <p
              style={{
                fontFamily: 'var(--font-alt)',
                fontSize: 'clamp(16px,1.4vw,19px)',
                fontWeight: 300,
                color: 'rgba(245,240,232,0.82)',
                maxWidth: '560px',
                lineHeight: 1.8,
                marginBottom: '32px',
              }}
            >
              La Chemiserie est née d’une conviction simple : faire des chemises
              durables, justes et élégantes, pensées pour accompagner un homme
              dans le temps.
            </p>

            <Link
              href="/collections"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 28px',
                background: 'var(--gold)',
                color: 'var(--ink)',
                fontFamily: 'var(--font-sans)',
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              Découvrir les collections
            </Link>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: 'clamp(64px,8vw,112px) clamp(24px,5vw,64px)',
          background: 'var(--cream)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: 'clamp(32px,6vw,72px)',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <div>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '10px',
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--brown-light)',
                marginBottom: '16px',
              }}
            >
              Notre philosophie
            </p>

            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px,3vw,44px)',
                fontWeight: 400,
                lineHeight: 1.15,
                marginBottom: '24px',
                color: 'var(--espresso)',
              }}
            >
              L’exigence, sans bruit.
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-alt)',
                fontSize: '17px',
                lineHeight: 1.85,
                color: 'var(--brown)',
                marginBottom: '18px',
                maxWidth: '64ch',
              }}
            >
              Nous croyons qu’une belle chemise n’a pas besoin d’en faire trop.
              Elle doit être bien coupée, bien finie et agréable à porter dès le
              premier jour.
            </p>

            <p
              style={{
                fontFamily: 'var(--font-alt)',
                fontSize: '17px',
                lineHeight: 1.85,
                color: 'var(--brown)',
                maxWidth: '64ch',
              }}
            >
              Notre travail consiste à enlever le superflu pour ne garder que
              l’essentiel : la matière, la coupe et le geste juste.
            </p>
          </div>

          <div
            style={{
              background: 'var(--color-surface, #fbfbf9)',
              border: '1px solid rgba(111,86,70,0.14)',
              padding: '28px',
              boxShadow: '0 10px 30px rgba(43,29,23,0.06)',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '24px',
              }}
            >
              {[
                ['12+', "Années d'expertise"],
                ['40+', 'Matières sélectionnées'],
                ['98%', 'Clients satisfaits'],
                ['15', 'Pays livrés'],
              ].map(([n, l]) => (
                <div key={l}>
                  <p
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(28px,4vw,42px)',
                      lineHeight: 1,
                      color: 'var(--espresso)',
                      marginBottom: '6px',
                    }}
                  >
                    {n}
                  </p>
                  <p
                    style={{
                      fontSize: '10px',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--brown)',
                    }}
                  >
                    {l}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          background: 'var(--espresso)',
          padding: 'clamp(64px,8vw,112px) clamp(24px,5vw,64px)',
        }}
      >
        <div style={{ maxWidth: '980px', margin: '0 auto' }}>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--tan)',
              marginBottom: '16px',
            }}
          >
            Notre parcours
          </p>

          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(28px,3vw,44px)',
              fontWeight: 400,
              color: 'var(--cream)',
              lineHeight: 1.15,
              marginBottom: '56px',
            }}
          >
            Les étapes qui ont façonné
            <br />
            <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>
              notre maison
            </em>
          </h2>

          <div style={{ display: 'grid', gap: '28px' }}>
            {timeline.map((item) => (
              <article
                key={item.year}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr',
                  gap: '28px',
                  alignItems: 'start',
                  paddingBottom: '28px',
                  borderBottom: '1px solid rgba(200,189,168,0.16)',
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(24px,2.6vw,34px)',
                      color: 'var(--gold)',
                      lineHeight: 1,
                    }}
                  >
                    {item.year}
                  </p>
                </div>

                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '11px',
                      fontWeight: 500,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: 'var(--tan)',
                      marginBottom: '10px',
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-alt)',
                      fontSize: '16px',
                      lineHeight: 1.8,
                      color: 'rgba(245,240,232,0.78)',
                      maxWidth: '68ch',
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: 'clamp(64px,8vw,112px) clamp(24px,5vw,64px)',
          background: 'var(--cream)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '10px',
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--brown-light)',
                marginBottom: '16px',
              }}
            >
              Ce qui nous guide
            </p>

            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px,3vw,44px)',
                fontWeight: 400,
                lineHeight: 1.15,
                color: 'var(--espresso)',
              }}
            >
              Nos valeurs
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              gap: '24px',
            }}
          >
            {values.map((value) => (
              <div
                key={value.title}
                style={{
                  background: 'var(--color-surface, #fbfbf9)',
                  border: '1px solid rgba(111,86,70,0.14)',
                  padding: '28px',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'var(--brown-light)',
                    marginBottom: '14px',
                  }}
                >
                  {value.title}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-alt)',
                    fontSize: '16px',
                    lineHeight: 1.8,
                    color: 'var(--brown)',
                  }}
                >
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: 'clamp(64px,8vw,112px) clamp(24px,5vw,64px)',
          background: 'var(--espresso)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '10px',
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--tan)',
                marginBottom: '16px',
              }}
            >
              L’équipe
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px,3vw,44px)',
                fontWeight: 400,
                lineHeight: 1.15,
                color: 'var(--cream)',
              }}
            >
              Les visages derrière la marque
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              gap: '24px',
            }}
          >
            {team.map((member) => (
              <article
                key={member.name}
                style={{
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    aspectRatio: '4 / 5',
                    overflow: 'hidden',
                    marginBottom: '18px',
                    background: 'rgba(255,255,255,0.04)',
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top',
                      display: 'block',
                    }}
                  />
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '18px',
                    color: 'var(--cream)',
                    marginBottom: '6px',
                  }}
                >
                  {member.name}
                </p>
                <p
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--tan)',
                  }}
                >
                  {member.role}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          background: 'var(--cream)',
          padding: 'clamp(64px,8vw,112px) clamp(24px,5vw,64px)',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '10px',
            fontWeight: 500,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--brown-light)',
            marginBottom: '16px',
          }}
        >
          Rejoignez l’aventure
        </p>

        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(28px,3vw,48px)',
            fontWeight: 400,
            lineHeight: 1.15,
            color: 'var(--espresso)',
            marginBottom: '16px',
          }}
        >
          Prêt à trouver votre chemise ?
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-alt)',
            fontSize: '17px',
            lineHeight: 1.8,
            color: 'var(--brown)',
            maxWidth: '520px',
            margin: '0 auto 32px',
          }}
        >
          Explorez nos collections et découvrez une pièce pensée pour durer,
          porter et accompagner vos journées.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Link
            href="/collections"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '14px 28px',
              background: 'var(--gold)',
              color: 'var(--ink)',
              fontFamily: 'var(--font-sans)',
              fontSize: '10px',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            Voir les collections
          </Link>

          <Link
            href="/collections/classique"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '14px 28px',
              border: '1px solid rgba(43,29,23,0.16)',
              color: 'var(--espresso)',
              fontFamily: 'var(--font-sans)',
              fontSize: '10px',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            Meilleures ventes
          </Link>
        </div>
      </section>
    </main>
  )
}