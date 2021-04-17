import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import appColors from '../../appColors'

interface Props {
    text: string,
    onPress?: () => void
}

const Button = ({text, onPress}: Props) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: appColors.primary,
        height: 30,
        justifyContent: 'center'
    },
    text: {
        color: appColors.tertiary,
        alignSelf: 'center'
    }
})

export default Button
