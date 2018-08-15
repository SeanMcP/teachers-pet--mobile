import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default SubHeading = ({ children, ...rest }) => (
    <Text style={styles} {...rest}>
        {children}
    </Text>
)

const styles = StyleSheet.create({
    fontSize: 20,
    fontStyle: 'italic'
})