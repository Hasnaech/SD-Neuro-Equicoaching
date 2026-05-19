'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Clock, Users, MapPin } from 'lucide-react'
import FadeIn from '../../components/FadeIn'
import TextReveal from '../../components/TextReveal'
import MagneticButton from '../../components/MagneticButton'

const schedule = [
  { time: '9h00', title: 'Accueil & Intention', desc: "Mise en place du cadre, intentions de la journée, exploration du domaine équestre." },
  { time: '10h00', title: 'Observation & Connexion', desc: "Premiers contacts avec les chevaux, lecture des comportements, décryptage des dynamiques de groupe." },
  { time: '11h30', title: 'Ateliers collectifs', desc: "Exercices en équipe guidés par le cheval : leadership, communication, confiance." },
  { time: '13h00', title: 'Déjeuner & Partage', desc: "Repas convivial, partage libre des premières prises de conscience." },
  { time: '14h30', title: 'Ateliers approfondis', desc: "Mise en situation complexe, gestion des tensions, co-leadership et prise de décision collective." },
  { time: '16h30', title: 'Debrief collectif', desc: "Restitution guidée, liens avec le quotidien professionnel, co-construction du plan d'action." },
  { time: '18h00', title: 'Clôture & Engagements', desc: "Engagements individuels et collectifs, remise du livret de restitution sous 10 jours." },
]

const regions = ["Île-de-France", "Auvergne-Rhône-Alpes", "Provence-Alpes-Côte d'Azur", "Occitanie", "Nouvelle-Aquitaine", "Bretagne", "Hauts-de-France", "Grand Est", "Normandie", "Pays de la Loire", "Bourgogne-Franche-Comté", "Et partout ailleurs"]

const raisons = [
  { title: "Le cheval sent le bullshit à 10 mètres", desc: "Votre équipe dit « tout va bien » en réunion ? Le cheval, lui, capte la tension sous-jacente. Et il ne coopère pas tant que c'est pas réglé.", note: "Résultat : vous êtes obligés d'adresser ce que vous évitiez depuis 6 mois." },
  { title: "Impossible de faker", desc: "En réunion, on peut sourire et hocher la tête même si on pense l'inverse. Avec le cheval, impossible. Soit vous êtes alignés collectivement, soit le cheval ne bouge pas. C'est binaire. C'est radical. C'est efficace.", note: null },
  { title: "Ça ancre dans le corps", desc: "Les teambuildings classiques, vous repartez avec des post-its et des bonnes résolutions qui durent 2 semaines. Avec l'équicoaching, c'est inscrit dans votre mémoire corporelle.", note: "6 mois plus tard, vous vous souvenez encore de ce moment où le cheval n'a pas bougé tant que vous n'étiez pas cohérents." },
]

const casClients = [
  { titre: "Le comité de direction qui s'évite", contexte: "8 directeurs. Tensions entre 2 d'entre eux. Tout le monde le sait. Personne n'en parle.", exercice: "« Amenez tous ensemble le cheval dans le rond. »", resultat: "Le cheval ne bouge pas. Il sent la division dans le groupe. 3 tentatives, 3 échecs. Les 2 directeurs en tension ont finalement parlé — devant tout le monde, dans le rond. Ce qui n'avait pas été dit en 2 ans a été dit en 20 minutes.", apres: "6 mois après : les réunions sont plus fluides, les décisions se prennent plus vite." },
  { titre: "L'équipe performante qui ne se fait pas confiance", contexte: "Équipe commerciale de 10 personnes. Résultats corrects, mais silotage total. Chacun pour soi.", exercice: "« Guidez le cheval en équipe, sans vous parler. »", resultat: "Révélation immédiate : tout le monde tire dans des directions différentes. Le cheval s'arrête, désoriené. Premier moment d'inconfort collectif. Puis, progressivement, ils se coordonnent. Le cheval avance.", apres: "Le debrief a ouvert une conversation sur la confiance qui n'existait pas avant. L'équipe a co-construit 3 règles de fonctionnement. Toujours appliquées 1 an après." },
]

export default function TeambuildingPage() {
  return (
    <>
      <section className="bg-violet-fonce min-h-[70vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-fonce to-violet" />
        <div className="container relative z-10 pt-32 pb-20">
          <FadeIn><p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-4">Teambuilding Équicoaching</p></FadeIn>
          <h1 className="text-white text-4xl md:text-6xl font-playfair font-semibold mb-2 max-w-4xl leading-tight"><TextReveal>Vos teambuildings habituels,</TextReveal></h1>
          <p className="text-white/80 text-2xl md:text-3xl font-playfair font-semibold mb-2 max-w-3xl leading-snug">tout le monde fait semblant de s&apos;amuser</p>
          <p className="text-or text-2xl md:text-3xl font-playfair font-semibold mb-6">puis rien ne change.</p>
          <FadeIn delay={0.3}>
            <p className="text-white/80 text-lg font-inter mb-10 max-w-2xl leading-relaxed">On a une meilleure idée : un cheval, une équipe, zéro bullshit.{' '}<strong className="text-or">Les non-dits remontent. Les tensions se dissolvent.</strong></p>
            <div className="flex flex-col sm:flex-row gap-4">
              <MagneticButton href="https://calendly.com/sara-dabancens/seance-decouverte">Organiser une journée <ArrowRight className="w-4 h-4" /></MagneticButton>
              <Link href="/contact" className="btn-outline-white">Nous contacter</Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.5} className="flex flex-wrap gap-6 mt-10 text-white/60 font-inter text-sm">
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-or" /> 1 journée (9h – 18h)</span>
            <span className="flex items-center gap-2"><Users className="w-4 h-4 text-or" /> 6 à 15 personnes</span>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-or" /> Partout en France</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-or" /> 200+ partenaires équestres</span>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="container">
          <FadeIn className="text-center mb-16"><p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-3">Mais pourquoi un cheval ?</p><h2 className="text-4xl md:text-5xl font-playfair font-semibold text-violet-fonce">On vous explique.</h2><p className="text-gris-moyen font-inter text-lg mt-4 max-w-2xl mx-auto">En 30 minutes avec un cheval, votre équipe va voir ce qu&apos;elle n&apos;a pas vu en 3 ans de réunions.</p></FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {raisons.map((r, i) => (
              <FadeIn key={r.title} delay={i * 0.1}>
                <div className="card h-full flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-or/10 flex items-center justify-center text-or font-bold font-inter text-xl mb-6 shrink-0">{i + 1}</div>
                  <h3 className="font-playfair font-semibold text-xl text-violet-fonce mb-4">{r.title}</h3>
                  <p className="text-gris-moyen font-inter text-sm leading-relaxed flex-1">{r.desc}</p>
                  {r.note && <p className="text-gris-moyen/60 font-inter text-xs italic mt-4 border-t border-gris-clair pt-4">{r.note}</p>}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige py-24 md:py-32">
        <div className="container">
          <FadeIn className="text-center mb-16"><p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-3">Ce qui se passe vraiment</p><h2 className="text-4xl font-playfair font-semibold">2 cas réels (anonymisés)</h2></FadeIn>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {casClients.map((cas, i) => (
              <FadeIn key={cas.titre} delay={i * 0.15}>
                <div className="bg-white rounded-2xl p-8 border border-gris-clair h-full flex flex-col">
                  <h3 className="font-playfair font-semibold text-xl text-violet-fonce mb-6">{cas.titre}</h3>
                  <div className="space-y-4 flex-1">
                    <div><p className="text-or font-inter font-semibold text-xs uppercase tracking-widest mb-1">Contexte</p><p className="text-gris-moyen font-inter text-sm leading-relaxed">{cas.contexte}</p></div>
                    <div><p className="text-or font-inter font-semibold text-xs uppercase tracking-widest mb-1">Exercice</p><p className="text-gris-fonce font-inter text-sm italic">{cas.exercice}</p></div>
                    <div><p className="text-or font-inter font-semibold text-xs uppercase tracking-widest mb-1">Ce qui s&apos;est passé</p><p className="text-gris-moyen font-inter text-sm leading-relaxed">{cas.resultat}</p></div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gris-clair"><p className="text-or font-inter font-semibold text-xs uppercase tracking-widest mb-1">Résultat</p><p className="text-violet-fonce font-inter font-semibold text-sm">{cas.apres}</p></div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="container">
          <FadeIn className="text-center mb-16"><p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-3">Déroulé</p><h2 className="text-4xl font-playfair font-semibold">La journée, heure par heure</h2></FadeIn>
          <div className="max-w-3xl mx-auto">
            {schedule.map((slot, i) => (
              <FadeIn key={slot.time} delay={i * 0.07}>
                <div className="flex gap-6 py-6 border-b border-gris-clair last:border-0">
                  <div className="w-20 shrink-0 font-inter font-semibold text-or text-lg pt-1">{slot.time}</div>
                  <div><h3 className="font-playfair font-semibold text-xl text-violet-fonce mb-2">{slot.title}</h3><p className="text-gris-moyen font-inter text-sm leading-relaxed">{slot.desc}</p></div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-violet py-16">
        <div className="container">
          <FadeIn className="text-center mb-10"><p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-3">Réseau national</p><h2 className="text-white text-3xl md:text-4xl font-playfair font-semibold mb-3">200+ domaines partenaires partout en France</h2></FadeIn>
          <div className="flex flex-wrap justify-center gap-3">
            {regions.map((r) => (<span key={r} className="bg-white/10 text-white font-inter text-sm px-4 py-2 rounded-full border border-white/20">{r}</span>))}
          </div>
        </div>
      </section>

      <section className="bg-violet-fonce py-20">
        <div className="container text-center">
          <FadeIn>
            <h2 className="text-white text-4xl font-playfair font-semibold mb-4">Où que vous soyez en France</h2>
            <p className="text-white/70 font-inter text-lg mb-8 max-w-xl mx-auto">On trouve le domaine partenaire idéal à proximité de votre équipe.</p>
            <MagneticButton href="/contact">Vérifier la disponibilité <ArrowRight className="w-4 h-4" /></MagneticButton>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
