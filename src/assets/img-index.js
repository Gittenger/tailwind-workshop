import React from 'react'

import ImgOne from './img/img-1.jpeg'
import ImgTwo from './img/img-2.jpeg'
import ImgTnree from './img/img-3.jpeg'
import { ReactComponent as Facebook } from './icons/facebook.svg'
import { ReactComponent as Instagram } from './icons/instagram.svg'
import { ReactComponent as Email } from './icons/email.svg'
import { ReactComponent as ChevronUp } from './icons/chevron-up.svg'

export const images = {
	img: {
		img1: ImgOne,
		img2: ImgTwo,
		img3: ImgTnree,
	},
	svg: {
		Facebook,
		Instagram,
		Email,
		ChevronUp,
	},
}

export default images
