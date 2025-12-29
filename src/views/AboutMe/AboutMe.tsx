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
      <div className="text-center">
        <Typography variant="h2" bold>
          {t('aboutMe.title')}
        </Typography>
        <SectionSeparator />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-start">
        <div className="flex flex-col gap-4 h-full w-full">
          {information.map((info, index) => (
            <div key={index} className="flex">
              <Typography variant="p" className="w-32" bold>
                {info.label}:
              </Typography>
              <Typography variant="span">{info.text}</Typography>
            </div>
          ))}
        </div>

        {/* Descrizione */}
        <Typography className="text-justify">
          {t('aboutMe.description')}
        </Typography>
      </div>
    </Section>
  )
}

export default AboutMe
