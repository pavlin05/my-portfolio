import React from 'react'
import { useTranslation } from 'react-i18next'
import Typography from '../../components/Ui/Typography'
import useQueryLang from '../../hooks/useQueryLang.ts'

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation()
  useQueryLang()

  const lastUpdated = t('animio.privacy.lastUpdatedDate')

  const sections = [
    'intro',
    'data',
    'purpose',
    'legal',
    'sharing',
    'retention',
    'security',
    'rights',
    'minors',
    'thirdparties',
    'cookies',
    'contact',
    'changes',
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      {/* Header */}
      <header className="mb-8">
        <Typography variant="h1" bold>
          {t('animio.privacy.title')}
        </Typography>
        <Typography
          variant="p"
          className="mt-1 text-sm text-gray-600 dark:text-gray-400"
        >
          {t('animio.privacy.lastUpdated')}: {lastUpdated}
        </Typography>
      </header>

      {/* Nav / Index */}
      <nav className="mb-10 p-4 border rounded-xl bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700">
        <Typography variant="p" className="font-medium mb-2">
          {t('animio.privacy.index')}
        </Typography>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm">
          {sections.map((sec) => (
            <li key={sec}>
              <a
                href={`#${sec}`}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {t(`animio.privacy.sections.${sec}`)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sections */}
      {sections.map((sec) => (
        <section key={sec} id={sec} className="mb-10">
          <Typography variant="h2" className="font-semibold mb-2">
            {t(`animio.privacy.sections.${sec}`)}
          </Typography>
          <Typography variant="p" className="leading-relaxed">
            {t(`animio.privacy.content.${sec}`)}
          </Typography>
        </section>
      ))}

      {/* Footer */}
      <footer className="mt-12 p-4 text-sm border rounded-xl bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400">
        <p>{t('animio.privacy.disclaimer')}</p>
      </footer>
    </main>
  )
}

export default PrivacyPolicy
