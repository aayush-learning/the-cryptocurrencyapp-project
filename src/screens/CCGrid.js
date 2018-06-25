import React, { Component } from 'react';
import { View,
         Text,
         StyleSheet } from 'react-native';

class CCGrid extends Component {

    render() {

        return (
            <View style={styles.container}>
                <Text>CCGrid Here</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default CCGrid;