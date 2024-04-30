import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableHighlight, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function VidTopicScreen(props) {
    const navigation = useNavigation();

    const [subject, setSubject] = useState(null);
    useEffect( async () => {
	    setSubject(await AsyncStorage.getItem('subject'));
    }, []);

  const gotToSubtopics = async (topic) => {
		await AsyncStorage.setItem('topic', topic);
        navigation.navigate("Sub Topics");
	  };

    return (
        <SafeAreaView style={styles.container}>
            { subject === 'Math' &&
            (<TouchableHighlight style={styles.link} onPress={() => gotToSubtopics('Fractions')} >
                <Text style={{color: "white"}} >Fractions</Text>
            </TouchableHighlight>)
            }
            { subject === 'English' &&
            (<TouchableHighlight style={styles.link} onPress={() => gotToSubtopics('Letter Writing')} >
                <Text style={{color: "white"}} >Letter Writing</Text>
            </TouchableHighlight>)
            }
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

export default VidTopicScreen;