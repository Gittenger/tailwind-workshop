import React, { useEffect } from 'react'

import CIndex from '../components/components.index.js'
import images from '../assets/img-index.js'

const HomePageContent = () => {
  const { HistoryItem, IconLink, IconListItem, FooterColumn, LineItem } = CIndex
  const {
    svg: { Pug, Git, ReactIcon, Facebook },
    tiny: { Bluetooth, Chrome, Firefox, Folder, Vlc },
  } = images

  const testFooterLists = {
    '1': {
      title: 'Support',
      list: [
        { url: '/', text: 'Help' },
        { url: '/', text: 'Community' },
        { url: '/', text: 'Contact Us' },
      ],
    },
    '2': {
      title: 'Our Company',
      list: [
        { url: '/', text: 'About' },
        { url: '/', text: 'Blog' },
        { url: '/', text: 'Media' },
      ],
    },
    '3': {
      title: 'Terms & Policies',
      list: [
        { url: '/', text: 'Policies' },
        { url: '/', text: 'Terms of Use' },
        { url: '/', text: 'Code of Conduct' },
        { url: '/', text: 'Privacy' },
      ],
    },
  }

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
          <FooterColumn listData={testFooterLists['1']} />
          <FooterColumn listData={testFooterLists['2']} />
          <FooterColumn listData={testFooterLists['3']} />
          {/* <LineItem
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
          /> */}
        </div>
      </div>
    </>
  )
}

export default HomePageContent
