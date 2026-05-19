import Link from 'next/link'
import { ArrowRight, Check, Clock, Users, Award, BookOpen } from 'lucide-react'
import FadeIn from '../../components/FadeIn'
import TextReveal from '../../components/TextReveal'
import MagneticButton from '../../components/MagneticButton'

export const metadata = {
  title: 'Programme Leadership Haute Performance — Neurosciences Comportementales | SD Équicoaching',
  description: "Programme certifiant 21h combinant Théorie Polyvagale, protocoles de régulation validés et équicoaching. Certification Qualiopi. Éligible OPCO. 150+ leaders formés.",
}

const objectifs = [
  { n: '01', title: 'Identifier et réguler ses états nerveux', items: ["Reconnaître les 3 états du système nerveux autonome (Théorie Polyvagale)", "Détecter les signaux physiologiques précurseurs de dérégulation (HRV, patterns respiratoires, tensions musculaires)", "Appliquer des protocoles de régulation validés : cohérence cardiaque, ancrage somatique", "Mesurer sa progression via échelles validées (PSS-10) et indicateurs HRV"] },
  { n: '02', title: 'Comprendre les mécanismes neurobiologiques du leadership', items: ["Maîtriser les fondements de la Théorie Polyvagale (Porges, 2011)", "Analyser l'impact du stress sur la prise de décision (circuit amygdale-cortex préfrontal)", "Identifier ses saboteurs intérieurs et circuits neuronaux automatisés (Positive Intelligence, Chamine)", "Intégrer les apports de l'intelligence émotionnelle et de la neuroception"] },
  { n: '03', title: 'Développer une posture de régulateur de système', items: ["Créer un climat de sécurité psychologique (Projet Aristotle, Google/Edmondson)", "Gérer les dynamiques d'équipe complexes par la co-régulation", "Communiquer de manière neuroscientifiquement informée (congruence verbal/non-verbal)", "Prévenir l'épuisement professionnel (prévention primaire du burn-out par la neurobiologie)"] },
  { n: '04', title: 'Ancrer durablement les nouvelles pratiques', items: ["Expérimenter la cohérence managériale via l'équicoaching (mémoire procédurale)", "Construire un plan d'action individuel 90 jours avec jalons", "Intégrer des rituels de régulation quotidiens (cohérence cardiaque 365, ancrage)", "Établir des indicateurs de suivi et points de contrôle à M+1 et M+3"] },
]

const profiles = [
  { icon: <Users className="w-6 h-6" />, who: 'Managers & Directeurs opérationnels', desc: "Vous managez des équipes (5 à 200+ personnes) et souhaitez développer une posture de leadership régulé, améliorer la cohésion d'équipe et la performance collective par une approche neuroscientifique.", examples: "Directeurs de département, Managers intermédiaires, Chefs de projet transverses" },
  { icon: <Award className="w-6 h-6" />, who: 'DRH & Responsables Formation', desc: "Vous recherchez une formation scientifiquement fondée avec résultats mesurables et souhaitez professionnaliser la culture managériale de votre organisation.", examples: "DRH, Responsables L&D, Responsables QVT, HRBP" },
  { icon: <BookOpen className="w-6 h-6" />, who: 'Dirigeants & Membres de COMEX', desc: "Vous souhaitez développer une culture de leadership cohérente, êtes confrontés à des enjeux de transformation et cherchez à professionnaliser votre équipe de direction.", examples: "CEO, DG, Membres de COMEX, Directeurs de BU, Entrepreneurs scale-up" },
]

const modules = [
  { n: '01', title: 'Théorie Polyvagale appliquée', desc: "Les 3 états du système nerveux autonome (ventral, sympathique, dorsal) et leur impact direct sur la prise de décision, la communication et le leadership." },
  { n: '02', title: 'Neurobiologie de la décision', desc: "Circuit amygdale-cortex préfrontal, rôle du cortisol, mécanismes de la pensée binaire sous stress. Pourquoi les meilleures décisions exigent un état régulé." },
  { n: '03', title: 'Neuroception & contagion', desc: "Comment votre équipe évalue en permanence « Suis-je en sécurité ici ? » et comment votre état nerveux se propage via les neurones miroirs (Rizzolatti, 1996)." },
  { n: '04', title: 'Saboteurs & neuroplasticité', desc: "Identification des 10 saboteurs intérieurs (Positive Intelligence, Chamine), circuits neuronaux automatisés et stratégies de neutralisation par la neuroplasticité." },
  { n: '05', title: 'Protocoles de régulation', desc: "Cohérence cardiaque (365) · Ancrage somatique (voie afférente) · Dialogue IFS simplifié · Pratiques de présence attentive adaptées au management." },
  { n: '06', title: 'Ancrage par équicoaching', desc: "Inscription dans la mémoire procédurale (Van der Kolk, 2014). Le cheval révèle instantanément l'état nerveux réel — feedback impossible à intellectualiser." },
]

const formats = [
  { icon: <Users className="w-8 h-8" />, title: 'Formation individuelle', duration: '3 à 6 mois', desc: "Accompagnement sur-mesure d'un manager ou dirigeant. Séances individuelles + équicoaching + suivi continu.", features: ["12 séances de coaching individuel", "2 à 4 séances équicoaching", "Bilan neuro-leadership complet (HRV, PSS-10)", "Diagnostic MBTI certifié inclus", "Rapport de progression mensuel"] },
  { icon: <Award className="w-8 h-8" />, title: 'Formation intra-entreprise', duration: '3 jours ou 3×1j', desc: "Programme intensif 21h pour un groupe de managers. Ateliers collectifs neurosciences et séances équicoaching.", features: ["Groupe de 6 à 12 managers", "Ateliers collectifs sur-mesure", "1 journée équicoaching intégrée", "Évaluations 360° pré/post + rapport RH"] },
]

export default function FormationLeadershipPage() {
  return (
    <>
      <section className="bg-violet-fonce min-h-[70vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-fonce via-violet to-violet/80" />
        <div className="container relative z-10 pt-32 pb-20">
          <FadeIn><p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-4">Formation Leadership</p></FadeIn>
          <h1 className="text-white text-4xl md:text-6xl font-playfair font-semibold mb-3 max-w-4xl leading-tight"><TextReveal>Programme Leadership Haute Performance</TextReveal></h1>
          <h2 className="text-or text-2xl md:text-3xl font-playfair font-semibold mb-6 leading-snug"><TextReveal delay={0.2}>Neurosciences Comportementales × Équicoaching</TextReveal></h2>
          <FadeIn delay={0.4}>
            <p className="text-white/80 text-lg font-inter mb-6 max-w-2xl leading-relaxed">Programme certifiant de 21 heures combinant fondements neuroscientifiques, protocoles de régulation validés (cohérence cardiaque, ancrage somatique) et ancrage expérientiel par l&apos;équicoaching.</p>
            <p className="text-white/60 font-inter text-sm mb-10 max-w-2xl leading-relaxed"><strong className="text-white/80">Fondements : </strong>Théorie Polyvagale (Porges) · Neurobiologie du trauma (Van der Kolk) · Positive Intelligence (Chamine) · MBTI (Briggs Myers) · Intelligence émotionnelle (Goleman)</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <MagneticButton href="https://calendly.com/sara-dabancens/seance-decouverte">Planifier un échange <ArrowRight className="w-4 h-4" /></MagneticButton>
              <Link href="/contact" className="btn-outline-white">Nous contacter</Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.5} className="flex flex-wrap gap-6 mt-10 text-white/60 font-inter text-sm">
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-or" /> 21 heures (3 jours)</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-or" /> Certification Qualiopi</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-or" /> 150+ leaders formés</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-or" /> Éligible financement OPCO</span>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="container">
          <FadeIn className="text-center mb-16"><p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-3">Programme</p><h2 className="text-4xl md:text-5xl font-playfair font-semibold">Objectifs pédagogiques</h2><p className="text-gris-moyen font-inter text-lg mt-4 max-w-2xl mx-auto">À l&apos;issue de ce programme, les participants seront capables de :</p></FadeIn>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {objectifs.map((obj, i) => (
              <FadeIn key={obj.n} delay={i * 0.1}>
                <div className="card h-full">
                  <div className="flex items-center gap-4 mb-5"><span className="text-or font-bold font-inter text-3xl leading-none">{obj.n}</span><h3 className="font-playfair font-semibold text-lg text-violet-fonce leading-snug">{obj.title}</h3></div>
                  <ul className="space-y-2">{obj.items.map((item) => (<li key={item} className="flex items-start gap-2 text-gris-moyen font-inter text-sm leading-relaxed"><Check className="w-4 h-4 text-or shrink-0 mt-0.5" />{item}</li>))}</ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige py-24 md:py-32">
        <div className="container">
          <FadeIn className="text-center mb-16"><p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-3">Pour qui ?</p><h2 className="text-4xl font-playfair font-semibold">Public & Prérequis</h2></FadeIn>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {profiles.map((p, i) => (
              <FadeIn key={p.who} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-gris-clair h-full flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-violet-pale flex items-center justify-center text-violet mb-5">{p.icon}</div>
                  <h3 className="font-playfair font-semibold text-xl text-violet-fonce mb-3">{p.who}</h3>
                  <p className="text-gris-moyen font-inter text-sm leading-relaxed mb-4 flex-1">{p.desc}</p>
                  <p className="text-gris-moyen/70 font-inter text-xs border-t border-gris-clair pt-3"><span className="font-semibold">Ex. : </span>{p.examples}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="container">
          <FadeIn className="text-center mb-16"><p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-3">Contenu pédagogique</p><h2 className="text-4xl md:text-5xl font-playfair font-semibold">6 modules scientifiques</h2></FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((m, i) => (
              <FadeIn key={m.n} delay={i * 0.08}>
                <div className="card h-full"><span className="text-or font-bold font-inter text-4xl block mb-4">{m.n}</span><h3 className="font-playfair font-semibold text-xl text-violet-fonce mb-3">{m.title}</h3><p className="text-gris-moyen font-inter text-sm leading-relaxed">{m.desc}</p></div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="container">
          <FadeIn className="text-center mb-16"><p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-3">Formats disponibles</p><h2 className="text-4xl font-playfair font-semibold">Individuel ou collectif</h2></FadeIn>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {formats.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.15}>
                <div className="bg-white rounded-2xl p-10 border-2 border-gris-clair hover:border-or/40 transition-all hover:-translate-y-2 hover:shadow-xl h-full flex flex-col">
                  <div className="w-16 h-16 rounded-2xl bg-violet-pale flex items-center justify-center text-violet mb-6">{f.icon}</div>
                  <h3 className="font-playfair font-semibold text-2xl text-violet-fonce mb-1">{f.title}</h3>
                  <p className="text-or font-inter font-semibold text-sm mb-4">{f.duration}</p>
                  <p className="text-gris-moyen font-inter text-sm leading-relaxed mb-6">{f.desc}</p>
                  <ul className="space-y-2 flex-1">{f.features.map((feat) => (<li key={feat} className="flex items-start gap-2 text-gris-fonce font-inter text-sm"><Check className="w-4 h-4 text-or shrink-0 mt-0.5" />{feat}</li>))}</ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-violet-fonce py-24 md:py-32">
        <div className="container text-center">
          <FadeIn>
            <h2 className="text-white text-4xl font-playfair font-semibold mb-6">Prêt à transformer votre leadership par les neurosciences ?</h2>
            <p className="text-white/75 font-inter text-lg mb-8 max-w-2xl mx-auto">Diagnostic préliminaire de 90 minutes pour analyser votre contexte et définir votre programme sur-mesure.</p>
            <MagneticButton href="https://calendly.com/sara-dabancens/seance-decouverte">Planifier mon diagnostic préliminaire <ArrowRight className="w-4 h-4" /></MagneticButton>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
