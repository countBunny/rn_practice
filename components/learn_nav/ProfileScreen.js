import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Greeting from "../learn_props/GreetingComponent";

export default class HomeScreen extends Component {
    render() {
        const {navigation} = this.props;
        const passedName = navigation.getParam('name','No Name Passed!')
        return (
            <View style={{ alignItems: 'center' }}>
                <Greeting name={"first name passed here " + passedName} />
                <Greeting name='Jaina' />
                <Greeting name='Valeera' />
                <Button
                    title="Go back to previous"
                    onPress={
                        () => {
                            this.props.navigation.goBack();
                        }
                    }
                />
            </View>

        );
    }
}