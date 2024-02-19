import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Text, Image } from "@gluestack-ui/themed";
import frame from "../assets/frame.png";
import Icon from "react-native-vector-icons/FontAwesome";
import Icons from "react-native-vector-icons/Feather";
import pie from "../assets/pie.png";
import rec from "../assets/rec.png";
import Money from "../assets/Money.png";
import Ent from "react-native-vector-icons/Entypo";
import blue from "../assets/blue.png";
import yellow from "../assets/yellow.png";
import red from "../assets/red.png";
import green from "../assets/green.png";
const Upper = () => {
  const data = [
    "Total Students",
    "Non Teaching Staff",
    "Teaching Staff",
    "Enquiries",
    "Applications",
    "Admissions",
  ];
  const [currentPage, setCurrentPage] = useState(2);
  const Pagination = () => (
    <View style={styles.pagination}>
      {Array.from({ length: Math.ceil(data.length / 2) }).map((_, index) => (
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
  return (
    <View style={{ flex: 1, backgroundColor: "#203fba", paddingTop: 20 }}>
      <View style={styles.container}>
        <Text size="2xl" bold>
          My Dashboard
        </Text>
        <View style={{ marginVertical: 10 }}>
          <FlatList
            data={data}
            keyExtractor={(item) => item}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 8,
                  }}
                >
                  <Image
                    source={frame}
                    size="xs"
                    alt="Icon"
                    style={{ marginRight: 5, borderRadius: 10 }}
                  />
                  <Text bold size="2xl">
                    1,245
                  </Text>
                </View>
                <View style={styles.itemRow}>
                  <Text size="sm" color="#75809b">
                    {item}
                  </Text>
                  <Text style={styles.viewLink} size="sm" color="#304274">
                    View
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#e9e9e9",
            borderRadius: 10,
            padding: 12,
            shadowOpacity: 1,
          }}
        >
          <Text bold={true} size="xl">
            Fee Collection
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 5,
              justifyContent: "space-between",
              backgroundColor: "#f5f6fa",
              borderRadius: 10,
              padding: 8,
              alignItems: "center",
            }}
          >
            <Text color="#75809b">Todays Collection</Text>
            <Text bold={true} size="xl">
              <Icon name="rupee" />
              16,00,98,029
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <Image
              source={pie}
              size="md"
              alt="Icon"
              style={{ marginRight: 5, borderRadius: 10 }}
            />

            <View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 5,
                }}
              >
                <Image
                  source={rec}
                  alt="Icon"
                  style={{ height: 15, width: 15, marginRight: 5 }}
                />
                <Text color="#7c7c7c" size="sm">
                  Total Fee Assigned-
                  <Text bold={true} size="sm">
                    <Icon name="rupee" />
                    100,16,98,029
                  </Text>
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 5,
                }}
              >
                <Image
                  source={green}
                  alt="Icon"
                  style={{ height: 15, width: 15, marginRight: 5 }}
                />
                <Text color="#7c7c7c" size="sm">
                  Total Concession Given-
                  <Text bold={true} size="sm">
                    <Icon name="rupee" />
                    16,98,029
                  </Text>
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 5,
                }}
              >
                <Image
                  source={red}
                  alt="Icon"
                  style={{ height: 15, width: 15, marginRight: 5 }}
                />
                <Text color="#7c7c7c" size="sm">
                  Total Net Fee-
                  <Text bold={true} size="sm">
                    <Icon name="rupee" />
                    16,98,029
                  </Text>
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 5,
                }}
              >
                <Image
                  source={blue}
                  alt="Icon"
                  style={{ height: 15, width: 15, marginRight: 5 }}
                />
                <Text color="#7c7c7c" size="sm">
                  Total Collected till date-
                  <Text bold={true} size="sm">
                    <Icon name="rupee" />
                    16,98,029
                  </Text>
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 5,
                }}
              >
                <Image
                  source={yellow}
                  alt="Icon"
                  style={{ height: 15, width: 15, marginRight: 5 }}
                />
                <Text color="#7c7c7c" size="sm">
                  Total Due -
                  <Text bold={true} size="sm">
                    <Icon name="rupee" />
                    16,98,029
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#e9e9e9",
            borderRadius: 10,
            padding: 12,
            shadowOpacity: 1,
            marginVertical: 10,
          }}
        >
          <Text size="xl" style={{ marginBottom: 10 }}>
            Branch Wise Strength
          </Text>
          <FlatList
            data={data}
            keyExtractor={(item) => item}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View
                style={{
                  borderRadius: 10,
                  padding: 16,
                  height: 120,
                  marginRight: 16,
                  width: 200,
                  backgroundColor: "#f6f7fa",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 8,
                  }}
                >
                  <Image
                    source={{
                      uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                    }}
                    size="xs"
                    alt="Icon"
                    style={{ marginRight: 5, borderRadius: 100 }}
                  />
                  <Text size="lg">Ameenpur</Text>
                </View>
                <View style={styles.itemRow}>
                  <View
                    style={{
                      flexDirection: "col",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text size="xl" color="black" bold={true}>
                      1245
                    </Text>
                    <Text size="sm" color="#75809b">
                      Student
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "col",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text size="xl" color="black" bold={true}>
                      1245
                    </Text>
                    <Text size="sm" color="#75809b">
                      Staff
                    </Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
        <Text size="xl" style={{ fontWeight: 500 }}>
          Approval Requests
        </Text>
        <View
          style={{
            borderRadius: 10,
            padding: 12,
            shadowOpacity: 1,
          }}
        >
          <FlatList
            data={data}
            keyExtractor={(item) => item}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View
                style={{
                  borderRadius: 10,
                  height: 240,
                  marginRight: 16,
                  width: 250,
                  backgroundColor: "#f6f7fa",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 8,
                  }}
                >
                  <View
                    style={{
                      padding: 8,
                      backgroundColor: "white",
                      borderRadius: 100,
                      marginRight: 3,
                    }}
                  >
                    <Icon name="money" color="green" size={24} />
                  </View>
                  <View style={{ flexDirection: "row", marginLeft: 5 }}>
                    <Text size="lg" bold>
                      Fee Concession
                    </Text>
                    <Icon
                      name="circle"
                      color="red"
                      style={{ paddingTop: 4, paddingRight: 4 }}
                    />
                  </View>
                </View>
                <View
                  style={{
                    borderBottomColor: "#dddddd",
                    borderBottomWidth: StyleSheet.hairlineWidth,
                  }}
                />
                <View style={{ marginTop: 10, padding: 16 }}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={{ flexDirection: "row", width: 200 }}>
                      <Icons name="clock" size={20} color="#304274" />
                      <View style={{ paddingLeft: 20 }}>
                        <Text style={{ fontWeight: 400, color: "#304274" }}>
                          Approved
                        </Text>
                      </View>
                    </View>
                    <Text bold size="xl">
                      33
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginVertical: 10,
                    }}
                  >
                    <View style={{ flexDirection: "row", width: 200 }}>
                      <Icons name="check" size={20} color="#304274" />
                      <View style={{ paddingLeft: 20 }}>
                        <Text style={{ fontWeight: 400, color: "#304274" }}>
                          Pending
                        </Text>
                      </View>
                    </View>
                    <Text bold size="xl">
                      06
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={{ flexDirection: "row", width: 200 }}>
                      <Ent name="cross" size={20} color="#304274" />
                      <View style={{ paddingLeft: 20 }}>
                        <Text style={{ fontWeight: 400, color: "#304274" }}>
                          Rejected
                        </Text>
                      </View>
                    </View>
                    <Text bold size="xl">
                      07
                    </Text>
                  </View>
                </View>
                <Text
                  size="sm"
                  color="#75809b"
                  style={{ textAlign: "right", marginRight: 10 }}
                >
                  View More
                </Text>
              </View>
            )}
          />
        </View>
        <Pagination></Pagination>
      </View>
    </View>
  );
};

export default Upper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: "#e9e9e9",
    borderRadius: 10,
    padding: 16,
    height: 100,
    marginRight: 16,
    width: 200,
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    justifyContent: "space-between",
  },
  viewLink: {
    textDecorationLine: "underline",
    marginLeft: "auto",
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 4,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#d9d9d9",
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: "#000000",
  },
});
