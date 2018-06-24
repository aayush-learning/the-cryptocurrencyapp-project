import React, { Component } from 'react';
import { View,
         Text,
         Image,
         ScrollView,
         StyleSheet,
         Dimensions } from 'react-native';
import { connect } from 'react-redux';
import SegmentedControlTab from 'react-native-segmented-control-tab'
import { Icon, Avatar, Button } from 'react-native-elements';
import { sampleAction } from '../store/actionCreators/actionCreators';
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory-native';

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

                ],
        selectedIndex: 0

    };

    componentDidMount() {
        
        // setTimeout(() => {
            
        //     this.setState({
        //         data: this.state.data.concat([{ y: '8', x: '7375.67' },
        //             { y: '9', x: '7487.18' },
        //             { y: '10', x: '7518.24' },
        //             { y: '11', x: '7636.19' },
        //             { y: '12', x: '7711.36' },
        //             { y: '13', x: '7490.59' },
        //             { y: '14', x: '7616.89' },
        //             { y: '15', x: '7655.97' },
        //             { y: '16', x: '7688.00' },
        //             { y: '17', x: '7616.10' },
        //             { y: '18', x: '7497.34' },
        //             { y: '19', x: '6765.80' },
        //             { y: '20', x: '6877.18' },
        //             { y: '21', x: '6548.33' },
        //             { y: '22', x: '6299.52' },
        //             { y: '23', x: '6637.73' },
        //             { y: '24', x: '6410.72' },
        //             { y: '25', x: '6485.86' },
        //             { y: '26', x: '6443.67' },
        //             { y: '27', x: '6709.48' },
        //             { y: '28', x: '6737.41' },
        //             { y: '29', x: '6758.37' },
        //             { y: '30', x: '6717.20' },
        //             { y: '31', x: '6053.89' }])});

        // }, 5000);
    };

    _handleGraphChange = (index) => {

        // alert(index);
        this.setState({
            ...this.state,
            selectedIndex: index,
        });
    };

    render() {

        let data = this.state.data.slice();

        let newData = [];
    
        data.forEach(e => {


            newData.push({ x: this.getBaseLog(parseFloat(e.x), 10) , y: e.y })
        });
        
        return (
            <View style={styles.container}>

                <Image blurRadius={40} source={{ uri: 'https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&h=350' }} style={styles.backgroundImageStyles} />
            
                {/* <ScrollView style={{ flex: 1 }}> */}
                    
                <View style={{ flex: 10,
                               backgroundColor: 'transparent',
                               paddingTop: 16,
                               paddingHorizontal: 10 }}>

                        <View style={{
                                flex: 2,
                                flexDirection: 'row',
                                backgroundColor: 'transparent'
                            }}>
                            <View style={{ flex: 1, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }}>
                                
                            </View>
                            <View style={{ flex: 1, backgroundColor: 'blue' }}>
                                <Icon
                                    name='ios-sync'
                                    size={40}
                                    type='ionicon'
                                    color='white'
                                    style={{ marginLeft: width * 0.5 }}
                                />
                            </View>
                        </View>           

                        <View style={{ flex: 9,
                                       backgroundColor: 'transparent',
                                       alignItems: 'center',
                                       justifyContent: 'center' }}>

                                <Image blurRadius={0} 
                                   source={{ uri: 'http://pngimg.com/uploads/bitcoin/bitcoin_PNG47.png' }} 
                                   style={{ height: 150, width: 150 }} /> 
                        </View>

                        <View style={{ flex: 4,
                                    //    backgroundColor: 'red',
                                       backgroundColor: 'transparent',
                                       alignItems: 'center',
                                       justifyContent: 'center' }}>

                            <Text style={{ color: '#85bb65', fontSize: 44 }}>$6,830.2</Text>

                        </View>

                        <View style={{ flex: 3,
                                       backgroundColor: 'transparent',
                                       alignItems: 'center',
                                       justifyContent: 'center' }}>
                            <SegmentedControlTab
                                borderRadius={20}
                                tabsContainerStyle={{ height: height * 0.054, backgroundColor: 'transparent', borderRadius: 20 }}
                                tabStyle={{ backgroundColor: 'rgba(10,10,10,0.4)', borderColor: 'transparent' }}
                                activeTabStyle={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                                tabTextStyle={{ color: 'white', fontSize: 18 }}
                                activeTabTextStyle={{ color: 'white', fontSize: 18 }}
                                values={['Day', 'Week', 'Month']}
                                selectedIndex={this.state.selectedIndex}
                                onTabPress={this._handleGraphChange}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 7,  backgroundColor: 'transparent', padding: 10 }}>

                            <VictoryChart height={ height * 0.42 } width={ width }>
                            <VictoryLine

                                animate
                                style={{
                                    data: { stroke: '#85bb65' },
                                }}
                                data={newData}
                            />
                            <VictoryAxis tickFormat={() => ''} style={{ axis: { stroke: 'none' } }} />
                        </VictoryChart>
                    </View>
                {/* </ScrollView> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {

        flex: 1,
        backgroundColor: 'rgba(10, 10, 10, 0.4)',
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    backgroundImageStyles: {

        position: 'absolute',
        height: height * 1.0,
        width: width * 1.0
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