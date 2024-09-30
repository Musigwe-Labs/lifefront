// src/stores/counter-store.ts
import { createStore } from 'zustand/vanilla'

export type CounterState = {
  count: number
  user: any
}

export type CounterActions = {
  decrementCount: () => void
  incrementCount: () => void
  setUser: (user: any) => void
}

export type CounterStore = CounterState & CounterActions

export const initCounterStore = (): CounterState => {
  return { count: new Date().getFullYear(), user: undefined }
}

export const defaultInitState: CounterState = {
  count: 0,
  user: undefined
}

export const createCounterStore = (
  initState: CounterState = defaultInitState,
) => {
  return createStore<CounterStore>()((set) => ({
    ...initState,
    decrementCount: () => set((state) => ({ count: state.count - 1 })),
    incrementCount: () => set((state) => ({ count: state.count + 1 })),
    setUser: (user) => set(() => ({ user })),
  }))
}
