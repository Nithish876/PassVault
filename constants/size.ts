import { Dimensions, PixelRatio, Platform, StatusBar } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

// Base guideline sizes (designed from common mobile screen)
const guidelineBaseWidth = 375; // iPhone X width
const guidelineBaseHeight = 812; // iPhone X height

/**
 * Scale based on screen width
 */
const scale = (size: number): number =>
    (SCREEN_WIDTH / guidelineBaseWidth) * size;

/**
 * Scale based on screen height
 */
const verticalScale = (size: number): number =>
    (SCREEN_HEIGHT / guidelineBaseHeight) * size;

/**
 * Moderate scale (best for fonts / spacing)
 */
const moderateScale = (size: number, factor = 0.5): number =>
    size + (scale(size) - size) * factor;

/**
 * Normalize font sizes for all densities
 */
const normalize = (size: number): number => {
    const newSize = moderateScale(size);

    if (Platform.OS === "ios") {
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    }

    return Math.round(
        PixelRatio.roundToNearestPixel(newSize)
    ) - 1;
};

export const Size = {
    // Screen
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,

    // Device checks
    isSmallDevice: SCREEN_WIDTH < 360,
    isTablet: SCREEN_WIDTH >= 768,

    // Scaling helpers
    scale,
    verticalScale,
    moderateScale,
    normalize,

    // Radius
    radiusXs: moderateScale(4),
    radiusSm: moderateScale(8),
    radiusMd: moderateScale(12),
    radiusLg: moderateScale(18),
    radiusXl: moderateScale(24),
    radiusFull: 999,

    // Padding / Margin
    xs: moderateScale(4),
    sm: moderateScale(8),
    md: moderateScale(12),
    lg: moderateScale(16),
    xl: moderateScale(20),
    xxl: moderateScale(28),
    xxxl: moderateScale(36),

    // Font Sizes
    textXs: normalize(10),
    textSm: normalize(12),
    textMd: normalize(14),
    textLg: normalize(16),
    textXl: normalize(20),
    text2xl: normalize(24),
    text3xl: normalize(30),

    // Icon Sizes
    iconXs: moderateScale(14),
    iconSm: moderateScale(18),
    iconMd: moderateScale(22),
    iconLg: moderateScale(28),
    iconXl: moderateScale(34),

    // Button Heights
    btnSm: verticalScale(38),
    btnMd: verticalScale(48),
    btnLg: verticalScale(56),

    // Inputs
    inputHeight: verticalScale(52),

    // Card Sizes
    cardPadding: moderateScale(16),
    cardRadius: moderateScale(18),

    // Header
    headerHeight:
        Platform.OS === "ios"
            ? verticalScale(88)
            : verticalScale(60) + (StatusBar.currentHeight || 0),

    // Safe area spacing helper
    topSpace:
        Platform.OS === "android"
            ? StatusBar.currentHeight || 0
            : verticalScale(12),
};

export default Size;