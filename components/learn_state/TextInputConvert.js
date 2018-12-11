import React, {Component} from 'react'
import {View, TextInput, Text} from 'react-native'

export default class PizzaConvertor extends Component {
    static navigationOptions = {
        title: "PizzaConvertor"
    }

    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (<View style={{padding: 10}}>
            <TextInput
                style={{height: 40}}
                placeholder="Type here to translate"
                onChangeText={(text) => {
                    this.setState(()=>{
                        return {text: text}
                    })
                }}
            />
            <Text style={{fontSize: 42, padding: 10}}>
                {/*js 代码块不会自动return*/}
                {this.state.text.split(' ').map((word) => { return word && '🍕'}).join(' ')}
            </Text>
        </View>);
        /*<View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>*/
    }

};