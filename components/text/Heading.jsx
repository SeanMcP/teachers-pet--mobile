import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default Heading = ({ children, ...rest }) => (
    <Text style={styles} {...rest}>
        {children}
    </Text>
)

const styles = StyleSheet.create({
    fontSize: 40,
    fontWeight: 'bold'
})