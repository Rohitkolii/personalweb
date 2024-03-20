import React from 'react'
import Styles from './Info.module.css'
import Link from 'next/link'

const Info = () => {
  return (
    <div className={Styles.infocon}>
        <div className={Styles.row}>
            <div  className={Styles.col}>
                <img src="images/ils1.jpg" alt="web_illustration" />
            </div>
            <div  className={Styles.col}>
                <h3>Why to choose us for Web Developement Services?</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat impedit molestias, quod, qui ipsam reprehenderit vitae, eaque accusamus ut voluptatibus assumenda iste aliquam. Adipisci commodi ipsam delectus iusto corrupti? Labore.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident, dolorem itaque beatae sequi a.</p>
                <Link href='/'>Read More- </Link>
            </div>
        </div>
    </div>
  )
}

export default Info