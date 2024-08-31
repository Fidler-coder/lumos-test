import Image from 'next/image'

export function LogoIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<Image
			src={'/logo.png'}
			width={30}
			height={30}
			alt='logo'
			className=' rounded-sm'
		/>
	)
}
