import { View, Text, StyleSheet, Image, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface UserDetails {
  image: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  address: Address;
}
interface Address{
    address:string;
}

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const {logout} = useAuth();
  

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response:any= await axios.get('https://dummyjson.com/auth/me');
        setUserDetails(response.data);
      } catch (error) {
        console.error('Failed to fetch user details:', error);
      }
    };

    fetchUserDetails();
  }, []);

  if (!userDetails) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: userDetails.image }} style={styles.profileImage} />
      <Text style={styles.name}>{userDetails.name}</Text>
      <Text style={styles.username}>@{userDetails.username}</Text>
      <Text style={styles.email}>{userDetails.email}</Text>
      <Text style={styles.phone}>{userDetails.phone}</Text>
      <Text style={styles.address}>{userDetails.address.address}</Text>
      <Button title='Logout' onPress={logout}></Button>
    </View>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding:50 ,
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