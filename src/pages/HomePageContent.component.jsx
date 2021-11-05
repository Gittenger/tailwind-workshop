import React, { useEffect } from 'react'

import CIndex from '../components/components.index.js'
// import images from '../assets/img-index.js'

const HomePageContent = () => {
  const { HistoryItem } = CIndex
  // const {
  //   tiny: { Bluetooth, Chrome, Firefox, Folder, Vlc },
  // } = images

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="w-96">
        <HistoryItem />
      </div>
    </>
  )
}

export default HomePageContent
