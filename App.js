import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { default as HomeScreen } from './src/screen/HomeScreen'
import { default as ReduxScreen } from './src/screen/redux/ReduxScreen'
import createStore from '@stores'

const App = () => {
  const Stack = createStackNavigator()

  const store = createStore()

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: 'black',
                borderBottomColor: 'black',
                shadowColor: 'black',
              },
              headerTintColor: 'white',
            }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="ReduxScreen" component={ReduxScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  )
}

export default App
