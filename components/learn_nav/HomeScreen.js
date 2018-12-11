import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import TouchExample from "../learn_state/TouchScreen";

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: "Welcome",
    };
    render() {
        return (
            <View style={styles.container}>
                <Button
                    style={styles.btn_items}
                    title="Go to Jane's profile"
                    onPress={
                        () => {
                            this.props.navigation.navigate('Profile', {
                                name: 'Jane',
                            })
                        }
                    }
                />
                <Button
                    style={styles.btn_items}
                    title="got to BlinkPage"
                    onPress={
                        () => {
                            this.props.navigation.navigate('BlinkScreen')
                        }
                    }
                />
                <Button
                    style={styles.btn_items}
                    title="Go to Film List"
                    onPress={
                        () => {
                            this.props.navigation.navigate('FilmPage')
                        }
                    }

                />
                <Button
                    style={styles.btn_items}
                    title="Go to pizza convertor"
                    onPress={
                        () => {
                            this.props.navigation.navigate('PizzaPage')
                        }
                    }

                />
                <Button
                    style={styles.btn_items}
                    title="Go to tap button"
                    onPress={
                        () => {
                            this.props.navigation.navigate('TouchScreen')
                        }
                    }

                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        flexDirection:'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    btn_items: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#aaeeFF',
    }
});