import { create } from 'zustand';

interface DashboardState {
    user: any | undefined
    setUser: (user: any) => void
}

const useDashboardStore = create<DashboardState>()((set) => ({
    user: undefined,
    setUser: (user) => set(() => ({ user })),
}))

export default useDashboardStore;