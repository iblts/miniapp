import { Hint } from '@/components/ui/hint'
import { ProgressBar } from '@/components/ui/progress-bar'
import { useCardStore } from '@/store/useCardStore'
import styles from './game-info.module.scss'

export const GameInfo = () => {
	const currentCard = useCardStore(state => state.currentCardIndex)
	const cardsCount = useCardStore(state => state.cardsCount)

	return (
		<article className={styles.gameInfo}>
			<section className={styles.left}>
				<div className={styles.text}>
					<p className={styles.count}>
						<span className={styles.current}>{currentCard + 1}</span>
						<span>/</span>
						<span>{cardsCount}</span>
					</p>
				</div>
				<ProgressBar current={currentCard} total={cardsCount} />
			</section>
			<Hint className={styles.hint} size={40} />
		</article>
	)
}
