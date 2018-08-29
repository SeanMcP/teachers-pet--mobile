import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Timer from '../components/timer/Timer';
import ViewHeaderLayout from '../components/layout/ViewHeaderLayout';

export default class TimerView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            timers: []
        }
    }

    render() {
        return (
            <ViewHeaderLayout
                handleBack={this.props.handleSetMode('home')}
                title="Timer"
            >
                <View style={styles.container}>
                    <Timer timeInSec={61} />
                    <Button
                        onPress={() => null}
                        title="Add timer"
                    />
                </View>
            </ViewHeaderLayout>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
    },
})
