import { useEffect, useId, useRef } from 'react'

/** JotForm IDs — submissions handled by JotForm (no site SMTP required). */
export const JOTFORM_CAREERS_FORM_ID = '261696912615061'
export const JOTFORM_CONTACT_FORM_ID = '261807719836065'

const EMBED_HANDLER_SRC = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'

declare global {
  interface Window {
    jotformEmbedHandler?: (selector: string, base: string) => void
  }
}

type JotFormEmbedProps = {
  formId?: string
  className?: string
  title?: string
}

function loadEmbedHandler(onReady: () => void) {
  if (window.jotformEmbedHandler) {
    onReady()
    return
  }

  const existing = document.querySelector<HTMLScriptElement>(`script[src="${EMBED_HANDLER_SRC}"]`)
  if (existing) {
    existing.addEventListener('load', onReady, { once: true })
    return
  }

  const script = document.createElement('script')
  script.src = EMBED_HANDLER_SRC
  script.async = true
  script.onload = onReady
  document.body.appendChild(script)
}

export default function JotFormEmbed({
  formId = JOTFORM_CAREERS_FORM_ID,
  className = '',
  title = 'Job application form',
}: JotFormEmbedProps) {
  const reactId = useId()
  const iframeId = `jotform-${formId}-${reactId.replace(/:/g, '')}`
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    loadEmbedHandler(() => {
      window.jotformEmbedHandler?.(`iframe[id='${iframeId}']`, 'https://form.jotform.com/')
    })
  }, [formId, iframeId])

  return (
    <iframe
      ref={iframeRef}
      id={iframeId}
      title={title}
      src={`https://form.jotform.com/${formId}`}
      allow="geolocation; microphone; camera; fullscreen; payment"
      className={`block w-full border-0 bg-white ${className}`}
      style={{ minHeight: 620, height: 620 }}
    />
  )
}
