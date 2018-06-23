import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { sampleAction } from '../store/actionCreators/actionCreators';
import { VictoryArea, VictoryChart, VictoryAxis } from 'victory-native';

const { height, width } = Dimensions.get('window');

class MainScreen extends Component {

    getBaseLog(x, y) {
        
        return Math.log(y) / Math.log(x);
    }

    state = {

        data: [  
                    { y: '1' , x: '7502.55' },
                    { y: '2' , x: '7578.69' },
                    { y: '3' , x: '7460.69' },
                    { y: '4' , x: '7334.16' },
                    { y: '5' , x: '7344.96' },
                    { y: '6' , x: '7105.67' },
                    { y: '7' , x: '7460.58' },

                ]

    };

    componentDidMount() {
        
        setTimeout(() => {
            
            this.setState({
                data: this.state.data.concat([{ y: '8', x: '7375.67' },
                    { y: '9', x: '7487.18' },
                    { y: '10', x: '7518.24' },
                    { y: '11', x: '7636.19' },
                    { y: '12', x: '7711.36' },
                    { y: '13', x: '7490.59' },
                    { y: '14', x: '7616.89' },
                    { y: '15', x: '7655.97' },
                    { y: '16', x: '7688.00' },
                    { y: '17', x: '7616.10' },
                    { y: '18', x: '7497.34' },
                    { y: '19', x: '6765.80' },
                    { y: '20', x: '6877.18' },
                    { y: '21', x: '6548.33' },
                    { y: '22', x: '6299.52' },
                    { y: '23', x: '6637.73' },
                    { y: '24', x: '6410.72' },
                    { y: '25', x: '6485.86' },
                    { y: '26', x: '6443.67' },
                    { y: '27', x: '6709.48' },
                    { y: '28', x: '6737.41' },
                    { y: '29', x: '6758.37' },
                    { y: '30', x: '6717.20' },
                    { y: '31', x: '6053.89' }])});

        }, 5000);
    };
    render() {

        let data = this.state.data.slice();

        let newData = [];
    
        data.forEach(e => {


            newData.push({ x: this.getBaseLog(parseFloat(e.x), 10) , y: e.y })
        });
        
        return (
            <View style={styles.container}>
                <Text>HELLO</Text>
                <Button title='press' onPress={() => this.props.press()} />
                <VictoryChart>
                    <VictoryArea
                        // interpolation='natural'
                        animate
                        style={{
                            data: { stroke: '#000', fill: 'rgba(10,10,10,0.4)' },
                            
                            // parent: { border: '1px solid red' }
                        }}
                        data={newData}
                    />
                    <VictoryAxis tickFormat={() => ''} style={{ axis: { stroke: 'none' } }} />
                </VictoryChart>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {

        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
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