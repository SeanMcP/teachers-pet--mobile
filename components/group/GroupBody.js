import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default GroupBody = (props) => {

    return (
        <View style={styles.container}>
            <Text>Total: {props.totalValue}</Text>
            <Text>Groups: {props.groupsValue}</Text>
            <Text>Per group: {props.perGroupValue}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'orange',
        borderStyle: 'solid',
        borderWidth: 1,
        display: 'flex',
        flex: 1,
    },
})