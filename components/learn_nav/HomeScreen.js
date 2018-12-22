import React, {Component} from 'react';
import {View, StyleSheet, Button, ScrollView} from 'react-native';
import TouchExample from "../learn_state/TouchScreen";

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: "Welcome",
    };

    render() {
        return (
            <ScrollView>
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
                </View>
                <View style={styles.container}>
                    <Button
                        style={styles.btn_items}
                        title="got to BlinkPage"
                        onPress={
                            () => {
                                this.props.navigation.navigate('BlinkScreen')
                            }
                        }
                    />
                </View>
                <View style={styles.container}>
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
                <View style={styles.container}>
                    <Button
                        style={styles.btn_items}
                        title="Go to pizza convertor"
                        onPress={
                            () => {
                                this.props.navigation.navigate('PizzaPage')
                            }
                        }

                    />
                </View>
                <View style={styles.container}>
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
                <View style={styles.container}>
                    <Button
                        style={styles.btn_items}
                        title="Go to flatList"
                        onPress={
                            () => {
                                this.props.navigation.navigate('FlatListScreen')
                            }
                        }

                    />
                </View>
                <View style={styles.container}>
                    <Button
                        style={styles.btn_items}
                        title="Go to SectionList"
                        onPress={
                            () => {
                                this.props.navigation.navigate('SectionListScreen')
                            }
                        }

                    />
                </View>

                <View style={styles.container}>
                    <Button
                        style={styles.btn_items}
                        title="Go to FetchExample"
                        onPress={
                            () => {
                                this.props.navigation.navigate('FetchExample')
                            }
                        }

                    />
                </View>
                <View style={styles.container}>
                    <Button
                        style={styles.btn_items}
                        title="Go to LoadImage"
                        onPress={
                            () => {
                                this.props.navigation.navigate('LoadImage')
                            }
                        }

                    />
                </View>
                <View style={styles.container}>
                    <Button
                        style={styles.btn_items}
                        title="Go to Fade anim"
                        onPress={
                            () => {
                                this.props.navigation.navigate('FadeScreen')
                            }
                        }
                    />
                </View>


            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    btn_items: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#aaeeFF',
    }
});