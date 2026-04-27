import React from 'react';
import { TextInput, StyleSheet, TextInputProps, View, Pressable } from "react-native";
import size from "@/constants/size";
import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";

export interface AppTextInputProps extends TextInputProps {
  leftIcon?: React.ReactNode;
}

const AppTextInput = (props: AppTextInputProps) => {
     const { secureTextEntry, style,leftIcon,   ...restProps } = props;

     const [passwordVisible, setPasswordVisible] = React.useState(false);

    return (
        <View style={styles.inputWrapper}>
          {leftIcon && (
                          <View style={styles.leftIconContainer}>
                              {leftIcon}
                          </View>
                      )}
            <TextInput
                {...restProps}
                 secureTextEntry={secureTextEntry && !passwordVisible}
                style={[
                  styles.container,
                  leftIcon as boolean && styles.inputWithLeftIcon,
                    secureTextEntry && styles.inputWithIcon,
                    style
                ]}
            />
            {secureTextEntry && (
                <Pressable
                    onPress={() => setPasswordVisible(prev => !prev)}
                    style={styles.icon}
                >
                    <Ionicons
                        name={passwordVisible ? "eye-outline" : "eye-off-outline"}
                        color={'gray'}
                        size={24}
                    />
                </Pressable>
            )}
        </View>
    );
}

export default AppTextInput;

const styles = StyleSheet.create({
    inputWrapper: {
        justifyContent: 'center',
    },
    container: {
      elevation: 1,
      shadowRadius:8,
        borderRadius: size.radiusMd,
        padding: size.cardPadding,
        backgroundColor: 'white',
  },
  leftIconContainer: {
          position: "absolute",
          left: size.sm,
          zIndex: 1, // Ensure it stays above the TextInput
      },
    inputWithIcon: {
        paddingRight: 50,
  },
  inputWithRightIcon: {
          paddingRight: 50,
      },
      // 4. New: Padding to make room for the left icon
      inputWithLeftIcon: {
          paddingLeft: 45,
      },
    icon: {
        position: "absolute",
        right: size.sm,
        padding: 4,
    }
});
