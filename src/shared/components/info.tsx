export const Info = () => {
	return (
		<div className='w-full rounded-2xl mt-6 h-[80px] bg-[#ffffff] shadow__info flex items-center flex-row '>
			<div className='w-full max-w-[415px] h-[50px] flex justify-between items-center mx-auto'>
				<div className='flex flex-row items-center h-full'>
					<svg
						width='25'
						height='24'
						viewBox='0 0 25 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M21.12 8.45C20.07 3.83 16.04 1.75 12.5 1.75C12.5 1.75 12.5 1.75 12.49 1.75C8.95997 1.75 4.91997 3.82 3.86997 8.44C2.69997 13.6 5.85997 17.97 8.71997 20.72C9.77997 21.74 11.14 22.25 12.5 22.25C13.86 22.25 15.22 21.74 16.27 20.72C19.13 17.97 22.29 13.61 21.12 8.45ZM12.5 13.46C10.76 13.46 9.34997 12.05 9.34997 10.31C9.34997 8.57 10.76 7.16 12.5 7.16C14.24 7.16 15.65 8.57 15.65 10.31C15.65 12.05 14.24 13.46 12.5 13.46Z'
							fill='#3177F2'
						/>
					</svg>
					<div className='flex flex-col justify-between ml-3'>
						<h3 className='font-[700] text-[24px] line-height-[32px] text-[#2B2B2B]'>
							50+
						</h3>
						<p className='font-[400] text-[14px] line-height-[22px] text-[#646464]'>
							Locations
						</p>
					</div>
				</div>
				<div className='w-[0.92px]  h-[32px] bg-[#646464]'></div>
				<div className='flex flex-row items-center h-full'>
					<svg
						width='25'
						height='24'
						viewBox='0 0 25 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M16.69 2H8.31C4.67 2 2.5 4.17 2.5 7.81V16.18C2.5 19.83 4.67 22 8.31 22H16.68C20.32 22 22.49 19.83 22.49 16.19V7.81C22.5 4.17 20.33 2 16.69 2ZM16.7 18.25C15.57 18.25 14.65 17.33 14.65 16.2C14.65 15.54 14.97 14.96 15.46 14.58C15.04 13.48 13.99 12.72 12.81 12.76L10.75 12.77H10.74C10.13 12.77 9.55 12.59 9.06 12.28V14.3C9.82 14.6 10.36 15.34 10.36 16.2C10.36 17.33 9.44 18.25 8.31 18.25C7.18 18.25 6.26 17.33 6.26 16.2C6.26 15.33 6.8 14.6 7.56 14.3V9.95C6.8 9.6 6.26 8.84 6.26 7.95C6.26 6.74 7.25 5.75 8.46 5.75C9.67 5.75 10.66 6.74 10.66 7.95C10.66 8.93 10.01 9.75 9.12 10.04C9.32 10.77 9.98 11.28 10.74 11.28C10.74 11.28 10.74 11.28 10.75 11.28L12.81 11.27C12.82 11.27 12.82 11.27 12.83 11.27C14.67 11.27 16.32 12.44 16.92 14.18C17.95 14.29 18.76 15.15 18.76 16.21C18.75 17.33 17.83 18.25 16.7 18.25Z'
							fill='#3177F2'
						/>
					</svg>
					<div className='flex flex-col justify-between ml-3'>
						<h3 className='font-[700] text-[24px] line-height-[32px] text-[#2B2B2B]'>
							1000+
						</h3>
						<p className='font-[400] text-[14px] line-height-[22px] text-[#646464]'>
							Servers
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
