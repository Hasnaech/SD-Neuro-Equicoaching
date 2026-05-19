import FadeIn from '../../components/FadeIn'

export const metadata = { title: 'Mentions légales' }

export default function MentionsLegalesPage() {
  return (
    <section className="bg-beige min-h-screen">
      <div className="container pt-32 pb-20 max-w-3xl">
        <FadeIn>
          <h1 className="text-4xl font-playfair font-semibold text-violet-fonce mb-8">Mentions légales</h1>
        </FadeIn>
        <FadeIn delay={0.1} className="space-y-8 font-inter text-gris-fonce">
          <div>
            <h2 className="text-2xl font-playfair font-semibold text-violet-fonce mb-3">Éditeur du site</h2>
            <p className="text-gris-moyen leading-relaxed">
              SD Équicoaching<br />
              contact@sd-equicoaching.fr<br />
              Paris & Île-de-France
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-playfair font-semibold text-violet-fonce mb-3">Hébergement</h2>
            <p className="text-gris-moyen leading-relaxed">
              GitHub Pages — GitHub Inc.<br />
              88 Colin P Kelly Jr St, San Francisco, CA 94107, USA
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-playfair font-semibold text-violet-fonce mb-3">Propriété intellectuelle</h2>
            <p className="text-gris-moyen leading-relaxed">
              L'ensemble des contenus du site SD Équicoaching (textes, images, vidéos) est protégé par le droit d'auteur.
              Toute reproduction est interdite sans autorisation écrite préalable.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-playfair font-semibold text-violet-fonce mb-3">Responsabilité</h2>
            <p className="text-gris-moyen leading-relaxed">
              SD Équicoaching s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site,
              dont elle se réserve le droit de corriger le contenu à tout moment.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
