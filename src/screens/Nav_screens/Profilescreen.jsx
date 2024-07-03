import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import React from "react";
import safe_area_style from "../../safe_area_style";
import { COLORS } from "../../constants";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/FontAwesome5";
import Icon3 from "react-native-vector-icons/FontAwesome";
import Icon6 from "react-native-vector-icons/MaterialIcons";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const Profilescreen = ({ navigation }) => {
  const Logout = () => {
    Alert.alert(
      "Are you sure",
      "You want to log out",
      [
        { text: "YES", onPress: () => alert("Successfully logged out") },
        { text: "NO", onPress: () => navigation.navigate("home") },
      ],
      { cancelable: true }
    );
  };
  return (
    <SafeAreaView style={safe_area_style.androidsafearea}>
      {/* main container */}
      <View style={styles.profile_main_container}>
        {/* first header section */}
        <View style={styles.first_header_container}>
          <Icon
            name="arrowleft"
            size={25}
            onPress={() => navigation.navigate("home")}
          />
          <Text style={styles.profile_txt}>Profile</Text>
        </View>

        {/* background image */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Image
              source={require("../../assets/profile_bg.jpg")}
              style={styles.profile_bg_img}
            />
          </View>
          {/* profile pic container */}
          <View style={styles.profile_pic_container}>
            <Image
              source={require("../../assets/person.jpg")}
              style={styles.profile_img}
            />
            <View style={styles.icon_container}>
              <Icon2
                name="user-edit"
                size={18}
                style={styles.edit_icon}
                color={COLORS.black}
              />
            </View>
          </View>
          {/* user details and input field */}
          <Text style={styles.user_name}>TOMMY SHELBY</Text>
          <View style={styles.profile_second_container}>
            {/* Edit profile btn */}
            <Pressable
              style={styles.btn_container}
              onPress={() => navigation.navigate("edit-profile")}
            >
              <View style={styles.icon_name_contaier}>
                <View style={styles.btn_icon_container}>
                  <Icon3 name="user" size={18} color={COLORS.black} />
                </View>
                <Text style={styles.btn_txt}>Edit profile</Text>
              </View>
              <Icon3 name="chevron-right" size={14} color={COLORS.primary} />
            </Pressable>
            {/* change password btn */}
            <Pressable
              style={styles.btn_container}
              onPress={() => navigation.navigate("password")}
            >
              <View style={styles.icon_name_contaier}>
                <View style={styles.btn_icon_container}>
                  <Icon6 name="password" size={18} color={COLORS.black} />
                </View>
                <Text style={styles.btn_txt}>Change password</Text>
              </View>
              <Icon3 name="chevron-right" size={14} color={COLORS.primary} />
            </Pressable>
            {/* Logout btn */}
            <Pressable style={styles.btn_container} onPress={Logout}>
              <View style={styles.icon_name_contaier}>
                <View style={styles.btn_icon_container}>                  
                  <Icon3 name="power-off" size={18} color={COLORS.primary} />
                </View>
                <Text style={styles.logout_btn_txt}>Log out</Text>
              </View>
              <Icon3 name="chevron-right" size={14} color={COLORS.primary} />
            </Pressable>

            {/* change password screen */}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Profilescreen;

const styles = StyleSheet.create({
  profile_main_container: {
    backgroundColor: COLORS.gray,
    flex: 1,
  },
  first_header_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    backgroundColor: COLORS.white,
    padding: 15,
    // borderBottomLeftRadius:20,
    // borderBottomRightRadius:20
  },
  profile_txt: {
    fontWeight: "600",
    fontSize: 18,
  },
  profile_bg_img: {
    height: hp(20),
    width: "100%",
    objectFit: "cover",
    opacity: 0.7,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profile_img: {
    width: 145,
    height: 145,
    objectFit: "cover",
    borderRadius: 145 / 2,
    borderColor: COLORS.white,
    borderWidth: 5,
  },
  profile_pic_container: {
    display: "flex",
    alignItems: "center",
    marginTop: -70,
    position: "relative",
  },

  icon_container: {
    backgroundColor: COLORS.gray,
    width: 40,
    height: 40,
    position: "absolute",
    bottom: 5,
    right: wp(30),
    padding: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40 / 2,
    borderColor: COLORS.white,
    borderWidth: 3,
  },
  profile_second_container: {
    display: "flex",
    flexDirection: "column",
    padding: 15,
    paddingBottom: 80,
  },
  user_name: {
    fontWeight: "700",
    fontSize: 16,
    textAlign: "center",
    padding: 10,
  },

  btn_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
    paddingVertical: 13,
    borderRadius: 10,
    marginBottom: 25,
    elevation: 3,
  },
  icon_name_contaier: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  btn_txt: {
    fontSize: 17,
    fontWeight: "600",
    color: COLORS.black,
  },
  logout_btn_txt:{
    fontSize:17,
    fontWeight:'600',
    color:COLORS.primary
  },
  btn_icon_container: {
    borderColor: COLORS.gray,
    borderWidth: 1,
    padding: 5,
    width: 30,
    height: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
});
