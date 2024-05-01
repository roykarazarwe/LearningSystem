import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import YoutubeIframe from 'react-native-youtube-iframe'; 
import YoutubePlayer from 'react-native-youtube-iframe';  // install gesureHandler v2.14.0,  webview v11  npx expo install react-native-reanimated->to solve main Application error

function VideoScreen(props) {
    const [video, setVideo] = useState(null);

    const getVideo = async () => {
        setVideo(await AsyncStorage.getItem('video'));
    }
    
    useEffect(() => {
        getVideo();
    }, []);

    return (
        <SafeAreaView>
            <YoutubePlayer
                height={300}
                // play={true}
                videoId={video}
            />
        </SafeAreaView>
    );
}

export default VideoScreen;