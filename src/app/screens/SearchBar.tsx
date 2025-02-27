import { View, Text, TouchableOpacity ,Image, TextInput , StyleSheet} from 'react-native'
import React from 'react'

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
        <Image style={{width:16,height:16}}source={require("../assets/icons/searchnormal1.png")}></Image>

        <TextInput placeholder='Search' >
        
        </TextInput>
      
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    searchBar:{
        width:342,
        height:40,
        borderRadius:100,
        marginVertical:24,
        paddingLeft:19,
        paddingVertical:11,
        backgroundColor:"#F4F4F4",
        flexDirection:"row",
        gap:12,
        marginBottom:24,
    },
})