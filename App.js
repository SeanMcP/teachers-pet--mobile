import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Heading from './components/text/Heading';
import SubHeading from './components/text/SubHeading';

export default class App extends Component {
  state = {
    mode: 'menu'
  }

  render() {
    return (
      <View style={styles.container}>
        <Heading>Teacher's Pet</Heading>
        <SubHeading>Tools of teachers</SubHeading>
        <Text>{this.state.mode}</Text>
        <Button
          onPress={this.setMode('grade')}
          title="Grading Ruler"
          color="#841584"
          accessibilityLabel="Go to the grading ruler"
        />
      </View>
    );
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
