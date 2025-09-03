import React from 'react'
import { useTranslation } from 'react-i18next'
import Typography from '../../components/Ui/Typography'
import { Section, SectionSeparator } from '../../components/Section/Section.tsx'

const AboutMe: React.FC = () => {
  const { t } = useTranslation()

  const information = [
    { label: t('aboutMe.name'), text: 'Pablo Munoz' },
    // { label: t('aboutMe.bornOn'), text: t('aboutMe.dateOfBirth') },
    { label: t('aboutMe.residence'), text: t('aboutMe.italy') },
    { label: t('aboutMe.email'), text: 'pavlin_05@hotmail.com' },
  ]

  return (
    <Section id="aboutMe" className="gap-12 justify-center">
      {/* Titolo + separatore */}
      <div className="text-center">
        <Typography variant="h2" bold>
          {t('aboutMe.title')}
        </Typography>
        <SectionSeparator />
      </div>

      {/* Contenuto a 2 colonne */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-start">
        {/* Info personali */}
        <div className="w-full space-y-4">
          {information.map((info, index) => (
            <div key={index} className="flex">
              <span className="w-32 font-semibold text-gray-900 dark:text-gray-100">
                {info.label}:
              </span>
              <span className="flex-1 text-gray-700 dark:text-gray-300">
                {info.text}
              </span>
            </div>
          ))}
        </div>

        {/* Descrizione */}
        <p className="text-justify text-gray-700 dark:text-gray-300">
          {t('aboutMe.description')}
        </p>
      </div>
    </Section>
  )
}

export default AboutMe
