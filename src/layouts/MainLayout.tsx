// src/layouts/MainLayout.tsx
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <main className='min-h-screen'>{children}</main>
      <Footer />
       <ScrollToTop />
    </>
  )
}

export default MainLayout
