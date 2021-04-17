import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

interface Props {
    title: string,
    description: string
}

const screenHeight = Dimensions.get('screen').height

const Card = ({title, description}: Props) => {
    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardDescription}>{description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        width: '100%',
        height: screenHeight * 0.15,
        borderColor: 'black',
        borderRadius: 6,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    cardTitle: {
        fontSize: 17,
        fontWeight: '600',
        marginBottom: 5
    },
    cardDescription: {
        fontWeight: '300'
    }
})

export default Card
