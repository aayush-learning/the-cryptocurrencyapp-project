import React, { Component } from 'react';
import { View,
         Image,
         Dimensions,
         TouchableOpacity,
         StatusBar,
         Platform,
         StyleSheet } from 'react-native';
import { Font } from 'expo';
import { connect } from 'react-redux';
import { SearchBar, Badge } from 'react-native-elements';
import GridView from 'react-native-super-grid';
import * as Animatable from 'react-native-animatable';
import theme from '../config/apptheme';

let AnimatableTouchableOpacity = Animatable.createAnimatableComponent(TouchableOpacity);
const { height, width } = Dimensions.get('window');

class CCGrid extends Component {

    state = {

        searchQuery: '',
        isFontLoaded: false
    };

    componentDidMount = async () => {

        await Font.loadAsync({

            'Nunito': require('../../assets/fonts/Nunito-Regular.ttf'),
        });
        this.setState({ isFontLoaded: true });
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

            {
              this.state.isFontLoaded ?  (
              
              <Animatable.View animation='fadeInDown' duration={800} style={{
                    flex: 1,
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    paddingTop: Platform.OS === 'android' ? height * 0.064 : height * 0.032,
                    paddingHorizontal: 8,
                    paddingBottom: Platform.OS === 'android' ? height * 0.02 : 0
                }}>
                    <SearchBar
                        round
                        value={this.state.searchQuery}
                        clearIcon={{ color: '#ddd', style: { marginTop: Platform.OS === 'android' ? -height * 0.004 : height * 0.0025, fontSize: 18 } }}
                        icon={{ name: 'search', color: '#ddd', style: { marginTop: Platform.OS === 'android' ? -height * 0.004 : height * 0.0025, fontSize: 18 } }}
                        platform='ios'
                        cancelButtonTitle='Cancel'
                        searchIcon
                        onChangeText={ this.handleSearch }
                        showLoadingIcon={false}
                        inputStyle={{
                            color: '#ddd',
                            height: 36,
                            alignItems: 'center',
                            fontFamily: 'Nunito',
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
                ) : null 

                } 
                
                {
                    this.state.isFontLoaded ? (

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
                                                height: Platform.OS === 'android' ? height * 0.2625 : height * 0.25,
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
                                                    textStyle={{ color: 'white', fontSize: 16, fontFamily: 'Nunito' }}
                                                />

                                                <Badge
                                                    containerStyle={{ backgroundColor: 'rgba(10,10,10,0.4)',
                                                                    borderRadius: 4,
                                                                    marginTop: height * 0.02,
                                                                    height: height * 0.16,
                                                                    width: width * 0.38 }}
                                                    value={item.data.symbol}
                                                    textStyle={{ color: 'white', fontSize: 36, fontFamily: 'Nunito' }}
                                                />
                                        </AnimatableTouchableOpacity>
                                }}
                        />
                        
                        </View>

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