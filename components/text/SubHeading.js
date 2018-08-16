import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default SubHeading = ({ children, ...rest }) => (
    <Text style={styles.subHeading} {...rest}>
        {children}
    </Text>
)

const styles = StyleSheet.create({
    subHeading: {
        fontSize: 20,
        fontStyle: 'italic',
    },
})