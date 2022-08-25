import React from 'react'
import styles from '../styles'

const Button = () => {
  return (
      <button type="button" className={`py-4 px-6 bg-blue-gradient rounded-md font-sharemono font-bold text-[19px]
      text-slate-800 outline-none  ${styles} rounded-[6px]
      transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 `}> Get Started</button>
  
   )
}

export default Button