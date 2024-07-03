import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../constants";
import ReactNativeModal from "react-native-modal";
import Icon from "react-native-vector-icons/AntDesign";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const Couponmodal = () => {
  const [modalvisible, setmodalvisible] = useState(false);
  return (
    <>
      <TouchableOpacity onPress={() => setmodalvisible(!modalvisible)}>
        <Text style={styles.coupon_apply_txt}>Apply</Text>
      </TouchableOpacity>

      <ReactNativeModal
        isVisible={modalvisible}
        transparent={true}
        onBackdropPress={() => setmodalvisible(!modalvisible)}
        backdropColor="rgba(0,0,0,0.30)"
        animationIn={"fadeIn"}
        animationOut={"fadeOut"}
        animationInTiming={600}
      >
        <View style={styles.coupon_modal_maincontainer}>
          {/* close icon section */}
          <View style={styles.close_icon_container}>
            <Icon
              name="close"
              size={20}
              color={COLORS.white}
              style={styles.icon}
              onPress={() => setmodalvisible(!modalvisible)}
            />
          </View>
          {/* percentage image section */}
          <Image
            source={require("../assets/percentage.png")}
            style={styles.percentage_img}
          />
          {/* content main container */}
          <View style={styles.content_main_container}>
            <Text style={styles.first_txt}>'AXIS30' applied</Text>
            <Text style={styles.bold_txt}>₹69 savings with this coupon</Text>
            <Text style={styles.third_txt}>
              Woohoo! Your coupon is successfully applied
            </Text>
            <Text
              style={styles.last_txt}
              onPress={() => setmodalvisible(!modalvisible)}
            >
              YAY!
            </Text>
          </View>
        </View>
      </ReactNativeModal>
    </>
  );
};

export default Couponmodal;

const styles = StyleSheet.create({
  coupon_apply_txt: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.primary,
  },
  coupon_modal_maincontainer: {
    height: hp(30),
    width: "100%",
    backgroundColor: COLORS.white,
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    padding: 10,
    position: "relative",
  },
  close_icon_container: {
    width: 25,
    height: 25,
    backgroundColor: "rgba(0,0,0,0.20)",
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 12,
    top: 12,
  },
  percentage_img: {
    width: 45,
    height: 45,
    marginTop: -32,
  },
  content_main_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: "space-between",
    height: "100%",
    paddingTop: 20,
    paddingBottom:40
  },
  first_txt: {
    color: COLORS.dark_gray,
  },
  bold_txt: {
    fontWeight: "800",
    fontSize: 25,
    paddingHorizontal: 20,
    textAlign: "center",
    paddingTop:20,
    paddingBottom:7
  },
  third_txt: {
    color: COLORS.dark_gray,
    paddingBottom:30
  },
  last_txt: {
    fontWeight: "800",
    fontSize: 19,
    color: COLORS.primary,
  },
});
