import React, { useEffect } from 'react'

import CIndex from '../components/components.index.js'
import images from '../assets/img-index.js'

const HomePageContent = () => {
  const { Button, Login, IconLink } = CIndex
  const {
    svg: { Facebook, Instagram, Email, ChevronUp },
  } = images

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <IconLink border="rounded" to="/page" background SvgComponent={Email} />
    </>
  )
}

export default HomePageContent
