import Size from "@/constants/size";
import { StyleSheet, Text, View } from "react-native";
import { SlideItem } from "./types";
import {slides} from "@/features/onboarding/slides";
import ThemedButton from "@/features/onboarding/components/ThemedButton";
import size from "@/constants/size";
import {AntDesign, FontAwesome, Ionicons} from "@expo/vector-icons";

export default function OnboardingSlide(item:SlideItem) {
  const {index} = item;
  return (
    <View style={styles.slide}>
      <View style={styles.content}>
      <item.image width={Size.xxxl*8}  height={Size.xxxl*8} />

      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.description}</Text>
      </View>
      <View style={{ flexDirection: "row", gap: 8 }}>
        {slides.map((_, i) => (
            <View
                key={i}
                style={{
                  width: i === index ? 20 : 8,
                  height: 8,
                  borderRadius: size.radiusLg,
                  backgroundColor: i === index ? "#4F46E5" : "#E2E8F0",
                }}
            />
        ))}
      </View>
    {/*  next button */}
      <ThemedButton onPress={item.handleNext!} icon={index! >0 && <FontAwesome name="long-arrow-right" style={{
          marginLeft:size.md
      }} size={20} color="white" /> }  buttonStyle={styles.button} label={item.index! <=0?"Get Started":"Next"}/>
    </View>
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor:'white',
    alignItems: "center",
    padding: 24,
  },
  content:{
    justifyContent: "center",
    alignItems: "center",
    gap:size.md,
    padding:size.cardPadding
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 10,
  },
  button:{
    position: "absolute",
    bottom: size.lg*3,
    width:"100%"
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
  },
});