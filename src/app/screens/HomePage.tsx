import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import SearchBar from "./SearchBar";
import CategoryContainer from "./CategoryContainer";
import TopSellingContainer from "./TopSellingContainer";
import NewCollection from "./NewCollection";
import NavigationBar from "./NavigationBar";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.topSection}>
            <TouchableOpacity style={styles.topSectionBtn}>
              <Image
                style={{ width: 40, height: 40, borderRadius: 100 }}
                source={require("../assets/profile/Ellipse 13.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.genderBtn}>
              <Text style={styles.boldTxt}>Men {"V"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.topSectionBtn}>
              <Image
                style={{ width: 40, height: 40, borderRadius: 100 }}
                source={require("../assets/icons/Frame 32.png")}
              />
            </TouchableOpacity>
          </View>
          <SearchBar />
          <CategoryContainer />
          <TopSellingContainer />
          <NewCollection />
        </View>
      </ScrollView>

     
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    paddingRight: 24,
    paddingLeft: 24,
    paddingVertical: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  topSection: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: 342,
    height: 40,
  },
  topSectionBtn: {
    width: 40,
    height: 40,
  },
  genderBtn: {
    width: 72,
    height: 40,
    borderRadius: 100,
    paddingVertical: 12,
    paddingHorizontal: 14,
    backgroundColor: "#F4F4F4",
  },
  boldTxt: {
    fontFamily: "Gabarito",
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 14.4,
  },
  navbarContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    elevation: 10,
  },
});
