import OnboardingScreen from "@/features/onboarding/onboardingScreen";
import React from "react";
import { View } from "react-native";


const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
      <OnboardingScreen />
    </View>
  )
}
export default HomeScreen;