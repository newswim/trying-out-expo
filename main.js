import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styled from 'styled-components/native'

const StyledView = styled.View`
    background-color: papayawhip;
`

const StyledText = styled.Text`
    color: rebeccapurple;
    font-size: 60;
`


class App extends React.Component {
  render() {
    return (
      <StyledView style={styles.container}>
        <StyledText>Open up main.js to start working on your app!</StyledText>
      </StyledView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);
