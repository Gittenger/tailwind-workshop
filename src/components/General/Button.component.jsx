import React from 'react'

const btnStyles =
	'py-4 px-2 font-semibold font-button rounded shadow-md text-white bg-gray-800  w-28 transition-all duration-300 border-2 border-transparent'

const stateStyles =
	'hover:bg-gray-200 hover:text-black active:bg-green-700 active:border-gray-50'

export const Button = ({ color }) => (
	<button className={`${btnStyles + ' ' + stateStyles}`}>Click me</button>
)

export default Button
