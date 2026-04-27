import PasswordResetIcon from '@/assets/icons/forget_password_icon.svg';
import AppTextInput from '@/components/appTextInput';
import { ThemedText } from '@/components/themed-text';
import Size from '@/constants/size';
import { Colors } from '@/constants/theme';
import ThemedButton from '@/features/onboarding/components/ThemedButton';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export interface ForgotPasswordScreenProps {

}

const ForgotPasswordScreen = (props: ForgotPasswordScreenProps) => {
  const [email, setEmail] = useState<string>("");
  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/(auth)");
    }
  }
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Pressable onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color={"black"} />
        </Pressable>
      </View>
      <View style={styles.content}>

        <PasswordResetIcon width={100} height={100} />
        <Text style={styles.title} >Forgot Password ?</Text>
        <Text style={styles.subTitle} >{"Enter your email adress we'll send you a link to reset your password."}</Text>

        <View style={styles.inputGroup}>
          <View style={styles.inputContainer}>
            <View style={styles.inputLabelContainer}>
              <ThemedText>Email Address</ThemedText>
            </View>
            <AppTextInput
              leftIcon={<Ionicons name="mail-outline" size={24} color={"gray"} />}
              placeholderTextColor={"gray"}
              style={{fontFamily:"PoppinsRegular"}}
              placeholder={"Enter you email"}
            />
          </View>

          <ThemedButton label='Send Reset Link' onPress={() => { console.log("send reset link :)") }} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: Size.md
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: Size.sm
  },
  content: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: Size.md,
    flex: 1,
  },
  title: {
    fontFamily: "PoppinsBold",
    fontSize: Size.text2xl,
    marginTop: Size.xxxl
  },
  subTitle: {
    fontSize: Size.textMd,
    fontFamily: "poppinsRegular",
    paddingHorizontal: Size.lg,
    color: Colors.textGray,
    marginVertical: Size.md,
    textAlign: 'center'
  },
  inputGroup: {
    width: '100%'
  },
  inputLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    flexDirection: 'column',
    gap: Size.md,
    flexShrink: 0,
    marginVertical: Size.xl
  },
})
