import { Header } from '@/shared/components'

export default async function HomeLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<Header />
			<main className='page'>{children}</main>
		</>
	)
}
