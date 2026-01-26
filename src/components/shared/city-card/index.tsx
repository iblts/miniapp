import styles from './city-card.module.scss'

export const CityCard = ({ img }: { img?: string | null }) => {
	return (
		<article className={styles.card}>
			{img && (
				<img src={img} width={157} height={284} className={styles.image} />
			)}
		</article>
	)
}
