import React, {Component} from 'react';
import {View, Text, Button, Image} from 'react-native';

import {Header, Card} from '../common'

class Detail extends Component {
    
    render() {
        return(
            <Card  >
               <Button
               style = {{color: 'black'}}
                title = {'Back'}
                onPress = {()=> {this.props.navigation.goBack()}}/>
               
               
               <Text>Name: {this.props.navigation.state.params.name}</Text>
               <Text>Age: {this.props.navigation.state.params.age}</Text>
               <Text>Address: {this.props.navigation.state.params.add}</Text>
               
              
             
            </Card>
        )
    }
}

export default Detail;
