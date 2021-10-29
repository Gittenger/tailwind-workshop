import React from 'react'

const btnStyles =
	'py-2 px-4 font-semibold transition-all duration-300 font-button rounded shadow-md text-white bg-gray-800 hover:bg-gray-200 hover:text-black w-32'

const blueStyles = 'bg-blue-700 hover:text-blue-700'

const greenStyles = 'bg-green-700 hover:text-green-700'

export const Button = ({ color }) => (
	<button
		className={`${btnStyles} ${
			color === 'blue' ? blueStyles : color === 'green' ? greenStyles : ''
		}`}
	>
		Click me
	</button>
)

export default Button
