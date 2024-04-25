// // feel free to ignore this page for now, it could be useful in future for videos outside youtube

// import React from 'react';
// import { SafeAreaView, Button } from 'react-native';
// import { Video } from 'expo-av';

// const TrialVideo = () => {
//   const video = React.useRef(null);

//   const playVideo = async () => {
//     await video.current.playAsync();
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <Video
//         ref={video}
//         //https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4
//         source={{ uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }} // this is for videos ready to be downloaded from browser...(e.g .mp4)
//         style={{ width: "100%", height: "30%" }}
//         useNativeControls
//         resizeMode="contain"
//         isLooping
//         onPlaybackStatusUpdate={(status) => console.log(status)}
//       />
//       <Button title="Play Video" style={{alignItems: "center", justifyContent: "center"}} onPress={() => playVideo()} />
//     </SafeAreaView>
//   );
// };

// export default TrialVideo;
