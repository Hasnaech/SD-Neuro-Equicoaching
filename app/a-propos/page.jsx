'use client'
import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Award, BookOpen, Heart, Star, Zap, Users } from 'lucide-react'
import GradientBlob from '../../components/GradientBlob'
import FadeIn from '../../components/FadeIn'
import AnimatedNumber from '../../components/AnimatedNumber'
import MagneticButton from '../../components/MagneticButton'
import TextReveal from '../../components/TextReveal'

const CALENDLY = 'https://calendly.com/sara-dabancens/seance-decouverte'

const values = [
  { icon: <Award className="w-6 h-6" />, title: 'Excellence', desc: "Certification Qualiopi, formation continue, résultats mesurables. L'exigence du terrain appliquée à la performance managériale." },
  { icon: <Heart className="w-6 h-6" />, title: 'Authenticité', desc: "Notre approche ne vient pas des manuels, mais de situations de crise réelles. Des outils clairs et immédiatement actionnables." },
  { icon: <BookOpen className="w-6 h-6" />, title: 'Rigueur scientifique', desc: "Théorie Polyvagale, neurosciences comportementales, MBTI. La science au service de l'excellence managériale." },
]

const team = [
  { name: 'Christine Lecoeur', role: 'Ancienne DRH et Coach', tags: ['MBTI certifiée', 'PNL praticienne', 'Conduite du changement'], desc: "La gestion de l'humain et la conduite du changement est sa spécialité. Elle saura vous conduire au succès lors de nos ateliers.", stat: '350+ managers formés', accent: 'or' },
  { name: 'Mahdi Lansari', role: 'Coach et expert en relation', tags: ['Communication', 'Relations professionnelles', 'Intelligence collective'], desc: "La communication et les relations sont son domaine d'expertise. À ses côtés, vous apprendrez à illuminer vos relations professionnelles et personnelles.", stat: 'Expert certifié', accent: 'violet' },
  { name: 'Hasnae Chnaif', role: 'Expert Marketing Digital, IA & Prospection', tags: ['Marketing digital', 'IA', 'Prospection automatisée'], desc: "Expert dans le scaling, la vente et la publicité. Elle pilote la stratégie de visibilité du collectif et accompagne les entreprises dans leur croissance.", stat: 'Vision 360°', accent: 'or' },
  { name: 'Anja Niestroy', role: 'Coach & Équicoach', tags: ['Équicoaching', 'Facilitation', 'Révélation des talents'], desc: "Révéler les talents et fédérer les personnalités pour faire émerger des réussites collectives, c'est ce qui l'anime. Avec ses expériences immersives, vous vivrez une véritable évolution.", stat: '200+ centres partenaires', accent: 'violet' },
]

const stats = [
  { value: '150', suffix: '+', label: 'Managers formés' },
  { value: '98', suffix: '%', label: 'Taux de satisfaction' },
  { value: '15', suffix: '+', label: "Années d'expérience" },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] } }),
}

export default function AProposPage() {
  const photoRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: photoRef, offset: ['start end', 'end start'] })
  const photoY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  return (
    <>
      <section className="bg-violet-fonce min-h-[60vh] flex items-end relative overflow-hidden">
        <GradientBlob />
        <div className="absolute inset-0 bg-gradient-to-br from-violet-fonce/90 via-violet/80 to-violet/60" />
        <motion.div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-or/10 blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-violet-clair/20 blur-2xl" animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }} />
        <div className="container relative z-10 pt-36 pb-20">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-4">Le collectif</motion.p>
          <h1 className="text-white text-5xl md:text-7xl font-playfair font-semibold max-w-3xl leading-tight mb-4"><TextReveal>Sarah Dabancens</TextReveal></h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-white/70 font-inter text-lg">Manager de Transition · Équicoach certifiée · Fondatrice de SD Équicoaching</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="flex flex-wrap gap-3 mt-8">
            {['Certification Qualiopi', 'ICPF Certification Qualité', 'Coach certifiée ICF', 'Neurosciences comportementales'].map((badge) => (
              <span key={badge} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-or/40 bg-or/10 text-or font-inter font-semibold text-xs tracking-wide"><Star className="w-3 h-3 fill-or" />{badge}</span>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-violet py-16">
        <div className="container">
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}>
                <div className="text-white font-playfair font-bold text-5xl md:text-6xl mb-2"><AnimatedNumber value={s.value} suffix={s.suffix} /></div>
                <div className="text-white/60 font-inter text-sm">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32 overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div ref={photoRef} className="relative">
              <FadeIn direction="left">
                <div className="rounded-2xl overflow-hidden aspect-[4/5] relative bg-beige shadow-2xl shadow-violet/10">
                  <motion.div style={{ y: photoY }} className="absolute inset-0 scale-110">
                    <img src="/img/sarah.jpg" alt="Sarah Dabancens — Fondatrice SD Équicoaching" className="w-full h-full object-cover object-top" />
                  </motion.div>
                </div>
                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }} className="absolute -bottom-6 -right-6 bg-or text-white rounded-2xl px-6 py-4 shadow-xl shadow-or/30">
                  <p className="font-playfair font-semibold text-lg">15 ans</p>
                  <p className="font-inter text-xs text-white/80">d'expérience terrain</p>
                </motion.div>
              </FadeIn>
            </div>
            <FadeIn direction="right">
              <p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-4">Fondatrice</p>
              <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-violet-fonce mb-6 leading-tight">De Directrice Commerciale à Manager de Transition</h2>
              <div className="space-y-4 text-gris-moyen font-inter leading-relaxed mb-6">
                <p>Pendant de nombreuses années, j&apos;ai évolué avec passion comme commerciale, puis <strong className="text-violet-fonce">directrice commerciale</strong>, avant de devenir <strong className="text-violet-fonce">manager de transition dans l&apos;industrie pharmaceutique</strong>.</p>
                <p>Ces expériences m&apos;ont confrontée aux réalités des dirigeants et managers : le stress, la complexité des décisions, les équipes démotivées et la nécessité d&apos;un leadership clair et cohérent.</p>
              </div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-violet-pale border-l-4 border-violet rounded-r-2xl p-6 mb-6">
                <p className="text-violet-fonce font-inter leading-relaxed text-sm italic">&ldquo;Dans l&apos;essence même de SD Équicoaching, j&apos;ai eu à cœur de construire <strong>tout ce que j&apos;aurais voulu apprendre en tant que manager</strong> : de la théorie, oui, mais surtout des <strong>outils clairs et immédiatement actionnables</strong>. L&apos;aide du cheval vient <strong>booster les prises de conscience</strong>, notamment sur la posture, le leadership et la communication.&rdquo;</p>
                <p className="text-violet font-inter font-semibold text-sm mt-3">— Sarah Dabancens</p>
              </motion.div>
              <div className="flex flex-wrap gap-2">
                {['Manager de Transition', 'Équicoach certifiée', 'Qualiopi', 'Coach ICF', 'Neurosciences comportementales', 'Industrie pharmaceutique'].map((tag) => (
                  <span key={tag} className="bg-violet-pale text-violet font-inter font-semibold text-xs px-3 py-1.5 rounded-full">{tag}</span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-beige py-24 md:py-32">
        <div className="container">
          <FadeIn className="text-center mb-16">
            <p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-3">Ce qui nous guide</p>
            <h2 className="text-4xl font-playfair font-semibold text-violet-fonce">Nos valeurs</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <motion.div key={v.title} custom={i} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="bg-white rounded-2xl p-8 border border-gris-clair text-center h-full hover:-translate-y-2 hover:shadow-xl hover:border-or/30 transition-all duration-300">
                  <motion.div className="w-14 h-14 rounded-2xl bg-violet-pale flex items-center justify-center text-violet mx-auto mb-5" whileHover={{ rotate: 5, scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>{v.icon}</motion.div>
                  <h3 className="font-playfair font-semibold text-xl text-violet-fonce mb-3">{v.title}</h3>
                  <p className="text-gris-moyen font-inter text-sm leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="container">
          <FadeIn className="text-center mb-6">
            <p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-3">Notre équipe</p>
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-violet-fonce mb-4">Un collectif pluridisciplinaire</h2>
          </FadeIn>
          <FadeIn className="text-center mb-16">
            <p className="text-gris-moyen font-inter text-lg max-w-2xl mx-auto leading-relaxed">SD Équicoaching, c&apos;est la force d&apos;un collectif aligné : neurosciences, coaching, équicoaching, marketing et DRH pour une transformation managériale complète et mesurable.</p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <motion.div key={member.name} custom={i} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 200, damping: 20 }}>
                <div className={`bg-white rounded-2xl border border-gris-clair overflow-hidden h-full flex flex-col shadow-sm hover:shadow-xl hover:border-${member.accent === 'or' ? 'or' : 'violet'}/30 transition-all duration-300`} style={{ borderTop: `4px solid ${member.accent === 'or' ? '#CDA540' : '#78427F'}` }}>
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-playfair font-semibold text-xl text-violet-fonce mb-1">{member.name}</h3>
                        <p className={`font-inter font-semibold text-sm ${member.accent === 'or' ? 'text-or' : 'text-violet'}`}>{member.role}</p>
                      </div>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${member.accent === 'or' ? 'bg-or-pale' : 'bg-violet-pale'}`}>
                        <Users className={`w-5 h-5 ${member.accent === 'or' ? 'text-or' : 'text-violet'}`} />
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {member.tags.map((tag) => (
                        <span key={tag} className={`font-inter text-xs font-semibold px-3 py-1 rounded-full ${member.accent === 'or' ? 'bg-or-pale text-or' : 'bg-violet-pale text-violet'}`}>{tag}</span>
                      ))}
                    </div>
                    <p className="text-gris-moyen font-inter text-sm leading-relaxed flex-1">{member.desc}</p>
                    <div className="mt-6 pt-4 border-t border-gris-clair">
                      <p className={`font-inter font-semibold text-xs ${member.accent === 'or' ? 'text-or' : 'text-violet'}`}>{member.stat}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <FadeIn delay={0.4} className="mt-16">
            <div className="bg-beige rounded-2xl p-8 border border-gris-clair max-w-4xl mx-auto">
              <p className="text-center font-playfair font-semibold text-xl text-violet-fonce mb-6">Notre posture collective</p>
              <div className="flex flex-wrap justify-center gap-4">
                {['Bienveillance', 'Respect', 'Confiance', 'Exigence', 'Performance', 'Empathie'].map((v, i) => (
                  <motion.span key={v} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4 }} className="bg-white border border-gris-clair text-violet-fonce font-inter font-semibold text-sm px-5 py-2.5 rounded-full shadow-sm">{v}</motion.span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-violet-fonce py-24 md:py-32 relative overflow-hidden">
        <GradientBlob />
        <div className="container relative z-10 text-center max-w-2xl mx-auto">
          <FadeIn>
            <p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-4">Première étape</p>
            <h2 className="text-white text-4xl md:text-5xl font-playfair font-semibold mb-6 leading-tight">Échangeons sur votre projet</h2>
            <p className="text-white/75 font-inter mb-10 max-w-xl mx-auto leading-relaxed text-lg">Un diagnostic préliminaire de 30 minutes pour faire connaissance et évaluer ensemble comment la neuro-régulation peut sécuriser la performance de votre organisation.</p>
            <MagneticButton href={CALENDLY}>Réserver 30 min gratuit <ArrowRight className="w-4 h-4" /></MagneticButton>
            <p className="text-white/35 font-inter text-sm mt-6">30 minutes · Gratuit · Sans engagement · Visioconférence</p>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
