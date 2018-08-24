import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import GradeDirections from './GradeDirections';
import GradeTable from './GradeTable';

export default GradeBody = (props) => (
    <ScrollView style={styles.container}>
        {props.options.length === 0 ? (
            <GradeDirections />
        ) : (
            <GradeTable options={props.options} places={props.places} />
        )}
    </ScrollView>
)

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
    },
})