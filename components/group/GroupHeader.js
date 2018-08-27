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
                editable={!props.perGroupValue}
                keyboardType="numeric"
                label="Number of groups"
                onChangeText={(text) => props.handleChange('groups', text)}
                onSubmitEditing={Keyboard.dismiss}
                value={props.groupsValue}
            />
            <Text style={styles.or}>Or</Text>
            <Input
                editable={!props.groupsValue}
                keyboardType="numeric"
                label="Students per group"
                onChangeText={(text) => props.handleChange('perGroup', text)}
                onSubmitEditing={Keyboard.dismiss}
                value={props.perGroupValue}
            />
        </View>
        <Button
            // This logic is wrong; can't quite crack it:
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
        marginTop: 8,
        marginBottom: 8,
        padding: 8,
    },
    or: {
        textAlign: 'center',
    },
})