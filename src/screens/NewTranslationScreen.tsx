import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import appStyles from '../../appStyles'
import Button from '../components/Button'
import Input from '../components/Input'
import Title from '../components/Title'
import { addTranslation } from '../helpers/translations'

const NewTranslationScreen = () => {

    const [state, setState] = useState({
        word: '',
        translation: ''
    })

    const navigation = useNavigation()

    const updateState = (value: string, key: string) => setState({...state, [key]: value})

    const saveTranslation = async () => {

        const added = await addTranslation(state)

        if(!added) {
            Alert.alert(
                'Error', 
                'Something went wrong while trying to save the translation.',
                [{text: 'OK'}]    
            )
        }
        else {
            navigation.navigate('HomeScreen')
        }
    }

    return (
        <View style={appStyles.globalMaring}>
            <Title>New Translation</Title>

            <Input label='Word/Phrase' onChangeText={(text) => updateState(text, 'word')}/>
            <Input label='Translation' onChangeText={(text) => updateState(text, 'translation')}/>

            <Button text='Save' onPress={saveTranslation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default NewTranslationScreen
