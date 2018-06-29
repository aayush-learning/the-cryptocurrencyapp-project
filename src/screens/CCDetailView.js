import React, { Component } from 'react';
import { View,
         Text,
         Image,
         ScrollView,
         StyleSheet,
         Platform,
         Dimensions } from 'react-native';
import { Font } from 'expo';
import DetailsViewAnalytics from '../containers/DetailViewAnalytics';
import * as Animatable from 'react-native-animatable';
import theme from '../config/apptheme';

const { height, width } = Dimensions.get('window');

class CCDataView extends Component {

    state = {

        isFontLoaded: false
    };

    componentDidMount = async () => {

        await Font.loadAsync({

            'Nunito': require('../../assets/fonts/Nunito-Regular.ttf'),
        });
        this.setState({ isFontLoaded: true });
    };

    render() {
        
        let { data } = this.props.navigation.state.params;

        return (
            <View style={styles.container}>
            
                <Image blurRadius={40}
                       source={theme}
                       style={styles.backgroundImageStyles} />

            { 
                this.state.isFontLoaded ? (
                    <ScrollView contentContainerStyle={{ flex: 1 }}>

                        <View style={{ flex: 10, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}>
                            <Animatable.Image animation='fadeIn' duration={1200} blurRadius={0}
                                source = {{ uri: `https://s2.coinmarketcap.com/static/img/coins/128x128/${data.id}.png` }}
                                style={{ marginTop: height * 0.02, height: Platform.OS === 'android' ? 120 : 160, width: Platform.OS === 'android' ? 120 : 160 }} />                          
                        </View>

                        <View style={{ flex: 3, backgroundColor: 'transparent', padding: 0, alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontSize: Platform.OS === 'android' ? 48 : 54, fontFamily: 'Nunito' }}>
                                {data.name}
                            </Text>
                        </View>

                        <DetailsViewAnalytics {...this.props.navigation.state.params} />

                        <Animatable.View animation='fadeIn' style={{ flex: 6, backgroundColor: 'transparent', padding: 20 }}>
                            <Image blurRadius={0}
                                source={{ uri: `https://s2.coinmarketcap.com/generated/sparklines/web/7d/usd/${data.id}.png` }}
                                style={{ marginTop: height * 0.036, marginLeft: width * 0.025, height: Platform.OS === 'android' ? 90 : 100, width: width * 0.840 }} />
                        </Animatable.View>
                    
                    </ScrollView>
                    ) : null 
                }
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