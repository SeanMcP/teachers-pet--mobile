import React, { Component } from 'react';
import { Keyboard, StyleSheet, View } from 'react-native';
import GradeBody from '../components/grade/GradeBody';
import GradeHeader from '../components/grade/GradeHeader';
import ViewHeaderLayout from '../components/layout/ViewHeaderLayout';

export default class GradeView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            decimalPlaces: '',
            options: [],
            problems: '',
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
                        placesValue={this.state.decimalPlaces}
                        problemsValue={this.state.problems}
                    />
                    <GradeBody
                        options={this.state.options}
                        places={this.state.decimalPlaces}
                    />
                </View>
            </ViewHeaderLayout>
        );
    }

    handleClick() {
        let number = Number(this.state.problems);
        const options = [];

        while (number >= 0) {
            options.push(number);
            number--;
        }

        this.setState({ options: options }, Keyboard.dismiss);
    }

    handleInputChange(key, value) {
        this.setState({ [key]: value });
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