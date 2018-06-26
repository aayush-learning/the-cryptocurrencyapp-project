import React, { Component } from 'react';
import { View,
         Text,
         Image,
         ScrollView,
         StyleSheet,
         Dimensions } from 'react-native';
import DetailsViewAnalytics from '../containers/DetailViewAnalytics';

const { height, width } = Dimensions.get('window');

class CCDataView extends Component {

    render() {
        
        let { data } = this.props.navigation.state.params;

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
                            {data.name}
                        </Text>
                    </View>

                    <DetailsViewAnalytics {...this.props.navigation.state.params} />

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