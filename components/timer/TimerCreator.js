import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class TimerCreator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: '000000'
        }
    }

    render() {
        return (
            <View style={styles.container} >
                <Text>I am inside the modal!</Text>
                <Button
                    onPress={this.props.close}
                    title="Close"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex'
    }
})