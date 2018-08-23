import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default Input = (props) => (
    <TextInput
        style={styles.input}
        {...props}
    />
)

const styles = StyleSheet.create({
    input: {
        padding: 10,
    }
})