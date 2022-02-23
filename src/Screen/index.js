import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { increment, decrement } from '../action';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function Screen() {

    const dispatch = useDispatch()

    const counter = useSelector(state => state.counter)

    return (
        <View style={styles.content}>
            <TouchableOpacity
                onPress={() => dispatch(decrement())}>
                <Text>Decrement</Text>
            </TouchableOpacity>
            <Text>{counter} Current value</Text>
            <TouchableOpacity
                onPress={() => dispatch(increment())}>
                <Text>Increment</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({

    content: {
        flex: 1,
        backgroundColor: 'gray',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }
});

export default Screen;
