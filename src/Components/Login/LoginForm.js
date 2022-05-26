import React from 'react'
import { Link } from 'react-router-dom'
import UseForm from '../../Hooks/UseForm'
import Button from '../Forms/Button'
import Input from '../Forms/Input'

const LoginForm = () => { 
  const username = UseForm();
  const password = UseForm();
  console.log(username.value)

  //const [username, setUsername] = React.useState('')
  //const [password, setPassword] = React.useState('')


  
  function handleSubmit(event){
    event.preventDefault()
  
  
  
  if (username.validate() && password.validate()) {
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify()
    }).then((response) => response.json())
    .then((json) => json)
  }
  }
   
  return (
   <section>
     <h1>Login</h1>

     <form action='' onSubmit={handleSubmit}> 

      <Input label='Usuário' type='text'  name='username' {...username} />
      <Input label='Password' type='password' name='password' {...password} />
      <Button>Entrar</Button>
      
      </form>

    <Link to='/login/criar'>Cadastrar</Link>

  </section>
  )
}

export default LoginForm