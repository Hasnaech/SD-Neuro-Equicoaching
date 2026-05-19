import Link from 'next/link'
import { MapPin, Mail, Clock, Phone, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-violet-fonce text-white">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src="/logo.png" alt="SD Équicoaching" className="h-14 mb-4 brightness-0 invert" />
            <p className="text-white/65 font-inter text-sm leading-relaxed mb-5">
              Collectif expert en performance managériale. Neurosciences × Équicoaching × MBTI.
            </p>
            <span className="text-or font-inter font-semibold text-sm">Certification Qualiopi</span>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://www.instagram.com/sarahdabancens/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram SD Équicoaching"
                className="text-white/50 hover:text-or transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sarah-dabancens/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Sarah Dabancens"
                className="text-white/50 hover:text-or transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Programmes */}
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">Programmes</h3>
            <ul className="space-y-3 font-inter text-sm text-white/65">
              <li><Link href="/formation-leadership" className="hover:text-or transition-colors">Formation Leadership</Link></li>
              <li><Link href="/teambuilding-equicoaching" className="hover:text-or transition-colors">Teambuilding Équicoaching</Link></li>
            </ul>
          </div>

          {/* À propos */}
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">À propos</h3>
            <ul className="space-y-3 font-inter text-sm text-white/65">
              <li><Link href="/a-propos" className="hover:text-or transition-colors">Notre histoire</Link></li>
              <li><Link href="/blog" className="hover:text-or transition-colors">Blog & Articles</Link></li>
              <li><Link href="/contact" className="hover:text-or transition-colors">Contact</Link></li>
              <li><Link href="/mentions-legales" className="hover:text-or transition-colors">Mentions légales</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 font-inter text-sm text-white/65">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-or shrink-0 mt-0.5" />
                <span>Partout en France<br /><span className="text-white/40 text-xs">200+ partenaires équestres</span></span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-or shrink-0" />
                <a href="mailto:sarah.dabancens@sd-equicoaching.fr" className="hover:text-or transition-colors">
                  sarah.dabancens@sd-equicoaching.fr
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-or shrink-0" />
                <a href="tel:+33643455145" className="hover:text-or transition-colors">
                  06 43 45 51 45
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-or shrink-0" />
                <span>Lun – Ven, 9h – 18h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/35 font-inter text-sm">
          <p>© {new Date().getFullYear()} SD Équicoaching — Tous droits réservés</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link>
            <Link href="/politique-confidentialite" className="hover:text-white transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
