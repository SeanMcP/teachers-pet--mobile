import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Heading from '../components/text/Heading';
import SubHeading from '../components/text/SubHeading';
import COLOR from '../constants/Color';

export default HomeView = (props) => {
    const renderButtons = () => {
        return buttons.map(button => (
            <Button
                onPress={props.handleSetMode(button.key)}
                {...button}
            />
        ));
    }
    
    return (
        <View style={styles.container}>
            <Heading>Teacher's Pet</Heading>
            <SubHeading>Tools for teachers</SubHeading>
            <View style={styles.buttonContainer}>
                {renderButtons()}
            </View>
        </View>
    );
}

const buttons = [
    {
        accessibilityLabel: 'Go to the grading ruler',
        color: COLOR.red500,
        key: 'grade',
        title: '🐱 Grading Ruler'
    },
    {
        accessibilityLabel: 'Go to the group maker',
        color: COLOR.amber500,
        key: 'group',
        title: '🐶 Group Maker'
    },
    {
        accessibilityLabel: 'Go to the timer',
        color: COLOR.green500,
        key: 'timer',
        title: '🤖 Timer'
    },
    {
        accessibilityLabel: '',
        color: COLOR.blue500,
        key: 'random',
        title: '🐵 Random Generator'
    }
];

const styles = StyleSheet.create({
    buttonContainer: {
        display: 'flex',
    },
    container: {
        display: 'flex',
    },
});