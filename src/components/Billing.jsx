import React from 'react'
import {apple,bill,google} from '../assets'
import styles, {layout} from '../styles'
const Billing = () => {
  return (
    <section  id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" ></img>
        <div className="absolute z-[3] -left-1/2 top-0 w-[60%] h-[50%] rounded-full white__gradient"/>
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full blue__gradient"/>
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className="sm:block hidden"/>
          billing and invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] font-signika`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore voluptates recusandae dolorum, aliquam officiis, sequi obcaecati eos saepe ex, adipisci cumque molestias iste suscipit explicabo? Tempora voluptatibus neque nobis commodi.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="appstore" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer
            transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"></img>
          <img src={google} alt="playstore" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer
            transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"></img>
        </div>
      </div>

      
    </section>

    
  )
}

export default Billing