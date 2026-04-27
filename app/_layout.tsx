import { useColorScheme } from '@/hooks/use-color-scheme';
import CustomSplashScreen from "@/screens/customSplashScreen";
import { useAppStore } from "@/store/app-store";
import { Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from "expo-font";
import { Stack, useRouter, useSegments } from 'expo-router'; // Removed Redirect, added hooks
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
    anchor: '(app)',
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

    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (!loaded) return;
        console.log("root rendered")
        SplashScreen.hideAsync();

        const inAuthGroup = segments[0] === '(auth)';
        const inOnboarding = segments[0] === 'onboarding';
        const inForgotPassword = segments[0] === "forgotpassword";

        if (!hasSeenOnboarding && !inOnboarding) {
            router.replace('/onboarding');
        } else if (hasSeenOnboarding && !isAuthenticated && !inAuthGroup && !inForgotPassword) {
            router.replace('/(auth)');
        } else if (hasSeenOnboarding && isAuthenticated && (inAuthGroup || inOnboarding)) {
            router.replace("/(app)/(tabs)/index");
        }
    }, [loaded, hasSeenOnboarding, isAuthenticated, segments]);

    if (!loaded) {
        return <CustomSplashScreen />;
    }

    return <RootApp />;
}

const RootApp = () => {
    const colorScheme = useColorScheme();

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="onboarding" options={{ headerShown: false }} />
                <Stack.Screen name="forgotpassword" options={{ headerShown: false }} />
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
            </Stack>
            <StatusBar style="auto" />
        </ThemeProvider>
    );
}