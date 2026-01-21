import { FinalSection } from '@/components/sections/final'
import { GameInfo } from '@/components/shared/game-info'
import { useLaunchParams, useRawInitData } from '@tma.js/sdk-react'
import { useCurrentSection } from '../../../store/useCurrentSection'
import { CardsContent } from '../../sections/CardsContent/CardsContent'
import styles from './home-page.module.scss'

export const HomePage = () => {
	const initData = useRawInitData()
	const launchParams = useLaunchParams()
	const setCurrentSection = useCurrentSection(state => state.setCurrentSection)
	const currentSection = useCurrentSection(state => state.currentSection)
	if (currentSection === 'final') {
		return <FinalSection />
	}

	return (
		<main className={styles.main}>
			<h1>{initData}</h1>
			<h2>
				{launchParams.tgWebAppData?.user?.first_name}{' '}
				{launchParams.tgWebAppData?.user?.last_name}{' '}
				{launchParams.tgWebAppData?.user?.username}
			</h2>
			<CardsContent
				showNextSection={() => setCurrentSection('final')}
				isAnimationStarted
				isFinalSection={false}
			/>
			<div className={styles.floor} />
			<GameInfo />
			{/* <BackButton /> */}
		</main>
	)
}
