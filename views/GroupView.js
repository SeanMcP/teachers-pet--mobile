import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ViewHeaderLayout from '../components/layout/ViewHeaderLayout';

export default class GroupView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            groups: '',
            perGroup: '',
            total: '',
        }
    }

    render() {
        return (
            <ViewHeaderLayout
                handleBack={this.props.handleSetMode('home')}
                title="Group Maker"
            >
                <View style={styles.container}>
                </View>
            </ViewHeaderLayout>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        padding: 16,
        width: '100%',
    },
});