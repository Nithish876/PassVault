// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import {Redirect, Stack} from 'expo-router';
// import { StatusBar } from 'expo-status-bar';
// import 'react-native-reanimated';
// import {useEffect} from 'react';
// import { useColorScheme } from '@/hooks/use-color-scheme';
// import * as SplashScreen from "expo-splash-screen";
// import {useFonts} from "expo-font";
// import CustomSplashScreen from "@/screens/customSplashScreen";
// import {Poppins_400Regular, Poppins_500Medium, Poppins_700Bold} from "@expo-google-fonts/poppins";
// import {useAppStore} from "@/store/app-store";
//
// SplashScreen.hideAsync();
//
// export const unstable_settings = {
//   anchor: '(tabs)',
// };
// export default function RootLayout() {
//     const [loaded, error] = useFonts({
//         PoppinsRegular: Poppins_400Regular,
//         PoppinsMedium: Poppins_500Medium,
//         PoppinsBold: Poppins_700Bold,
//     });
//     const hasSeenOnboarding= useAppStore((state)=>state.hasSeenOnboarding);
//     const isAuthenticated = useAppStore((state)=>state.isAuthenticated);
//     // useEffect(() => {
//     //     if (loaded || error) {
//     //         SplashScreen.hideAsync();
//     //     }
//     // }, [loaded, error]);
//
//     if(!loaded || error) {
//         return <CustomSplashScreen />
//     }
//     if (error) throw error;
//     if (!hasSeenOnboarding) {
//         return <Redirect href="/onboarding" />;
//     }
//     if (!isAuthenticated && hasSeenOnboarding) {
//         return <Redirect href="/(auth)" />;
//     }
//     return <RootApp />
//
// }
// const RootApp = ()=>{
//     const colorScheme = useColorScheme();
//
//     return (
//         <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//             <Stack>
//                 <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
//                 <Stack.Screen name="modal" options={{presentation: 'modal', title: 'Modal'}}/>
//             </Stack>
//             <StatusBar style="auto"/>
//         </ThemeProvider>
//     );
// }

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack, useRouter, useSegments } from 'expo-router'; // Removed Redirect, added hooks
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { useEffect } from 'react';
import { useColorScheme } from '@/hooks/use-color-scheme';
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import CustomSplashScreen from "@/screens/customSplashScreen";
import { Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useAppStore } from "@/store/app-store";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
    anchor: '(tabs)',
};

export default function RootLayout() {
    const [loaded, error] = useFonts({
        PoppinsRegular: Poppins_400Regular,
        PoppinsMedium: Poppins_500Medium,
        PoppinsBold: Poppins_700Bold,
    });

    const hasSeenOnboarding = useAppStore((state) => state.hasSeenOnboarding);
    const isAuthenticated = useAppStore((state) => state.isAuthenticated);

    const router = useRouter();
    const segments = useSegments();

    // Handle font errors
    useEffect(() => {
        if (error) throw error;
    }, [error]);

    // Centralized routing logic
    useEffect(() => {
        if (!loaded) return;

        // Hide the splash screen only after fonts have loaded
        SplashScreen.hideAsync();

        const inAuthGroup = segments[0] === '(auth)';
        const inOnboarding = segments[0] === 'onboarding';

        if (!hasSeenOnboarding && !inOnboarding) {
            // Redirect to onboarding ONLY if they aren't already there
            router.replace('/onboarding');
        } else if (hasSeenOnboarding && !isAuthenticated && !inAuthGroup) {
            // Redirect to auth ONLY if they aren't already there
            router.replace('/(auth)');
        } else if (hasSeenOnboarding && isAuthenticated && (inAuthGroup || inOnboarding)) {
            // If authenticated but sitting on an auth/onboarding screen, send to main app
            router.replace('/(tabs)');
        }
    }, [loaded, hasSeenOnboarding, isAuthenticated, segments]);

    if (!loaded) {
        return <CustomSplashScreen />;
    }

    // ALWAYS return the root structure so the router has a context to mount screens into
    return <RootApp />;
}

const RootApp = () => {
    const colorScheme = useColorScheme();

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="onboarding" options={{ headerShown: false }} />
                <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
            </Stack>
            <StatusBar style="auto" />
        </ThemeProvider>
    );
}