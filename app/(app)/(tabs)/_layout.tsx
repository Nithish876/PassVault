import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import size from "@/constants/size";
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarLabelStyle: {
          textAlign: 'center',
          fontSize: 10,
        },
        tabBarStyle: {
          position: 'absolute',
          bottom: 24,
          width: "90%",
          alignSelf: "center",
          alignContent: "center",
          elevation: 0,
          shadowColor: '#000',
          marginHorizontal: "5%",
          height: 70,
          paddingTop: 8,
          borderRadius: size.radiusLg * 5,
        },
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => <Ionicons size={24} name={focused ? "home" : "home-outline"} color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Vault',
          tabBarIcon: ({ color, focused }) => <Ionicons size={24} name={focused ? "document-lock" : "document-lock-outline"} color={color} />,
        }}
      />

      <Tabs.Screen
        name="generator"
        options={{
          title: 'Generator',
          tabBarIcon: ({ color, focused }) => <Ionicons size={24} name={focused ? "lock-closed" : "lock-closed-outline"} color={color} />,
        }}
      />


      <Tabs.Screen
        name="security"
        options={{
          title: 'Security',
          tabBarIcon: ({ color, focused }) => <Ionicons size={24} name={focused ? "shield" : "shield-outline"} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, focused }) => <Ionicons size={24} name={focused ? "settings" : "settings-outline"} color={color} />,
        }}
      />

    </Tabs>
  );
}
