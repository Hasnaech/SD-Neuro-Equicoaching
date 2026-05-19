'use client'
import { Suspense, lazy } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Check, ChevronDown, Star, MapPin } from 'lucide-react'
import GradientBlob from '../components/GradientBlob'
import FadeIn from '../components/FadeIn'
import TextReveal from '../components/TextReveal'
import AnimatedNumber from '../components/AnimatedNumber'
import MagneticButton from '../components/MagneticButton'

const HeroScene3D = lazy(() => import('../components/HeroScene3D'))

const situations = [
  {
    icon: '💬',
    title: 'Le « Bug » de communication',
    desc: "Les échanges se crispent et les ego prennent le dessus. Ce n'est pas un problème de caractère, c'est une réponse biologique de défense face à l'insécurité.",
    consequences: ["Réunions improductives, décisions ralenties", "Climat de méfiance qui s'installe", "Conflits latents qui s'accumulent jusqu'à la crise"],
  },
  {
    icon: '🚪',
    title: 'L'érosion des talents',
    desc: "Vos cadres à haut potentiel s'épuisent ou s'en vont sans raison apparente. Ils fuient souvent un climat de stress chronique invisible mais omniprésent.",
    consequences: ["Turnover coûteux, perte de compétences clés", "Démotivation collective difficile à enrayer", "Difficultés de recrutement sur postes stratégiques"],
  },
  {
    icon: '⚡',
    title: 'Le leadership réactif',
    desc: "Vous agissez dans l'urgence permanente, traitant les symptômes plutôt que les causes profondes des dysfonctionnements managériaux.",
    consequences: ["Épuisement de l'équipe dirigeante", "Projets stratégiques qui n'avancent pas", "Perte progressive de vision long terme"],
  },
]

const approche = [
  {
    n: '01',
    title: 'Diagnostic du système nerveux collectif',
    desc: "Nous analysons la « température » neurologique de votre direction pour identifier les freins invisibles à la collaboration et à la prise de décision stratégique.",
    details: ["Entretiens structurés avec votre équipe dirigeante", "Observation des dynamiques collectives en situation réelle", "Analyse des indicateurs RH (turnover, climat social, absentéisme)", "Cartographie des états nerveux dominants — Ventral, Sympathique, Dorsal"],
    livrable: "Rapport de diagnostic avec cartographie neurologique, identification des saboteurs collectifs et recommandations stratégiques.",
    duree: "Durée : 2 à 3 semaines",
  },
  {
    n: '02',
    title: 'Neurosciences Comportementales & Leadership',
    desc: "Nous formons vos dirigeants à identifier leurs propres « saboteurs » et à acquérir des protocoles de régulation pour rester lucides, même en pleine tempête.",
    details: ["Les 3 états du système nerveux et leur impact sur la décision", "Mécanisme neurobiologique de la prise de décision sous pression", "Protocoles de régulation validés : cohérence cardiaque, ancrage somatique", "Co-régulation : leur état nerveux se diffuse à toute l'équipe"],
    livrable: "Programme 21h · Certification Qualiopi · Éligible financement OPCO",
    duree: "Format : 3 jours ou 3×1 jour espacés",
  },
  {
    n: '03',
    title: 'L'Équicoaching : le miroir de votre leadership',
    desc: "Utilisé comme un accélérateur de vérité pour les CODIR, le cheval révèle en quelques minutes votre capacité à inspirer la confiance et à diriger sans user de la force ou de la contrainte.",
    details: ["Révèle l'écart entre votre intention et votre impact réel", "Seul feedback impossible à intellectualiser ou à rationaliser", "Révélation instantanée de vos saboteurs dominants en action", "Transposition directe aux dynamiques de votre équipe"],
    livrable: "Livret de restitution individuel · Plan d'action sous 10 jours",
    duree: "Format : demi-journée ou journée complète",
  },
]

const testimonials = [
  {
    quote: "L'approche neurosciences nous a permis d'objectiver des dynamiques que nous pressentions sans parvenir à les traiter. La Théorie Polyvagale a donné un langage commun à notre équipe de direction pour réguler nos états nerveux collectifs. La rigueur scientifique de la méthode a convaincu nos managers les plus sceptiques.",
    name: "Marie L.",
    role: "Directrice des Ressources Humaines",
    company: "Groupe Industriel, 850 collaborateurs",
  },
  {
    quote: "Comprendre mes saboteurs intérieurs a été un déclic. Je réalisais que 80 % de mes décisions étaient pilotées par la peur de ne pas être à la hauteur. Les outils de régulation me permettent maintenant d'identifier quand un saboteur prend le volant — et de reprendre la main.",
    name: "Thomas D.",
    role: "Directeur de Business Unit",
    company: "Groupe technologique",
  },
  {
    quote: "Le cheval m'a montré en 10 minutes ce que des mois de coaching n'avaient pas réussi à me faire voir : mon Contrôleur était aux commandes. Avant chaque réunion stratégique, je prends 5 minutes pour revenir en état ventral. Mes équipes ont immédiatement senti la différence.",
    name: "Sophie R.",
    role: "Directrice Générale",
    company: "Groupe retail premium",
  },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-beige">
        <GradientBlob />
        <Suspense fallback={null}>
          <HeroScene3D />
        </Suspense>
        <div className="absolute inset-0 bg-gradient-to-br from-violet-fonce/85 via-violet/70 to-violet/50" />

        <div className="relative z-10 container pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-or/40 bg-or/10 backdrop-blur-sm mb-8"
          >
            <span className="text-or font-inter font-semibold text-sm tracking-widest">
              MANAGER DE TRANSITION · NEUROSCIENCES · ÉQUICOACHING
            </span>
          </motion.div>

          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-playfair font-semibold mb-4 max-w-5xl leading-tight">
            <TextReveal>Le Leadership sous un nouvel angle :</TextReveal>
            <span className="text-or block mt-2">
              <TextReveal delay={0.2}>la Neuro-Régulation</TextReveal>
            </span>
          </h1>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-white/80 text-xl md:text-2xl font-playfair font-semibold mb-6 max-w-3xl leading-snug"
          >
            Pourquoi vos meilleures décisions se prennent-elles rarement sous pression ?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="max-w-2xl mb-4"
          >
            <p className="text-white/75 font-inter text-lg leading-relaxed">
              En tant que dirigeant, vous ne manquez pas de compétences.{' '}
              <strong className="text-white">Vous manquez parfois de disponibilité neurologique.</strong>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.52 }}
            className="max-w-2xl mb-8"
          >
            <p className="text-white/65 font-inter leading-relaxed">
              Une réunion qui s&apos;enflamme, une crise de croissance, un collaborateur qui vous défie...
              et votre cerveau bascule instantanément en mode « survie ». La vision se rétrécit,
              l&apos;empathie disparaît, et la réaction automatique l&apos;emporte sur la stratégie réfléchie.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.58 }}
            className="text-white font-inter font-semibold text-lg mb-10 max-w-2xl leading-relaxed"
          >
            Nous accompagnons les leaders et les comités de direction pour transformer
            la tension biologique en performance collective durable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <MagneticButton href="https://calendly.com/sara-dabancens/seance-decouverte">
              Réserver un diagnostic préliminaire <ArrowRight className="w-4 h-4" />
            </MagneticButton>
            <Link href="#approche" className="btn-outline-white">
              Découvrir notre approche
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-6 text-white/65 font-inter text-sm"
          >
            {[
              'Certification Qualiopi',
              '15+ ans d\'expérience terrain',
              'Partout en France',
              '150+ leaders formés',
            ].map((badge) => (
              <span key={badge} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-or" />{badge}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          aria-hidden="true"
        >
          <ChevronDown className="w-6 h-6 text-or" />
        </motion.div>
      </section>

      {/* QUI SUIS-JE — Sarah Dabancens */}
      <section className="bg-white py-24 md:py-32 overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden aspect-[4/5] relative bg-beige shadow-2xl shadow-violet/10">
                  <img
                    src="/img/sarah.jpg"
                    alt="Sarah Dabancens — Fondatrice SD Équicoaching"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5, type: 'spring' }}
                  className="absolute -bottom-5 -right-5 bg-or text-white rounded-2xl px-5 py-4 shadow-xl shadow-or/30"
                >
                  <p className="font-playfair font-bold text-2xl">15+</p>
                  <p className="font-inter text-xs text-white/80">ans terrain</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.55, duration: 0.5, type: 'spring' }}
                  className="absolute -top-4 -left-4 bg-violet-fonce text-white rounded-2xl px-5 py-4 shadow-xl"
                >
                  <p className="font-playfair font-bold text-2xl">150+</p>
                  <p className="font-inter text-xs text-white/70">leaders formés</p>
                </motion.div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-4">
                De Directrice Commerciale à Manager de Transition
              </p>
              <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-violet-fonce mb-4 leading-tight">
                Une expertise de terrain
              </h2>
              <p className="text-gris-moyen font-inter text-lg leading-relaxed mb-6 italic border-l-4 border-or pl-5">
                Des outils clairs et immédiatement actionnables — pas de la théorie déconnectée du réel.
              </p>
              <div className="space-y-4 text-gris-moyen font-inter leading-relaxed mb-8">
                <p>
                  Ancienne Directrice Commerciale devenue{' '}
                  <strong className="text-violet-fonce">Manager de Transition</strong> et{' '}
                  <strong className="text-violet-fonce">Équicoach certifiée</strong>, Sarah a vécu
                  la pression des chiffres, les restructurations et la complexité des dynamiques de CODIR.
                </p>
                <p>
                  Aujourd&apos;hui, elle combine cette réalité du business avec les neurosciences
                  appliquées pour <strong className="text-violet-fonce">stabiliser les organisations
                  en mutation</strong> et transformer la tension biologique en performance collective durable.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  'Manager de Transition',
                  'Équicoach certifiée',
                  'Certification Qualiopi',
                  'Coach certifiée ICF',
                  'Neurosciences comportementales',
                ].map((tag) => (
                  <span key={tag} className="bg-violet-pale text-violet font-inter font-semibold text-xs px-4 py-2 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-4 border-t border-gris-clair pt-6">
                {[
                  { value: '15', suffix: '+', label: 'ans d\'expérience terrain' },
                  { value: '150', suffix: '+', label: 'leaders formés' },
                  { value: '98', suffix: '%', label: 'taux de satisfaction' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-or font-playfair font-bold text-3xl">
                      <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-gris-moyen font-inter text-xs mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SITUATIONS QUI COÛTENT CHER */}
      <section className="bg-beige py-24 md:py-32">
        <div className="container">
          <FadeIn className="text-center mb-6">
            <p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-3">
              Vous reconnaissez probablement ces dynamiques
            </p>
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-4">
              <TextReveal>Les situations qui coûtent cher à votre organisation</TextReveal>
            </h2>
          </FadeIn>
          <FadeIn className="text-center mb-16">
            <p className="text-gris-moyen font-inter text-lg max-w-2xl mx-auto">
              Au sein de votre CODIR ou de vos équipes de direction.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {situations.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-gris-clair h-full flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-5">{s.icon}</div>
                  <h3 className="font-playfair font-semibold text-xl text-violet-fonce mb-4">{s.title}</h3>
                  <p className="text-gris-moyen font-inter text-sm leading-relaxed mb-6 flex-1">{s.desc}</p>
                  <div className="border-t border-gris-clair pt-4">
                    <p className="text-or font-inter font-semibold text-xs uppercase tracking-widest mb-3">Ce que cela génère</p>
                    <ul className="space-y-1.5">
                      {s.consequences.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-gris-moyen font-inter text-xs leading-snug">
                          <span className="w-1.5 h-1.5 rounded-full bg-or shrink-0 mt-1.5" />{c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3} className="mt-14 text-center">
            <div className="inline-block bg-white border border-gris-clair rounded-2xl px-10 py-6 max-w-2xl">
              <p className="font-playfair font-semibold text-xl text-violet-fonce mb-2">
                Ces situations ne sont pas une fatalité.
              </p>
              <p className="text-gris-moyen font-inter leading-relaxed">
                Elles résultent de mécanismes neurobiologiques précis que notre approche
                permet d&apos;identifier et de réguler.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* NOTRE APPROCHE */}
      <section id="approche" className="bg-white py-24 md:py-32">
        <div className="container">
          <FadeIn className="text-center mb-6">
            <p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-3">La Méthode A.N.E.</p>
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-4">
              La Science au service de l&apos;Excellence
            </h2>
          </FadeIn>
          <FadeIn className="text-center mb-16">
            <p className="text-gris-moyen font-inter text-lg max-w-2xl mx-auto">
              Pas de théories abstraites, mais des leviers concrets pour le haut niveau.
            </p>
          </FadeIn>

          <div className="space-y-8 max-w-5xl mx-auto">
            {approche.map((a, i) => (
              <FadeIn key={a.n} delay={i * 0.1}>
                <div className="rounded-2xl border border-gris-clair overflow-hidden">
                  <div className={`px-8 py-6 flex items-start gap-6 ${
                    i === 0 ? 'bg-violet-fonce' : i === 1 ? 'bg-violet' : 'bg-or'
                  }`}>
                    <span className="text-white/30 font-playfair font-bold text-5xl leading-none shrink-0">{a.n}</span>
                    <div>
                      <h3 className="text-white font-playfair font-semibold text-2xl mb-2">{a.title}</h3>
                      <p className="text-white/80 font-inter text-sm leading-relaxed">{a.desc}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gris-clair bg-white">
                    <div className="p-8">
                      <p className="text-or font-inter font-semibold text-xs uppercase tracking-widest mb-4">Ce que cela implique</p>
                      <ul className="space-y-2.5">
                        {a.details.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-gris-moyen font-inter text-sm leading-relaxed">
                            <Check className="w-4 h-4 text-or shrink-0 mt-0.5" />{d}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-8 flex flex-col justify-between">
                      <div>
                        <p className="text-or font-inter font-semibold text-xs uppercase tracking-widest mb-4">Livrable</p>
                        <p className="text-gris-moyen font-inter text-sm leading-relaxed mb-4">{a.livrable}</p>
                      </div>
                      <p className="text-violet font-inter font-semibold text-sm border-t border-gris-clair pt-4">{a.duree}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3} className="mt-12 max-w-3xl mx-auto">
            <div className="bg-beige rounded-2xl p-8 border border-gris-clair">
              <p className="font-playfair font-semibold text-xl text-violet-fonce mb-3 text-center">Suivi & Ancrage dans la durée</p>
              <p className="text-gris-moyen font-inter leading-relaxed text-center">
                Notre accompagnement ne s&apos;arrête pas à la fin de la formation. Nous assurons un suivi
                à 3 et 6 mois pour mesurer l&apos;impact, ajuster les protocoles si nécessaire, et garantir
                l&apos;ancrage durable des nouvelles pratiques dans votre organisation.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PRÉSENCE NATIONALE */}
      <section className="bg-violet py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-4">Présence nationale</p>
              <h2 className="text-white text-3xl md:text-4xl font-playfair font-semibold mb-6">
                Une expertise sans frontières
              </h2>
              <p className="text-white/80 font-inter leading-relaxed mb-4">
                <strong className="text-white">Sarah Dabancens et son équipe interviennent partout en France.</strong>
              </p>
              <p className="text-white/70 font-inter leading-relaxed">
                Que ce soit pour un séminaire de direction en présentiel ou un accompagnement
                stratégique à distance, nous adaptons nos interventions à votre réalité
                géographique et organisationnelle.
              </p>
            </FadeIn>
            <FadeIn direction="right">
              <div className="grid grid-cols-1 gap-3">
                {[
                  { label: 'Séminaires de direction', detail: 'Format résidentiel 2-3 jours' },
                  { label: 'Interventions sur site', detail: 'Dans vos locaux partout en France' },
                  { label: 'Accompagnement à distance', detail: 'Visioconférence pour diagnostic et suivi' },
                  { label: 'Équicoaching', detail: '200+ centres partenaires — Île-de-France, Provence, Normandie…' },
                  { label: 'Formations inter-entreprises', detail: 'Paris, Lyon, Marseille, Bordeaux et plus' },
                ].map((item) => (
                  <div key={item.label} className="bg-white/10 border border-white/20 rounded-xl px-5 py-4 flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-or shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-inter font-semibold text-sm">{item.label}</p>
                      <p className="text-white/55 font-inter text-xs mt-0.5">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* PROMESSE FINALE + TÉMOIGNAGES */}
      <section className="bg-beige py-24 md:py-32">
        <div className="container">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-violet-fonce mb-6 max-w-3xl mx-auto leading-tight">
              Révélez le potentiel humain de vos managers et équipes avec des méthodes éprouvées.
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {[
                "Réunions CODIR productives, décisions stratégiques lucides",
                "Managers qui régulent au lieu de réagir",
                "Climat de sécurité psychologique qui libère l'innovation",
                "Talents qui restent et s'engagent durablement",
                "Performance collective préservant le bien-être",
              ].map((b) => (
                <span key={b} className="flex items-center gap-2 bg-white border border-gris-clair font-inter text-sm text-gris-fonce px-4 py-2 rounded-full">
                  <Check className="w-4 h-4 text-or shrink-0" />{b}
                </span>
              ))}
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1}>
                <blockquote className="bg-white rounded-2xl p-8 shadow-sm h-full flex flex-col border border-gris-clair">
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-or text-or" />
                    ))}
                  </div>
                  <p className="text-gris-fonce font-inter leading-relaxed mb-6 flex-1 italic text-[15px]">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer>
                    <p className="font-playfair font-semibold text-violet-fonce">{t.name}</p>
                    <p className="text-gris-moyen font-inter text-sm">{t.role}</p>
                    <p className="text-gris-moyen/60 font-inter text-xs mt-0.5">{t.company}</p>
                  </footer>
                </blockquote>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-violet-fonce py-24 md:py-32 relative overflow-hidden">
        <GradientBlob />
        <div className="container relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-4">
              Première étape
            </p>
            <h2 className="text-white text-4xl md:text-5xl font-playfair font-semibold mb-4">
              Évaluez le potentiel de votre leadership
            </h2>
            <h3 className="text-or text-xl md:text-2xl font-playfair font-semibold mb-6">
              Réserver un diagnostic préliminaire de 30 minutes
            </h3>
            <p className="text-white/75 font-inter text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Un échange stratégique pour faire le point sur vos enjeux actuels
              et découvrir comment la neuro-régulation peut sécuriser votre croissance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10 text-left max-w-xl mx-auto">
              {[
                "Analyse de votre situation actuelle (CODIR, managers, dynamiques)",
                "Identification des freins neurologiques à votre performance collective",
                "Présentation de notre approche adaptée à votre contexte",
                "Évaluation de la pertinence d'un accompagnement",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-or shrink-0 mt-0.5" />
                  <span className="text-white/80 font-inter text-sm leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <MagneticButton href="https://calendly.com/sara-dabancens/seance-decouverte">
              Prendre rendez-vous <ArrowRight className="w-4 h-4" />
            </MagneticButton>

            <p className="text-white/35 font-inter text-sm mt-6">
              30 minutes · Gratuit · Sans engagement · Visioconférence
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
