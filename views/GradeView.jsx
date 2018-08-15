import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ViewHeaderLayout from '../components/layout/ViewHeaderLayout';

export default class GradeView extends Component {
    render() {
        return (
            <ViewHeaderLayout
                handleBack={this.props.handleSetMode('home')}
                title="Grading Ruler"
            >
                <View style={styles.container}>
                    Hello from GradeView!
                </View>
            </ViewHeaderLayout>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'grid',
    },
});