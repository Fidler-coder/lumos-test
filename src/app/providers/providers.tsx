'use client'

import {
	QueryClient,
	QueryClientProvider,
	defaultShouldDehydrateQuery,
	isServer,
} from '@tanstack/react-query'
import NextTopLoader from 'nextjs-toploader'
import * as React from 'react'
import { Toaster } from 'react-hot-toast'

function makeQueryClient() {
	return new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 60 * 1000,
			},
			dehydrate: {
				shouldDehydrateQuery: query =>
					defaultShouldDehydrateQuery(query) ||
					query.state.status === 'pending',
			},
		},
	})
}

let browserQueryClient: QueryClient | undefined = undefined

function getQueryClient() {
	if (isServer) {
		return makeQueryClient()
	} else {
		if (!browserQueryClient) browserQueryClient = makeQueryClient()
		return browserQueryClient
	}
}

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
	const [mounted, setMounted] = React.useState(false)
	const queryClient = getQueryClient()

	React.useEffect(() => setMounted(true), [])

	if (!mounted) {
		return null
	}

	return (
		<>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>

			<NextTopLoader />
			<Toaster />
		</>
	)
}
