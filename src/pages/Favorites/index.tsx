import React from 'react'
import { View, ScrollView } from 'react-native'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

import styles from './style'

function Favorites() {
    return (
        <View>
            <PageHeader title="Meus Proffys Favoritos" />

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>
        </View>
    )
}

export default Favorites
