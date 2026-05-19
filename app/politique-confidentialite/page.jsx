import FadeIn from '../../components/FadeIn'

export const metadata = { title: 'Politique de confidentialité' }

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="bg-beige min-h-screen">
      <div className="container pt-32 pb-20 max-w-3xl">
        <FadeIn>
          <h1 className="text-4xl font-playfair font-semibold text-violet-fonce mb-8">
            Politique de confidentialité
          </h1>
        </FadeIn>
        <FadeIn delay={0.1} className="space-y-8 font-inter text-gris-fonce">
          <div>
            <h2 className="text-2xl font-playfair font-semibold text-violet-fonce mb-3">Données collectées</h2>
            <p className="text-gris-moyen leading-relaxed">
              SD Équicoaching collecte uniquement les données que vous nous transmettez via les formulaires de contact
              (nom, email, téléphone, message). Ces données sont utilisées exclusivement pour vous répondre et ne sont
              jamais transmises à des tiers.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-playfair font-semibold text-violet-fonce mb-3">Vos droits (RGPD)</h2>
            <p className="text-gris-moyen leading-relaxed">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès,
              de rectification, d'effacement et de portabilité de vos données. Pour exercer ces droits, contactez-nous
              à contact@sd-equicoaching.fr.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-playfair font-semibold text-violet-fonce mb-3">Cookies</h2>
            <p className="text-gris-moyen leading-relaxed">
              Ce site n'utilise pas de cookies de tracking ou d'analyse. Aucune donnée de navigation n'est collectée
              ni transmise à des tiers.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-playfair font-semibold text-violet-fonce mb-3">Contact</h2>
            <p className="text-gris-moyen leading-relaxed">
              Pour toute question relative à notre politique de confidentialité :{' '}
              <a href="mailto:contact@sd-equicoaching.fr" className="text-violet hover:text-or transition-colors">
                contact@sd-equicoaching.fr
              </a>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
