import React from 'react';
import { Button, Input, StyleSheet, View } from 'react-native';

export default GradeHeader = (props) => (
    <View style={styles.container}>
        <Input
            name="numberOfProblems"
            onChange={props.handleChange}
            placeholder="Number of problems"
            value={props.problemsValue}
        />
        <Input
            name="numberOfDecimalPlaces"
            onChange={props.handleChange}
            placeholder="Number of decimal places"
            value={props.placesValue}
        />
        <Button
            disabled={!props.problemsValue}
            onPress={props.handleClick}
            title="Create grading table"
        />
    </View>
)

const styles = StyleSheet.create({
    container: {}
})