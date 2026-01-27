import ShapeImage from '@/assets/img/green-shape.png'
import { PromoCode } from '@/components/shared/promo-code'
import { Button } from '@/components/ui/button'
import { IconLogo } from '@/components/ui/icons/Logo'
import { cardsData } from '@/data/cardsData'
import { useCardStore } from '@/store/useCardStore'
import { useCurrentSection } from '@/store/useCurrentSection'
import { useSelectedCitiesStore } from '@/store/useSelectedCitiesStore'
import styles from './final-section.module.scss'

export const FinalSection = () => {
	const cityId = useSelectedCitiesStore(state => state.finalCity) || 1
	const city = cardsData.find(card => card.id === cityId)
	const setSection = useCurrentSection(state => state.setCurrentSection)
	const resetGame = useSelectedCitiesStore(state => state.resetSelectedCities)
	const setCurrentCardIndex = useCardStore(state => state.setCurrentCardIndex)

	const handlePlayClick = () => {
		resetGame()
		setCurrentCardIndex(0)
		setSection('main')
	}

	return (
		<section className={styles.section}>
			<article className={styles.top}>
				<header className={styles.header}>
					<IconLogo />
					<div className={styles.header__text}>
						<p className={styles.subtitle}>Поздравляем! Твой город — </p>
						<h2 className={styles.title}>{city?.title}</h2>
					</div>
				</header>
				<PromoCode promocode={'НАШЁЛ'} />
			</article>
			<div className={styles.actions}>
				<Button variant='secondary'>Использовать промокод</Button>
				<Button variant='primary' onClick={handlePlayClick}>
					Играть ещё
				</Button>
			</div>
			<img src={ShapeImage} width={375} height={264} className={styles.floor} />
		</section>
	)
}
