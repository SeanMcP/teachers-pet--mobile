import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: 'paused',
            timeInSec: props.timeInSec
        }

        this.reset = this.reset.bind(this);
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.tick = this.tick.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                {this.formatTime(this.state.timeInSec)}
                <Button
                    onPress={this.start}
                    title="Start"
                />
                <Button
                    onPress={this.stop}
                    title="Stop"
                />
                <Button
                    onPress={this.reset}
                    title="Reset"
                />
            </View>
        )
    }

    formatTime(seconds) {
        let hour, min, sec;
        if (seconds > 3600) {
            hour = Math.floor(seconds / 3600);
            min = Math.floor((seconds - hour * 3600) / 60);
            sec = seconds - (hour * 3600) - (min * 60);
        } else if (seconds > 60) {
            hour = Math.floor(seconds / 60)
            sec = seconds - (min * 60);
        }

        return (
            <View style={styles.timeDisplay}>
                {hour ? <Text>{hour}:</Text> : null}
                {min ? <Text>{min}:</Text> : null}
                {sec ? <Text>{sec}</Text> : <Text>{seconds}</Text>}
            </View>
        )
    }

    reset() {
        this.stop();
        this.setState({ timeInSec: this.props.time });
    }

    start() {
        this.timer = setInterval(this.tick, 1000);
        this.setState({ status: 'active' });
    }

    stop() {
        clearInterval(this.timer);
        this.setState({ status: 'paused' });
    }

    tick() {
        this.setState(prevState => ({ timeInSec: prevState.timeInSec - 1 }));
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
    },
    timeDisplay: {
        display: 'flex',
        flexDirection: 'row'
    },
    timeSecs: {
        fontWeight: 'bold'
    }
})