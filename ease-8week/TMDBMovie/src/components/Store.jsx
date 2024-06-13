import {create} from 'zustand'
import {persist} from "zustand/middleware"

const useStore = create(
    persist(
        (set, get) => ({
            isLogined: false,
            user: false,
            setIsLogined: (value) => set({isLogined: value}),
            setUser: (value)=> set({user:value}),
        }),
        {
            name: 'login state',
        }
    )
)

export default useStore;