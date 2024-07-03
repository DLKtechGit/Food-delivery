import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Pressable,
  } from "react-native";
  import React from "react";
  import safe_area_style from "../../safe_area_style";
  import Icon3 from "react-native-vector-icons/FontAwesome";
  import Icon4 from "react-native-vector-icons/MaterialCommunityIcons";
  import Icon5 from "react-native-vector-icons/FontAwesome6";
  import Icon from "react-native-vector-icons/AntDesign";
  import { COLORS } from "../../constants";
  const Editprofile = ({ navigation }) => {
    return (
      <SafeAreaView style={safe_area_style.androidsafearea}>
        <View style={styles.edit_profile_main_container}>
          <View style={styles.first_container}>
            <Icon
              name="arrowleft"
              size={25}
              onPress={() => navigation.navigate("profile")}
            />
            <Text style={styles.edit_profile_txt}>Edit profile</Text>
          </View>
          <View style={styles.second_container}>
            {/* Name field */}
            <Text style={styles.label}>Name</Text>
            <View style={styles.input_field}>
              <TextInput placeholder="TOMMY SHELBY" style={{ width: "85%" }} />
              <Icon3 name="user" size={18} color={COLORS.dark_gray} />
            </View>
            {/* email field*/}
            <Text style={styles.label}>E-mail</Text>
            <View style={styles.input_field}>
              <TextInput
                placeholder="tommy89@gmail.com"
                style={{ width: "85%" }}
              />
              <Icon4 name="email" size={18} color={COLORS.dark_gray} />
            </View>
            {/* phone number field*/}
            <Text style={styles.label}>Phone No</Text>
            <View style={styles.input_field}>
              <TextInput
                placeholder="9876543210"
                style={{ width: "85%" }}
                keyboardType="numeric"
              />
              <Icon5 name="phone" size={18} color={COLORS.dark_gray} />
            </View>
            {/* Address field*/}
            <Text style={styles.label}>Address</Text>
            <View style={styles.input_field}>
              <TextInput
                placeholder="Vadapalani, Chennai"
                style={{ width: "85%" }}
              />
              <Icon5 name="address-book" size={18} color={COLORS.dark_gray} />
            </View>
  
            {/* save button */}
            <TouchableOpacity
              style={styles.save_btn}
              onPress={() => alert("Profile has been updated successfully")}
            >
              <Text style={styles.save_btn_txt}>Save Changes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  export default Editprofile;
  
  const styles = StyleSheet.create({
    edit_profile_main_container: {
      backgroundColor: COLORS.gray,
      flex: 1,
    },
    second_container: {
      padding: 15,
      paddingTop: 30,
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
    edit_profile_txt: {
      fontWeight: "600",
      fontSize: 16,
    },
    label: {
      marginBottom: 8,
      fontSize: 16,
      fontWeight: "600",
    },
    input_field: {
      display: "flex",
      flexDirection: "row",
      backgroundColor: COLORS.white,
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: 8,
      paddingHorizontal: 15,
      marginBottom: 20,
      borderRadius: 5,
      elevation: 3,
    },
    save_btn: {
      backgroundColor: COLORS.primary,
      padding: 10,
      borderRadius: 5,
      marginTop: 20,
    },
    save_btn_txt: {
      textAlign: "center",
      fontWeight: "600",
      fontSize: 18,
      color: COLORS.white,
    },
  });
  