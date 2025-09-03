import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'
import Typography from '../../components/Ui/Typography'

const DeleteAccount: React.FC = () => {
  const { t } = useTranslation()
  const { i18n } = useTranslation()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const lang = searchParams.get('lang')
    if (lang) {
      void i18n.changeLanguage(lang)
    }
  }, [searchParams, i18n])

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 ">
      <Typography variant="h1" className="text-2xl font-bold mb-6">
        {t('animio.deleteAccount.title')}
      </Typography>

      <Typography variant="p" className="mb-4 leading-relaxed">
        {t('animio.deleteAccount.description')}
      </Typography>

      <Typography variant="p" className="mb-4 leading-relaxed">
        {t('animio.deleteAccount.instructions')}
      </Typography>

      <Typography variant="p" className="mb-2  leading-relaxed">
        {t('animio.deleteAccount.dataDeleted')}
      </Typography>
      <ul className="list-disc list-inside mb-4">
        {(
          t('animio.deleteAccount.dataItems', {
            returnObjects: true,
          }) as string[]
        ).map((item, i) => (
          <li key={i}>
            <Typography variant="span">{item}</Typography>
          </li>
        ))}
      </ul>

      <Typography variant="p" className="mb-4  leading-relaxed">
        {t('animio.deleteAccount.processing')}
      </Typography>

      <Typography variant="p" className="mb-6  leading-relaxed">
        {t('animio.deleteAccount.contact')}
      </Typography>

      <a
        href="mailto:pablo.munoz05@hotmail.com?subject=Elimina%20account%20Animio"
        className="inline-block bg-red-600 text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity duration-200"
      >
        {t('animio.deleteAccount.button')}
      </a>
    </main>
  )
}

export default DeleteAccount
