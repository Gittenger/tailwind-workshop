import React, { useEffect } from 'react'

import CIndex from '../components/components.index.js'
import images from '../assets/img-index.js'

const HomePageContent = () => {
  const { HistoryItem, IconLink, IconListItem, LineItem } = CIndex
  const {
    svg: { Pug, Git, ReactIcon, Facebook },
    tiny: { Bluetooth, Chrome, Firefox, Folder, Vlc },
  } = images

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="w-4/5">
        {/* <HistoryItem /> */}
        {/* <IconListItem
          imgSrc={Bluetooth}
          textContent="Bluetooth Folder"
          orientation="right"
          countBubble="33"
        /> */}
        <div className="mt-10 space-y-2">
          <LineItem
            textContent="November 2021"
            cost="$7.99"
            status={{ text: 'needs attention', code: 'warn' }}
            linkTo="/"
          />
          <LineItem
            textContent="October 2021"
            cost="$7.99"
            status={{ text: 'pending', code: 'pending' }}
          />
          <LineItem
            textContent="September 2021"
            cost="$7.99"
            status={{ text: 'paid', code: 'good' }}
          />
        </div>
      </div>
    </>
  )
}

export default HomePageContent
