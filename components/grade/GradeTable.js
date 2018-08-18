import React from 'react';
import { StyleSheet, View } from 'react-native';
import GradeRow from './GradeRow';

export default GradeTable = (props) => (
    <View style={styles.container}>
        {renderRows(props.options, props.places)}
    </View>
)

export const renderRows = (options, places) => (
    options.map(option => (
        <GradeRow key={option} max={options[0]} places={places} value={option} />
    ))
)

const styles = StyleSheet.create({
    container: {}
})