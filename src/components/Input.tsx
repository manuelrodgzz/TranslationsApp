import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import appColors from '../../appColors'

interface Props {
    placeholder?: string,
    label?: string,
    onChangeText?: (text: string) => void
}

const Input = ({placeholder, label, onChangeText}: Props) => {

    const [focus, setFocus] = useState(false)

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput 
                style={[styles.input, focus && styles.active]} 
                placeholder={placeholder} 
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                onChangeText={onChangeText}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 15  
    },
    label: {
        fontSize: 15,
        color: appColors.quaternary
    },
    input: {
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 10,
        height: 40,
        borderColor: appColors.quaternary
    },
    active: {
        borderColor: appColors.secondary
    }
})

export default Input
