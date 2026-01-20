import { create } from 'zustand';

interface CounterUserChooseInterface {
	stopListCounter: number;
	setStopListCounter: () => void;
}
export const useCounterUserChooseStore = create<CounterUserChooseInterface>((set) => ({
	stopListCounter: 0,
	setStopListCounter: () => set((state) => ({ stopListCounter: state.stopListCounter + 1 })),
}));
