import { FinalSection } from '@/components/sections/final'
import { GameInfo } from '@/components/shared/game-info'
import { useCurrentSection } from '../../../store/useCurrentSection'
import { CardsContent } from '../../sections/CardsContent/CardsContent'
import styles from './home-page.module.scss'

export const HomePage = () => {
	const setCurrentSection = useCurrentSection(state => state.setCurrentSection)
	const currentSection = useCurrentSection(state => state.currentSection)
	if (currentSection === 'final') {
		return <FinalSection />
	}

	return (
		<main className={styles.main}>
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
