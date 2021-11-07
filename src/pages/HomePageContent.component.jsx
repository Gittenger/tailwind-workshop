import React, { useEffect } from 'react'

import CIndex from '../components/components.index.js'
import images from '../assets/img-index.js'

const HomePageContent = () => {
  const { HistoryItem, IconLink, IconListItem } = CIndex
  const {
    svg: { Pug, Git, ReactIcon, Facebook },
    tiny: { Bluetooth, Chrome, Firefox, Folder, Vlc },
  } = images

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="w-96">
        {/* <HistoryItem /> */}
        <IconListItem
          imgSrc={Bluetooth}
          textContent="Bluetooth Folder"
          orientation="right"
          countBubble="33"
        />
        <div className="mt-10">
          <IconLink
            staticImg={Pug}
            background
            bgTransparent
            textContent="Pug Link"
            border=""
          />
          <IconLink
            staticImg={Git}
            background
            bgTransparent
            textContent="Git Link"
            border=""
          />{' '}
          <IconLink
            staticImg={ReactIcon}
            background
            bgTransparent
            textContent="React Link"
            border=""
          />
        </div>
      </div>
    </>
  )
}

export default HomePageContent
