import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { init } from 'ityped'
import Typography from '../../components/Ui/Typography'

const Home: React.FC = () => {
  const { t } = useTranslation()
  const textRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!textRef.current) return
    init(textRef.current, {
      startDelay: 1500,
      backSpeed: 70,
      showCursor: true,
      strings: [t('home.frontend'), t('home.backend')],
    })
  }, [])

  return (
    <section
      id="home"
      className="min-h-[calc(100vh-70px)] grid place-items-center gap-6 p-6 md:grid-cols-2"
    >
      {/* Left text content */}
      <div className="flex flex-col gap-4">
        <Typography variant="h1" bold className="text-4xl md:text-5xl">
          {t('home.title')}
        </Typography>

        <Typography variant="h4">
          &#60;&nbsp;
          <span
            ref={textRef}
            className="text-blue-600 dark:text-blue-400 ityped-text font-bold"
          />
          &#47;&#62;
        </Typography>
        <Typography className="text-gray-600 dark:text-gray-400">
          {t('home.description')}
        </Typography>
      </div>

      {/* Right image */}
      <div className="flex justify-center">
        <div className="w-[350px] h-[350px] md:w-[400px] md:h-[400px] rounded-full border-[1rem] border-blue-600 dark:border-blue-400 overflow-hidden">
          <img
            src="/images/image01.jpeg"
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Home
