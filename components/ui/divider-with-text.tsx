import Size from '@/constants/size';
import React from 'react'
import { StyleSheet, View,Text } from 'react-native'

export interface DividerWithTextProps{
  text: string;
  showText?: boolean;
}

const DividerWithText = (props: DividerWithTextProps) => {
  const { showText, text } = props;
  return (
    <View style={styles.container}>
      <View style={styles.divider}></View>
      {showText && <Text style={styles.text}>{ text}</Text>}
      <View style={styles.divider}></View>

    </View>
  )
}

export default DividerWithText;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: Size.md,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: Size.md,
    color: 'gray',
    marginHorizontal:Size.sm,
    fontFamily:'PoppinsRegular'
  },
  divider: {
    width: "20%",
    borderWidth: .8,
    borderColor:"gray "
  }
})
