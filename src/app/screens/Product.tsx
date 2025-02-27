import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

interface ProductProps {
  title: string;
  price: number;
  thumbnail: string;
  onPressHeart: () => void;
}

const Product: React.FC<ProductProps> = ({ title, price, thumbnail, onPressHeart }) => {
  return (
    <View style={styles.itemBox}>
      <TouchableOpacity onPress={onPressHeart} style={styles.heartButton}>
        <Image source={require("../assets/fav-icon.png")} style={styles.heartIcon} />
      </TouchableOpacity>
      <Image source={{ uri: thumbnail }} style={styles.itemImage} />
      <View style={styles.textContainer}>
        <Text style={styles.itemName} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.itemPrice}>$ {price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemBox: {
    backgroundColor: "#F4F4F4",
    alignItems: "center",
    marginBottom: 20,
    width: 145,
    height: 281,
    paddingBottom: 16,
    borderRadius: 8,
  },
  heartButton: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
  heartIcon: {
    width: 25,
    height: 25,
  },
  itemImage: {
    width: 145,
    height: 220,
    marginBottom: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  textContainer: {
    alignSelf: "flex-start",
    paddingHorizontal: 8,
  },
  itemName: {
    textAlign: "left",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 19.2,
  },
  itemPrice: {
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 14.4,
    textAlign: "left",
  },
});

export default Product;
