import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { NavigationContainer } from "@react-navigation/native";
import Bottom from "./src/Bottom";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./src/Profile";
import Icon from "react-native-vector-icons/FontAwesome";
import Icons from "react-native-vector-icons/Feather";
import Iicons from "react-native-vector-icons/Ionicons";

import Ent from 'react-native-vector-icons/Entypo'
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Bottom} options={{
          tabBarIcon: ({ color, size }) => (
            <Ent name="home" color={"#8794b4"} size={36} />
          ),
        }}/>
      <Tab.Screen name="Timelines" component={Bottom} options={{
          tabBarIcon: ({ color, size }) => (
            <Ent name="flow-line" color={color} size={36} />
          ),
        }}/>
      <Tab.Screen name="Approvals" component={Bottom} options={{
          tabBarIcon: ({ color, size }) => (
            <Icons name="check" color={color} size={36} />
          ),
        }}/>
      <Tab.Screen name="Notifications" component={Bottom}  options={{
          tabBarIcon: ({ color, size }) => (
            <Iicons name="notifications" color={color} size={36} />
          ),
        }}/>
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="HomePage" component={MyTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
