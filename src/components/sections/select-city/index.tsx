import { CityCard } from '@/components/shared/city-card'
import { cardsData } from '@/data/cardsData'
import { useSelectedCitiesStore } from '@/store/useSelectedCitiesStore'
import styles from './select-city-section.module.scss'

export const SelectCitySection = () => {
	const selectedCities = useSelectedCitiesStore(state => state.selectedCities)
	const cities = cardsData.filter(card => selectedCities.includes(card.id))

	return (
		<section className={styles.section}>
			<header className={styles.header}>
				<h1 className={styles.title}>А вот и ваши города!</h1>
				<p className={styles.subtitle}>
					{'Выбери один, самый-самый.\nВыбирай, конечно, сердцем.'}
				</p>
			</header>
			<ul className={styles.list}>
				{cities.map(city => (
					<li key={city.id}>
						<CityCard img={city.image} />
					</li>
				))}
			</ul>
		</section>
	)
}
