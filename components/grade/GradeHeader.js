import React from 'react';
import {
    Button,
    Keyboard,
    StyleSheet,
    View
} from 'react-native';
import Input from '../atomic/Input';

export default GradeHeader = (props) => (
    <View style={styles.container}>
        <Input
            keyboardType="numeric"
            onChangeText={(text) => props.handleChange('problems', text)}
            onSubmitEditing={Keyboard.dismiss}
            placeholder="Number of problems"
            value={props.problemsValue}
        />
        <Input
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