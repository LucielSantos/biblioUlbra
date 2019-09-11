import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    ScrollView,
} from 'react-native';

import { getHistory, getUser, getRantedBooks, getAllData } from '../../services/Api';

import styles from './style';

export default function Home({ navigation }) {

    const data = navigation.getParam('data');

    return (
        <SafeAreaView style={ styles.areaView }>
            <ScrollView>
                <View style={ styles.container }>
                    <Text>Home</Text>
                    {
                        <Text>{ JSON.stringify(data) }</Text>
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
