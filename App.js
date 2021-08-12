import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Transaction from './screens/bookTransactionScreen'
import Search from './screens/searchScreen'

export default class App extends React.Component {
  render(){
    return(
      <View style={styles.container}>
      <AppContainer/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

var tabNavigator = createBottomTabNavigator({
  Transaction:{screen:Transaction},
  Search:{screen:Search}
})

const AppContainer = createAppContainer(tabNavigator)