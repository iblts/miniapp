import ShapeImage from '@/assets/img/green-shape.png'
import { Button } from '@/components/ui/button'
import { IconLogo } from '@/components/ui/icons/Logo'
import { useCurrentSection } from '@/store/useCurrentSection'
import styles from './start-section.module.scss'

export const StartSection = () => {
	const setCurrentSection = useCurrentSection(state => state.setCurrentSection)

	return (
		<section className={styles.section}>
			<IconLogo />
			<h1 className={styles.title}>{'Не выбирай,\nпока не сможешь выбрать'}</h1>
			<article className={styles.info}>
				<p className={styles.text}>
					{
						'Реально ли прочувствовать город за\u00a05\u00a0секунд? С\u00a0нашими карточками да! Лови искру и\u00a0найди свой город для\u00a0поездки мечты.'
					}
				</p>
				<Button
					className={styles.startButton}
					onClick={() => setCurrentSection('cards')}
				>
					Начать
				</Button>
			</article>
			<img src={ShapeImage} width={375} height={264} className={styles.floor} />
		</section>
	)
}
