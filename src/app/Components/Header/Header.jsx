import React, { useEffect } from 'react'
import Styles from './Header.module.css'
import Navbar from '../Navbar/Navbar'
import Link from 'next/link'


import AOS from 'aos'
import 'aos/dist/aos.css'

const Header = () => {
useEffect(()=>{
    AOS.init({duration: 1000})
  }, [])
  return (

    <div className={Styles.Headercontainer}>
        <Navbar />
        <section className={Styles.inner_Header}>
            <div data-aos="zoom-in-right" className={Styles.col1}>
                <h1>Web Developement <br /> Services</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus illum perferendis aliquid temporibus, hic rerum?</p>
                <div className={Styles.buttoncon}>
                    <Link className='btn' href='/about'>Know More</Link>
                    <Link className='btn' href='/contact'>Contact</Link>
                </div>
            </div>

            <div data-aos="zoom-in-left" className={Styles.col2}>

            <form>
                <p>contact us</p>
                    <div className={Styles.row}>
                        <div className={Styles.col}>
                            <label htmlFor="name">
                                Name :
                                <input type="text" 
                                placeholder='Enter your name'
                                />
                            </label>
                        </div>
                        <div className={Styles.col}>
                            <label htmlFor="email">
                                Email :
                                <input type="email" 
                                placeholder='example@gmail.com'
                                />
                            </label>
                        </div>
                    </div>

                    <div className={Styles.row}>
                        <div className={Styles.col}>
                            <label htmlFor="phone">
                                Contact :
                                <input type="tel" 
                                placeholder='Enter your Contact no.'
                                />
                            </label>
                        </div>
                    </div>

                    <div className={Styles.row}>
                        <div className={Styles.col}>
                            <label htmlFor="message">
                                Message :
                                <textarea 
                                name="message" 
                                id="message" 
                                // cols="30" 
                                rows="4"
                                placeholder='Enter your message or query'
                                ></textarea>
                            </label>
                        </div>
                    </div>

                    <button>Submit</button>
                </form>

                {/* <div>
                    <img src="images/ils1.jpg" alt="" />
                </div> */}
            </div>
        </section>
    </div>
  )
}

export default Header