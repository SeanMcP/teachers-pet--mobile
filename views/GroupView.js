import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import GroupHeader from '../components/group/GroupHeader';
import ViewHeaderLayout from '../components/layout/ViewHeaderLayout';

export default class GroupView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayGroups: false,
            groups: '',
            perGroup: '',
            total: '',
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    render() {
        return (
            <ViewHeaderLayout
                handleBack={this.props.handleSetMode('home')}
                title="Group Maker"
            >
                <View style={styles.container}>
                    <GroupHeader
                        handleChange={this.handleInputChange}
                        handleClick={this.handleClick}
                        groupsValue={this.state.groups}
                        perGroupValue={this.state.perGroup}
                        totalValue={this.state.total}
                    />
                </View>
            </ViewHeaderLayout>
        );
    }

    handleClick() {
        this.setState({ displayGroups: true });
    }

    handleInputChange(key, value) {
        this.setState({ [key]: value });
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        padding: 16,
        width: '100%',
    },
});