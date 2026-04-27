import React from 'react'
import {Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import size from "@/constants/size";
import {ThemedButtonProps} from "@/features/onboarding/types";
import {Colors} from "@/constants/theme";


const ThemedButton = (props:ThemedButtonProps)=>{
    return(
        <TouchableOpacity
            onPress={props.onPress}
            style={[styles.buttonContainer,props.buttonStyle]}
        >
            <Text style={styles.label} > {props.label}</Text>
            {props.icon && props.icon}
        </TouchableOpacity>
    )
}

export default  ThemedButton;

const styles= StyleSheet.create({
    buttonContainer: {
        borderRadius:size.radiusMd,
        backgroundColor:Colors.primary,
        paddingVertical:size.cardPadding,
        paddingHorizontal:size.cardPadding,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },
    label:{
        color:'white',
        fontSize:size.lg,
        textAlign:'center',
    }
})
