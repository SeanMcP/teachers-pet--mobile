import React from 'react';
import { StyleSheet, View } from 'react-native';
import Heading from '../text/Heading';
import Icon from '../atomic/Icon';

export default ViewHeaderLayout = (props) => (
    <View style={styles.container}>
        <View style={styles.header}>
            <Icon
                color="white"
                name="md-arrow-back"
                onPress={props.handleBack}
            />
            <Heading>
                {props.title}
            </Heading>
        </View>
        {props.children}
    </View>
);

const styles = StyleSheet.create({
    container: {
        display: 'flex',
    },
    header: {
        backgroundColor: 'navy',
        display: 'flex',
    },
})