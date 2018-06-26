import React, { Component } from 'react';
import { View,
         Text,
         Image,
         ScrollView,
         StyleSheet,
         Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

class CCDataView extends Component {

    render() {
        
        let { data, color } = this.props.navigation.state.params;
        let currencyData = data.quotes[Object.keys(data.quotes)[0]];

        return (
            <View style={styles.container}>
            
                <Image blurRadius={40}
                       source={{ uri: 'https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&h=350' }}
                       style={styles.backgroundImageStyles} />

                <ScrollView contentContainerStyle={{ flex: 1 }}>

                    <View style={{ flex: 10, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}>
                        <Image blurRadius={0}
                               source = {{ uri: `https://s2.coinmarketcap.com/static/img/coins/128x128/${data.id}.png` }}
                               style={{ marginTop: height * 0.02, height: 160, width: 160 }} />                          
                    </View>

                    <View style={{ flex: 3, backgroundColor: 'transparent', padding: 0, alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 50 }}>
                            {data.website_slug.charAt(0).toUpperCase() + data.website_slug.slice(1)}
                        </Text>
                    </View>

                    <View style={{ flex: 10, backgroundColor: 'transparent', padding: 4 }}>
                        <View style={{ flex: 3, backgroundColor: 'transparent', padding: 8, alignItems: 'center', justifyContent: 'center' }}>

                                <Text style={{ color: '#85bb65', fontSize: 44 }}>
                                    ${ currencyData.price.toFixed(3)
                                                         .toString()
                                                         .replace(/\B(?=(\d{3})+(?!\d))/g, ',') }
                                </Text>
   
                        </View>
                        
                        <View style={{ flex: 2, flexDirection: 'row', backgroundColor: 'transparent', padding: 4 }}>

                            <View style={{ flex: 1, backgroundColor: 'transparent', padding: 8, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: 'white', fontSize: 24 }}>
                                    1hr
                                </Text>
                            </View>
                            <View style={{ flex: 1, backgroundColor: 'transparent', padding: 8, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: 'white', fontSize: 24 }}>
                                    24hr
                                </Text>
                            </View>

                            <View style={{ flex: 1, backgroundColor: 'transparent', padding: 8, alignItems: 'center', justifyContent: 'center' }}>

                                <Text style={{ color: 'white', fontSize: 24 }}>
                                    7d
                                </Text>
                            </View>
                        </View>

                        <View style={{ flex: 2, flexDirection: 'row', backgroundColor: 'transparent', padding: 4 }}>

                            <View style={{ flex: 1, backgroundColor: 'transparent', padding: 8, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: currencyData.percent_change_1h > 0 ? '#009e73' : '#d94040', fontSize: 20 }}>
                                    {currencyData.percent_change_1h}%
                                </Text>
                            </View>
                            <View style={{ flex: 1, backgroundColor: 'transparent', padding: 8, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: currencyData.percent_change_24h > 0 ? '#009e73' : '#d94040', fontSize: 20 }}>
                                    {currencyData.percent_change_24h}%
                                </Text>
                            </View>

                            <View style={{ flex: 1, backgroundColor: 'transparent', padding: 8, alignItems: 'center', justifyContent: 'center' }}>

                                <Text style={{ color: currencyData.percent_change_7d > 0 ? '#009e73' : '#d94040', fontSize: 20 }}>
                                    {currencyData.percent_change_7d}%
                                </Text>
                            </View>
                        </View>

                        <View style={{ flex: 2, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', padding: 4, paddingLeft: 12 }}>
                            <Text style={{ color: color, fontSize: 24 }}>
                                      { data.circulating_supply
                                            .toString()
                                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',') } { data.symbol }
                            </Text>
                        </View>
                    </View>

                    <View style={{ flex: 6, backgroundColor: 'transparent', padding: 20 }}>
                        <Image blurRadius={0}
                            source={{ uri: `https://s2.coinmarketcap.com/generated/sparklines/web/7d/usd/${data.id}.png` }}
                            style={{ marginTop: height * 0.036, marginLeft: width * 0.025, height: 100, width: width * 0.840 }} />
                    </View>
                
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {

        flex: 1,
    },
    backgroundImageStyles: {

        position: 'absolute',
        height: height * 1.0,
        width: width * 1.0
    }
});

export default CCDataView;