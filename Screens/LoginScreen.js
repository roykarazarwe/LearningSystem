 //https://cors-anywhere.herokuapp.com/https://magezi.ac.ug/mobile_app_end_points/login.php


// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      if (email == "" & password == "") {
        setError("Email and password can not be empty");
      }else if (email == "" & password !== "") {
        setError("Email can not be empty");
      }else if (email !== "" & password == "") {
        setError("Password can not be empty");
      } else {
        await fetch(
          "https://cors-anywhere.herokuapp.com/https://magezi.ac.ug/mobile_app_end_points/login.php",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email,
              password: password,
            }),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.status == "wrong_password") {
              setError("wrong password");
            } else {
              navigation.replace("DashboardScreen");
            }
          })
          .catch((err) => console.error(err));

      }
      
    } catch (error) {
      console.error('Login error:', error);
      setError('An unexpected error occurred. Please check your network connection and try again.');
    }
  };

  const handleSignUp = () => {
    navigation.navigate("SignUpScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoImage}>
        <Image
          source={require("../assets/logo.png")}
          style={{ width: 200, height: 200, resizeMode: "contain" }}
        />
      </View>
      {error ? (
        <Text style={styles.error}>
          {error}
          <MaterialCommunityIcons name="alert" size={24} color="white" />
        </Text>
      ) : null}
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={[styles.signupText, styles.signupLink]}>
            {" "}
            Create account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  signupLink:{
    color: "dodgerblue",
    width:"80%",
  },
  logoImage: {
    width: 100,
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center'
  },
  input: {
    height: 50,
    width:'80%',
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    width: "60%",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontFamily:"Nunito"
    // fontWeight: "bold",
  },
  error: {
    color: 'white',
    marginBottom: 10,
    height: 40,
    width: "80%",
    backgroundColor: "crimson",
    borderRadius: 5,
    display:'flex',
    justifyContent:"center",
    alignItems: "center",
    
  },
});

export default LoginScreen;










// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
// } from "react-native";

// const LoginScreen = ({ navigation }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");


 
//   const handleLogin = async () => {
//     try {
//       const response = await fetch(
//         "https://cors-anywhere.herokuapp.com/https://magezi.ac.ug/mobile_app_end_points/login.php",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ email, password }),
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         // Login successful, navigate to dashboard
//         navigation.replace("DashboardScreen");
//       } else {
//         // Login failed, display error message
//         if (response.status === 401) {
//           // Unauthorized: invalid credentials
//           setError("Invalid email or password. Please try again.");
//         } else {
//           // Other error status codes
//           setError("An error occurred. Please try again later.");
//         }
//         console.error("Login failed:", data); // Log detailed error response
//       }
//     } catch (error) {
//       // Network error or other unexpected error
//       console.error("Error:", error);
//       setError(
//         "An error occurred. Please check your network connection and try again."
//       );
//     }
//   };
  

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
//       {error ? <Text style={styles.error}>{error}</Text> : null}
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         onChangeText={setEmail}
//         value={email}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         onChangeText={setPassword}
//         value={password}
//         secureTextEntry
//       />
//       <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#fff",
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
//   input: {
//     width: "80%",
//     height: 40,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   button: {
//     backgroundColor: "blue",
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: "white",
//     fontSize: 16,
//   },
//   error: {
//     color: "red",
//     marginBottom: 10,
//   },
// });

// export default LoginScreen;


















// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
// } from "react-native";
// import { Image } from "react-native";

// const LoginScreen = ({ navigation }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     // Implement your login logic here
//     // For demo purposes, let's assume successful login navigates to the dashboard
//     console.log("Logging in with:", { username, password });
//     navigation.replace("DashboardScreen");
//   };

//   const handleSignUp = () => {
//     navigation.navigate("SignUpScreen");
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.logoImage}>
//         <Image
//           source={require("../assets/logo.png")}
//           style={{width:200,height:200,resizeMode:'contain'}}
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter email or student code"
//           onChangeText={(text) => setUsername(text)}
//           value={username}
//           autoCapitalize="none"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           onChangeText={(text) => setPassword(text)}
//           value={password}
//           secureTextEntry
//         />
//       </View>
//       <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Sign In</Text>
//       </TouchableOpacity>
//       <View style={styles.signupContainer}>
//         <Text style={styles.signupText}>Don't have an account?</Text>
//         <TouchableOpacity onPress={handleSignUp}>
//           <Text style={[styles.signupText, styles.signupLink]}> Create account</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f5f5f5",
//     paddingHorizontal: 20,
//   },
//   logoImage: {
//     width: 100,
//     height: 100,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems:'center'
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   inputContainer: {
//     width: "100%",
//     marginBottom: 20,
//   },
//   input: {
//     height: 50,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     borderRadius: 10,
//     paddingHorizontal: 15,
//     marginBottom: 10,
//     backgroundColor: "#fff",
//   },
//   button: {
//     backgroundColor: "#007bff",
//     width: "100%",
//     height: 50,
//     borderRadius: 10,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 15,
//     fontFamily:"Nunito"
//     // fontWeight: "bold",
//   },
//   signupContainer: {
//     flexDirection: "row",
//     marginTop: 20,
//   },
//   signupText: {
//     fontSize: 16,
//   },
//   signupLink: {
//     marginLeft: 5,
//     color: "#007bff",
//   },
// });

// export default LoginScreen;
