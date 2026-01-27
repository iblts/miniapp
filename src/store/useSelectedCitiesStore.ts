import { create } from 'zustand'

interface SelectedCitiesInterface {
	selectedCities: number[]
	selectCity: (id: number) => void
	setFinalCity: (id: number) => void
	finalCity?: number
	resetSelectedCities: () => void
}

export const useSelectedCitiesStore = create<SelectedCitiesInterface>(set => ({
	selectedCities: [],
	selectCity: id =>
		set(state => ({
			selectedCities: [...state.selectedCities, id],
		})),
	finalCity: undefined,
	setFinalCity: id =>
		set({
			finalCity: id,
		}),
	resetSelectedCities: () => set({ finalCity: undefined, selectedCities: [] }),
}))
