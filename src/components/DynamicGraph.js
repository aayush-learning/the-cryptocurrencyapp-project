import React from 'react';
import { View, Dimensions } from 'react-native';
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory-native';

const { height, width } = Dimensions.get('window');

const DynamicGraph = (props) => (

    <View style={{ flex: 7, backgroundColor: 'transparent', padding: 10 }}>
        <VictoryChart height={height * 0.42} width={width}>
            <VictoryLine
                animate
                style={{ data: { stroke: '#85bb65' } }}
                data={ props.bitcoinHistoryData.slice(props.renderDays) }
            />
            <VictoryAxis tickFormat={() => ''} style={{ axis: { stroke: 'none' } }} />
        </VictoryChart>
    </View>
);

export default DynamicGraph;