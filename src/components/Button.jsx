import React from 'react'
import styles from '../styles'

const Button = () => {
  return (
      <button type="button" className={`py-4 px-6 bg-blue-gradient rounded-md font-sharemono font-bold text-[19px]
      text-slate-800 outline-none  ${styles}  `}> Get Started</button>
  
   )
}

export default Button