import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Modal from '../components/common/Modal';
import Timer from '../components/timer/Timer';
import TimerCreator from '../components/timer/TimerCreator';
import ViewHeaderLayout from '../components/layout/ViewHeaderLayout';

export default class TimerView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayModal: false,
            timers: []
        }

        this.modalClose = this.modalClose.bind(this);
        this.modalOpen = this.modalOpen.bind(this);
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
                        onPress={this.modalOpen}
                        title="Add timer"
                    />
                    <Modal
                        close={this.modalClose}
                        isOpen={this.state.displayModal}
                    >
                        <TimerCreator />
                    </Modal>
                </View>
            </ViewHeaderLayout>
        )
    }

    modalClose() {
        this.setState({ displayModal: false });
    }

    modalOpen() {
        this.setState({ displayModal: true });
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
    },
})
