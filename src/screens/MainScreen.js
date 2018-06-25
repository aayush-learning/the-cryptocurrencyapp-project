import React, { Component } from 'react';
import { View,
         Text,
         Image,
         ScrollView,
         StatusBar,
         StyleSheet,
         Dimensions } from 'react-native';
import { connect } from 'react-redux';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator, } from 'react-native-indicators';
import { Icon, Avatar, Button } from 'react-native-elements';
import { fetchApplicationDataHandler } from '../store/actionCreators/actionCreators';
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory-native';

const { height, width } = Dimensions.get('window');

class MainScreen extends Component {

    constructor(props) {

        super(props);
        this.props.fetchApplicationData();
    }

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

    _handleGraphChange = (index) => {

        this.setState({
            ...this.state,
            selectedIndex: index,
        });
    };

    _pushToGrid = () => this.props.navigation.navigate('CCGrid');

    _refreshData = () => null;

    render() {

        let data = this.state.data.slice();
        let newData = [];
        data.forEach(e => {


            newData.push({ x: this.getBaseLog(parseFloat(e.x), 10) , y: e.y })
        });
        
        let { isLoaded } = this.props.localState;
        let content = null;

        if(isLoaded) {

            content = (

                <ScrollView contentContainerStyle={{ flex: 1 }}>

                    <View style={{
                        flex: 10,
                        backgroundColor: 'transparent',
                        paddingTop: 25,
                        paddingHorizontal: 8
                    }}>

                        <View style={{
                            flex: 2,
                            flexDirection: 'row',
                            backgroundColor: 'transparent'
                        }}>
                            <View style={{ flex: 1, backgroundColor: 'transparent' }}>
                                <Icon
                                    onPress={this._pushToGrid}
                                    name='grid'
                                    size={30}
                                    type='simple-line-icon'
                                    color='white'
                                    underlayColor={'transparent'}
                                    containerStyle={{ marginRight: width * 0.38 }}
                                />
                            </View>
                            <View style={{ flex: 1, backgroundColor: 'transparent' }}>
                                <Icon
                                    onPress={this._refreshData}
                                    name='ios-sync'
                                    size={40}
                                    type='ionicon'
                                    color='white'
                                    underlayColor={'transparent'}
                                    containerStyle={{ marginLeft: width * 0.38 }}
                                />
                            </View>
                        </View>

                        <View style={{
                            flex: 9,
                            backgroundColor: 'transparent',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>

                            <Image blurRadius={0}
                                source={{ uri: 'http://pngimg.com/uploads/bitcoin/bitcoin_PNG47.png' }}
                                style={{ height: 150, width: 150 }} />
                        </View>

                        <View style={{
                            flex: 4,
                            backgroundColor: 'transparent',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>

                            <Text style={{ color: '#85bb65', fontSize: 44 }}>$6,830.2</Text>

                        </View>

                        <View style={{
                            flex: 3,
                            backgroundColor: 'transparent',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
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

                    
                    <View style={{ flex: 7, backgroundColor: 'transparent', padding: 10 }}>

                        <VictoryChart height={height * 0.42} width={width}>
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

                </ScrollView>
            );
        } else {

            // BallIndicator
            // BarIndicator
            // DotIndicator
            // MaterialIndicator
            // PacmanIndicator
            // PulseIndicator
            // SkypeIndicator
            // UIActivityIndicator
            // WaveIndicator

            content = <DotIndicator color='white' size={24} count={4} />

        }


        console.log(isLoaded);


        return (
            <View style={styles.container}>

                <StatusBar
                    backgroundColor='transparent'
                    barStyle='light-content'
                />

                <Image blurRadius={40} source={{ uri: 'https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&h=350' }} style={styles.backgroundImageStyles} />
            
                
                {
                    content
                }    
                
                
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {

        flex: 1,
        backgroundColor: 'rgba(10, 10, 10, 0.4)',
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

        fetchApplicationData: () => dispatch(fetchApplicationDataHandler())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);