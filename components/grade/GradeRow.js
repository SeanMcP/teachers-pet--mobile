import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default GradeRow = (props) => (
    <View style={styles.container}>
        <Text>{props.value}/{props.max} - {findPercent(props)}</Text>
    </View>
)

export const findPercent = ({ max, places, value }) => {
    return ( value / max * 100 ).toFixed(places);
}

const styles = StyleSheet.create({
    container: {}
})