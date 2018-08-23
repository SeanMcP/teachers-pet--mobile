import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Heading from '../text/Heading';
import Icon from '../atomic/Icon';
import COLOR from '../../constants/Color';

export default ViewHeaderLayout = (props) => (
    <View style={styles.container}>
        <View style={[ styles.header, { backgroundColor: props.backgroundColor || COLOR.gray500 } ]}>
            <Icon
                color="white"
                name="md-arrow-back"
                onPress={props.handleBack}
            />
            <Text style={styles.heading}>
                {props.title}
            </Text>
        </View>
        {props.children}
    </View>
);

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        width: '100%',
    },
    header: {
        alignItems: 'center',
        backgroundColor: COLOR.blue500,
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        width: '100%',
    },
    heading: {
        color: 'white',
        fontSize: 20,
        flex: 1,
        marginRight: 30,
        textAlign: 'center',
    },
})