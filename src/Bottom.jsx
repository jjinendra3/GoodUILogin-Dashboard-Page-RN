import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Box, Image, Button, Text, ButtonText } from "@gluestack-ui/themed";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/FontAwesome";
import mask from "../assets/Mask group.png";
import Upper from "./Upper";

const BlueScreen = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const flatListRef = useRef(null);

  const data = [
    "Finance",
    "Admission",
    "Inventory",
    "Communication",
    "Invesntory",
    "Commdunication",
    "Invwentory",
    "Communicatifon",
  ];

  const Pagination = () => (
    <View style={styles.pagination}>
      {Array.from({ length: Math.ceil(data.length / 3) }).map((_, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.paginationDot,
            currentPage === index && styles.paginationDotActive,
          ]}
          onPress={() => scrollToPage(index)}
        />
      ))}
    </View>
  );

  const scrollToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    flatListRef.current.scrollToIndex({
      index: pageNumber * 4,
      animated: true,
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Box bg="#203fba" flex={1}>
          <View style={styles.topContainer}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                marginTop: 20,
                alignItems: "center",
              }}
            >
              <View style={{ flex: 3, marginLeft: 4 }}>
                <Image source={mask} alt="user" size="xs" />
              </View>
              <Box
                style={{
                  paddingHorizontal: 10,
                  borderWidth: 1,
                  borderColor: "white",
                  flex: 2,
                  alignItems: "center",
                  flexDirection: "row",
                  paddingVertical: 5,
                  borderRadius: 10,
                  justifyContent: "space-evenly",
                  marginVertical: 10,
                }}
              >
                <Text color="white">Select Branch</Text>
                <Icon name="angle-down" size={28} color="white" />
              </Box>
            </View>
          </View>
          <View style={{ padding: 10, marginLeft: 10 }}>
            <Text size="3xl" bold={true} color="white">
              Welcome Aboard!
            </Text>
            <Text
              size="sm"
              color="white"
              style={{ marginTop: 10, marginBottom: 20 }}
            >
              You have successfully logged in to your account. We hope you have
              an amazing experience!
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: "auto",
              justifyContent: "space-evenly",
              marginLeft: 10,
            }}
          >
            <FlatList
              data={data}
              keyExtractor={(item) => item}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                  <TouchableOpacity
                    style={{
                      borderWidth: 1,
                      borderColor: "grey",
                      borderRadius: 10,
                      padding: 12,
                      marginBottom: 5,
                    }}
                  >
                    <Icon name="user-o" size={20} color="white" />
                  </TouchableOpacity>
                  <Text size="sm" color="white">
                    {item}
                  </Text>
                </View>
              )}
            />
            <Pagination />
          </View>
        </Box>
        <Upper></Upper>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 8,
  },
  itemContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginHorizontal: 10,
    borderRadius: 20,
    marginRight: 40,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#3152d0",
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: "white",
  },
});

export default BlueScreen;
