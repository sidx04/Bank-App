import styles from "../styles"
import { arrowUp } from "../assets"

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[135px] rounded-[50px] bg-blue-gradient p-[3px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-monarchgray rounded-[50px] w-[100%] h-[100%]`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-sharemono font-bold text-[19px] leading-[23px] mr-2">
            <span className="text-gradient">
              Get
            </span> 
          </p>
          <img src={arrowUp} alt="arrow" classname="w-[23px] h-[23px] object-contain"></img>
        </div>
        <p className="font-sharemono font-bold text-[18px] leading-[23px] ">
            <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  )
}

export default GetStarted