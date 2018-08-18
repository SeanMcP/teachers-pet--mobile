import React, { Component } from 'react';
import { Button, Input, StyleSheet, Text, View } from 'react-native';
import GradeHeader from '../components/grade/GradeHeader';
import ViewHeaderLayout from '../components/layout/ViewHeaderLayout';

export default class GradeView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numberOfDecimalPlaces: 0,
            numberOfProblems: null,
            problemOptions: [],
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    render() {
        return (
            <ViewHeaderLayout
                handleBack={this.props.handleSetMode('home')}
                title="Grading Ruler"
            >
                <View style={styles.container}>
                    <GradeHeader
                        handleChange={this.handleInputChange}
                        handleClick={this.handleClick}
                        placesValue={this.state.numberOfDecimalPlaces}
                        problemsValue={this.state.numberOfProblems}
                    />
                </View>
            </ViewHeaderLayout>
        );
    }

    handleClick() {
        let number = this.state.numberOfProblems
        const options = [];

        while (number >= 0) {
            options.push(number);
            number--;
        }

        this.setState({ problemOptions: options });
    }

    handleInputChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
    },
});