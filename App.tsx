import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { AppLoading } from 'expo'
import AppStack from './src/routes/AppStack'

import {
    Archivo_400Regular as a4,
    Archivo_700Bold as a7,
    useFonts
} from '@expo-google-fonts/archivo'
import {
    Poppins_400Regular as p4,
    Poppins_600SemiBold as p6
} from '@expo-google-fonts/poppins'

export default function App() {
    let [fontsLoaded] = useFonts({
        a4,
        a7,
        p4,
        p6
    })

    if (!fontsLoaded) {
        return <AppLoading />
    } else {
        return (
            <>
                <AppStack />
                <StatusBar style="light" />
            </>
        )
    }
}
