import React, { useState } from 'react'
import { FaBars, FaMagento, FaTimes } from 'react-icons/fa'
import Typography from '../Ui/Typography'
import { useTheme } from '../../hooks/useTheme.ts'
import { FiMoon, FiSun } from 'react-icons/fi'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'

const NavBar: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const { t, i18n } = useTranslation()

  const navItems = ['home', 'aboutMe', 'skills', 'contact']

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const toggleLang = () => setLangOpen(!langOpen)

  const changeLanguage = async (lang: string) => {
    await i18n.changeLanguage(lang)
    setLangOpen(false)
  }

  const languages = [
    { code: 'it', label: 'IT', flag: '🇮🇹' },
    { code: 'en', label: 'EN', flag: '🇬🇧' },
    { code: 'es', label: 'ES', flag: '🇪🇸' },
  ]

  return (
    <header className="sticky top-0 h-20 shadow-xl bg-gray-200 dark:bg-gray-800 transition-colors duration-300 z-50">
      <nav className="h-[inherit] max-w-screen-lg flex items-center justify-between mx-auto p-4 md:p-6">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
          <FaMagento size={24} className="text-blue-600" />
          <Typography variant="p" className="text-2xl" bold>
            Pablo
          </Typography>
        </a>

        {/* Desktop menu */}
        <ul className="hidden lg:flex gap-6 md:hidden">
          {navItems.map((item) => (
            <li key={item} className="relative group">
              <Link
                to={item}
                spy={true}
                smooth={true}
                duration={500}
                className="relative px-2 py-2 text-gray-800 dark:text-gray-200 cursor-pointer
                           transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400"
                activeClass="font-bold !text-blue-600"
              >
                {t(`nav.${item}`)}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side controls */}
        <div className="flex items-center gap-4 relative">
          {/* Language dropdown */}
          <div className="relative">
            <button
              onClick={toggleLang}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-300
                         dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200
                         shadow-sm hover:shadow-md transition-all duration-300"
            >
              <span>
                {languages.find((l) => l.code === i18n.language)?.flag}
              </span>
              <span className="font-semibold">
                {i18n.language.toUpperCase()}
              </span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  langOpen ? 'rotate-180' : 'rotate-0'
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {langOpen && (
              <ul
                className="absolute top-12 right-0 w-32 bg-white dark:bg-gray-700
                           rounded-xl shadow-lg overflow-hidden animate-fade-in z-50"
              >
                {languages.map((lang) => (
                  <li
                    key={lang.code}
                    className="cursor-pointer px-4 py-2 flex items-center gap-2
                               hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600
                               hover:text-white dark:hover:text-white transition-all duration-200"
                    onClick={() => changeLanguage(lang.code)}
                  >
                    <span>{lang.flag}</span>
                    <span className="font-medium">{lang.label}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="rounded-full transition-transform duration-500 transform hover:rotate-180 text-gray-800 dark:text-gray-200"
          >
            {theme === 'light' ? <FiMoon size={24} /> : <FiSun size={24} />}
          </button>

          {/* Hamburger menu mobile */}
          <button
            onClick={toggleMenu}
            className="rounded-full text-gray-800 dark:text-gray-200 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <ul
        className={`fixed top-20 w-full h-[calc(100vh-80px)] bg-white dark:bg-gray-900 
                    transition-transform duration-300 overflow-hidden ${
                      menuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
      >
        {navItems.map((item) => (
          <li key={item} className="flex">
            <Link
              to={item}
              spy={true}
              smooth={true}
              duration={500}
              className="w-full text-gray-800 dark:text-gray-200 p-8 text-center"
              activeClass="font-bold !text-blue-600 underline"
              onClick={() => setMenuOpen(false)}
            >
              {t(`nav.${item}`)}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default NavBar
