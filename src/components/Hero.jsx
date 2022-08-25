import React from 'react'
import styles from '../styles'
import { discount, robot } from '../assets'
import {GetStarted} from '../components'
import { features } from '../constants'


const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`} >
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt="discount" className="w-[32px] h-[32px]"></img>
          <p className={`${styles.paragraph} ml-2 font-poppins font-medium`}>
            <span className="text-yellow-50">20%</span>  Discount for {""}
            <span className="text-yellow-50">1 Month</span>. Hurry!
          </p>
        </div>
        
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-blue-100 ss:leading-[101px] leading-[75px]' >
            The Next <br className='sm:block hidden'/> {" "}
            <span class="text-gradient pr-4 py-0">
              Generation
            </span> {" "}
         </h1>
         <div className='ss:flex hidden md:mr-4 mr-0 animate-pulse'>
          <GetStarted />
         </div>
        </div>

         <h1 className='flex-1 flex-col font-poppins font-semibold ss:text-[68px] text-[52px] text-green-100 ss:leading-[100px] leading-[75px] w-full'>
          Payment Method.
         </h1>
         <p className={`${styles.paragraph} font-signika font-light max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
          <img src={robot} alt="billing" className=" w-[100%] h-[100%] relative z-[5]"></img>
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter} animate-pulse`}>
        <GetStarted />
      </div>

      
    </section>
  )
}

export default Hero