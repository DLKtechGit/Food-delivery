import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import safe_area_style from "../safe_area_style";
import { COLORS } from "../constants";
import Icon from "react-native-vector-icons/AntDesign";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
const Forgetpasswordscreen = ({ navigation }) => {
  return (
    <SafeAreaView style={safe_area_style.androidsafearea}>
      <View style={styles.main_container}>
        {/* first section */}
        <View style={styles.first_header_container}>
          <Icon
            name="arrowleft"
            size={25}
            onPress={() => navigation.navigate("login")}
          />
          <Text style={styles.forget_password_txt}>Forgot password</Text>
        </View>
        {/* second section */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.second_main_container}>
            <View style={styles.img_container}>
              <Image
                source={require("../assets/mail_icon.png")}
                style={styles.mail_img}
              />
            </View>

            <View style={styles.input_btn_container}>
              {/* input field */}
              <View style={styles.first_container}>
                <Text style={styles.label}>E-mail</Text>
                <TextInput
                  placeholder="Enter your E-mail ID"
                  style={styles.input_field}
                />
                <TouchableOpacity
                  style={styles.btn_container}
                  onPress={() => navigation.navigate("reset")}
                >
                  <Text style={styles.btn_txt}>Send code</Text>
                </TouchableOpacity>
              </View>
              {/* button container */}
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
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Forgetpasswordscreen;

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
    backgroundColor: COLORS.white,
    padding: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  forget_password_txt: {
    fontSize: 17,
    fontWeight: "600",
  },
  second_main_container: {
    padding: 15,
  },
  mail_img: {
    width: 100,
    height: 100,
  },
  img_container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 40,
  },
  input_field: {
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 3,
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
  },
  input_btn_container: {
    display: "flex",
    flexDirection: "column",
    gap: hp(40),
  },
  btn_container: {
    backgroundColor: COLORS.primary,
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
  },
  btn_txt: {
    textAlign: "center",
    fontWeight: "600",
    color: COLORS.white,
    fontSize: 16,
  },
  bottom_txt: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.dark_gray,
  },
  first_container: {
    display: "flex",
    flexDirection: "column",
  },
});
