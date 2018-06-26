import React, { Component } from 'react';
import { View,
         Text,
         Image,
         Dimensions,
         TouchableOpacity,
         StatusBar,
         StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { SearchBar, Badge } from 'react-native-elements';
import GridView from 'react-native-super-grid';

const { height, width } = Dimensions.get('window');

class CCGrid extends Component {

    state = {

        search: ''
    };

    handleSearch = (text) => this.setState({ search: text });

    _pushToDetailView = (data) => {

        this.props.navigation.navigate('CCDataView', { ...data } );
    };
    render() {

        let { topCryptoCurrencyData } = this.props.localState;

        return (
            <View style={styles.container}>

                <StatusBar
                    backgroundColor='transparent'
                    barStyle='light-content'
                />

                <Image blurRadius={40} 
                       source={{ uri: 'https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&h=350' }}
                       style={styles.backgroundImageStyles} />

                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    paddingTop: 20,
                    paddingHorizontal: 8
                }}>
                    <SearchBar
                        round
                        value={this.state.search}
                        clearIcon={{ color: '#ddd', style: { marginTop: 2.4, fontSize: 18 } }}
                        icon={{ name: 'search', color: '#ddd', style: { marginTop: 2.5, fontSize: 18 } }}
                        platform='ios'
                        cancelButtonTitle='Cancel'
                        searchIcon
                        onChangeText={ this.handleSearch }
                        showLoadingIcon={false}
                        inputStyle={{
                            color: '#ddd',
                            height: 36,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'rgba(10, 10, 10, 0.2)'
                        }}
                        containerStyle={{

                            backgroundColor: 'transparent',
                            borderTopColor: 'transparent',
                            borderBottomColor: 'transparent',
                            borderWidth: 0
                        }}
                        placeholder='Search...' />
                </View>

                <View style={{
                    flex: 10,
                    backgroundColor: 'transparent',
                    paddingHorizontal: 0
                }}>

                   <GridView
                        itemDimension={130}
                        items={topCryptoCurrencyData}
                        renderItem={ item => {

                            return <TouchableOpacity 
                                    onPress={() => this._pushToDetailView(item)}
                                    style={{
                                        flex: 1,
                                        backgroundColor: item.color,
                                        height: height * 0.25,
                                        width: width * 0.44,
                                        padding: 10,
                                        marginVertical: 2,
                                        marginHorizontal: 1,
                                        borderRadius: 4                                
                                   }}>
                                        {/* <Image style={{ position: 'absolute', height: height * 0.2, width: width * 0.2 }}
                                               source={{ uri: `https://s2.coinmarketcap.com/static/img/coins/128x128/${item.data.id}.png` }} /> */}
                                        <Badge
                                            containerStyle={{ backgroundColor: 'rgba(10,10,10,0.4)',
                                                              borderRadius: 4,
                                                              width: width * 0.16 }}
                                            value={item.data.rank}
                                            textStyle={{ color: 'white', fontSize: 16 }}
                                        />

                                        <Badge
                                            containerStyle={{ backgroundColor: 'rgba(10,10,10,0.4)',
                                                              borderRadius: 4,
                                                              marginTop: height * 0.02,
                                                              height: height * 0.16,
                                                              width: width * 0.38 }}
                                            value={item.data.symbol}
                                            textStyle={{ color: 'white', fontSize: 36 }}
                                        />
                                   </TouchableOpacity>
                        }}
                   />
                
                </View>

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

const mapStateToProps = (state) => {

    return {

        localState: state.asyncData
    };
};

const mapDispatchToProps = (dispatch) => {

    return {

        sampleAction: () => dispatch()
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CCGrid);