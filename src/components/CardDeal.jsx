import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../styles'
import Button from './Button'
const CardDeal = () => {
  return (
     <section className={layout.section}>
       <div className={`${layout.sectionInfo}`}>
        <h2 className={styles.heading2} >
          Find a better card deal<br className="sm:block hidden"/> in a few easy steps.
        </h2>
        <p className={`${styles.paragraph} font-signika max-w-[470px] mt-5 pb-5`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt praesentium autem pariatur at? Quae praesentium ratione perferendis? Ipsum, pariatur itaque quia placeat voluptas natus, deleniti molestias labore ad magnam alias.
        </p>
        <Button styles="mt-10"/>
       </div>

       <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-{100%]"/>
       </div>
       
     </section> 
  )
}

export default CardDeal