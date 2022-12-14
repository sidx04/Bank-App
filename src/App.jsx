import React from 'react'
import styles from './styles'

import { Navbar, Billing, Stats, Hero, CardDeal, Testimonials, CTA, Clients, Footer,  Business } from './components'



const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden ">
      <div className={`${styles.padding} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      <div className={ `bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero></Hero> 
        </div>
      </div>

      <div className={ `bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/> {/*done*/}
          <Business /> {/*done*/}
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients/>
          <CTA/>
          <Footer/> 
        </div>
      </div>

    </div>
  )
}

export default App