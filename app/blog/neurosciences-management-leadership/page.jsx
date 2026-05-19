import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import FadeIn from '../../../components/FadeIn'
import MagneticButton from '../../../components/MagneticButton'

export const metadata = {
  title: 'Neurosciences et Management : Ce que votre cerveau dit de votre leadership | SD Équicoaching',
  description: "Comment les neurosciences comportementales révolutionnent le management. Théorie polyvagale, régulation émotionnelle, biais cognitifs : les clés scientifiques d'un leadership performant.",
}

export default function ArticleNeurosciences() {
  return (
    <>
      <section className="bg-violet-fonce min-h-[45vh] flex items-end relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-fonce to-violet" />
        <div className="container relative z-10 pt-32 pb-16">
          <FadeIn>
            <Link href="/blog" className="inline-flex items-center gap-2 text-white/60 font-inter text-sm hover:text-or transition-colors mb-6"><ArrowLeft className="w-4 h-4" /> Retour au blog</Link>
            <span className="text-or font-inter font-semibold text-xs tracking-widest uppercase block mb-4">Neurosciences</span>
            <h1 className="text-white text-3xl md:text-5xl font-playfair font-semibold max-w-4xl leading-tight">Neurosciences et Management : Ce que votre cerveau dit de votre leadership</h1>
            <p className="text-white/60 font-inter text-sm mt-6">Par Sarah D. — 3 février 2026 · 14 min de lecture</p>
          </FadeIn>
        </div>
      </section>
      <article className="bg-white py-16 md:py-24">
        <div className="container max-w-3xl">
          <FadeIn>
            <p className="text-gris-moyen font-inter text-lg leading-relaxed mb-8 italic border-l-4 border-or pl-6">Votre cerveau prend 95% de vos décisions managériales en dehors de votre conscience. Comprendre ces mécanismes invisibles est devenu le levier le plus puissant — et le plus sous-utilisé — du développement du leadership.</p>
            <h2 className="text-3xl font-playfair font-semibold text-violet-fonce mt-12 mb-6">Le mythe du manager rationnel</h2>
            <p className="text-gris-moyen font-inter leading-relaxed mb-6">Nous aimons croire que nos décisions managériales sont le fruit d'une analyse rationnelle et objective. La réalité neurologique est radicalement différente.</p>
            <h2 className="text-3xl font-playfair font-semibold text-violet-fonce mt-12 mb-6">La théorie polyvagale : la révolution silencieuse du leadership</h2>
            <div className="space-y-4 mb-8">
              <div className="bg-beige rounded-xl p-6"><h4 className="font-playfair font-semibold text-lg text-violet-fonce mb-2">État de sécurité (système ventrovagal)</h4><p className="text-gris-moyen font-inter text-sm leading-relaxed">Le manager est calme, accessible, créatif. Son cortex préfrontal est pleinement opérationnel.</p></div>
              <div className="bg-or-pale rounded-xl p-6"><h4 className="font-playfair font-semibold text-lg text-violet-fonce mb-2">État de mobilisation (système sympathique)</h4><p className="text-gris-moyen font-inter text-sm leading-relaxed">Activation du mode "combat ou fuite". Le manager devient réactif, défensif, impulsif.</p></div>
              <div className="border border-gris-clair rounded-xl p-6"><h4 className="font-playfair font-semibold text-lg text-violet-fonce mb-2">État d'effondrement (système dorsovagal)</h4><p className="text-gris-moyen font-inter text-sm leading-relaxed">Déconnexion, résignation, apathie.</p></div>
            </div>
            <h2 className="text-3xl font-playfair font-semibold text-violet-fonce mt-12 mb-6">La contagion émotionnelle : vous êtes le thermostat de votre équipe</h2>
            <p className="text-gris-moyen font-inter leading-relaxed mb-6">Les neurones miroirs ont été découverts presque par accident dans les années 90 par Giacomo Rizzolatti. Ces neurones s'activent non seulement quand nous exécutons une action, mais aussi quand nous observons quelqu'un d'autre l'exécuter.</p>
            <h2 className="text-3xl font-playfair font-semibold text-violet-fonce mt-12 mb-6">Régulation émotionnelle : le muscle du leader de haut niveau</h2>
            <p className="text-gris-moyen font-inter leading-relaxed mb-6">La régulation émotionnelle n'est pas la suppression des émotions — c'est la capacité à choisir comment y répondre. C'est un ensemble de compétences qui s'acquièrent et se développent, exactement comme un muscle.</p>
            <h2 className="text-3xl font-playfair font-semibold text-violet-fonce mt-12 mb-6">La sécurité psychologique : le facteur n°1 de performance d'équipe</h2>
            <p className="text-gris-moyen font-inter leading-relaxed mb-6">En 2012, Google a lancé le Projet Aristotle : une étude de 2 ans sur des centaines d'équipes internes pour identifier ce qui détermine la performance collective. Le résultat : le facteur n°1 était la sécurité psychologique.</p>
            <div className="bg-violet-pale rounded-2xl p-8 mt-12 mb-8">
              <p className="text-or font-inter font-semibold text-xs uppercase tracking-widest mb-3">L'essentiel</p>
              <p className="font-playfair font-semibold text-xl text-violet-fonce mb-4">Neurosciences et management : 4 principes à retenir</p>
              <ul className="space-y-3 text-gris-fonce font-inter text-sm">
                {["Votre état du système nerveux conditionne la qualité de vos décisions", "Votre état émotionnel se propage dans toute votre équipe via les neurones miroirs", "La régulation émotionnelle est une compétence qui se développe comme un muscle", "La sécurité psychologique est le levier n°1 de performance collective"].map(item => (<li key={item} className="flex items-start gap-2"><span className="w-2 h-2 rounded-full bg-or shrink-0 mt-1.5" />{item}</li>))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </article>
      <section className="bg-violet-fonce py-20">
        <div className="container text-center">
          <FadeIn>
            <h2 className="text-white text-3xl md:text-4xl font-playfair font-semibold mb-4">Découvrez votre profil neuro-leadership</h2>
            <p className="text-white/70 font-inter mb-8 max-w-xl mx-auto">Un audit gratuit de 45 minutes pour cartographier votre style de régulation émotionnelle.</p>
            <MagneticButton href="https://calendly.com/sara-dabancens/seance-decouverte">Réserver mon audit <ArrowRight className="w-4 h-4" /></MagneticButton>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
