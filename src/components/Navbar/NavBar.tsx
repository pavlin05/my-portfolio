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
        <a href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
          <FaMagento size={24} className="text-blue-600" />
          <Typography variant="p" className="text-2xl" bold>
            Pablo
          </Typography>
        </a>

        <ul className="hidden lg:flex gap-4 md:hidden">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item}
                spy={true}
                smooth={true}
                duration={500}
                className="px-4 py-2 text-gray-800 dark:text-gray-200 cursor-pointer hover:text-blue-600 dark:hover:text-blue-600 hover:underline decoration-2 decoration-blue-600"
                activeClass="font-bold !text-blue-600 underline"
              >
                {t(`nav.${item}`)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 relative">
          {/* Language dropdown */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 px-3 py-1 rounded-md border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
          >
            {languages.find((l) => l.code === i18n.language)?.flag}
            <span className="ml-1 font-bold">
              {i18n.language.toUpperCase()}
            </span>
          </button>
          {langOpen && (
            <ul className="absolute top-12 right-0 bg-white dark:bg-gray-700 shadow-lg rounded-md overflow-hidden z-50">
              {languages.map((lang) => (
                <li
                  key={lang.code}
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center gap-2"
                  onClick={() => changeLanguage(lang.code)}
                >
                  <span>{lang.flag}</span>
                  <span className="font-bold">{lang.label}</span>
                </li>
              ))}
            </ul>
          )}

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
        className={`fixed top-20 w-full h-[calc(100vh-80px)] bg-white dark:bg-gray-900 transition-transform duration-300 overflow-hidden ${
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
