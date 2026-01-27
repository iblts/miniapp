import { FinalSection } from '@/components/sections/final'
import { GameInfo } from '@/components/shared/game-info'
// import { useLaunchParams, useRawInitData } from '@tma.js/sdk-react'
import ShapeImage from '@/assets/img/blue-shape.png'
import { Cards } from '@/components/sections/cards/cards'
import { SelectCitySection } from '@/components/sections/select-city'
import { StartSection } from '@/components/sections/start'
import { useCurrentSection } from '../../../store/useCurrentSection'
import styles from './home-page.module.scss'

export const HomePage = () => {
	// const initData = useRawInitData()
	// const launchParams = useLaunchParams()
	const setCurrentSection = useCurrentSection(state => state.setCurrentSection)
	const currentSection = useCurrentSection(state => state.currentSection)

	if (currentSection === 'main') {
		return <StartSection />
	}

	if (currentSection === 'select') {
		return <SelectCitySection />
	}

	if (currentSection === 'final') {
		return <FinalSection />
	}

	return (
		<main className={styles.main}>
			<Cards
				showNextSection={() => setCurrentSection('select')}
				isAnimationStarted
				isFinalSection={false}
			/>
			<img src={ShapeImage} width={375} height={264} className={styles.floor} />
			<GameInfo />
		</main>
	)
}
