import React from 'react';
import { StyleSheet, Text } from 'react-native';

const H1 = ({ children, ...rest }) => (
    <Text styles={styles} {...rest}>
        {children}
    </Text>
)

const styles = StyleSheet.create({
    fontSize: 40,
    fontWeight: 'bold'
})

export default H1;