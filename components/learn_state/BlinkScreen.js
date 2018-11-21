import React, { Component } from 'react'
import { Text, View } from 'react-native'

class Blink extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showText: true,
        };
        setInterval(() => {
            this.setState(previousState => {
                return {
                    showText: !previousState.showText
                }
            })
        }, 2000);
    }
    render() {
        let display = this.state.showText ? this.props.text : '';
        return (
            <View>
                <Text>{display}</Text>
            </View>
        );
    }
}

export default class BlinkPage extends Component {
    static navigationOptions={
        title: 'BlinkPage',
    };

    render() {
        return (
            <View>
                <Blink text='I love to blink' />
                <Blink text='Yes blinking is so great' />
                <Blink text='Why did they ever take this out of HTML' />
                <Blink text='Look at me look at me look at me' />
            </View>
        );
    }
}