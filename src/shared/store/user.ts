import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
export interface User {
	name?: string
}

export interface UserActions {
	setUser: (user: User) => void
}

export const useUserStore = create<User & UserActions>()(
	devtools(
		persist(
			set => ({
				name: '',
				setUser: user => set({ ...user }),
			}),
			{
				name: 'user-storage',
			}
		)
	)
)
