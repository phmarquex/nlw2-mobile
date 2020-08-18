import React, { useState } from 'react'
import { View, Text } from 'react-native'
import {
    ScrollView,
    TextInput,
    BorderlessButton,
    RectButton
} from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

import styles from './style'

function TeacherList() {
    const [isFilterVisible, setIsFilterVisible] = useState(false)

    function renderFilters() {
        return (
            <>
                <View style={styles.searchForm}>
                    <Text style={styles.label}>Matéria</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Qual a matéria?"
                        placeholderTextColor="#c1bccc"
                    />
                </View>

                <View style={styles.inputGroup}>
                    <View style={styles.inputBlock}>
                        <Text style={styles.label}>Dia da Semana</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Qual é o dia?"
                            placeholderTextColor="#c1bccc"
                        />
                    </View>

                    <View style={styles.inputBlock}>
                        <Text style={styles.label}>Horário</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Qual Horário?"
                            placeholderTextColor="#c1bccc"
                        />
                    </View>
                </View>
                <RectButton style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>Filtrar</Text>
                </RectButton>
            </>
        )
    }

    function handleToggleFilter() {
        setIsFilterVisible(!isFilterVisible)
    }

    return (
        <View>
            <PageHeader
                title="Proffys Disponíveis"
                headerRight={
                    <BorderlessButton onPress={handleToggleFilter}>
                        <Feather name="filter" size={20} color="#FFF" />
                    </BorderlessButton>
                }>
                {isFilterVisible && renderFilters()}
            </PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}>
                <TeacherItem />
            </ScrollView>
        </View>
    )
}

export default TeacherList
