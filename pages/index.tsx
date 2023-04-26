import Image from 'next/image'
import { Inter, ZCOOL_KuaiLe } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <nav>
      <h1>Hello World!</h1>
      <div>
        <a href="/register">Register</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  )
}
