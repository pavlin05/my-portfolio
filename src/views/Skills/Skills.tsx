import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  SiCss3,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiStyledcomponents,
  SiTypescript,
} from 'react-icons/si'
import { Section, SectionSeparator } from '../../components/Section/Section.tsx'
import Typography from '../../components/Ui/Typography'

type SkillIconProps = {
  label: string
  icon: React.ReactNode
}

const SkillIcon: React.FC<SkillIconProps> = ({ label, icon }) => (
  <div className="flex flex-col items-center text-center gap-2 font-bold transition-transform duration-300 hover:scale-110">
    {icon}
    <span>{label}</span>
  </div>
)

const Skills: React.FC = () => {
  const { t } = useTranslation()

  const skills: SkillIconProps[] = [
    { label: 'Html', icon: <SiHtml5 className="w-16 h-16 text-[#E34F26]" /> },
    { label: 'Css', icon: <SiCss3 className="w-16 h-16 text-[#1572B6]" /> },
    {
      label: 'JavaScript',
      icon: <SiJavascript className="w-16 h-16 text-[#F7DF1E]" />,
    },
    {
      label: 'TypeScript',
      icon: <SiTypescript className="w-16 h-16 text-[#3178C6]" />,
    },
    { label: 'React', icon: <SiReact className="w-16 h-16 text-[#61DAFB]" /> },
    { label: 'Redux', icon: <SiRedux className="w-16 h-16 text-[#764ABC]" /> },
    {
      label: 'NodeJs',
      icon: <SiNodedotjs className="w-16 h-16 text-[#339933]" />,
    },
    {
      label: 'Styled Components',
      icon: <SiStyledcomponents className="w-16 h-16 text-[#DB7093]" />,
    },
    { label: 'Git', icon: <SiGit className="w-16 h-16 text-[#F14E32]" /> },
  ]

  return (
    <Section id="skills" className="gap-12 justify-center">
      <div className="text-center">
        <Typography variant="h2" bold>
          {t('skills.title')}
        </Typography>
        <SectionSeparator />
      </div>
      <div className="grid place-items-center gap-4 md:gap-12 grid-cols-2 md:grid-cols-3">
        {skills.map((skill) => (
          <SkillIcon key={skill.label} label={skill.label} icon={skill.icon} />
        ))}
      </div>
    </Section>
  )
}

export default Skills
