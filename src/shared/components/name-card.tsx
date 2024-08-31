import { useUserStore } from '../store/user'

interface Props {
	name: {
		title: string
		first: string
		last: string
	}
}

export const NameCard: React.FC<Props> = ({ name }) => {
	const user = useUserStore(state => state)
	const setUser = useUserStore(state => state.setUser)

	return (
		<div className='rounded-[16px] bg-white p-4 flex h-[88px] shadow__user items-center gap-2'>
			<label className='flex items-center cursor-pointer relative'>
				<input
					type='radio'
					name={'field'}
					className='peer h-6 w-6 cursor-pointer transition-all appearance-none shadow hover:shadow-md rounded-full border border-[#646464] checked:bg-[#ff5d17] checked:border-[#ff5d17] '
					value={name.first + ' ' + name.last}
					onClick={() => {
						setUser({ ...user, name: name.first + ' ' + name.last })
					}}
				/>
				<span className='absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-4 w-4'
						viewBox='0 0 20 20'
						fill='currentColor'
						stroke='currentColor'
						strokeWidth='1'
					>
						<path
							fillRule='evenodd'
							d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
							clipRule='evenodd'
						></path>
					</svg>
				</span>
			</label>
			<p className='font-bold text-base leading-8 text-[#2b2b2b]'>
				{name.first} {name.last}
			</p>
		</div>
	)
}
