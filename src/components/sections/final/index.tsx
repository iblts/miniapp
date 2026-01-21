import styles from './final-section.module.scss'

export const FinalSection = () => {
	return (
		<section className={styles.section}>
			<h1 className={styles.title}>А вот и ваши города!</h1>
			<p className={styles.subtitle}>
				Кликайте на тот, который понравился больше всего, а мы подарим промокод
			</p>
		</section>
	)
}
