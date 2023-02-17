import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'


const { width, height } = Dimensions.get('window');

const SingleAnime = (props) => {
    return (
        <View key={props.anime.mal_id} style={styles.mainContainer}>
            <View style={styles.imageContainer}>
                <Image style={styles.customize_image} source={{ uri: props.anime.images.jpg.image_url }} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textAnime}>{props.anime.title_english}</Text>
                <Text style={styles.textAnime}>{props.anime.rank}</Text>
            </View>
        </View>
    )
}

export default SingleAnime

const styles = StyleSheet.create({
    mainContainer: {
        width: (width * 40 / 100),
        height: (height * 25 / 100),
        justifyContent: "center",
        margin: (width * 5 / 100),
        alignItems: "center",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    imageContainer: {
        width: (width * 40 / 100),
        height: (height * 20 / 100),
    },
    textContainer: {
        width: (width * 40 / 100),
        height: (height * 5 / 100),
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    customize_image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    textAnime:{
        fontSize: 14,
        fontWeight:"400",
        color: "white",
    },
})