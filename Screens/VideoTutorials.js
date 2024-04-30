import React from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableHighlight, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const VideoTutorials = () => {
  const navigation = useNavigation();

  const gotToTopics = async (subject) => {
		await AsyncStorage.setItem('subject', subject);
    navigation.navigate("Topics");
	  };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableHighlight style={styles.link} onPress={() => gotToTopics('Math')} >
                <Text style={{color: "white"}} >Math</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.link} onPress={() => gotToTopics('English')} >
                <Text style={{color: "white"}} >English</Text>
            </TouchableHighlight>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
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
export default VideoTutorials;
