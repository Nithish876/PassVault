import PassVaultLogo from '@/assets/icons/passvault_logo.svg';
import AppTextInput from "@/components/appTextInput";
import { ThemedText } from "@/components/themed-text";
import DividerWithText from '@/components/ui/divider-with-text';
import size from "@/constants/size";
import { Colors } from '@/constants/theme';
import ThemedButton from '@/features/onboarding/components/ThemedButton';
import { Ionicons } from "@expo/vector-icons";
import { router } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const LoginScreen = () => {
  const handleAuthSubmit = () => {

  }
  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }} >
      <View style={styles.container}>
        <PassVaultLogo width={size.xxxl * 4} height={size.xxxl} />
        <View style={styles.textBox}>
          <ThemedText type={"title"} style={styles.title}>Welcome Back</ThemedText>
          <ThemedText type={"default"}>Access your secure vault.</ThemedText>
        </View>




        <View style={styles.inputContainer}>
          <ThemedText>Email</ThemedText>
          <AppTextInput
            leftIcon={<Ionicons name="mail-outline" size={24} color={"gray"} />}

            placeholderTextColor={"gray"}
            placeholder={"name@company.com"}
          />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputLabelContainer}>
            <ThemedText>Password</ThemedText>
            <ThemedText type={"link"} onPress={() => router.replace("/forgotpassword")}>Forgot Password?</ThemedText>
          </View>
          <AppTextInput
            leftIcon={<Ionicons name="lock-closed-outline" size={24} color={"gray"} />}
            secureTextEntry

            placeholderTextColor={"gray"}
            placeholder={"your password"}
          />
        </View>


        <View>
          <ThemedButton buttonStyle={styles.submitButton} label="Login" onPress={handleAuthSubmit} />
        </View>
        <DividerWithText text='or signin with' showText={true} />

        {/* third party signups */}

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.externalSignupButton}>
            <Ionicons name={"logo-google"} size={24} />
            <Text>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.externalSignupButton}>
            <Ionicons name={"logo-apple"} size={24} />
            <Text>Apple</Text>
          </TouchableOpacity>
        </View>
        <Pressable style={styles.footerLink}
          onPress={() => {
            router.replace("/(auth)")
          }}>
          <ThemedText style={{ textAlign: 'center' }}>{"Don't have an account? "}<ThemedText type="link" style={{ fontSize: size.md }}>Sign Up</ThemedText> </ThemedText>

        </Pressable>
      </View>
    </SafeAreaView>
  )
}
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: size.md,
    padding: size.cardPadding
  },
  title: {
    fontFamily: "PoppinsBold"
  },
  textBox: {
    gap: size.sm,
    marginVertical: size.lg,
  },
  inputLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  inputContainer: {
    flexDirection: 'column',
    gap: size.sm,
    marginVertical: size.sm
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: size.md,
    alignItems: 'center',
    gap: size.md
  },
  externalSignupButton: {
    padding: size.sm,
    flexDirection: 'row',
    justifyContent: 'center',
    width: "45%",
    gap: 10,
    elevation: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: size.radiusMd
  },
  submitButton: {
    marginVertical: size.md,
    shadowOffset: {
      width: size.sm,
      height: size.sm
    },
    shadowRadius: size.lg,
    shadowColor: Colors.primary,
    shadowOpacity: .4,
  },
  footerLink: {
  }
})
