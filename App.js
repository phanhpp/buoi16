import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {createStackNavigator} from 'react-navigation'
import List from './src/components/screens/List';
import Detail from './src/components/screens/Detail';
import {Card} from './src/components/common/Card'
const  wid = Dimensions.get('window').width
const  hei = Dimensions.get('window').height
export default class App extends React.Component {
  render() {
    const Main = createStackNavigator(
      {
       list: {screen : List},
       detail : {screen: Detail}
      } ,
     {headerMode : "none"}
  )
    return (
      <View style={styles.container}>
      <Main/> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: hei,
    width: wid,
  },
});
