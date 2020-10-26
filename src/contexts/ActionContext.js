import React, { useState, useEffect, useContext, createContext, useCallback } from 'react'

export const ActionContext = createContext({})

function Provider ({ children }) {
  const [isLogin, setIsLogin] = useState(false)
  const [currentUsername, setCurrentUsername] = useState('')
  const [userId, setUserId] = useState(0)

  useEffect(() => {
    console.log(currentUsername)
  }, [currentUsername])

  return (
    <ActionContext.Provider value={{ isLogin, setIsLogin, currentUsername, setCurrentUsername, userId, setUserId}}>
      {children}
    </ActionContext.Provider>
  )
}

export function useLogin() {
  const { isLogin, setIsLogin , currentUsername, setCurrentUsername, userId, setUserId} = useContext(ActionContext)

  const handleLogin = useCallback((username, userId) => {
    setIsLogin(true)
    setCurrentUsername(username)
    setUserId(userId)
  }, [setCurrentUsername, setIsLogin, setUserId])

  return [{ isLogin, currentUsername, userId}, { handleLogin}]
}

export default Provider 