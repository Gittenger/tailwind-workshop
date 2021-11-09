import React from 'react'
import { Link } from 'react-router-dom/'

const LineItem = ({ textContent, cost, status, linkTo }) => {
  const wrapperStyles = 'grid grid-cols-3'
  const linkStyles =
    'underline text-blue-600 hover:text-blue-400 visited:text-purple-600'
  const textStyles = `capitalize`
  const costStyles = 'mx-auto'
  const statusStyles = `justify-self-end text-right capitalize ${
    status.code === 'warn'
      ? 'text-red-700'
      : status.code === 'pending'
      ? 'text-gray-700 italic'
      : 'text-green-600'
  }`

  return (
    <div className={wrapperStyles}>
      <p className={textStyles}>
        {linkTo ? (
          <Link to={linkTo} className={linkStyles}>
            {textContent}
          </Link>
        ) : (
          textContent
        )}
      </p>

      <p className={costStyles}>{cost}</p>
      <p className={statusStyles}>{status.text}</p>
    </div>
  )
}

export default LineItem
