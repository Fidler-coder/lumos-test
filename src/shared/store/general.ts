import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export interface GeneralState {
	isModalOpen: boolean
	ids: null
}

export interface GeneralActions {
	setIsModalOpen: (isModalOpen: boolean) => void
	setIds: (ids: null) => void
}

export const useGeneralStore = create<GeneralState & GeneralActions>()(
	devtools(
		persist(
			set => ({
				isModalOpen: false,
				ids: null,
				setIsModalOpen: isModalOpen => set({ isModalOpen }),
				setIds: ids => set({ ids }),
			}),
			{
				name: 'general-storage',
			}
		)
	)
)
