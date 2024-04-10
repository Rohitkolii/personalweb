import React, { useEffect } from 'react'

import Styles from './Services.module.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Services = () => {

    useEffect(()=>{
        AOS.init({duration: 1000})
      }, [])

  return (
    <div className={Styles.Servicescon}>
        <div className={Styles.inner_Servicescon}>
            <div className={Styles.head} data-aos="fade-down">
                <p>Grow your bussiness with our Development Services</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id mollitia quos cum aspernatur accusamus laborum.</p>
            </div>

            <div className={Styles.row} data-aos="fade-up">
                <div className={Styles.col}>
                    <div>
                        <img src="images/web.png" alt="service_logo" />
                    </div>
                    <p>Web Developement</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, veniam?</p>
                </div>
                <div className={Styles.col}>
                    <div>
                        <img src="images/App.png" alt="service_logo" />
                    </div>
                    <p>Androide Development</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, veniam?</p>
                </div>
                <div className={Styles.col}>
                    <div>
                        <img src="images/web.png" alt="service_logo" />
                    </div>
                    <p>Service 1</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, veniam?</p>
                </div>
                <div className={Styles.col}>
                    <div>
                        <img src="images/App.png" alt="service_logo" />
                    </div>
                    <p>Service 1</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, veniam?</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services