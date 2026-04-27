import Asyncstorage from "@react-native-async-storage/async-storage";
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface loginWithEmail{
    email:string;
    password:string;
}
export interface signupWithEmailPassowrd{
    email:string;
    password:string;
    fullName:string;
}
type AppState = {
    hasSeenOnboarding:boolean;
    setSeenOnboarding:()=>void;

    isAuthenticated:boolean;
    signWithEmailPassword:(params:signupWithEmailPassowrd)=>void;
    loginWithEmail:(params:loginWithEmail)=>void;
    logout:()=>void;
}


export const useAppStore = create<AppState>()(persist(
    (set)=>({
        hasSeenOnboarding: false,
        setSeenOnboarding : ()=>set({hasSeenOnboarding: true}),

        isAuthenticated:false,
        signWithEmailPassword:(params)=>set({isAuthenticated:true}),
        loginWithEmail:(params)=>set({isAuthenticated: true}),
        logout:()=>set({isAuthenticated: false}),
    }),
    {
        name:"app-storage",
        storage:createJSONStorage(()=>Asyncstorage),
    }
))