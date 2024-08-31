'use client'

import { cn } from '@/shared/lib/utils'
import { Logo } from '.'
import { useGeneralStore } from '../store/general'
import { useUserStore } from '../store/user'
import { Container } from './container'
import { Button } from './ui/button'

export const Header: React.FC = () => {
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

	const handleMain = () => {
		const main = document.querySelector('#main')
		main?.scrollIntoView({ behavior: 'smooth' })
	}
	return (
		<header
			className={cn(
				'fixed top-0 z-50 w-full shadow-md h-[76px] lg:py-4 bg-white'
			)}
		>
			<Container className='flex items-center h-full px-4 justify-between'>
				<Logo />
				<Button
					onClick={() => handleUser()}
					className='bg-[#3177f2] rounded-[24px]'
				>
					Get VPN
				</Button>
			</Container>
		</header>
	)
}
