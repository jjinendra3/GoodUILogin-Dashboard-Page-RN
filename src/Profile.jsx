import React, { useRef, useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity,ScrollView } from "react-native";
import { Box, Image, Button, Text, ButtonText } from "@gluestack-ui/themed";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-vector-icons/FontAwesome";
import Icons from "react-native-vector-icons/Foundation";
import { useNavigation } from "@react-navigation/native";
import {Dropdown} from 'react-native-element-dropdown'
const gender = <Text color="#75809b">Select Gender</Text>;
const data = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
];
const Profile = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [gender, setGender] = useState("");
  const [showDatePicker, setshowDatePicker] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const handleSubmit = () => {
    // Handle form submission
    console.log("Name:", name);
    console.log("Username:", username);
    console.log("Phone Number:", phoneNumber);
    console.log("Date of Birth:", dateOfBirth);
    console.log("Gender:", gender);
    navigation.navigate("HomePage");
  };
  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setDateOfBirth(selectedDate);
    }
    console.log(dateOfBirth);
    setshowDatePicker(false);
  };
  return (
    <View style={styles.container}>
      <ScrollView>
      <Box flex={1}>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 30 }}
        >
          <View
            style={{
              backgroundColor: "#f8f8f8",
              padding: 8,
              borderRadius: 10,
              paddingHorizontal: 20,
            }}
          >
            <Icon name="angle-left" size={32} color="grey"></Icon>
          </View>
        </View>
        <View style={styles.topContainer}>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              marginTop: 20,
              alignItems: "center",
            }}
          >
            <Image
              size="sm"
              borderRadius="$full"
              source={{
                uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              }}
              alt="User Icon"
            />
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text size={"3xl"} bold={true}>
                XYZ Modern International School
              </Text>
            </View>
          </View>
        </View>
        <Text size={"2xl"} bold={true} style={{ marginVertical: 20 }}>
          Forgot Password
        </Text>
        <Text size="lg" style={{ fontWeight: 400 }}>
          Name - <Text style={{ color: "red" }}>*</Text>
        </Text>
        <Box bgColor="#f8f8f8" style={{ borderRadius: 8, marginBottom: 10 }}>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Enter Name"
          />
        </Box>
        <Text size="lg" style={{ fontWeight: 400 }}>
          Username - <Text style={{ color: "red" }}>*</Text>
        </Text>
        <Box bgColor="#f8f8f8" style={{ borderRadius: 8, marginBottom: 10 }}>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholder="Enter Enrollment Code"
          />
        </Box>
        <Text size="lg" style={{ fontWeight: 400 }}>
          Phone Number -
        </Text>
        <Box bgColor="#f8f8f8" style={{ borderRadius: 8, marginBottom: 10 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              size="md"
              color="#75809b"
              style={{ marginLeft: 8, marginBottom: 1 }}
            >
              +91-{" "}
            </Text>
            <TextInput
              style={styles.input}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
            />
          </View>
        </Box>
        <Text size="lg" style={{ fontWeight: 400 }}>
          Date of Birth -
        </Text>
        <Box bgColor="#f8f8f8" style={{ borderRadius: 8, marginBottom: 10 }}>
          <TouchableOpacity
            style={{ height: 50, padding: 10, borderRadius: 5, fontSize: 16 }}
            onPress={() => {
              setshowDatePicker(true);
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "space-between",
                flexDirection: "row",
                paddingVertical: 3,
              }}
            >
              <Text color="#75809b">Select Date of Birth </Text>
              <Icons name="calendar" size={24} color="#75809b"></Icons>
            </View>
          </TouchableOpacity>
        </Box>
        {showDatePicker && (
          <RNDateTimePicker
            mode="date"
            value={dateOfBirth}
            onChange={handleDateChange}
          />
        )}
        <Text size="lg" style={{ fontWeight: 400 }}>
          Gender -
        </Text>
        <Box bgColor="#f8f8f8" style={{ borderRadius: 8, marginBottom: 10 }}>
          <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={"Select Gender"}
          placeholderTextColor="#75809b"
          value={gender}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setGender(item);
            setIsFocus(false);
          }}
        />
        </Box>
        {/* <Box
          bgColor="#f8f8f8"
          style={{
            borderRadius: 8,
            marginBottom: 10,
            height: 50,
            padding: 10,
            borderRadius: 5,
            fontSize: 16,
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "space-between",
              flexDirection: "row",
              paddingVertical: 3,
            }}
          >
            <Text color="#75809b">Select Gender</Text>
            <Icon name="angle-down" size={24} color="#75809b"></Icon>
          </View>
        </Box> */}
        <View>
          <Button
            size="lg"
            variant="solid"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
            style={{ marginVertical: 20, borderRadius: 10 }}
            onPress={handleSubmit}
          >
            <Text>
              <ButtonText>Continue </ButtonText>{" "}
              <Icon name="long-arrow-right" size={18} color="#fff" />
            </Text>
          </Button>

          <Button
            size="lg"
            variant="solid"
            action="secondary"
            isDisabled={false}
            isFocusVisible={false}
            style={{
              borderRadius: 10,
              backgroundColor: "#f8f8f8",
              color: "#ca352a",
            }}
          >
            <ButtonText color="#ca352a">Cancel </ButtonText>
          </Button>
        </View>
      </Box>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  input: {
    borderRadius: 5,
    padding: 10,
  },
  datePicker: {
    marginBottom: 10,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 8,
  },
});

export default Profile;
