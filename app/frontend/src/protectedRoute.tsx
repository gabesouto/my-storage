import React, { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

interface ProtectedRouteProps {
  isAuthenticated: boolean
  children: ReactNode
}

export const ProtectedRoute = ({
  isAuthenticated,
  children,
}: ProtectedRouteProps) => {
  if (!isAuthenticated) {
    // User not authenticated, redirect to sign-in page
    return <Navigate to="/signin" replace />
  }

  return children
}
