import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import GradeView from './views/GradeView';
import HomeView from './views/HomeView';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mode: 'home'
        }

        this.renderView = this.renderView.bind(this);
        this.setMode = this.setMode.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderView()}
            </View>
        );
    }

    renderView() {
        const { mode } = this.state;
        
        const viewHash = {
            grade: GradeView,
            home: HomeView
        }

        const Component = viewHash[
            viewHash.hasOwnProperty(mode) ? mode : 'home'
        ];

        return <Component handleSetMode={this.setMode} />;
    }

    setMode(string) {
        return () => this.setState({ mode: string })
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
    },
});
