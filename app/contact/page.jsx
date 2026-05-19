'use client'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, ArrowRight, Check, Instagram, Linkedin } from 'lucide-react'
import FadeIn from '../../components/FadeIn'

export default function ContactPage() {
  return (
    <section className="bg-beige min-h-screen">
      <div className="container pt-32 pb-20">
        <FadeIn className="mb-16">
          <p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-4">Contact</p>
          <h1 className="text-4xl md:text-5xl font-playfair font-semibold text-violet-fonce">Parlons de votre projet</h1>
        </FadeIn>
        <div className="grid lg:grid-cols-2 gap-16">
          <FadeIn direction="left">
            <div className="space-y-8">
              <div className="flex items-start gap-4"><div className="w-12 h-12 rounded-xl bg-violet-pale flex items-center justify-center shrink-0"><MapPin className="w-5 h-5 text-violet" /></div><div><h3 className="font-playfair font-semibold text-violet-fonce mb-1">Zone d&apos;intervention</h3><p className="text-gris-moyen font-inter">Paris & Île-de-France<br />Déplacements partout en France</p></div></div>
              <div className="flex items-start gap-4"><div className="w-12 h-12 rounded-xl bg-violet-pale flex items-center justify-center shrink-0"><Phone className="w-5 h-5 text-violet" /></div><div><h3 className="font-playfair font-semibold text-violet-fonce mb-1">Téléphone</h3><a href="tel:0643455145" className="text-gris-moyen font-inter hover:text-violet transition-colors">06 43 45 51 45</a></div></div>
              <div className="flex items-start gap-4"><div className="w-12 h-12 rounded-xl bg-violet-pale flex items-center justify-center shrink-0"><Mail className="w-5 h-5 text-violet" /></div><div><h3 className="font-playfair font-semibold text-violet-fonce mb-1">Email</h3><a href="mailto:sarah.dabancens@sd-equicoaching.fr" className="text-gris-moyen font-inter hover:text-violet transition-colors">sarah.dabancens@sd-equicoaching.fr</a></div></div>
              <div className="flex items-start gap-4"><div className="w-12 h-12 rounded-xl bg-violet-pale flex items-center justify-center shrink-0"><Clock className="w-5 h-5 text-violet" /></div><div><h3 className="font-playfair font-semibold text-violet-fonce mb-1">Disponibilités</h3><p className="text-gris-moyen font-inter">Lundi – Vendredi, 9h – 18h</p></div></div>
              <div className="flex items-center gap-4 pt-2">
                <a href="https://www.instagram.com/sarahdabancens/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-violet-pale flex items-center justify-center shrink-0 hover:bg-violet hover:text-white transition-colors group" aria-label="Instagram"><Instagram className="w-5 h-5 text-violet group-hover:text-white transition-colors" /></a>
                <a href="https://www.linkedin.com/in/sarah-dabancens/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-violet-pale flex items-center justify-center shrink-0 hover:bg-violet hover:text-white transition-colors group" aria-label="LinkedIn"><Linkedin className="w-5 h-5 text-violet group-hover:text-white transition-colors" /></a>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.2}>
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-gris-clair">
              <h2 className="font-playfair font-semibold text-2xl text-violet-fonce mb-2">Réservez votre session découverte</h2>
              <p className="text-or font-inter font-semibold text-sm mb-6">30 minutes · Gratuit · Sans engagement</p>
              <p className="text-gris-moyen font-inter leading-relaxed mb-8">Un échange stratégique pour analyser vos enjeux et découvrir comment notre approche peut transformer votre organisation.</p>
              <ul className="space-y-3 mb-10">
                {["Analyse de votre contexte managérial", "Identification des freins collectifs", "Présentation de notre méthode adaptée", "Évaluation de la pertinence d'un accompagnement"].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-inter text-gris-fonce text-sm"><Check className="w-4 h-4 text-or shrink-0 mt-0.5" />{item}</li>
                ))}
              </ul>
              <motion.a href="https://calendly.com/sara-dabancens/seance-decouverte" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="btn-primary w-full justify-center py-4 text-base">Réserver ma session découverte →</motion.a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
