'use client'

import { useFormik } from 'formik'
import { useGeneralStore } from '../store/general'
import { useUserStore } from '../store/user'
import { Button } from './ui/button'

import * as yup from 'yup'

export const schema = yup.object().shape({
	email: yup.string().required('Email is required').email('Invalid email'),
})

export const Modal = () => {
	const setModalIsOpen = useGeneralStore(state => state.setIsModalOpen)
	const isModalOpen = useGeneralStore(state => state.isModalOpen)
	const user = useUserStore(state => state)
	const formik = useFormik({
		initialValues: {
			email: '',
		},
		validationSchema: schema,
		onSubmit: async values => {
			console.log(values)
		},
	})
	const { errors, touched, values, handleChange, handleSubmit } = formik
	/* const onSubmit = () => {
		const email = document.querySelector('#email') as HTMLInputElement

		console.log(email?.value)
	} */

	return (
		<div
			id='Modal'
			className='fixed flex items-center justify-center z-40 top-0 right-0 bottom-0 left-0 w-full h-full bg-white'
		>
			<div className='relative w-full max-w-[892px] h-[70%] bg-popover rounded-md shadow__custom px-4 py-5'>
				<div className='flex justify-end w-full'>
					<Button
						variant='ghost'
						onClick={() => setModalIsOpen(!isModalOpen)}
						className='absolute top-1 right-1 p-1 hover:bg-transparent'
					>
						<svg
							width='14'
							height='14'
							viewBox='0 0 14 14'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								opacity='0.5'
								fillRule='evenodd'
								clipRule='evenodd'
								d='M14 1.4L12.6 0L7 5.6L1.4 0L0 1.4L5.6 7L0 12.6L1.4 14L7 8.4L12.6 14L14 12.6L8.4 7L14 1.4Z'
								fill='#838283'
							/>
						</svg>
					</Button>
				</div>
				<h2 className='text-[28px] leading-8 uppercase font-bold text-[#2b2b2b] mb-8 mt-10'>
					Your name
				</h2>
				<p className='text-base leading-[24px] text-[#2b2b2b] mt-2'>
					{user.name}
				</p>
				<form onSubmit={handleSubmit}>
					<div className='flex flex-col justify-center w-full mt-8'>
						<input
							id='email'
							type='email'
							onChange={handleChange}
							className='w-full border border-[#646464] rounded-[16px] p-4 font-[500] font-base text-[#2b2b2b] placeholder:text-[#b5b5b5] focus:outline-none'
							placeholder='Enter your email'
						/>
						{touched.email && errors.email && <div>{errors.email}</div>}

						<span className='font-[500] text-[13px] leading-4 text-[#646464] flex gap-2 mt-2'>
							<svg
								width='16'
								height='17'
								viewBox='0 0 16 17'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<g opacity='0.5'>
									<path
										d='M10.9851 7.5V5.5V4C10.9851 2.34315 9.64194 1 7.98509 1H7.39404C5.73719 1 4.39404 2.34315 4.39404 4V5.5V7.5'
										stroke='#8C8C8C'
										strokeWidth='2'
									/>
									<rect
										x='1'
										y='7'
										width='13.3791'
										height='9'
										rx='2'
										stroke='#646464'
										strokeWidth='2'
									/>
									<path
										d='M7.68945 10V12'
										stroke='#8C8C8C'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</g>
							</svg>
							Your information is 100% secure. We don’t share your personal
							information.
						</span>
					</div>
					<Button className='w-full h-[64px] flex items-center mt-10 bg-[#ff5d17] rounded-[16px] text-white text-[24px] hover:bg-[#ff8317]'>
						Continue
					</Button>
				</form>
			</div>
		</div>
	)
}
