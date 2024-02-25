
import React from 'react'
import Header from '../components/Header/Header'

/* BU SAYFA AKTİF- LAYOUT DÜZENİ İÇİN */

const MainLayout = ({ children }) => {
  return (
    <div>
        {/*<Header/>*/}
        {children} 
    </div>
  )
}

export default MainLayout