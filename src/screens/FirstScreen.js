import { View, Text, StyleSheet, Dimensions,ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { animeImage } from '../../assets';

const { width, height } = Dimensions.get('window');

const FirstScreen = ({ navigation }) => {

    const ButtonView = () => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('DrawerNavigations')}style={styles.btnView}>
                    <Text style={styles.textbtn}>Let's Get Started</Text>
            </TouchableOpacity>
        )
    }
    
    return (
        <ImageBackground source={animeImage} style={styles.backgroundImage} >
            <View style={styles.overlay}>
                <View style={styles.TextView}>
                    <Text style={styles.textAnime}>Anime Flix</Text>
                </View>
               <ButtonView/>
            </View>
        </ImageBackground>
    )
}

export default FirstScreen

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "black"
    },
    TextView: {
        width: (width),
        height: (height * 60 / 100),
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnView: {
        width: (width*80/100),
        height: (height * 8 / 100),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"#B69769",
        borderRadius:20,
    },
    textAnime:{
        fontSize: 32,
        fontWeight:"800",
        color: "white",
    },
    textbtn:{
        fontSize: 18,
        fontWeight:"400",
        color: "white",
    },
    containerList: {
        width: (width * 90 / 100),
        height: (height * 2 / 100),
        // backgroundColor: "white"
    },
    overlay: {
        flex: 1,
        backgroundColor:'rgba(0,0,0,0.7)',
        alignItems: 'center',
        justifyContent: 'center',
    },
})