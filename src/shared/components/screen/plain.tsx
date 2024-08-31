'use client'

import { useSparePart } from '@/shared/hooks/useSparePart'
import { useGeneralStore } from '@/shared/store/general'
import { Modal } from '../modal'
import { NameCard } from '../name-card'

export const Plain = () => {
	const { data, isLoading, isPending, error } = useSparePart(10)
	const isModalOpen = useGeneralStore(state => state.isModalOpen)

	return (
		<section id='plain'>
			<h2 className='text-[28px] leading-[32px] uppercase font-bold text-[#2b2b2b] mb-4'>
				Choose <span className='text-[#3177f2]'>your Name</span>
			</h2>
			{!isLoading && (
				<div className='grid grid-cols-1 gap-4'>
					{data?.results.map((item: any, index: number) => (
						<NameCard key={index} name={item.name} />
					))}
				</div>
			)}
			{isModalOpen && <Modal />}
		</section>
	)
}
