import React, { Component } from 'react';
import { View,
         Text,
         Image,
         FlatList,
         Dimensions,
         StatusBar,
         StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import GridView from 'react-native-super-grid';

const { height, width } = Dimensions.get('window');

class CCGrid extends Component {

    state = {

        search: ''
    };

    handleSearch = (text) => this.setState({ search: text });

    render() {

        return (
            <View style={styles.container}>

                <StatusBar
                    backgroundColor='transparent'
                    barStyle='light-content'
                />

                <Image blurRadius={40} source={{ uri: 'https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&h=350' }} style={styles.backgroundImageStyles} />

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
                        items={[{ color: '#e17055', y: '1', x: '7502.55' },
                            { color: '#ff7675', y: '2', x: '7578.69' },
                            { color: '#a29bfe', y: '3', x: '7460.69' },
                            { color: '#74b9ff', y: '4', x: '7334.16' },
                            { color: '#81ecec', y: '5', x: '7344.96' },
                            { color: '#6c5ce7', y: '6', x: '7105.67' },
                            { color: '#55efc4', y: '7', x: '7460.58' }
                        ]}

                        renderItem={ item => {

                            return <View style={{
                                        backgroundColor: item.color,
                                        // opacity: 0.8,
                                        height: height * 0.25,
                                        width: width * 0.44,
                                        padding: 10,
                                        marginVertical: 2,
                                        marginHorizontal: 1,
                                        borderRadius: 4
                                   }}>
                                    <Text>{item.x}</Text>
                                   </View>
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
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    backgroundImageStyles: {

        position: 'absolute',
        height: height * 1.0,
        width: width * 1.0
    }
});

export default CCGrid;