import React from 'react'
import Home from './views/Home/Home'
import AboutMe from './views/AboutMe'
import Skills from './views/Skills'
import Contact from './views/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrivacyPolicy from './views/Animio/PrivacyPolicy'
import DeleteAccount from './views/Animio/DeleteAccount'
import ResetPassword from './views/Animio/ResetPassword'
import NavBar from './components/Navbar/NavBar.tsx'

const App: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <main className="max-w-screen-lg mx-auto">
                  <Home />
                  <AboutMe />
                  <Skills />
                  {/*<Jobs/>*/}
                  {/*<Services/>*/}
                  <Contact />
                </main>
              </>
            }
          />
          <Route path="/animio">
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="delete-account" element={<DeleteAccount />} />
            <Route path="reset-password" element={<ResetPassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
