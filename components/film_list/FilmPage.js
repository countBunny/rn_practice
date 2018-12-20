import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { netOperator } from "../learn_net/NetOperator";

/**
 * 为了避免骚扰，我们用了一个样例数据来替代Rotten Tomatoes的API
 * 请求，这个样例数据放在React Native的Github库中。
 * 当然，由于众所周知的原因，这个地址可能国内访问也比较困难。
 */
var REQUEST_URL =
    "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

export default class FilmPage extends Component {
    static navigationOptions = {
        title: "Film List",
    };

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            loaded: false,
        }
        this.fetchData = this.fetchData.bind(this)
    }

    fetchData() {
        netOperator.offer(REQUEST_URL, (responseData) => {
            this.setState({
                //使用了数组的 concat 方法生成新数组，不能直接在原数组上 push！
                data: this.state.data.concat(responseData.movies),
                loaded: true,
            });
        })
    }

    componentDidMount() {
        this.fetchData()
    }
    render() {
        if (!this.state.data) {
            return this.renderLoadingView()
        }
        return (<FlatList
            data={this.state.data}
            renderItem={this.renderMovie}
            style={styles.list}
            keyExtractor={(item, index) => `$index`}
        />)
    }

    renderLoadingView() {
        return (<View style={styles.container}>
            <Text>
                正在加载电影数据...
            </Text>
        </View>)
    }
    renderMovie({ item }) {
        //{ item }是一种“解构”写法，请阅读ES2015语法的相关文档
        return (<View style={styles.container}>
            <Image
                source={{ uri: item.posters.thumbnail }}
                style={styles.thumbnail}
            />
            <View style={styles.rightContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.year}>{item.year}</Text>
            </View>
        </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    rightContainer: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    year: {
        textAlign: 'center',
    },
    thumbnail: {
        width: 53,
        height: 81
    },
    list: {
        paddingTop: 20,
        backgroundColor: '#f5fcff',
    },
});

var MOCKED_MOVIE_DATAS = [
    {
        title: "标题",
        year: 2015,
        posters: {
            thumbnail: "http://i.imgur.com/UePbdph.jpg"
        }
    }
];