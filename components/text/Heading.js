import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default Heading = ({ children, ...rest }) => (
    <Text style={styles.heading} {...rest}>
        {children}
    </Text>
)

const styles = StyleSheet.create({
    heading: {
        fontSize: 40,
        fontWeight: 'bold',
    },
})