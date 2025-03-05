
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchUserDetails, clearUserDetails } from '../redux/slices/usersSlice';
import { logout } from '../redux/slices/authSlice';

const UserDetails = () => {
  const dispatch = useAppDispatch();
  const { userDetails, status, error } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUserDetails());

    return () => {
      dispatch(clearUserDetails());
    };
  }, [dispatch]);

  if (status === 'loading') {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  if (status === 'failed') {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Error: {error}</Text>
      </View>
    );
  }

  if (!userDetails) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: userDetails.image }} style={styles.profileImage} />
      <Text style={styles.name}>{userDetails.name}</Text>
      <Text style={styles.username}>@{userDetails.username}</Text>
      <Text style={styles.email}>{userDetails.email}</Text>
      <Text style={styles.phone}>{userDetails.phone}</Text>
      <Text style={styles.address}>{userDetails.address.address}</Text>
      <Button title='Logout' onPress={() => dispatch(logout())}></Button>
    </View>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 50,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: '#272727',
  },
  username: {
    fontSize: 18,
    fontWeight: '500',
    color: '#8E6CEF',
  },
  email: {
    fontSize: 16,
    color: '#000000',
    marginTop: 8,
  },
  phone: {
    fontSize: 16,
    color: '#000000',
    marginTop: 8,
  },
  address: {
    fontSize: 16,
    color: '#000000',
    marginTop: 8,
    textAlign: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 16,
    color: '#000000',
  },
});