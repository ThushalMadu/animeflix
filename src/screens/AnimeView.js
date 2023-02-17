import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AnimeView = () => {
  return (
    <View style={styles.container}>
      <Text>AnimeView</Text>
    </View>
  )
}

export default AnimeView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "black"
},
})