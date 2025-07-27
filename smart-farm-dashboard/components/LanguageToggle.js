import { useState } from 'react'

export default function LanguageToggle() {
  const [lang, setLang] = useState('en')
  return (
    <button
      className="card"
      onClick={() => setLang(lang === 'en' ? 'th' : 'en')}
    >
      {lang === 'en' ? 'TH' : 'EN'}
    </button>
  )
}
