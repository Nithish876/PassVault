import {create} from 'zustand'
import {persist,createJSONStorage} from 'zustand/middleware'
import Asyncstorage from "@react-native-async-storage/async-storage"

type AppState = {
    hasSeenOnboarding:boolean;
    setSeenOnboarding:()=>void;

    isAuthenticated:boolean;
    login:()=>void;
    logout:()=>void;
}


export const useAppStore = create<AppState>()(persist(
    (set)=>({
        hasSeenOnboarding: false,
        setSeenOnboarding : ()=>set({hasSeenOnboarding: false}),

        isAuthenticated:false,
        login:()=>set({isAuthenticated: true}),
        logout:()=>set({isAuthenticated: false}),
    }),
    {
        name:"app-storage",
        storage:createJSONStorage(()=>Asyncstorage),
    }
))