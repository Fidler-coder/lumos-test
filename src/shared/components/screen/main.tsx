'use client'

import { BLUR_IMAGE } from '@/shared/constants/seo.constants'
import { useGeneralStore } from '@/shared/store/general'
import { useUserStore } from '@/shared/store/user'
import Image from 'next/image'
import { Info } from '..'
import { Button } from '../ui/button'

export const MainScreen = () => {
	const setModalIsOpen = useGeneralStore(state => state.setIsModalOpen)
	const isModalOpen = useGeneralStore(state => state.isModalOpen)
	const user = useUserStore(state => state)

	const handleUser = () => {
		const plain = document.querySelector('#plain')
		if (user.name) {
			setModalIsOpen(!isModalOpen)
		} else {
			plain?.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<section id='main' className='flex flex-col items-center'>
			<h1 className='text-[32px] leading-[40px] text-[#2B2B2B] font-[700] text-center max-w-[396px] mx-auto'>
				Access <span className='text-[#3177f2]'>everything securely</span> with
				VPN
			</h1>
			<Image
				src={'/Image.png'}
				alt='main_screen'
				width={428}
				height={209}
				className='mx-auto'
				priority={true}
				placeholder='blur'
				blurDataURL={BLUR_IMAGE}
			/>
			<Button
				onClick={() => handleUser()}
				className='bg-[#ff5d17] rounded-[16px] hover:bg-[ff8317] max-w-[396px] w-full h-[64px] text-[24px] leading-8 mt-4 mx-auto'
			>
				Get VPN
			</Button>
			<Image
				className='mt-6'
				src={'/30m+.png'}
				alt='user_count'
				width={136}
				height={42}
			/>
			<Info />
			<p className='text-base text-center leading-[24px] text-[#646464] mt-6 font-[500]'>
				VPN-your <span className='text-[#3177f2]'>ultimate</span> solution for a
				private and secure online experience!
			</p>
		</section>
	)
}
