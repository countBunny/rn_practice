import React, {Component} from 'react'
import {View, Button, StyleSheet, Alert} from 'react-native'

export default class TouchExample extends Component {
    static navigationOptions = {
        title: 'Touch Screen'
    }

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (<View style={this.styles.container}>
            <View style={this.styles.buttonContainer}>
                <Button title="Press Me" onPress={this._tapButton}/>
            </View>
            <View style={this.styles.buttonContainer}>
                <Button color="#841484" title="Press Me" onPress={this._tapButton}/>
            </View>
            <View style={this.styles.alternativeLayoutButtonContainer}>
                <Button title="This looks great!" onPress={this._tapButton}/>
                <Button title="OK!" color="#841584" onPress={this._tapButton}/>
            </View>
        </View>);
    }

    _tapButton() {
        Alert.alert("you tapped the button!")
    }

    const
    styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
        },
        buttonContainer:{
            margin: 20
        },
        alternativeLayoutButtonContainer:{
            margin: 20,
            flexDirection: 'row',
            justifyContent: 'space-between'
        }
    })
};