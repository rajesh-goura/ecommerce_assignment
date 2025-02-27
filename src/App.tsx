import { View, Text } from 'react-native'
import React from 'react'
import MainNavigation from './app/index'
import { AuthProvider } from './app/context/AuthContext'
import { ThemeProvider } from './app/context/ThemeContext'
import { SafeAreaView } from 'react-native-safe-area-context'

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