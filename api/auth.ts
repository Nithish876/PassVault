import { loginWithEmail, signupWithEmailPassowrd } from "@/store/app-store";

const BASE_API_URL = process.env.EXPO_BASE_API_URL || "http://localhost:3001";

export const AuthApi = {
    loginWithEmailPassword: async (credentials: loginWithEmail) => {
        const response = await fetch(`${BASE_API_URL}/login/email-password`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials),
        });
        if (!response.ok) throw new Error('Login failed');
        return response.json();
    },
    signUpWithEmailPassword: async (credentials: signupWithEmailPassowrd) => {
        const response = await fetch(`${BASE_API_URL}/signup/email-password`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials),
        });
        if (!response.ok) throw new Error('SignUp failed');
        return response.json();
    }
}