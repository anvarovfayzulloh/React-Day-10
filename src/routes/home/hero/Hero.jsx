import React from 'react'
import { Link } from 'react-router-dom'
import hero from "../../../assets/hero.svg"
import linkedinn from "../../../assets/linkedinn.svg"
import twitter from "../../../assets/twitter.svg"
import medium from "../../../assets/medium.svg"
import { useTranslation } from 'react-i18next';

const Hero = () => {
	const { t, i18n } = useTranslation()

	return (
		<section className='hero pt-[88px] pb-[156px]' >
			<div className="container">
				<div className="hero__wrapper flex items-end justify-between">
					<div>
						<h2 className='h-[63px]  font-montserrat font-bold text-5xl text-[#D05270] ' >
							{t("hero-1")}
						</h2>
						<h3 className='h-[63px] font-montserrat font-medium pt-[12px] text-5xl text-[#424242]'>
							{t("hero-2")}
						</h3>
						<p className='text-[#424242] py-9 font-montserrat font-normal text-base max-w-[631px]'  >
							{t("hero-3")}
						</p>
						<div className='flex w-full items-center justify-between' >
							<Link><img src={twitter} alt="" /></Link>
							<Link><img src={linkedinn} alt="" /></Link>
							<Link><img src={medium} alt="" /></Link>
						</div>
					</div>
					<div className='flex items-start h-[430px]' >
						<img src={hero} alt="" />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero