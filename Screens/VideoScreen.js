import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
//import YoutubeIframe from 'react-native-youtube-iframe'; 
import YoutubePlayer from 'react-native-youtube-iframe';  // install gesureHandler v2.14.0,  webview v11

function VideoScreen(props) {
  return (
    <SafeAreaView>
        <YoutubePlayer
            height={300}
            play={true}
            videoId={'GvLIEiqxS6s'}
        />
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
// container: {
//   flex: 1,
//   alignItems: 'center',
//   justifyContent: 'center',
// },
// });

export default VideoScreen;