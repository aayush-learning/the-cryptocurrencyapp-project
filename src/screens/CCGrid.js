import React, { Component } from 'react';
import { View,
         Image,
         Dimensions,
         TouchableOpacity,
         StatusBar,
         StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { SearchBar, Badge } from 'react-native-elements';
import GridView from 'react-native-super-grid';
import * as Animatable from 'react-native-animatable';
import theme from '../config/apptheme';

let AnimatableTouchableOpacity = Animatable.createAnimatableComponent(TouchableOpacity);
const { height, width } = Dimensions.get('window');

class CCGrid extends Component {

    state = {

        searchQuery: ''
    };

    handleSearch = (text) => this.setState({ searchQuery: text });

    _pushToDetailView = (data) => {

        this.props.navigation.navigate('CCDataView', { ...data } );
    };
    render() {

        let { topCryptoCurrencyData } = this.props.localState;

        let { searchQuery } = this.state;

        let filteredTopCryptoCurrencyData = topCryptoCurrencyData.filter((elementData, index) => {

            if(searchQuery === '') return elementData;
            else if (elementData
                            .data
                            .name
                            .toLowerCase()
                            .includes(searchQuery
                            .toLowerCase())) return elementData;

        });

        return (
            <View style={styles.container}>

                <StatusBar
                    backgroundColor='transparent'
                    barStyle='light-content'
                />

                <Image blurRadius={40} 
                       source={theme}
                       style={styles.backgroundImageStyles} />

                <Animatable.View animation='fadeInDown' duration={800} style={{
                    flex: 1,
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    paddingTop: 20,
                    paddingHorizontal: 8
                }}>
                    <SearchBar
                        round
                        value={this.state.searchQuery}
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
                </Animatable.View>

                <View style={{
                    flex: 10,
                    backgroundColor: 'transparent',
                    paddingHorizontal: 0
                }}>

                   <GridView
                        itemDimension={130}
                        items={filteredTopCryptoCurrencyData}
                        renderItem={ item => {

                            return <AnimatableTouchableOpacity
                                    animation='fadeIn'
                                    duration={800}
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
                                   </AnimatableTouchableOpacity>
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