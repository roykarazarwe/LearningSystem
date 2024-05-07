import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// npm install expo-constants  npm install react-native-webview@11
import PdfReader from "@bildau/rn-pdf-reader";

const ReadingScreen = () => {
    const [book, setBook] = useState(null);

    const getBook = async () => {
        setBook(await AsyncStorage.getItem('book'));
    }
    
    useEffect(() => {
        getBook();
    }, []);

  // "https://www.mathantics.com/files/pdfs/Worksheets_SimplifyingFractions.pdf"
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PdfReader
        source={{ uri: book }}
      />
    </SafeAreaView>
  );
  
};

export default ReadingScreen;
