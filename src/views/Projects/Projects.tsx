import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Section, SectionSeparator } from '../../components/Section/Section.tsx'
import Typography from '../../components/Ui/Typography'
import {
  SiAppstore,
  SiReact,
  SiExpo,
  SiVuedotjs,
  SiTypescript,
  SiTailwindcss,
  SiGithub,
} from 'react-icons/si'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

type Project = {
  id: string
  name: string
  description: string
  tagline: string
  features: string[]
  technologies: { label: string; icon: React.ReactNode }[]
  links: { type: 'appStore' | 'demo' | 'github'; url: string; label: string }[]
  image?: string
  imageType?: 'logo' | 'screenshot' | 'github'
  githubRepo?: string
}

const Projects: React.FC = () => {
  const { t } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)

  const projects: Project[] = [
    {
      id: 'animio',
      name: t('projects.animio.name'),
      description: t('projects.animio.description'),
      tagline: t('projects.animio.tagline'),
      features: [
        t('projects.animio.features.profiles'),
        t('projects.animio.features.visits'),
        t('projects.animio.features.medicines'),
        t('projects.animio.features.veterinarians'),
      ],
      technologies: [
        {
          label: 'React Native',
          icon: <SiReact className="w-6 h-6 md:w-8 md:h-8 text-[#61DAFB]" />,
        },
        {
          label: 'Expo',
          icon: (
            <SiExpo className="w-6 h-6 md:w-8 md:h-8 text-[#1B1F23] dark:text-[#FFFFFF]" />
          ),
        },
        {
          label: 'TypeScript',
          icon: (
            <SiTypescript className="w-6 h-6 md:w-8 md:h-8 text-[#3178C6]" />
          ),
        },
        {
          label: 'Tailwind CSS',
          icon: (
            <SiTailwindcss className="w-6 h-6 md:w-8 md:h-8 text-[#06B6D4]" />
          ),
        },
      ],
      links: [
        {
          type: 'appStore',
          url: 'https://apps.apple.com/it/app/animio/id6751321188',
          label: t('projects.animio.appStore'),
        },
      ],
      image: '/images/animio_logo.png',
      imageType: 'logo',
    },
    {
      id: 'fakestore',
      name: t('projects.fakestore.name'),
      description: t('projects.fakestore.description'),
      tagline: t('projects.fakestore.tagline'),
      features: [
        t('projects.fakestore.features.products'),
        t('projects.fakestore.features.cart'),
        t('projects.fakestore.features.responsive'),
        t('projects.fakestore.features.api'),
      ],
      technologies: [
        {
          label: 'Vue.js',
          icon: <SiVuedotjs className="w-6 h-6 md:w-8 md:h-8 text-[#41B883]" />,
        },
        {
          label: 'TypeScript',
          icon: (
            <SiTypescript className="w-6 h-6 md:w-8 md:h-8 text-[#3178C6]" />
          ),
        },
        {
          label: 'Tailwind CSS',
          icon: (
            <SiTailwindcss className="w-6 h-6 md:w-8 md:h-8 text-[#06B6D4]" />
          ),
        },
      ],
      links: [
        {
          type: 'demo',
          url: 'https://pavlin05.github.io/fakestore-vue-app/',
          label: t('projects.fakestore.liveDemo'),
        },
        {
          type: 'github',
          url: 'https://github.com/pavlin05/fakestore-vue-app',
          label: t('projects.fakestore.github'),
        },
      ],
      image: '/images/fakestore-vue.png',
      imageType: 'screenshot',
      githubRepo: 'pavlin05/fakestore-vue-app',
    },
  ]

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const goToProject = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <Section id="projects" className="gap-6 md:gap-12 justify-center">
      <div className="text-center">
        <Typography variant="h2" bold>
          {t('projects.title')}
        </Typography>
        <SectionSeparator />
      </div>

      <div className="relative w-full">
        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="min-w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-2 md:px-4"
              >
                {/* Left side - Project Info */}
                <div className="flex flex-col gap-4 md:gap-6 w-full order-2 md:order-1">
                  <div className="flex flex-col gap-3 md:gap-4">
                    <Typography
                      variant="h3"
                      bold
                      textColor="primary"
                      className="dark:text-blue-400 text-xl md:text-2xl"
                    >
                      {project.name}
                    </Typography>
                    <Typography
                      variant="p"
                      className="text-justify text-sm md:text-base"
                    >
                      {project.description}
                    </Typography>
                  </div>

                  {/* Features */}
                  <div className="flex flex-col gap-2 md:gap-3">
                    <Typography
                      variant="h4"
                      bold
                      className="text-lg md:text-xl"
                    >
                      {t('projects.animio.features.title')}
                    </Typography>
                    <ul className="list-disc list-inside flex flex-col gap-1.5 md:gap-2">
                      {project.features.map((feature, index) => (
                        <li key={index}>
                          <Typography
                            variant="span"
                            className="text-xs md:text-sm"
                          >
                            {feature}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-col gap-2 md:gap-3">
                    <Typography
                      variant="h4"
                      bold
                      className="text-lg md:text-xl"
                    >
                      {t('projects.animio.technologies')}
                    </Typography>
                    <div className="flex gap-3 md:gap-4 flex-wrap">
                      {project.technologies.map((tech) => (
                        <div
                          key={tech.label}
                          className="flex flex-col items-center gap-1.5 md:gap-2 transition-transform duration-300 hover:scale-110"
                        >
                          {tech.icon}
                          <Typography variant="span" className="text-xs">
                            {tech.label}
                          </Typography>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-col gap-2 md:gap-3">
                    {project.links.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-300 text-sm md:text-base"
                      >
                        {link.type === 'appStore' && (
                          <SiAppstore className="w-5 h-5 md:w-6 md:h-6" />
                        )}
                        {link.type === 'github' && (
                          <SiGithub className="w-5 h-5 md:w-6 md:h-6" />
                        )}
                        {link.type === 'demo' && (
                          <svg
                            className="w-5 h-5 md:w-6 md:h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        )}
                        <Typography
                          variant="span"
                          bold
                          className="text-xs md:text-sm"
                        >
                          {link.label}
                        </Typography>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Right side - Project Image */}
                <div className="flex justify-center items-center w-full self-center order-1 md:order-2 mb-4 md:mb-0">
                  <div className="w-full max-w-xs md:max-w-sm rounded-lg border-2 border-blue-600 dark:border-blue-400 overflow-hidden shadow-lg">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`${project.name} ${project.imageType === 'logo' ? 'Logo' : 'Screenshot'}`}
                        className="w-full h-auto object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <div className="p-4 md:p-6 text-center bg-white dark:bg-gray-800">
                        <Typography
                          variant="h2"
                          bold
                          textColor="primary"
                          className="mb-2 md:mb-4 dark:text-blue-400 text-xl md:text-3xl"
                        >
                          {project.name}
                        </Typography>
                        <Typography
                          variant="p"
                          textColor="primary"
                          className="dark:text-blue-300 text-sm md:text-base"
                        >
                          {project.tagline}
                        </Typography>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows - Desktop only */}
        <button
          onClick={prevProject}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-blue-600 dark:bg-blue-400 text-white rounded-full p-3 shadow-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors duration-300 z-10 items-center justify-center"
          aria-label="Previous project"
        >
          <FaChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextProject}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-blue-600 dark:bg-blue-400 text-white rounded-full p-3 shadow-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors duration-300 z-10 items-center justify-center"
          aria-label="Next project"
        >
          <FaChevronRight className="w-5 h-5" />
        </button>

        {/* Mobile Navigation Arrows */}
        <div className="flex md:hidden justify-between items-center mt-4 px-4">
          <button
            onClick={prevProject}
            className="bg-blue-600 dark:bg-blue-400 text-white rounded-full p-2.5 shadow-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors duration-300 flex items-center justify-center"
            aria-label="Previous project"
          >
            <FaChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextProject}
            className="bg-blue-600 dark:bg-blue-400 text-white rounded-full p-2.5 shadow-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors duration-300 flex items-center justify-center"
            aria-label="Next project"
          >
            <FaChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-4 md:mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-blue-600 dark:bg-blue-400 w-8 h-3'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 w-3 h-3'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Projects
