import {View,StyleSheet} from "react-native";
import {slides} from "@/features/onboarding/slides";
import OnboardingSlide from "@/features/onboarding/OnBoardingSlide";
import {useState} from "react";
import ThemedButton from "@/features/onboarding/components/ThemedButton";
import {useAppStore} from "@/store/app-store";


const OnboardingScreen = () => {
    const [index, setIndex] = useState(0);
    const setHasSeenOnboarding = useAppStore((state)=>state.setSeenOnboarding);
    const currentSlide = slides[index];
    const handleNext = () => {
        if (index < slides.length - 1) {
            setIndex(prev => prev + 1);
        } else {
            setHasSeenOnboarding();
        }
    };

    return (
        <View style={{flex:1}}>
           <OnboardingSlide {...currentSlide} handleNext={handleNext} index={index}   />
        </View>
    )
}

export default OnboardingScreen;
const styles = StyleSheet.create({})