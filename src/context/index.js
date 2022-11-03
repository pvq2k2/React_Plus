import React from 'react'
import HomeProvider from './HomeProvider'

const ContextProvider = ({ children }) => {
  return (
    <HomeProvider>{children}</HomeProvider>
  )
}

export default ContextProvider