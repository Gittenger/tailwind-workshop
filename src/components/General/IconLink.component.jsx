import React from 'react'
import { Link } from 'react-router-dom'

const IconLink = ({ border, SvgComponent, background, to }) => {
	let wrapperStyles = 'group grid place-content-center '

	let iconStyles = 'w-8 h-8 fill-current transition-colors duration-300 '

	if (background) {
		wrapperStyles +=
			'w-16 h-16 bg-black hover:bg-blue-300 dark:bg-blue-200 dark:hover:bg-black'
		iconStyles +=
			'text-gray-200 group-hover:text-green-800 dark:text-green-800 dark:group-hover:text-gray-200'
	} else {
		wrapperStyles += 'w-8 h-8 bg-transparent'
		iconStyles += 'text-black group-hover:text-green-800 dark:text-gray-50'
	}

	return (
		<Link
			to={{
				pathname: to,
			}}
			target={to.startsWith('http') ? '_blank' : ''}
		>
			<div
				className={`${wrapperStyles} ${
					border === 'rounded'
						? 'rounded-full'
						: border === 'sharp'
						? 'rounded-none'
						: 'rounded'
				}`}
			>
				<SvgComponent className={iconStyles} />
			</div>
		</Link>
	)
}

export default IconLink
