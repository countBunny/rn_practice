import React, { Component } from "react";
import { Text, View } from "react-native";

export default class GreetingComponent extends Component {
    render() {
        return (
            <View style={{alignItems:'center'}}>
                <Text>Hello {this.props.name}!</Text>
            </View>
        );
    }
}