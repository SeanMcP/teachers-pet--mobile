import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Heading from '../components/text/Heading';
import SubHeading from '../components/text/SubHeading';

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
            <SubHeading>Tools of teachers</SubHeading>
            <View style={styles.buttonContainer}>
                {renderButtons()}
            </View>
        </View>
    );
}

const buttons = [
    {
        accessibilityLabel: 'Go to the grading ruler',
        color: '#841584',
        key: 'grade',
        title: 'Grading Ruler'
    },
    {
        accessibilityLabel: 'Go to the group maker',
        color: '#841584',
        key: 'group',
        title: 'Group Maker'
    },
    {
        accessibilityLabel: 'Go to the timer',
        color: '#841584',
        key: 'timer',
        title: 'Timer'
    },
    {
        accessibilityLabel: '',
        color: '#841584',
        key: 'tbd',
        title: 'TBD'
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