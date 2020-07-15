import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Constant from '../constants/Constant';

import Clients from './Clients';
export default class ClientGroup extends Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Text>Header</Text>
                    </View>
                    <View style={styles.cardBody}>
                        <Clients />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:  10,
    },
    card: {
        backgroundColor: Constant.Color.Grey,
        borderRadius: 2,
        shadowColor: Constant.Color.Black,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0,
        },
        shadowOpacity: 0.8,
        width: '95%'
    },
    cardHeader: {
        marginLeft: 10,
    },
    cardBody: {
        justifyContent: 'center',
    }
});