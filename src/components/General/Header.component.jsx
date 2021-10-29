import React from 'react'
//use this for custom styles
import styles from './Header.module.scss'

//use this for tailwind styles
const HeaderStyles = 'pt-60 pb-6 w-full flex justify-center'

const Header = () => {
	return (
		<header className={`${HeaderStyles} ${styles.header}`}>
			<h1>Let's get started building components...</h1>
		</header>
	)
}

export default Header
