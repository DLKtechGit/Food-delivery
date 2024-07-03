import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import safe_area_style from "../../safe_area_style";
import { COLORS } from "../../constants";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Fontisto";
import Icon5 from "react-native-vector-icons/FontAwesome5";
const Passwordscreen = ({ navigation }) => {
  const [showpassword, setshowpassword] = useState(false);
  const [newpassword, setnewpassword] = useState(false);
  return (
    <SafeAreaView style={safe_area_style.androidsafearea}>
      {/* main container */}
      <View style={styles.reset_password_main_container}>
        {/* first section */}
        <View style={styles.first_container}>
          <Icon
            name="arrowleft"
            size={25}
            onPress={() => navigation.navigate("profile")}
          />
          <Text style={styles.reset_password_txt}>Reset Password</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* image section */}
          <View style={styles.img_container}>
            <Image
              source={require("../../assets/password_img.png")}
              style={styles.image}
            />
            <Text style={styles.set_password_txt}>Set Your Password</Text>
          </View>
          {/* second section */}
          <View style={styles.second_main_container}>
            {/* current password field */}
            <Text style={styles.label}>Current Password</Text>
            <View style={styles.input_icon_main_container}>
              <View style={styles.input_field_and_icon_container}>
                <Icon2 name="locked" size={16} color={COLORS.dark_gray} />
                <TextInput
                  placeholder="Enter Your Current Password"
                  style={{ width: "85%" }}
                  secureTextEntry={!showpassword}
                />
              </View>
              <Icon5
                name={showpassword ? "eye" : "eye-slash"}
                size={16}
                onPress={() => setshowpassword(!showpassword)}
              />
            </View>
            {/* new password field */}
            <Text style={styles.label}>New Password</Text>
            <View style={styles.input_icon_main_container}>
              <View style={styles.input_field_and_icon_container}>
                <Icon2 name="locked" size={16} color={COLORS.dark_gray} />
                <TextInput
                  placeholder="Enter New Password"
                  style={{ width: "85%" }}
                  secureTextEntry={!newpassword}
                />
              </View>
              <Icon5
                name={newpassword ? "eye" : "eye-slash"}
                size={16}
                onPress={() => setnewpassword(!newpassword)}
              />
            </View>
            {/* confirm new password field */}
            <Text style={styles.label}>Confirm New Password</Text>
            <View style={styles.input_icon_main_container}>
              <View style={styles.input_field_and_icon_container}>
                <Icon2 name="locked" size={16} color={COLORS.dark_gray} />
                <TextInput
                  placeholder="Confirm New Password"
                  style={{ width: "100%" }}
                  // secureTextEntry={true}
                />
              </View>
              {/* <Icon5 name="eye" size={16} /> */}
            </View>
            {/* button section */}
            <TouchableOpacity
              style={styles.update_password_btn}
              onPress={() => alert("Your Password Updated Successfully")}
            >
              <Text style={styles.update_btn_txt}>Update Password</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Passwordscreen;

const styles = StyleSheet.create({
  reset_password_main_container: {
    backgroundColor: COLORS.gray,
    flex: 1,
  },
  first_container: {
    backgroundColor: COLORS.white,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    padding: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  reset_password_txt: {
    fontWeight: "600",
    fontSize: 16,
  },
  image: {
    width: 120,
    height: 120,
  },
  img_container: {
    display: "flex",
    alignItems: "center",
    padding: 15,
  },
  set_password_txt: {
    fontSize: 20,
    fontWeight: "800",
  },
  second_main_container: {
    padding: 15,
    display: "flex",
    flexDirection: "column",
    paddingTop: 40,
  },
  input_field_and_icon_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  input_icon_main_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: COLORS.white,
    marginTop: 10,
    marginBottom: 30,
    borderRadius: 5,
    elevation:3
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
  },
  update_password_btn: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 5,
    marginTop: 15,
  },
  update_btn_txt: {
    textAlign: "center",
    fontSize: 18,
    color: COLORS.white,
    fontWeight: "600",
  },
});
