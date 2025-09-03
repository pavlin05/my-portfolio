import React from 'react'
import {
  SiFacebook,
  SiInstagram,
  SiLinkedin,
  SiMinutemailer,
} from 'react-icons/si'
import { useTranslation } from 'react-i18next'
import Typography from '../../components/Ui/Typography'
import { Section, SectionSeparator } from '../../components/Section/Section.tsx'

type ContactItem = {
  label: string
  url: string
  icon: React.ReactNode
}

const contacts: ContactItem[] = [
  {
    label: 'Linkedin',
    url: 'https://www.linkedin.com/in/pablo-munoz-001975144/',
    icon: <SiLinkedin className="w-16 h-16" />,
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/pavlin05/',
    icon: <SiInstagram className="w-16 h-16" />,
  },
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/pablo.munoz.89',
    icon: <SiFacebook className="w-16 h-16" />,
  },
  {
    label: 'E-mail',
    url: 'mailto:pablo.munoz05@hotmail.com',
    icon: <SiMinutemailer className="w-16 h-16" />,
  },
]

type ContactCardProps = {
  contact: ContactItem
}

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => (
  <a
    href={contact.url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center justify-center gap-2 w-full h-48 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-transform duration-300 hover:scale-105 hover:text-blue-600"
  >
    {contact.icon}
    <span className="font-bold">{contact.label}</span>
  </a>
)

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center">
        {contacts.map((contact) => (
          <ContactCard key={contact.label} contact={contact} />
        ))}
      </div>
    </Section>
  )
}

export default Contact
