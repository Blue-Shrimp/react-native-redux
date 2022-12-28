import React from 'react'
import { StyleSheet, View, Button, SafeAreaView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { states as reduxStates, actions as reduxActions } from './state'

const ReduxScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const { redux } = useSelector(reduxStates)

  console.log('redux : ', redux)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Button title="HomeScreen 이동" onPress={() => navigation.navigate('HomeScreen')} />
        <Button
          title="redux통신"
          onPress={() =>
            dispatch(
              reduxActions.checkRedux({
                check: 'good',
                plus: redux?.plus + 1,
              }),
            )
          }></Button>
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

export default ReduxScreen
