import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from 'react-icons/fa6'
const socials = [
  {
      title:'Facebook',
      href:'https://www.facebook.com',
      icon: <FaFacebook className='w-6 h-6' />


  },
  {
      title:'Twitter',
      href:'https://www.twitter.com',
      icon: <FaXTwitter className='w-5 h-5' />
  },
  {
      title:'Instagram',
      href:'https://www.instagram.com',
      icon: <FaInstagram className='w-6 h-6' />
  },
  {
      title:'Linkedin',
      href:'https://www.linkedin.com',
      icon: <FaLinkedin className='w-7 h-7 rounded-full' />
  },
  {
      title:'Youtube',
      href:'https://www.youtube.com',
      icon: <FaYoutube className='w-6 h-6' />
  }
]

const contact = () => {
  return (
    <div className='flex flex-col items-center min-h-screen  py-2 w-full justify-center mt-32 mb-10'>
       <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">Contact</h1>
       <div className=' grid md:grid-cols-2 items-center gap-4 justify-center'>
        <div className='flex flex-col gap-2 pl-4'>
          <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl  font-bold text-white'>Versa AI</h3>
          <p className='text-md md:text-lg lg:text-xl text-white mt-2'>Biratnagar, Morang </p>
          <p className='text-md md:text-lg lg:text-xl text-white'>Email: contact@versaAI.com </p>
          <p className='text-md md:text-lg lg:text-xl text-white'>Phone: +977-98XXXXXXXX </p>
          <div className='flex gap-6'>
            {socials.map((social, index) => {
                return (
                    <Link key={index} href={social.href}>
                        <div className='flex items-center justify-center gap-2 w-8 h-8 rounded-full p-1 bg-white'>
                            {social.icon}
                        </div>
                    </Link>
                )
            })}
        </div>
        </div>
        <Image src='/contactus.png' alt='contact' width={500} height={500} />
       </div>

      
    </div>
  )
}

export default contact
