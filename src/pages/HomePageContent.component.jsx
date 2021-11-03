import React, { useEffect } from 'react'

import CIndex from '../components/components.index.js'

const HomePageContent = () => {
  const { Button, Login } = CIndex
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Login />
      <Button />
      {/* <Button color="blue" /> */}
      {/* <Button color="green" /> */}
    </>
  )
}

export default HomePageContent
