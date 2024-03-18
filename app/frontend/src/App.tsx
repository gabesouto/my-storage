import { Routes, Route, Navigate } from 'react-router-dom'

import ProductsPage from './pages/products/products.page'
import { ProtectedRoute } from './protectedRoute'
import SignIn from './pages/login/signin.page'
import SignUp from './pages/ signup/signup.page'
import { useAuth } from './authWrapper'

const App = () => {
  const { isAuthenticated } = useAuth()

  return (
    <div className="h-screen">
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <ProductsPage />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate replace to="/signin" />} />
      </Routes>
    </div>
  )
}

export default App
