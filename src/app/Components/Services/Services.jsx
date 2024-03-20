import React from 'react'

import Styles from './Services.module.css'

const Services = () => {
  return (
    <div className={Styles.Servicescon}>
        <div className={Styles.inner_Servicescon}>
            <div className={Styles.head}>
                <p>Grow your bussiness with our Development Services</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id mollitia quos cum aspernatur accusamus laborum.</p>
            </div>

            <div className={Styles.row}>
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