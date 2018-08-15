import React from 'react';
import { StyleSheet, View } from 'react-native';
import Heading from '../components/text/Heading';
import Icon from '../components/atomic/Icon';

export default ViewHeaderLayout = (props) => (
    <View style={styles.container}>
        <View style={styles.header}>
            <Icon
                color="white"
                name="arrow-back"
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
        display: grid,
        gridGap: '1rem',
        gridTemplateRows: 'min-content 1fr',
    },
    header: {
        background: 'navy',
        color: 'white',
        display: grid,
        gridGap: '1rem',
        gridTemplateColumns: 'min-content 1fr',
    }
})