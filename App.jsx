import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import HomeView from './views/HomeView';

export default class App extends Component {
    state = {
        mode: 'home'
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderView()}
            </View>
        );
    }

    renderView = () => {
        const { mode } = this.state;
        
        const viewHash = {
            home: <HomeView/>
        }

        const Component = viewHash[
            viewHash.hasOwnProperty(mode) ? mode : 'home'
        ];

        return <Component handleSetMode={this.setMode} />;
    }

    setMode = (string) = () => this.setState({ mode: string })
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
