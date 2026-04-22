import React from 'react'
import {View,Text,StyleSheet} from 'react-native';
import {ThemedView} from "@/components/themed-view";
import size from "@/constants/size";
import HeroShieldIcon from '@/assets/icons/shield_splash.svg'
import {ThemedText} from "@/components/themed-text";
import {Colors} from "@/constants/theme";
import {Ionicons} from "@expo/vector-icons";
import ShieldChipIcon from '@/assets/icons/shield_chip.svg'
const CustomSplashScreen = () => {
    return(
        <ThemedView style={styles.container}>
            <View style={styles.content}>
                <HeroShieldIcon width={size.btnLg*1.5} height={size.btnLg*1.5} />
                <ThemedText style={styles.title}>PassVault</ThemedText>
                <Text style={styles.tagline}>Secure.&nbsp;Simple.&nbsp;Yours.</Text>
            </View>



            {/*    Loader */}

            {/*    marketing chip */}
                <View style={styles.badge}>
                    <ShieldChipIcon width={size.lg}  height={size.lg} />
                    <Text style={styles.badgeText}>{"AES-256 ENCRYPTED"}</Text>
                </View>
        </ThemedView>
    )
}

export default CustomSplashScreen;

const styles = StyleSheet.create({
    container:{
        flex:1 ,
        justifyContent:'center',
        alignItems:'center',
        padding: size.cardPadding
    },
    content: {
        display: 'flex',
        justifyContent:'center',
        gap:size.sm,
        alignItems: 'center'
    },
    title:{
        fontSize:size.text2xl,
        fontFamily:'PoppinsBold'
    },
    tagline: {
        fontSize:size.textLg,
        color:Colors.textGray
    },
    badge:{
        position: "absolute",
        bottom:size.btnLg,
        display:'flex',
        width:size.lg*13,
        alignSelf: "center",
        gap:size.sm,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:size.radiusLg,
        backgroundColor:Colors.background,
        paddingVertical:size.sm,
        paddingHorizontal:size.xl
    },
    badgeText:{
        color:Colors.primary,
        fontFamily:'PoppinsBold',
        fontSize:size.textSm,
    }
})