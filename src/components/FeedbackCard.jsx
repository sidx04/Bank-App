import React from 'react'
import { quotes, people01, people02, people03 } from '../assets'
import styles from '../styles'

const FeedbackCard = ({content,name,title,img}) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-lg max-w-[370px]
    md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <img src={quotes} alt="quotes" className="w-[42px] h-[50px] object-contain"></img>
      <p className="font-signika font-normal  text-[18px] leading-[32px] text-indigo-100 my-10">{content}</p>
      <div className="flex flex-row">
        <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full"></img>
        <div className="flex flex-col ml-4 ">
          <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-indigo-100 '>{name}</h4>
          <p className="font-poppins font-normal mt-[-2px] text-[16px] leading-[24px] text-indigo-100">{title}</p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard