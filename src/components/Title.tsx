import React from 'react'
import { Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import appColors from '../../appColors'

interface Props {
    children: string
}

const Title = ({children}: Props) => {

    const {top} = useSafeAreaInsets()

    return (
        <Text 
            style={{
                marginTop: top + 20, 
                fontSize: 30, 
                fontWeight: 'bold',
                marginBottom: 20,
                color: appColors.primary
            }}
        >
            {children}
        </Text>
    )
}

export default Title
