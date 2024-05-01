import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import PaymentScreen from "./PaymentScreen";
import { useNavigation } from "@react-navigation/native";
const SubscribeScreen = () => {
    const navigation = useNavigation();
  const handlePaymentOptionPress = (value) => {
      // Navigate to payment screen with the selected payment option
      navigation.navigate(value);
    // navigation.navigate("PaymentScreen", { paymentOption });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardTitle}>
          <Text style={styles.paymentOption}>Flutterwave</Text>
          <Image
            source={require("../assets/flutterwave.png")}
            style={styles.logo}
          />
        </View>

        <View style={styles.smallImagesContainer}>
          {/* Render small images */}
          <Image
            source={require("../assets/image1.png")}
            style={styles.smallImage}
          />
          <Image
            source={require("../assets/image2.png")}
            style={styles.smallImage}
          />
          <Image
            source={require("../assets/image3.png")}
            style={styles.smallImage}
          />
          <Image
            source={require("../assets/image4.png")}
            style={styles.smallImage}
          />
          <Image
            source={require("../assets/image5.png")}
            style={styles.smallImage}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePaymentOptionPress("Payment")}
        >
          <Text style={styles.buttonText}>Subscribe with Flutterwave</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <View style={styles.cardTitle}>
          <Text style={styles.paymentOption}>PesaPal</Text>
          <Image
            source={require("../assets/pesapal.png")}
            style={styles.logo}
          />
        </View>

        <View style={styles.smallImagesContainer}>
          {/* Render small images */}
          <Image
            source={require("../assets/image1.png")}
            style={styles.smallImage}
          />
          <Image
            source={require("../assets/image2.png")}
            style={styles.smallImage}
          />
          <Image
            source={require("../assets/image3.png")}
            style={styles.smallImage}
          />
          <Image
            source={require("../assets/image4.png")}
            style={styles.smallImage}
          />
          <Image
            source={require("../assets/image5.png")}
            style={styles.smallImage}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePaymentOptionPress("pesapal")}
        >
          <Text style={styles.buttonText}>Subscribe with Pesapal</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardTitle: {
    display: "flex",
    flexDirection: "row",
    flexWrap:'wrap',
    justifyContent: "space-between",
    marginBottom: 10,
    // width: 100,
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems:'center',
    // backgroundColor:'red'
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
      paddingHorizontal: 20,
    paddingTop:10
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 20,
    marginBottom: 20,
    width: "100%",
    alignItems: "center",
  },
  paymentOption: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily: "Nunito",
  },
  logo: {
    width: 100,
    height: 50,
    marginBottom: 10,
    resizeMode: "contain",
  },
  smallImagesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  smallImage: {
    width: 30,
    height: 30,
    borderRadius: 3,
    resizeMode: "contain",
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "#333",
    fontSize: 16,
  },
});

export default SubscribeScreen;
