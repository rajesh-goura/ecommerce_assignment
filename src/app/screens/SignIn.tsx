import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Button, useColorScheme } from 'react-native';
import React from 'react';
import { useThemeContext } from '../context/ThemeContext';

const SignIn = () => {
  const { theme, toggleTheme, setDeviceTheme } = useThemeContext();
  const deviceTheme = useColorScheme();
  const styles = useThemeStyles(theme);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.signInText}>Sign in</Text>

      <View style={styles.emailBox}>
        <TextInput
          placeholder='Email Address'
          placeholderTextColor={theme.colors.text} 
          style={styles.emailInput}
        />
        <TouchableOpacity style={styles.signInBtn}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        <Text style={styles.createAccText}>
          Don't have an Account? <Text style={styles.createAccBold}>Create One</Text>
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

        <Button title="Toggle Theme" onPress={toggleTheme} />
        <Button title="Set Device Theme" onPress={() => setDeviceTheme(deviceTheme)} />
      </View>
    </View>
  );
};

const useThemeStyles = (theme:any) => {
  return StyleSheet.create({
    mainContainer: {
      flex: 1,
      paddingHorizontal: 24,
      paddingVertical: 64,
      justifyContent: "center",
      backgroundColor: theme.colors.background,
    },
    signInText: {
      fontWeight: "700",
      fontSize: 32,
      lineHeight: 34.5,
      letterSpacing: -0.41,
      marginBottom: 40,
      textAlign: "left",
      color: theme.colors.text,
    },
    emailBox: {
      gap: 16,
      width: "100%",
    },
    emailInput: {
      borderRadius: 8,
      padding: 14,
      fontSize: 16,
      width: "100%",
      alignSelf: "stretch",
      backgroundColor: theme.colors.card,
      color: theme.colors.text,
    },
    signInBtn: {
      paddingVertical: 14,
      borderRadius: 100,
      backgroundColor: theme.colors.primary,
      alignItems: "center",
      width: "100%",
    },
    buttonText: {
      fontSize: 16,
      fontWeight: "600",
      color: theme.colors.background,
    },
    createAccText: {
      fontWeight: "400",
      fontSize: 14,
      textAlign: "center",
      lineHeight: 20,
      color: theme.colors.text,
    },
    createAccBold: {
      fontWeight: "700",
      color: theme.colors.primary,
    },
    signInOptions: {
      marginTop: 24,
      gap: 12,
      width: "100%",
    },
    signInBtns: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 16,
      paddingHorizontal: 20,
      borderRadius: 100,
      justifyContent: "center",
      width: "100%",
      alignSelf: "stretch",
      backgroundColor: theme.colors.card,
    },
    icon: {
      width: 20,
      height: 24,
    },
    signInbuttonText: {
      textAlign: "center",
      fontSize: 16,
      fontWeight: "500",
      flex: 1,
      color: theme.colors.text,
    },
  });
};

export default SignIn;