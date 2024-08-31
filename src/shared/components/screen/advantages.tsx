import { AdvantagesCard } from '../card'

const items = [
	{
		title: 'Unlimited',
		title2: 'access to content',
		text: `Enjoy unlimited bandwidth to stay connected to the world's best shows, apps, and games!`,
		icon: `/eye.png`,
	},
	{
		title: 'Flashing',
		title2: 'connecting speed',
		text: `VPN Lumos offers unlimited bandwidth for faster loading and no buffering!`,
		icon: `/rocket.png`,
	},
	{
		title: 'Hide',
		title2: 'your location',
		text: `Get your own unique IP for added security and access to restricted sites, apps, and services!`,
		icon: `/location.png`,
	},
	{
		title: 'Bypass',
		title2: 'blocked sites',
		text: `Enjoy unlimited bandwidth to stay connected to the world's best shows, apps, and games!`,
		icon: `/sites.png`,
	},
]

export const Advantages = () => {
	return (
		<section className='mt-[72px] grid grid-cols-1 lg:grid-cols-2 card_gap'>
			{items.map((item, index) => (
				<AdvantagesCard
					key={index}
					icon={item.icon}
					title={item.title}
					title2={item.title2}
					text={item.text}
				/>
			))}
		</section>
	)
}
