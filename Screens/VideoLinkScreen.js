import React from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableHighlight, } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function VideoScreen(props) {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <TouchableHighlight style={styles.link} onPress={() => navigation.navigate("VideoScreen")} >
                <Text style={{color: "white"}} >Math tutorial</Text>
            </TouchableHighlight>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    link: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 75,
        borderRadius: 5,
        margin: 5,
        backgroundColor: "dodgerblue",
    },
})

export default VideoScreen;