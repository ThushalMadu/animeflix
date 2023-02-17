import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AiringView = () => {
  return (
    <View style={styles.container}>
      <Text>AiringView</Text>
    </View>
  )
}

export default AiringView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "black"
},
})