import React, { Component } from 'react';
import { View,
         Text,
         StyleSheet,
         Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

class CCDataView extends Component {

    
    render() {
        let { data } = this.props.navigation.state.params;

        return (
            <View style={styles.container}>
                <Text> {data.symbol} </Text>
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

export default CCDataView;