import React from "react"
import CustomSplashScreen from "@/screens/customSplashScreen";
import {View} from "react-native";
import ThemedButton from "@/features/onboarding/components/ThemedButton";
import OnboardingScreen from "@/features/onboarding/onboardingScreen";


const HomeScreen = () => {
  return (
      <View style={{flex:1,justifyContent:'center',alignItems:"center"}}>
    <OnboardingScreen />
      </View>
  )
}
export default HomeScreen;