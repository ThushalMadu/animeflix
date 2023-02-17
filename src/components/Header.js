import { StyleSheet, Dimensions, TouchableOpacity, View, TextInput } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
const { width, height } = Dimensions.get('window');

const Header = ({ onPressMenu, number, isContainSearch, onChangeText, value }) => {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={onPressMenu} style={styles.headerLeftContainer}>
                <Ionicons
                    name={'menu-outline'}
                    size={40}
                    color={"#B69769"}
                />
            </TouchableOpacity>
            <View style={styles.headerCenterContainer}>
                {isContainSearch ? (
                    <TextInput
                        style={styles.input}
                        value={value}
                        placeholder="Serach Anime Here"
                        keyboardType="text"
                        onChangeText={onChangeText}
                    />
                ) : (
                    null
                )}

            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        width: (width * 90 / 100),
        height: (height * 6 / 100),
        justifyContent: "center",
        margin: (width * 5 / 100),
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "black"
    },
    headerLeftContainer: {
        flex: 1,
    },
    headerCenterContainer: {
        flex: 4,
        marginRight: 10
    },
    input: {
        height: (height * 6 / 100),
        borderRadius: 15,
        padding: 10,
        borderWidth: 1,
        borderColor: "#B69769"
    },
})