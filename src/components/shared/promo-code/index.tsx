import styles from './promo-code.module.scss'

export const PromoCode = ({ promocode = '' }: { promocode: string }) => {
	return (
		<div className={styles.promocode}>
			<div className={styles.left}>
				<p className={styles.text}>промокод:</p>
				<p className={styles.value}>{promocode.toLocaleUpperCase()}</p>
			</div>
			<div className={styles.right}>
				<p className={styles.text}>скидка:</p>
				<p className={styles.value}>-25%</p>
			</div>
		</div>
	)
}
