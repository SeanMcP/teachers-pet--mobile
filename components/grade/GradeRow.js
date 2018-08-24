import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import COLOR from '../../constants/Color';

export default GradeRow = (props) => (
    <View style={[ styles.container, {
        backgroundColor: props.value % 2 !== 0 ? COLOR.gray100 : 'white'
    } ]}>
        <Text style={[ styles.text, styles.fraction ]}>{props.value}/{props.max}</Text>
        <Text style={[ styles.text, styles.percent ]}>{findPercent(props)}</Text>
    </View>
)

export const findPercent = ({ max, places, value }) => {
    return ( value / max * 100 ).toFixed(places > 10 ? 10 : places) + '%';
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 4,
    },
    fraction: {
        textAlign: 'right'
    },
    text: {
        flex: 1,
        fontSize: 16,
        paddingLeft: 4,
        paddingRight: 4,
    },
    percent: {
        fontWeight: 'bold',
        textAlign: 'left'
    }
})