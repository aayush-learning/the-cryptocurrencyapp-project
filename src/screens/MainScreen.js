import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';

import { sampleAction } from '../store/actionCreators/actionCreators';

class MainScreen extends Component {

    render() {

        return (
            <View style={styles.container}>
                <Text>HELLO</Text>
                <Button title='press' onPress={() => this.props.press()} />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {

        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

const mapStateToProps = (state) => {

    return {

        localState: state.asyncData
    };
};

const mapDispatchToProps = (dispatch) => {

    return {

        press: () => dispatch(sampleAction())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);