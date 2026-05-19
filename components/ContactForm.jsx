'use client'
import { useState } from 'react'
import AnimatedSection from './AnimatedSection'
import Button from './Button'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', context: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 800))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <AnimatedSection animation="reveal-left" className="contact-form-wrapper">
      <h2 id="form-title" className="contact-form-title">Envoyez-nous un message</h2>

      {submitted ? (
        <div className="form-success" role="alert">
          <span className="form-success-icon">✓</span>
          <h3>Message reçu !</h3>
          <p>
            Nous vous répondons sous 24h ouvrées. En attendant,
            n'hésitez pas à explorer nos programmes ou à tester notre assistant IA.
          </p>
          <Button href="/offres/formation-individuelle" variant="primary">Voir nos programmes</Button>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Nom & prénom *</label>
              <input id="name" name="name" type="text" required
                value={form.name} onChange={handleChange} placeholder="Sophie Martin" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input id="email" name="email" type="email" required
                value={form.email} onChange={handleChange} placeholder="sophie@entreprise.fr" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Téléphone</label>
              <input id="phone" name="phone" type="tel"
                value={form.phone} onChange={handleChange} placeholder="06 XX XX XX XX" />
            </div>
            <div className="form-group">
              <label htmlFor="context">Contexte</label>
              <select id="context" name="context" value={form.context} onChange={handleChange}>
                <option value="">Sélectionner...</option>
                <option value="individuel">Accompagnement individuel</option>
                <option value="intra">Formation intra-entreprise</option>
                <option value="team-building">Team building équicoaching</option>
                <option value="autre">Autre demande</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Votre message *</label>
            <textarea id="message" name="message" rows="5" required
              value={form.message} onChange={handleChange}
              placeholder="Décrivez brièvement votre situation et vos objectifs..." />
          </div>

          <div className="form-reassurance">
            <p>
              À l'issue de notre échange, nous vous ferons une proposition de programme et de budget.
              Si ce n'est pas le bon moment, vous repartirez déjà avec des pistes pour vos futures actions.
            </p>
          </div>

          <Button type="submit" variant="primary" disabled={loading}>
            {loading ? 'Envoi en cours...' : 'Envoyer le message'}
          </Button>
        </form>
      )}
    </AnimatedSection>
  )
}
