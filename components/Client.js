import React, { Component } from 'react';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class Client extends Component
{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.card}>
                    <TouchableOpacity>
                        <Text>Delete</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        flexDirection: 'row',
        width: '90%',
        backgroundColor: 'yellow',
        marginTop: 4,
        marginBottom: 4,
        borderRadius: 2,
    }
});