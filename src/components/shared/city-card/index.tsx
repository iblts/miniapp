import styles from './city-card.module.scss'

export const CityCard = ({
	img,
	onSelect,
}: {
	img?: string | null
	onSelect?: () => void
}) => {
	return (
		<article className={styles.card} onClick={onSelect}>
			{img && (
				<img src={img} width={157} height={284} className={styles.image} />
			)}
		</article>
	)
}
