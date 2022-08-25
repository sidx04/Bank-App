import React from 'react'
import styles from '../styles'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'
const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col `}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-[1] flex flex-col justify-start mr-10 ">
          <img src={logo} alt="hoobank" className="w-[260px]  h-[73px] object-contain"></img>
          <p className={`${styles.paragraph} font-signika mt-4 max-w-[310px]`}>A new way to make payments easier and faster, reliable and more secure.</p>
        </div>

        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap  md:mt-0 mt-10'>
        {footerLinks.map((footerlink)=>{
          return(
            <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-yellow-50">
                {footerlink.title}
              </h4>
              <ul className='list-none mt-2'>
                {footerlink.links.map((link,index)=>{
                  return(
                    <li key={link.name}
                    className={`font-poppins font-normal text-[16px]
                      leading-lg text-dimWhite hover:text-secondary cursor-pointer p-1 ${index!==footerlink.links.length-1? 'mb:4':'mb-0' } `}>
                      {link.name}
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
        </div>
      </div>

      

      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 pb-2 border-t-[1px]
                border-t-blue-400 '>
        <p className='font-poppins font-normal text-[18px] leading-[27px] text-yellow-50'>
          Copyright Ⓒ 2022 HooBank. All Rights Reserved.</p>
        <div className='flex flex-row md:mt-0 mt-6'>
          {socialMedia.map((social,index)=>{
            return(
              <img key={social.id} src={social.icon} alt={social.id} className={`w-[21px] h-[21px]
                    object-contain cursor-pointer ${index===socialMedia.length-1? 'mr:0':'mr-8'}`}/>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Footer