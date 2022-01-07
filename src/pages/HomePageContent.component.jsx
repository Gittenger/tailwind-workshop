import React, { useEffect } from 'react'

import CIndex from '../components/components.index.js'
import images from '../assets/img-index.js'

const HomePageContent = () => {
  const { IconLink, IconListItem } = CIndex
  const {
    svg: { Pug, Git, ReactIcon, Facebook },
    tiny: { Bluetooth, Chrome, Firefox, Folder, Vlc },
  } = images

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="w-full grid justify-items-center px-5">
        {/* <IconListItem
          imgSrc={Bluetooth}
          textContent="Bluetooth Folder"
          orientation="right"
          countBubble="33"
        /> */}
      </div>
    </>
  )
}

export default HomePageContent
