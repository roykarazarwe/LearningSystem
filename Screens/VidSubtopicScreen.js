import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableHighlight, View, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function VidSubtopicScreen(props) {
    const navigation = useNavigation();

    const [topic, setTopic] = useState(null);
    const getTopic = async () => {
        setTopic(await AsyncStorage.getItem('topic'));
    }
    
    useEffect(() => {
        getTopic();
    }, []);


  const gotToVideo = async (video) => {
		await AsyncStorage.setItem('video', video);
        navigation.navigate("Video");
	  };

    return (
        <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <View style={styles.container}>
                { topic === 'Fractions' &&
                (<TouchableHighlight style={styles.card} onPress={() => gotToVideo('GvLIEiqxS6s')} >
                    <Text style={{color: "white"}} >Basic Fraction Operations</Text>
                </TouchableHighlight>)
                }
                { topic === 'Letter Writing' &&
                (<TouchableHighlight style={styles.card} onPress={() => gotToVideo('PgwmAUJx248')} >
                    <Text style={{color: "white"}} >Formal and Informal Letters</Text>
                </TouchableHighlight>)
                }
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        //backgroundColor: "white",
        borderRadius: 10,
        color: "white",
        //padding: 10,
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center", // Align cards vertically
        justifyContent: "space-evenly", // Distribute space between cards
        padding: 20,
        },
        card: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: 120,
        height: 100,
        backgroundColor: "dodgerblue",
        // marginVertical: 5,
        borderRadius: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // color: "red",
        fontWeight: "light",
        marginBottom: 20,
        },
})

export default VidSubtopicScreen;