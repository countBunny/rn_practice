import React, { Component } from 'react';
import { Animated, Text, View, Easing } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class FadeInView extends Component {
    state = {
        fadeAnim: new Animated.Value(0),//初始值设置为0
    }

    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 1,
                easing: Easing.back(), //not support by native module
                duration: 2000,
                useNativeDriver: false, //启用原生驱动
                isInteraction: false, //仅展示动画，不影响用户交互
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
                    {
                        translateY: this.state.fadeAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [150, 0],
                        }),
                    },
                    {
                        rotateY: this.state.fadeAnim.interpolate({
                            inputRange: [0, 1],
                            easing: Easing.bounce,
                            outputRange: ["0deg", "360deg"],
                            extrapolate: "extend",
                            extrapolateRight: "360deg",
                        })
                    },
                    { perspective: 1000 },//make sure operate on Android
                    ],

            }}
        >
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

const scrollX = new Animated.Value()
const pan = new Animated.ValueXY()

function renderScrollView() {
    return (<Animated.ScrollView
        scrollEventThrottle={1} //设置为1 确保滚动事件足够密集
        onScroll={
            Animated.event(
                [{
                    nativeEvent: {
                        contentOffset: scrollX,
                    },
                },], {//Animated.event中可以支持原生驱动
                    useNativeDriver: true
                }
            )
        }
        onPanResponderMove={
            Animated.event(
                [null, {
                    dx: pan.x,
                    dy: pan.y,
                }]
            )
        }
    ></Animated.ScrollView>)
}

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