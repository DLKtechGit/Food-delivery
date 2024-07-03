import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import React from "react";
import safe_area_style from "../safe_area_style";
import { COLORS } from "../constants";
import Icon from "react-native-vector-icons/AntDesign";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const Resetpasswordscreen = ({ navigation }) => {
  const showalert = () => {
    Alert.alert(
      "HI TOMMY",
      "Your password updated successfully",
      [
        {
          text: "OK",
        },
        {
          text: "HOME",
          onPress: () => navigation.navigate("main"),
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <SafeAreaView style={safe_area_style.androidsafearea}>
      <View style={styles.main_container}>
        {/* first header */}
        <View style={styles.first_header_container}>
          <Icon
            name="arrowleft"
            size={25}
            onPress={() => navigation.navigate("forget")}
          />
          <Text style={styles.reset_password_txt}>Recovery password</Text>
        </View>
        {/* image container */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.img_container}>
            <Image
              source={require("../assets/recover-password-icon.png")}
              style={styles.recovery_img}
            />
          </View>
          {/* second container */}
          <View style={styles.second_main_container}>
            {/* input and btn field */}
            <View>
              <TextInput placeholder="Reset code" style={styles.input_field} />
              <TextInput
                placeholder="New password"
                style={styles.input_field}
              />
              <TextInput
                placeholder="Confirm password"
                style={styles.input_field}
              />
              <TouchableOpacity
                style={styles.btn_container}
                onPress={showalert}
              >
                <Text style={styles.btn_txt}>Save password</Text>
              </TouchableOpacity>
            </View>
            {/* already have account text */}
            <View>
              <Text style={styles.bottom_txt}>
                Already have account?
                <Text
                  style={{ color: COLORS.primary }}
                  onPress={() => navigation.navigate("login")}
                >
                  &nbsp;Log in
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Resetpasswordscreen;

const styles = StyleSheet.create({
  main_container: {
    backgroundColor: COLORS.gray,
    flex: 1,
  },
  first_header_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    padding: 15,
    backgroundColor: COLORS.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  reset_password_txt: {
    fontWeight: "600",
    fontSize: 17,
  },
  second_main_container: {
    padding: 15,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: hp(65),
  },
  input_field: {
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 10,
    marginVertical: 15,
    elevation: 3,
  },
  recovery_img: {
    width: 100,
    height: 100,
  },
  img_container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  btn_container: {
    backgroundColor: COLORS.primary,
    padding: 12,
    borderRadius: 10,
    marginTop: 20,
  },
  btn_txt: {
    textAlign: "center",
    color: COLORS.white,
    fontWeight: "600",
    fontSize: 16,
  },
  bottom_txt: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
    color: COLORS.dark_gray,
  },
});
