import React from 'react';
import { SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import YoutubeIframe from 'react-native-youtube-iframe'; 
import YoutubePlayer from 'react-native-youtube-iframe';  // install gesureHandler v2.14.0,  webview v11

function VideoScreen(props) {
    const [video, setVideo] = useState(null);
    useEffect(async () => {
        setVideo(await AsyncStorage.getItem('video'));
    }, []);

    return (
        <SafeAreaView>
            <YoutubePlayer
                height={300}
                play={true}
                videoId={video}
            />
        </SafeAreaView>
    );
}

export default VideoScreen;