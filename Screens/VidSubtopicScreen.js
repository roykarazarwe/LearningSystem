import React from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableHighlight, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function VidSubtopicScreen(props) {
    const navigation = useNavigation();

    const [topic, setTopic] = useState(null);
    useEffect( async () => {
	    setTopic(await AsyncStorage.getItem('topic'));
    }, []);


  const gotToVideo = async (video) => {
		await AsyncStorage.setItem('video', video);
        navigation.navigate("Video");
	  };

    return (
        <SafeAreaView style={styles.container}>
            { topic === 'Fractions' &&
            (<TouchableHighlight style={styles.link} onPress={() => gotToVideo('GvLIEiqxS6s')} >
                <Text style={{color: "white"}} >Basic Fraction Operations</Text>
            </TouchableHighlight>)
            }
            { topic === 'Letter Writing' &&
            (<TouchableHighlight style={styles.link} onPress={() => gotToVideo('PgwmAUJx248')} >
                <Text style={{color: "white"}} >Formal and Informal Letters</Text>
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

export default VidSubtopicScreen;