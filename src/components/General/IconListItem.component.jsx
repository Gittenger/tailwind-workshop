import React from 'react'

const IconListItem = ({ imgSrc, altText, textContent, orientation }) => {
  const groupStyles = `flex w-full ${
    orientation === 'right' ? 'flex-row-reverse' : 'flex-row'
  }`
  const iconStyles = 'w-6 h-6'
  const textStyles = `text-md ${orientation === 'right' ? 'mr-3' : 'ml-3'}`

  return (
    <div className={groupStyles}>
      <img className={iconStyles} src={imgSrc} alt={altText} />
      <p className={textStyles}>{textContent}</p>
    </div>
  )
}

export default IconListItem
