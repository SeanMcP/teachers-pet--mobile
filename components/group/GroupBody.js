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

    let count, num, rem;
    
    if (groups) {
        count = Math.floor(total / groups);
        num = groups;
        rem = total % groups;
    }
    
    if (perGroup) {
        count = perGroup;
        num = Math.floor(total / perGroup);
        rem = total % perGroup;
    }

    return (
        <View>
            <Text>Count off by {count}'s</Text>
            <Text>Makes {num} groups of {count}</Text>
            {rem ? <Text>({rem} left over)</Text> : null}
        </View>
    );
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