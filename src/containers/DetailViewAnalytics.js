import React, { Component } from 'react';
import { View,
         Text,
         Platform } from 'react-native';
import { Font } from 'expo';
import { parsePrice } from '../util/utils';

class DetailViewAnalytics extends Component {

    state = {

        isFontLoaded: false
    };

    componentDidMount = async () => {

        await Font.loadAsync({

            'Nunito': require('../../assets/fonts/Nunito-Regular.ttf'),
        });
        this.setState({ isFontLoaded: true });
    };

    _resolveAnalyticsColor = (percent) => {

        return percent > 0 ? '#009e73' : '#d94040';
    };

    render() {
        
        let { data, color } = this.props;
        let currencyData = data.quotes[Object.keys(data.quotes)[0]];

        return (

            <View style={{ flex: 10,
                           backgroundColor: 'transparent',
                           padding: 4 }}>


                {
                    this.state.isFontLoaded ? (

                            <View style={{ flex: 3,
                                        backgroundColor: 'transparent',
                                        padding: 8,
                                        alignItems: 'center',
                                        justifyContent: 'center' }}>

                                <Text style={{ color: '#85bb65', fontSize: Platform.OS === 'android' ? 36 : 40 }}>
                                    ${parsePrice(currencyData.price.toFixed(3))}
                                </Text>

                            </View>
                    ): null
                }
                
                
                {
                    this.state.isFontLoaded ? (

                          <View style={{ flex: 2, flexDirection: 'row', backgroundColor: 'transparent', padding: 4 }}>

                            <View style={{ flex: 1, backgroundColor: 'transparent', padding: 8, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: this._resolveAnalyticsColor(currencyData.percent_change_1h), fontSize: Platform.OS === 'android' ? 22 : 24 }}> 1hr </Text>
                            </View>

                            <View style={{ flex: 1, backgroundColor: 'transparent', padding: 8, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: this._resolveAnalyticsColor(currencyData.percent_change_24h), fontSize: Platform.OS === 'android' ? 22 : 24 }}> 24hr </Text>
                            </View>

                            <View style={{ flex: 1, backgroundColor: 'transparent', padding: 8, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: this._resolveAnalyticsColor(currencyData.percent_change_7d), fontSize: Platform.OS === 'android' ? 22 : 24 }}> 7d </Text>
                            </View>

                        </View>
                    ): null
                }

                {
                    this.state.isFontLoaded ? (

                        <View style={{ flex: 2, flexDirection: 'row', backgroundColor: 'transparent', padding: 4 }}>

                            <View style={{ flex: 1, backgroundColor: 'transparent', padding: 8, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: this._resolveAnalyticsColor(currencyData.percent_change_1h), fontSize: Platform.OS === 'android' ? 18 : 20 }}>
                                    {currencyData.percent_change_1h}%
                                </Text>
                            </View>

                            <View style={{ flex: 1, backgroundColor: 'transparent', padding: 8, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: this._resolveAnalyticsColor(currencyData.percent_change_24h), fontSize: Platform.OS === 'android' ? 18 : 20 }}>
                                    {currencyData.percent_change_24h}%
                                </Text>
                            </View>

                            <View style={{ flex: 1, backgroundColor: 'transparent', padding: 8, alignItems: 'center', justifyContent: 'center' }}>

                                <Text style={{ color: this._resolveAnalyticsColor(currencyData.percent_change_7d), fontSize: Platform.OS === 'android' ? 18 : 20 }}>
                                    {currencyData.percent_change_7d}%
                                </Text>
                            </View>

                        </View>

                    ): null
                }
                
                {
                    this.state.isFontLoaded ? (

                        <View style={{ flex: 2, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', padding: 4, paddingLeft: 12 }}>

                            <Text style={{ color: color, fontSize: Platform.OS === 'android' ? 22 : 24 }}>
                                {parsePrice(data.circulating_supply)} {data.symbol}
                            </Text>

                        </View>
                    ): null
                }

                
            </View>
                
        );
    }
}

export default DetailViewAnalytics;