import React from 'react';
import {
    Button,
    Keyboard,
    StyleSheet,
    TextInput,
    View
} from 'react-native';

export default GradeHeader = (props) => (
    <View style={styles.container}>
        <TextInput
            keyboardType="numeric"
            onChangeText={(text) => props.handleChange('problems', text)}
            onSubmitEditing={Keyboard.dismiss}
            placeholder="Number of problems"
            value={props.problemsValue}
        />
        <TextInput
            keyboardType="numeric"
            onChangeText={(text) => props.handleChange('decimalPlaces', text)}
            onSubmitEditing={Keyboard.dismiss}
            placeholder="Number of decimal places"
            value={props.placesValue}
        />
        <Button
            disabled={!props.problemsValue}
            onPress={props.handleClick}
            title="Create grading table"
        />
    </View>
)

const styles = StyleSheet.create({
    container: {
        display: 'flex'
    }
})