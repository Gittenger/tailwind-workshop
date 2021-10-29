import React from 'react'
import CIndex from '../components.index'

const LayoutStyles =
  'flex flex-col justify-center items-center container mx-auto'

const ContentStyles = 'flex flex-col justify-center align-center'

const Layout = ({ children }) => {
  const { Header } = CIndex
  return (
    <div className={LayoutStyles}>
      <Header />
      <div className={ContentStyles}>{children}</div>
    </div>
  )
}

export default Layout
