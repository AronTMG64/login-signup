import React from 'react'
import style from '../../styles/Home.module.css'

const LoginForm = () => {
  return (
    <form className={style.loginform}>
      <input placeholder='Email' type="email" />
      <input placeholder="password" type="password" />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default LoginForm