import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Heading = ({ children, ...rest }) => (
    <Text style={styles} {...rest}>
        {children}
    </Text>
)

const styles = StyleSheet.create({
    fontSize: 40,
    fontWeight: 'bold'
})

export default Heading;