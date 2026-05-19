'use client'
import { useState, useEffect, useRef } from 'react'
import Button from './Button'

const STEPS = [
  {
    id: 'who',
    question: "Avant tout, à qui s'adresse votre demande ?",
    options: [
      { label: 'À moi personnellement (dirigeant, manager, professionnel)', value: 'individuel' },
      { label: 'À mon équipe ou à mon entreprise', value: 'entreprise' },
    ],
  },
  {
    id: 'context',
    question: 'Quel est votre contexte principal en ce moment ?',
    options: [
      { label: 'Prise de poste ou transition managériale', value: 'transition' },
      { label: 'Difficultés relationnelles ou de communication', value: 'relations' },
      { label: 'Épuisement, stress ou perte de sens', value: 'burnout' },
      { label: 'Développement proactif de mes compétences', value: 'developpement' },
    ],
  },
  {
    id: 'team-size',
    question: "Si vous parlez d'une équipe, quelle est sa taille ?",
    options: [
      { label: 'Je viens pour moi seul(e)', value: 'solo' },
      { label: 'Petite équipe (2 à 8 personnes)', value: 'small' },
      { label: 'Équipe moyenne (8 à 20 personnes)', value: 'medium' },
      { label: 'Grande organisation (20+ personnes)', value: 'large' },
    ],
  },
  {
    id: 'goal',
    question: 'Quel est votre objectif prioritaire ?',
    options: [
      { label: 'Comprendre et transformer mes comportements', value: 'behavior' },
      { label: "Améliorer la cohésion et la communication d'équipe", value: 'cohesion' },
      { label: 'Vivre une expérience marquante avec les chevaux', value: 'experience' },
      { label: 'Former mes managers à de nouvelles pratiques', value: 'training' },
    ],
  },
  {
    id: 'urgency',
    question: 'Quel est votre horizon de temps ?',
    options: [
      { label: 'Dans les 2 prochaines semaines', value: 'urgent' },
      { label: 'Dans le prochain mois', value: 'soon' },
      { label: 'Dans les 3 prochains mois', value: 'quarter' },
      { label: 'Je suis en phase de réflexion', value: 'exploring' },
    ],
  },
  {
    id: 'budget',
    question: "Avez-vous une idée de l'enveloppe que vous souhaitez consacrer à cet accompagnement ?",
    options: [
      { label: "Je n'ai pas encore de budget défini", value: 'undefined' },
      { label: 'Moins de 1 500€', value: 'small' },
      { label: 'Entre 1 500€ et 5 000€', value: 'medium' },
      { label: 'Plus de 5 000€', value: 'large' },
    ],
  },
]

function getRecommendation(answers) {
  const { who, goal } = answers
  if (who === 'individuel') {
    return {
      program: 'Formation individuelle',
      href: '/offres/formation-individuelle',
      reason: "D'après vos réponses, un accompagnement individuel centré sur les neurosciences et l'équicoaching correspond parfaitement à votre situation.",
      cta: 'Découvrir le programme individuel',
    }
  }
  if (goal === 'experience' || goal === 'cohesion') {
    return {
      program: 'Team building équicoaching',
      href: '/offres/team-building-equicoaching',
      reason: "Votre priorité de cohésion et d'expérience collective appelle une journée team building équicoaching — l'impact est immédiat et durable.",
      cta: 'Voir le team building',
    }
  }
  return {
    program: 'Formation intra-entreprise',
    href: '/offres/formation-intra-entreprise',
    reason: 'Votre contexte organisationnel et vos objectifs de transformation managériale correspondent à notre programme intra-entreprise sur-mesure.',
    cta: 'Découvrir la formation intra',
  }
}

export default function AgentChat() {
  const [messages, setMessages] = useState([])
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [done, setDone] = useState(false)
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      addBotMessage("Bonjour ! Je suis l'assistant SD Équicoaching. Je vais vous poser quelques questions pour identifier le programme le plus adapté à votre situation. C'est rapide — environ 3 minutes.")
      setTimeout(() => addQuestion(0), 1200)
    }, 400)
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  function addBotMessage(text, delay = 0) {
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages((prev) => [...prev, { role: 'bot', text }])
    }, delay + 600)
  }

  function addQuestion(stepIdx) {
    const q = STEPS[stepIdx]
    if (!q) return
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages((prev) => [...prev, { role: 'question', stepIdx }])
    }, 800)
  }

  function handleAnswer(option) {
    const q = STEPS[step]
    const newAnswers = { ...answers, [q.id]: option.value }
    setAnswers(newAnswers)
    setMessages((prev) => [...prev, { role: 'user', text: option.label }])
    const nextStep = step + 1
    setStep(nextStep)
    if (nextStep < STEPS.length) {
      setTimeout(() => addQuestion(nextStep), 400)
    } else {
      const rec = getRecommendation(newAnswers)
      setTimeout(() => {
        addBotMessage(`Merci pour vos réponses ! Voici ma recommandation : **${rec.program}**. ${rec.reason}`)
        setTimeout(() => {
          setMessages((prev) => [...prev, { role: 'recommendation', rec }])
          setDone(true)
        }, 1000)
      }, 400)
    }
  }

  return (
    <div className="chat-window" aria-live="polite" aria-label="Assistant de qualification">
      <div className="chat-header">
        <div className="chat-avatar" aria-hidden="true">🐴</div>
        <div>
          <strong>Assistant SD Équicoaching</strong>
          <span className="chat-status">En ligne</span>
        </div>
      </div>
      <div className="chat-messages">
        {messages.map((msg, i) => {
          if (msg.role === 'bot') return (
            <div key={i} className="chat-bubble chat-bubble--bot">
              <p dangerouslySetInnerHTML={{ __html: msg.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            </div>
          )
          if (msg.role === 'user') return (
            <div key={i} className="chat-bubble chat-bubble--user"><p>{msg.text}</p></div>
          )
          if (msg.role === 'question') {
            const q = STEPS[msg.stepIdx]
            const isAnswered = msg.stepIdx < step
            return (
              <div key={i} className="chat-question">
                <div className="chat-bubble chat-bubble--bot"><p>{q.question}</p></div>
                {!isAnswered && (
                  <div className="chat-options">
                    {q.options.map((opt) => (
                      <button key={opt.value} className="chat-option" onClick={() => handleAnswer(opt)}>{opt.label}</button>
                    ))}
                  </div>
                )}
              </div>
            )
          }
          if (msg.role === 'recommendation') return (
            <div key={i} className="chat-recommendation">
              <div className="rec-card">
                <h3>Programme recommandé</h3>
                <p className="rec-name">{msg.rec.program}</p>
                <Button href={msg.rec.href} variant="primary">{msg.rec.cta} →</Button>
                <Button href="/contact" variant="outline" className="rec-contact">Parler à un expert</Button>
              </div>
            </div>
          )
          return null
        })}
        {typing && (
          <div className="chat-bubble chat-bubble--bot chat-typing" aria-label="L'assistant écrit...">
            <span className="typing-dot" /><span className="typing-dot" /><span className="typing-dot" />
          </div>
        )}
        <div ref={bottomRef} />
      </div>
      {done && (
        <div className="chat-footer">
          <p className="chat-footer-note">À l'issue de notre échange, nous vous ferons une proposition de programme et de budget. Si ce n'est pas le bon moment, vous repartirez déjà avec des pistes pour vos futures actions.</p>
        </div>
      )}
    </div>
  )
}
