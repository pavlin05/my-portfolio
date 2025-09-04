import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'

const useQueryLang = () => {
  const { i18n } = useTranslation()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const lang = searchParams.get('lang')
    if (lang && lang !== i18n.language) {
      void i18n.changeLanguage(lang)
    }
  }, [searchParams, i18n])
}

export default useQueryLang
