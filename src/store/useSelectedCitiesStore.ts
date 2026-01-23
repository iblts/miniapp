import { create } from 'zustand'

interface SelectedCitiesInterface {
	selectedCities: number[]
	selectCity: (id: number) => void
}
export const useSelectedCitiesStore = create<SelectedCitiesInterface>(set => ({
	selectedCities: [1, 2, 3, 4, 5],
	selectCity: id =>
		set(state => ({
			selectedCities: [...state.selectedCities, id],
		})),
}))
