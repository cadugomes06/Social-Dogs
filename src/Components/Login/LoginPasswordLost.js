import React from 'react'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useForm from '../../Hooks/UseForm'
import useFetch from '../../Hooks/useFetch'
import { PASSWORD_LOST } from '../../api'
import Error from '../../Helper/Error'

const LoginPasswordLost = () => {
  const login  = useForm()
  const {loading, request, data, error} = useFetch()

 async function handleSubmit(event) {
    event.preventDefault()
    if (login.validate()) {
    const { url, options } = PASSWORD_LOST({login: login.value,
       url: window.location.href.replace('perdeu', 'resetar')
      })
    request(url, options)
    }
  }

  return  <div>
    <h1 className='title'>Pedeu a senha?</h1>

    {data ? (
     <p style={{color: "green" }}>{data}</p> ) : 
     <form onSubmit={handleSubmit}>
        <Input label='Email / Usuário' type='text' name='email' {...login} />
        {loading ? <Button disabled> Enviando..</Button> : (
          <Button> Enviar email</Button>
        )}
    </form> }

    <Error error={error} />
  </div>
  
}

export default LoginPasswordLost