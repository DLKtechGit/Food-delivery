import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import Icon3 from "react-native-vector-icons/Entypo";
import Icon4 from "react-native-vector-icons/Feather";
import Profilescreen from "./Profilescreen";
import { COLORS } from "../../constants";
import Mainhomescreen from "./Mainhomescreen";
import Cartscreen from "./Cartscreen";
import Orderscreen from "./Orderscreen";

const tab = createBottomTabNavigator();
const Mainscreen = () => {
  return (
    <>
      <tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            elevation: 0,
            height: hp(7),
            backgroundColor: COLORS.white,
          },
        }}
      >
        <tab.Screen
          name="home"
          component={Mainhomescreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon3
                name="home"
                size={focused ? 28 : 25}
                color={focused ? COLORS.primary : COLORS.black}
                style={{ padding: 10, textAlign: "center", marginVertical: 5 }}
              />
            ),
          }}
        />

        <tab.Screen
          name="order"
          component={Orderscreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon4
                name="shopping-bag"
                size={focused ? 28 : 25}
                color={focused ? COLORS.primary : COLORS.black}
                style={{ padding: 10, textAlign: "center", marginVertical: 5 }}
              />
            ),
          }}
        />

        <tab.Screen
          name="cart"
          component={Cartscreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon4
                name="shopping-cart"
                size={focused ? 28 : 25}
                color={focused ? COLORS.primary : COLORS.black}
                style={{
                  padding: 10,
                  textAlign: "center",
                  marginVertical: 5,
                }}
              />
            ),
          }}
        />

        <tab.Screen
          name="profile"
          component={Profilescreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon4
                name="user"
                size={focused ? 28 : 25}
                color={focused ? COLORS.primary : COLORS.black}
                style={{ padding: 10, textAlign: "center", marginVertical: 5 }}
              />
            ),
          }}
        />
      </tab.Navigator>
    </>
  );
};

// const styles = StyleSheet.create({

// })

export default Mainscreen;
