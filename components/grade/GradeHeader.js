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
        <View style={styles.inputContainer}>
            <Input
                keyboardType="numeric"
                label="Problems"
                onChangeText={(text) => props.handleChange('problems', text)}
                onSubmitEditing={Keyboard.dismiss}
                style={[ styles.input, styles.inputLeft ]}
                value={props.problemsValue}
            />
            <Input
                keyboardType="numeric"
                label="Decimal places"
                onChangeText={(text) => props.handleChange('decimalPlaces', text)}
                onSubmitEditing={Keyboard.dismiss}
                placeholder="Default: 0"
                style={[ styles.input, styles.inputRight ]}
                value={props.placesValue}
            />
        </View>
        <Button
            disabled={!props.problemsValue}
            onPress={props.handleClick}
            title="Create grading table"
        />
    </View>
)

const styles = StyleSheet.create({
    container: {
        display: 'flex',
    },
    input: {
        flex: 1,
        marginBottom: 8,
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    inputLeft: {
        marginRight: 8
    },
    inputRight: {
        marginLeft: 8
    }
})