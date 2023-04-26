import React from 'react'
import style from '../../styles/Home.module.css'
import { Inter, ZCOOL_KuaiLe } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const LoginForm = () => {
  return (
    <form className={style.loginform}>
      <h1>Login</h1>
      <input placeholder='Email' type="email" />
      <input placeholder="password" type="password" />
      <button type='submit'>Login</button>
    </form>
  )
}

export default LoginForm