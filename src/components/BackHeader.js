import { StyleSheet, Dimensions, TouchableOpacity, View,TextInput } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
const { width, height } = Dimensions.get('window');

const BackHeader = ({onPressBack}) => {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={onPressBack} style={styles.headerLeftContainer}>
                <Ionicons
                    name={'md-arrow-back'}
                    size={40}
                    color={"#B69769"}
                />
            </TouchableOpacity>
            <View style={styles.headerCenterContainer}>
            </View>
        </View>
    )
}

export default BackHeader

const styles = StyleSheet.create({
    headerContainer: {
        width: (width * 90 / 100),
        height: (height * 6 / 100),
        justifyContent: "center",
        margin: (width * 5 / 100),
        alignItems: "center",
        flexDirection: "row",
        backgroundColor:"black"
    },
    headerLeftContainer: {
        flex: 1,
    },
    headerCenterContainer: {
        flex: 4,
        marginRight:10
    },
})