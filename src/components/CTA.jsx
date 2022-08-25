import React from 'react'
import styles from '../styles'
import Button from './Button'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col 
        bg-black-gradient-2 rounded-xl box-shadow `}>
      <div className="flex-1 flex flex-col">
        <h2 className={`${styles.heading2}`}>Try our service now!</h2>
        <p className={`${styles.paragraph} font-signika max-w-[470px] mt-2 mb-6`}>
          Everything you need to know to accept card payments and grow your business anywhere on the planet.
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-5 mt-10`}>
        <Button></Button>
      </div>
    </section>
  )
}

export default CTA