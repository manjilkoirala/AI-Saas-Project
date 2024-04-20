import Footer from '@/components/footer'
import { LandingNavbar } from '@/components/landing-navbar'
import { MobileSidebar } from '@/components/mobile-sidebar'
import React from 'react'

export default async function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <main className=" bg-[#111827] overflow-auto">
      <div className="mx-auto max-w-screen-xl h-full w-full">
   
        
          <LandingNavbar />
        {children}

        
        </div>
        <Footer/>
    </main>
  )
}
