import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default Input = ({ help, label, style, ...rest }) => (
    <View style={style}>
        {label ? (
            <Text style={styles.label}>{label}</Text>
        ) : null}
        <TextInput
            style={styles.input}
            {...rest}
        />
        {help ? (
            <Text style={styles.help}>{help}</Text>
        ) : null}
    </View>
)

const styles = StyleSheet.create({
    help: {
        fontSize: 12,
    },
    input: {
        padding: 8,
    },
    label: {
        fontWeight: 'bold'
    }
})