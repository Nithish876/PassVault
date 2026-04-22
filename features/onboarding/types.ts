import {StyleProp, ViewStyle} from "react-native";

export type SlideItem = {
    id: number;
    index?: number;
    title: string;
    handleNext?: () => void;
    description: string;
    image: any;
};

export interface ThemedButtonProps {
    onPress: ()=>void;
    label: string;
    icon?: any;
    buttonStyle?: StyleProp<ViewStyle>;
}
