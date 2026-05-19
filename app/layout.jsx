import './globals.css'
import SmoothScroll from '../components/SmoothScroll'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  metadataBase: new URL('https://sd-equicoaching.fr'),
  title: {
    default: 'SD Équicoaching — Formation Leadership Neurosciences & Teambuilding Manager | Paris & France',
    template: '%s | SD Équicoaching',
  },
  description: 'Collectif expert en formation leadership neurosciences, formation manager et teambuilding. Neurosciences comportementales, équicoaching et MBTI pour dirigeants et CODIR. Certification Qualiopi. Partout en France.',
  keywords: [
    'performance managériale',
    'neurosciences management',
    'équicoaching',
    'leadership',
    'formation managers',
    'formation leadership neurosciences',
    'formation manager',
    'teambuilding manager',
    'équicoaching entreprise',
    'coaching CODIR',
    'neurosciences comportementales',
    'manager de transition',
    'Paris',
    'Île-de-France',
  ],
  authors: [{ name: 'SD Équicoaching' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://sd-equicoaching.fr',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://sd-equicoaching.fr',
    siteName: 'SD Équicoaching',
    title: 'SD Équicoaching — Formation Leadership Neurosciences & Teambuilding Manager | Paris & France',
    description: 'Collectif expert en formation leadership neurosciences, formation manager et teambuilding. Neurosciences comportementales, équicoaching et MBTI pour dirigeants et CODIR. Certification Qualiopi. Partout en France.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SD Équicoaching — Formation Leadership Neurosciences & Teambuilding Manager',
    description: 'Collectif expert en formation leadership neurosciences, formation manager et teambuilding. Neurosciences comportementales, équicoaching et MBTI pour dirigeants et CODIR.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SmoothScroll />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
