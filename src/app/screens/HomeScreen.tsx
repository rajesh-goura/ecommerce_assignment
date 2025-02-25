import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { useThemeContext } from '../context/ThemeContext';

const HomeScreen = () => {
  const { token, logout } = useAuth();
  const { theme, toggleTheme } = useThemeContext();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={{ color: theme.colors.text }}>Home Screen</Text>
      {token ? (
        <View>
          <Text style={{ color: theme.colors.text }}>You are logged in</Text>
          <Button title="Logout" onPress={logout} />
        </View>
      ) : (
        <View>
          <Text style={{ color: theme.colors.text }}>You are not logged in</Text>
        </View>
      )}
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;