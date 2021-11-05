import React, { useEffect } from 'react'

import CIndex from '../components/components.index.js'
import images from '../assets/img-index.js'

const HomePageContent = () => {
  const { Button, Login, IconLink, IconListItem } = CIndex
  const {
    tiny: { Bluetooth, Chrome, Firefox, Folder, Vlc },
  } = images

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <IconListItem
        imgSrc={Folder}
        textContent="Home Folder"
        orientation="right"
      />
      <IconListItem
        imgSrc={Chrome}
        textContent="Google Chrome"
        orientation="right"
      />
      <IconListItem
        imgSrc={Firefox}
        textContent="Firefox Browser"
        orientation="right"
      />
      <IconListItem
        imgSrc={Vlc}
        textContent="VLC Media Player Settings"
        orientation="right"
      />
      <IconListItem
        imgSrc={Bluetooth}
        textContent="Bluetooth Settings"
        orientation="right"
      />
    </>
  )
}

export default HomePageContent
