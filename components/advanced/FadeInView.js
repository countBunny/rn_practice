import React, { Component } from 'react';
import { Animated, Text, View, Easing } from 'react-native';

class FadeInView extends Component {
    state = {
        fadeAnim: new Animated.Value(0),//初始值设置为0
    }

    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 1,
                easing: Easing.back(),
                duration: 2000,
            }
        ).start()
    }

    render() {
        let { fadeAnim } = this.state;
        return (<Animated.View
            style={{
                ...this.props.style,
                opacity: fadeAnim,
                transform: [
                    // {
                    //     translateY: this.state.fadeAnim.interpolate({
                    //         inputRange: [0, 1],
                    //         outputRange: [150, 0],
                    //     }),
                    // },
                    {
                        rotateY: this.state.fadeAnim.interpolate({
                            inputRange: [0, 1],
                            easing: Easing.bounce,
                            outputRange: ["0deg", "360deg"],
                            extrapolate: "extend",
                            extrapolateRight: "360deg",
                        })
                    }],

            }}>
            {this.props.children}
        </Animated.View>)
    }
}
//2x -> .5x
const a = new Animated.Value(1)
const b = Animated.divide(1, a)

Animated.spring(a, {
    toValue: 2,
}).start()

a.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
})

/**
 * 组合动画
 */
function compositionAnim() {
    Animated.sequence([
        Animated.decay(position,
            {
                velocity: { x: gestureState.vx, y: gestureState.vy },
                deceleration: 0.997,
            }),
        Animated.parallel([
            Animated.spring(position, {
                toValue: { x: 0, y: 0 },// return to start
            }),
            Animated.timing(twirl, {
                toValue: 360
            })
        ], {
                stopTogether: false,
            })
    ]).start()
}

export default class FadeScreen extends Component {
    static navigationOptions = {
        title: 'Animate Screen'
    }

    render() {
        return (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <FadeInView style={{ width: 250, height: 50, backgroundColor: 'powderblue' }}>
                <Text style={{ fontSize: 28, textAlign: 'center', margin: 10 }}>Fading in</Text>
            </FadeInView>
        </View>)
    }
}