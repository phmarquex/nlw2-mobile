import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#e6e6f0',
        borderRadius: 8,
        marginBottom: 16,
        overflow: 'hidden'
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24
    },
    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#eee'
    },
    profileInfo: {
        marginLeft: 16
    },
    name: {
        fontFamily: 'a7',
        color: '#32264d',
        fontSize: 20
    },
    subject: {
        fontFamily: 'p4',
        color: '#6a6180',
        fontSize: 12,
        marginTop: 4
    },
    bio: {
        marginHorizontal: 24,
        fontFamily: 'p4',
        fontSize: 14,
        lineHeight: 24,
        color: '#6a6180'
    },
    footer: {
        padding: 24,
        marginTop: 24,
        backgroundColor: '#fafafc',
        alignItems: 'center'
    },
    price: {
        fontFamily: 'p4',
        color: '#6a6180',
        fontSize: 14
    },
    priceValue: {
        fontFamily: 'a7',
        color: '#8257e5',
        fontSize: 16
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    favoriteButton: {
        backgroundColor: '#8257e5',
        width: 56,
        height: 56,
        borderRadius: 8,
        marginRight: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    favorite: {
        backgroundColor: '#e33d3d'
    },
    contactButton: {
        backgroundColor: '#04d361',
        flex: 1,
        height: 56,
        borderRadius: 8,
        marginRight: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contactButtonText: {
        color: '#fff',
        fontFamily: 'a7',
        fontSize: 16,
        marginLeft: 16
    }
})

export default styles
