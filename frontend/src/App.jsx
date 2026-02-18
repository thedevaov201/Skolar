import { Routes, Route} from 'react-router-dom'
import LandingPage from './pages/home/LandingPage'

import LoginPage from './pages/auth/LoginPage'
import SignupPage from './pages/auth/SignupPage'

import NotFoundPage from './pages/NotFoundPage'
import MainLayout from './layouts/MainLayout'
import DashboardPage from './pages/authenticated/DashboardPage'
import ArticlePage from './pages/authenticated/ArticlePage'
import ResourcePage from './pages/authenticated/ResourcePage'
import CommunityPage from './pages/authenticated/CommunityPage'
import ProfilePage from './pages/authenticated/ProfilePage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path="*" element={<NotFoundPage />} />

      {/*<Route path='/home' element={<MainLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path='/articles' element={<ArticlePage />} />
        <Route path='/resources' element={<ResourcePage />} />
        <Route path='/community' element={<CommunityPage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Route>*/}
    </Routes>
  )
}

export default App
