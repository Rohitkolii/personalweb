import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div>
            <div>
                <ul>
                    <li><Link href=''>Home</Link></li>
                    <li><Link href=''>Home</Link></li>
                    <li><Link href=''>Home</Link></li>
                    <li><Link href=''>Home</Link></li>
                </ul>
            </div>
            <div>
                <p>All Right Reserved <Link href='/'>Webname</Link> 2024</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer