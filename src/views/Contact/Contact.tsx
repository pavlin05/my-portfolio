import React from 'react'
import {
  SiFacebook,
  SiInstagram,
  SiLinkedin,
  SiMinutemailer,
} from 'react-icons/si'
import { IconType } from 'react-icons'
import { useTranslation } from 'react-i18next'
import Typography from '../../components/Ui/Typography'
import { Section, SectionSeparator } from '../../components/Section/Section.tsx'

type ContactItem = {
  label: string
  url: string
  icon: IconType
  color: string
}

const contacts: ContactItem[] = [
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/pablo-munoz-001975144/',
    icon: SiLinkedin,
    color: '#0A66C2',
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/pablo.munoz_dev/',
    icon: SiInstagram,
    color: '#E1306C',
  },
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/pablo.munoz.89',
    icon: SiFacebook,
    color: '#1877F2',
  },
  {
    label: 'E-mail',
    url: 'mailto:pablo.munoz05@hotmail.com',
    icon: SiMinutemailer,
    color: '#EA4335',
  },
]

type ContactCardProps = {
  contact: ContactItem
}

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  const Icon = contact.icon
  return (
    <a
      href={contact.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center gap-2 w-full h-48 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-transform duration-300 hover:scale-105"
    >
      <Icon className="w-16 h-16" style={{ color: contact.color }} />
      <span className="font-bold">{contact.label}</span>
    </a>
  )
}

const Contact: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Section id="contact" className="gap-12 justify-center">
      <div className="text-center">
        <Typography variant="h2" bold>
          {t('contact.title')}
        </Typography>
        <SectionSeparator />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center">
        {contacts.map((contact) => (
          <ContactCard key={contact.label} contact={contact} />
        ))}
      </div>
    </Section>
  )
}

export default Contact
