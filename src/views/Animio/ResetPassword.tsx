import React, { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'
import Typography from '../../components/Ui/Typography'

const ResetPassword: React.FC = () => {
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [message, setMessage] = useState('')
  const [canReset, setCanReset] = useState(false)
  const { t, i18n } = useTranslation()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const lang = searchParams.get('lang')
    if (lang) {
      void i18n.changeLanguage(lang)
    }
  }, [searchParams, i18n])

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event) => {
        if (event === 'PASSWORD_RECOVERY') {
          setCanReset(true)
        }
      },
    )

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])

  const handleReset = async () => {
    if (!canReset) {
      setMessage(t('animio.resetPassword.messages.invalid'))
      return
    }
    if (!password || password.length < 6) {
      setMessage(t('animio.resetPassword.messages.short'))
      return
    }
    if (password !== confirm) {
      setMessage(t('animio.resetPassword.messages.mismatch'))
      return
    }

    const { error } = await supabase.auth.updateUser({ password })

    if (error) {
      setMessage(`${t('animio.resetPassword.messages.error')} ${error.message}`)
    } else {
      setMessage(t('animio.resetPassword.messages.success'))
      setPassword('')
      setConfirm('')
    }
  }

  return (
    <main className="max-w-md mx-auto px-6 py-12">
      <Typography variant="h1" className="font-bold mb-4">
        {t('animio.resetPassword.title')}
      </Typography>
      <Typography variant="p" className="mb-6 leading-relaxed">
        {t('animio.resetPassword.description')}
      </Typography>

      <input
        type="password"
        placeholder={t('animio.resetPassword.newPassword')}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-3 mb-4 border rounded-md bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="password"
        placeholder={t('animio.resetPassword.confirmPassword')}
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        className="w-full p-3 mb-4 border rounded-md bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={handleReset}
        className="w-full py-3 px-6 bg-blue-600 text-white font-bold rounded-md hover:opacity-90 transition-opacity duration-200"
      >
        {t('animio.resetPassword.button')}
      </button>

      {message && <p className="mt-4 text-base">{message}</p>}
    </main>
  )
}

export default ResetPassword
