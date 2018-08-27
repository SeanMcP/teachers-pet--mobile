import React from 'react';
import { Button, Keyboard, StyleSheet, Text, View } from 'react-native';
import Input from '../atomic/Input';

export default GroupHeader = (props) => (
    <View style={styles.container}>
        <Input
            keyboardType="numeric"
            label="Number of students"
            onChangeText={(text) => props.handleChange('total', text)}
            onSubmitEditing={Keyboard.dismiss}
            value={props.totalValue}
        />
        <View style={styles.either}>
            <Input
                keyboardType="numeric"
                label="Number of groups"
                onChangeText={(text) => props.handleChange('groups', text)}
                onSubmitEditing={Keyboard.dismiss}
                value={props.groupsVale}
            />
            <Text style={styles.or}>Or</Text>
            <Input
                keyboardType="numeric"
                label="Students per group"
                onChangeText={(text) => props.handleChange('perGroup', text)}
                onSubmitEditing={Keyboard.dismiss}
                value={props.perGroupValue}
            />
        </View>
        <Button
            disabled={!props.totalValue && (!props.groupsValue || !props.perGroupValue)}
            onPress={props.handleClick}
            title="Make groups"
        />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    either: {
        borderColor: 'gray',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 8,
    },
    or: {
        textAlign: 'center',
    },
})