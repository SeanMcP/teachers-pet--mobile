import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import BasicModal from '../components/common/BasicModal';
import Timer from '../components/timer/Timer';
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
                    <BasicModal
                        close={this.modalClose}
                        isOpen={this.state.displayModal}
                    >
                        {close => (
                            <View>
                                <Text>I am inside the modal!</Text>
                                <Button
                                    onPress={close}
                                    title="Close"
                                />
                            </View>
                        )}
                    </BasicModal>
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
