import Image from 'next/image'

interface Props {
	icon: string
	title: string
	title2: string
	text?: string
}

export const AdvantagesCard: React.FC<Props> = ({
	icon,
	title,
	text,
	title2,
}) => {
	return (
		<div className='h-[216px] flex flex-col justify-between py-4 card__border'>
			<Image
				src={icon}
				alt={title}
				width={104}
				height={52}
				className='mx-auto'
			/>
			<div>
				<h2 className='font-bold text-[28px] leading-[32px] uppercase text-center text-[#ff5d17]'>
					{title}
				</h2>
				<h3 className='font-bold text-[28px] leading-[32px] uppercase text-center text-[#3177f2]'>
					{title2}
				</h3>
			</div>
			<p className='fotn-bold text-center font-base leading-[20px]'>{text}</p>
		</div>
	)
}
