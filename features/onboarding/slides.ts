import {SlideItem} from "@/features/onboarding/types";
import SyncIcon from  "@/assets/icons/cloud_sync_icon.svg"
import GenIcon from  "@/assets/icons/password_gen_icon.svg"
import SecretVaultIcon from "@/assets/icons/hero_shield_icon.svg"
export const slides:SlideItem[] = [
    {
        id: 1,
        image: SyncIcon,
        title:"Sync Everywhere",
        description:"Access your password on all your devices. Your data is encrypted and updated in real-time.",
    },
    {
        id:2,
        image:GenIcon,
        title:"Smart Generator",
        description:"Create unbreakable passwords in seconds with our advanced algorithm.",
    }
,
    {
        id: 3,
        image: SecretVaultIcon,
        title:"Secure Vault",
        description:"Military-Grade encryption for all your passwords. Your data never leaves your device.",
    }


]