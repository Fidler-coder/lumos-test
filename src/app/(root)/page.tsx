import { Advantages, MainScreen } from '@/shared/components/screen'
import { Plain } from '@/shared/components/screen/plain'

export default function Home() {
	return (
		<>
			<MainScreen />
			<Advantages />
			<p className='text-center text-[#3177f2] my-[72px] font-bold text-[24px] leading-[32px]'>
				Millions of people trust us!
			</p>
			<Plain />
		</>
	)
}
