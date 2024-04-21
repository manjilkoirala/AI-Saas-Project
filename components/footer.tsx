"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { FaFacebook,FaInstagram,FaLinkedin,FaXTwitter, FaYoutube } from "react-icons/fa6";

const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Pricing",
      href: "/pricing",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

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

const Footer = () => {
    
    const pathname = usePathname();
  return (
   
    <div className=' w-full bg-slate-950 justify-center flex flex-col items-center'>
        <div className='flex gap-6 pt-10 pb-2'>
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
    
      <div className='flex gap-10 py-6 flex-wrap px-6 items-center justify-center'>
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
          <Image fill alt="Logo" src="/logo.png" />
        </div>
        <h1 className={"text-xl font-bold text-white"}>
          VersaAI
        </h1>
      </Link>
      {navItems.map((item, index) => {
          const isActive =
            item.href === "/"
              ? pathname === item.href
              : pathname.startsWith(item.href);
          return (
            <>
              <Link key={index} href={item.href}>
                <p
                  className={
                    `text-base font-bold font-sans  ${isActive ? "font-bold text-[#E44AA5]" :'text-white hover:text-[#BB51DC]'}`
                  }
                >
                  {item.title}
                </p>
              </Link>
            </>
          );
        })}
      </div>
      <p className=' pb-2 pt-2 bg-black w-full text-slate-300 text-center'>
        ©️ 2023 All rights reserved
      </p>

   </div>

  )
}

export default Footer
