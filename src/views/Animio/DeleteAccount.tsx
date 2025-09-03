import React from 'react'
import { useTranslation } from 'react-i18next'
import Typography from '../../components/Ui/Typography'
import useQueryLang from '../../hooks/useQueryLang.ts'

const DeleteAccount: React.FC = () => {
  const { t } = useTranslation()
  useQueryLang()

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
