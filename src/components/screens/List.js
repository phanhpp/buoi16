import React, {Component} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity, Dimensions} from 'react-native';

import { Input,Header} from '../common'
import Detail from './Detail'

const hei= Dimensions.get('window').height;
const wid = Dimensions.get('window').width
const DATA = [
            { id: 1, name: 'John', add: 'HN', age: 18 },
            { id: 2, name: 'Jesscica', add: 'HN', age: 18 },
            { id: 3, name: 'Momo', add: 'HN' , age: 18},
            { id: 4, name: 'Mina', add: 'HN', age: 18},
            { id: 5, name: 'Anna', add: 'HN' , age: 15},
            { id: 6, name: 'Mie', add: 'HN',  age: 15},
            { id: 7, name: 'Jack', add: 'HN' , age: 15},
            { id: 8, name: 'Mike', add: 'HN', age: 15},
            { id: 9, name: 'Andy', add: 'HN', age: 15 },
            { id: 10, name: 'Hanah', add: 'HN', age: 16 },
            { id: 11, name: 'Wendy', add: 'HN' , age: 16},
            { id: 12, name: 'Christ', add: 'HN', age: 16},
            { id: 13, name: 'Nancy', add: 'HN' , age: 16},
            { id: 14, name: 'Irene', add: 'HN',  age: 16},
          
 ]
export default class List extends Component {
    state= {name: '', age: '', add: ''}
   
    render(){

        return (
            <View style = {styles.viewStyle}>   
               
        <FlatList
        data ={DATA}
        keyExtractor = { (item,i)=> `${i}`}
        scrollEnabled = {true}
        onEndReachedThreshold = {0.2}
        renderItem= {
         ({item}) => (
             <TouchableOpacity onPress ={()=> this.props.navigation.navigate('detail',{ name: item.name, add: item.add, age: item.age} )}
             style = {styles.containerStyle} >
           
             <Text style = {styles.textStyle}>Name: {item.name}</Text> 
          
            </TouchableOpacity>
         )
        } 
        /> 
         
        <View style = {styles.containStyle} >
        <Input label = {'Name'}
        placeholder= 'Name'
        onChangeText= { (txt)=> this.setState({name: txt})}/>
        <Input label = {'Age'}
        placeholder= 'Age'
        onChangeText= { (txt)=> this.setState({age: txt})}/>
        <Input label = {'Add'}
        placeholder= 'Address'
        onChangeText= { (txt)=> this.setState({add: txt})}/>
        
        
        <TouchableOpacity  style = { styles.addStyle}
                 onPress = {()=> {this.props.navigation.navigate('detail',
                  {age: this.state.age, add: this.state.add, name: this.state.name},
                   )}}>
            <Text style = {{
                borderWidth: 2,
                borderRadius: 2,
                borderColor : "black",
                alignSelf: 'center',
                padding: 3,
                fontSize: 20}}>ADD</Text>
        </TouchableOpacity>
       
        </View>
      </View>
    )
  }
}
const styles = {
    viewStyle : {
        height: hei,
        width: wid,
        marginVertical: 20,
        flex: 5,
    },
    containerStyle:{
        
     backgroundColor: "#fff",
     marginBottom: 2,
     padding: 10,
     justifyContent: 'flex-start',//
     flexDirection: 'row',//
     paddingVertical: 5,
     flex: 3,
     borderColor: '#ddd',
     

    },
    textStyle: {
        fontSize: 18,
        color: 'black',
        fontWeight: '500',
    },
    containStyle: {
        
     flex: 3,
     padding: 4,
     justifyContent: 'flex-start',//
     flexDirection: 'column',//
     
     
    },
    addStyle : {
        justifyContent:'center',
        alignItems:'center'
    }

};





