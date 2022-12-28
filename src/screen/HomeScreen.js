import React from 'react'
import { StyleSheet, View, Button, SafeAreaView } from 'react-native'

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Button title="ReduxScreen 이동" onPress={() => navigation.navigate('ReduxScreen')} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
})

export default HomeScreen
