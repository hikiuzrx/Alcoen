import type { ActionFunctionArgs } from 'react-router-dom'

export interface ContactResult {
  ok: boolean
  error?: string
}

const MAIL_API_URL = import.meta.env.VITE_MAIL_API_URL as string | undefined
// The mail service may be waking up from sleep, so allow a generous delay
const TIMEOUT_MS = 60_000

export async function sendEmail({ request }: ActionFunctionArgs): Promise<ContactResult> {
  const data = await request.formData()

  // Honeypot: real visitors never fill this hidden field
  if (data.get('website')) return { ok: true }

  if (!MAIL_API_URL) {
    return { ok: false, error: "L'envoi de messages en ligne n'est pas encore disponible. Veuillez nous appeler au +213 (0) 661 570 030 ou +213 (0) 770 643 051." }
  }

  const emailData = {
    companyName: data.get('Entreprise'),
    lastName: data.get('lastName'),
    firstName: data.get('firstName'),
    email: data.get('email'),
    phoneNumber: data.get('phoneNumber'),
    country: data.get('country'),
    message: data.get('message'),
    sCopy: Boolean(data.get('sCopy')),
    uClient: Boolean(data.get('uClient')),
  }

  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)
  try {
    const response = await fetch(MAIL_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(emailData),
      signal: controller.signal,
    })
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    const result = await response.json()
    if (typeof result?.message === 'string' && result.message.trim().toLowerCase() === 'email sent') {
      return { ok: true }
    }
    return { ok: false, error: "Le message n'a pas pu être envoyé. Veuillez réessayer." }
  } catch (error) {
    const timedOut = error instanceof DOMException && error.name === 'AbortError'
    return {
      ok: false,
      error: timedOut
        ? "Le serveur met trop de temps à répondre. Veuillez réessayer."
        : "Impossible d'envoyer le message. Vérifiez votre connexion et réessayez.",
    }
  } finally {
    clearTimeout(timer)
  }
}
