import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';

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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    btn_items: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#aaeeFF',
    }
});