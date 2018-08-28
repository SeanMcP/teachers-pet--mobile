import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: 'paused',
            time: props.time
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.time}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
    },
})