import React from 'react'
import style from '../../styles/Home.module.css'
import { Inter, ZCOOL_KuaiLe } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const RegisterForm = () => {
  return (
    <form className={style.loginform}>
      <h1>Register</h1>
      <input placeholder='Username' type="text" />
      <input placeholder='Email' type="email" />
      <input placeholder="Create password" type="password" />
      <input placeholder="Confirm password" type="password" />
      <button type='submit'>Register</button>
    </form>
  )
}

export default RegisterForm