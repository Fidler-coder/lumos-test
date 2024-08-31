import Link from 'next/link'
import { LogoIcon } from './ui/logo-icon'

interface LogoProps {
	onClick?: () => void
}

export function Logo({ onClick }: LogoProps) {
	return (
		<Link className='flex items-center gap-1' href='#main'>
			<LogoIcon className='h-[30px] w-[30px] rounded-sm' />
			<span className='font-black inline-block uppercase font-base text-[#2B2B2B]'>
				VPN
			</span>
		</Link>
	)
}
