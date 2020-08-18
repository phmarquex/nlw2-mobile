import React from 'react'
import { View, Image, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import whatsappIcon from '../../assets/images/icons/whatsapp.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'

import styles from './style'

interface TeacherItemProps {
    id: number
}

const TeacherItem: React.FC<TeacherItemProps> = ({ id }) => {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{
                        uri:
                            'https://avatars3.githubusercontent.com/u/22161225?s=460&u=fc36cc43186815ffa379de675b7ba97c96191003&v=4'
                    }}
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Paulo Marques</Text>
                    <Text style={styles.subject}>Matemática</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Doc, she's beautiful. She's crazy about me. Look at this, look
                what she wrote me, Doc. That says it all. Doc, you're my only
                hope. You know what I do in those situations?
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/Hora {'   '}
                    <Text style={styles.priceValue}>R$ 20,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorite]}>
                        {/* <Image source={heartOutlineIcon} /> */}
                        <Image source={unfavoriteIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>
                            Entrar em contato
                        </Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem
