import React from 'react'
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './api'
import {  useNavigate } from 'react-router-dom'

export const UserContext = React.createContext()

export const UserStorage = ({ children }) => {
  
  const [data, setData] = React.useState(null)
  const [login, setlogin] = React.useState(null)
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const navigate = useNavigate()


  async function getUser(token) {
    const {url, options} = USER_GET(token)
    const response = await fetch(url, options)
    const json = await response.json()
    setData(json)
    setlogin(true)
    console.log(json)
    console.log(data)
  }

  async function userLogin(username, password) {
    try {
      setError(null)
      setLoading(true)
      const {url, options} = TOKEN_POST({username, password})
      const tokenRes = await fetch(url, options)
      if (!tokenRes.ok) throw new Error(`Error: Usuário inválido `)
      const {token} = await tokenRes.json()
      window.localStorage.setItem('token', token)
      await getUser(token)
      navigate('/conta')
    } catch (err) {
      setError(err.message)
      setlogin(false)
    } finally {
      setLoading(false)
    }
  }
  const userLogout = React.useCallback(async function () {
    setData(null)
    setError(null)
    setLoading(false)
    setLoading(false)
    window.localStorage.removeItem('token')
    navigate('/login')
  }, [navigate],
  )

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setError(null)
          setLoading(true)
          const {url, options} = TOKEN_VALIDATE_POST(token)
          const response = await fetch(url, options)
          if(!response.ok) throw new Error('Token inválido')
          //await getUser(token)
        } catch (err){
          userLogout()
        } finally {
          setLoading(false)
        }       
      }
    }
    autoLogin()
  }, [userLogout])

  return (
  <UserContext.Provider value={{ userLogin, userLogout, data, login, error, loading}}>
    {children}
    </UserContext.Provider>
  )
}

