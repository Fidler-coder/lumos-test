import { useQuery } from '@tanstack/react-query'
import { userService } from '../services/sparepart.service'

export function useSparePart(limit: number) {
	return useQuery({
		queryKey: ['user', limit],
		queryFn: () => userService.getUserName(limit),
	})
}
