import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GradeDirections from './GradeDirections';

export default GradeBody = (props) => (
    <View style={styles.container}>
        {props.options.length === 0 ? (
            <GradeDirections />
        ) : (
            <GradeTable options={props.options} places={props.places} />
        )}
    </View>
)

const styles = StyleSheet.create({
    container: {}
})