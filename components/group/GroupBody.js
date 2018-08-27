import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default GroupBody = (props) => (
    <View style={styles.container}>
        {renderGroups(props)}
    </View>
)

const renderGroups = ({ groupsValue, perGroupValue, totalValue }) => {
    const groups = Number(groupsValue),
    perGroup = Number(perGroupValue),
    total = Number(totalValue);
    
    if (groups) {
        const count = Math.floor(total / groups);
        const rem = total % groups;

        return (
            <View>
                <Text>Count off by {count}'s</Text>
                {rem ? <Text>({rem} left over)</Text> : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'orange',
        borderStyle: 'solid',
        borderWidth: 1,
        display: 'flex',
        // flex: 1,
    },
})