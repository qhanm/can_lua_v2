import React, { Component } from 'react';
import {View, Text} from 'react-native';
import Client from './Client';
export default class Clients extends Component
{
    render(){
        return(
            <View>
                <Client />
                <Client />
                <Client />
            </View>
        )
    }
}