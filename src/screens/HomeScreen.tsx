import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import appStyles from '../../appStyles'
import Title from '../components/Title'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { Translation, getTranslations } from '../helpers/translations';
import Card from '../components/Card'
import appColors from '../../appColors'
import Button from '../components/Button'
import AsyncStorage from '@react-native-async-storage/async-storage'

const HomeScreen = () => {

    const navigation = useNavigation()
    const [translations, setTranslations] = useState<Translation[] | undefined>([])

    const retrieveTranslations = async () => {
        const data = await getTranslations()
        setTranslations(data)
    }

    const renderTranslations = () => {
        if(translations) return translations.map((translation: Translation, index: number) => (
            <View key={'translation' + translation.id} style={styles.cardContainer}>
                <Card 
                    title={translation.word} 
                    description={translation.translation}
                />
            </View>
        ))
    }

    const clearStorage = async () => {
        await AsyncStorage.clear()
        setTranslations([])
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            retrieveTranslations()
        })

        return unsubscribe
    }, [])

    return (
        <View style={{...appStyles.globalMaring, ...styles.container}}>
            <ScrollView>
                <Title>Your translations</Title>

                <Button text='DELETE STORAGE' onPress={clearStorage}/>

                <TouchableOpacity style={styles.addButon} activeOpacity={0.6} onPress={() => navigation.navigate('NewTranslationScreen')}>
                    <Icon name='add-outline' size={25} color={appColors.primary}/>
                </TouchableOpacity>
                
                {renderTranslations()}


            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        alignItems: 'center',
        backgroundColor: 'green',
        
    },
    addButon: {
        borderRadius: 100,
        borderColor: appColors.primary,
        borderWidth: 1,
        alignItems: 'center',
        marginBottom: 15
    },
    cardContainer: {
        marginBottom: 10
    }
})

export default HomeScreen
