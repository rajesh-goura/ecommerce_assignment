import { View, Text } from 'react-native'
import React from 'react'
import MainNavigation from './app/index'
import { AuthProvider } from './app/context/AuthContext'
import { ThemeProvider } from './app/context/ThemeContext'

const App = () => {
  return (
   <AuthProvider>
       <ThemeProvider>
         <MainNavigation />
       </ThemeProvider>
     </AuthProvider>
  )
}

export default App