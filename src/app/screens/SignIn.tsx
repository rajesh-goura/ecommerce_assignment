import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  

 
  const handleSignIn = async () => {
    try {
      const response:any= await axios.post('https://dummyjson.com/auth/login', {
        username: username,
        password: password,
      });
     
      const token = response.data.accessToken;
      login(token);
      
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.signInText}>Sign in</Text>

      <View style={styles.emailBox}>
        <TextInput
          placeholder='Username'
          style={styles.emailInput}
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
        <TextInput
          placeholder='Password'
          style={styles.emailInput}
          value={password}
          onChangeText={setPassword}
          // secureTextEntry
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.signInBtn} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        <Text style={styles.createAccText}>
          Don't have an Account?{' '}
          <Text style={styles.createAccBold}>Create One</Text>
        </Text>
      </View>

      <View style={styles.signInOptions}>
        <TouchableOpacity style={styles.signInBtns}>
          <Image source={require('../assets/Apple svg.png')} style={styles.icon} />
          <Text style={styles.signInbuttonText}>Continue with Apple</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signInBtns}>
          <Image source={require('../assets/Google - png 0.png')} style={styles.icon} />
          <Text style={styles.signInbuttonText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signInBtns}>
          <Image source={require('../assets/Facebook - png 0.png')} style={styles.icon} />
          <Text style={styles.signInbuttonText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 24,
    paddingVertical: 64,
    justifyContent: "center",
  },
  signInText: {
    fontWeight: "700",
    fontSize: 32,
    lineHeight: 34.5,
    letterSpacing: -0.41,
    marginBottom: 40,
    textAlign: "left",
    color: "#272727",
  },
  emailBox: {
    gap: 16,
    width: "100%",
  },
  emailInput: {
    borderRadius: 8,
    backgroundColor: "#F4F4F4",
    padding: 14,
    fontSize: 16,
    color: "black",
    width: "100%",
    alignSelf: "stretch",
  },
  signInBtn: {
    backgroundColor: "#8E6CEF",
    paddingVertical: 14,
    borderRadius: 100,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  createAccText: {
    color: "black",
    fontWeight: "400",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 20,
  },
  createAccBold: {
    fontWeight: "700",
    color: "#000000",
  },
  signInOptions: {
    marginTop: 24,
    gap: 12,
    width: "100%",
  },
  signInBtns: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F4F4F4",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 100,
    justifyContent: "center",
    width: "100%",
    alignSelf: "stretch",
  },
  icon: {
    width: 20,
    height: 24,
  },
  signInbuttonText: {
    color: "black",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
    flex: 1,
  },
});
