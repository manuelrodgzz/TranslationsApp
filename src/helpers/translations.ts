import AsyncStorage from "@react-native-async-storage/async-storage"

export interface Translation {
    id: number,
    word: string,
    translation: string
}

export const getTranslations = async (): Promise<Translation[] | undefined> => {
    const translations = await AsyncStorage.getItem('translations')
    return translations ? JSON.parse(translations) : undefined
}

export const addTranslation = async (translation: {word: string, translation: string}): Promise<boolean> => {
    const currentTranslations = await getTranslations()

    try {
        if(currentTranslations)
            AsyncStorage.setItem('translations', JSON.stringify([...currentTranslations, {...translation, id: currentTranslations.length}]))
        else
            AsyncStorage.setItem('translations', JSON.stringify([{...translation, id: 0}]))

        return true
    }
    catch {
        return false
    }
}

