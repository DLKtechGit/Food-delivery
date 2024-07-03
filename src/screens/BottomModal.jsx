import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState, useRef } from "react";
import ReactNativeModal from "react-native-modal";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon1 from "react-native-vector-icons/AntDesign";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "../constants";
import Cartmenu from "./Cartmenu";
import { Button } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
const BottomModal = () => {
  const [modalvisible, setmodalvisible] = useState(false);
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        style={styles.add_to_cart_btn_container}
        onPress={() => setmodalvisible(!modalvisible)}
      >
        <Text style={styles.add_btn_txt}>ADD</Text>
      </TouchableOpacity>

      <ReactNativeModal
        isVisible={modalvisible}
        // onBackdropPress={() => setmodalvisible(!modalvisible)}
        transparent={true}
        animationType="slide"
        backdropColor="rgba(0,0,0,0.40)"
        hasBackdrop={true}
      >
        <View style={{ display: "flex", alignItems: "center" }}>
          <TouchableOpacity
            style={{
              textAlign: "center",
              marginBottom: hp(13),
              padding: 12,
              backgroundColor: "rgba(0,0,0,0.40)",
              width: 50,
              height: 50,
              borderRadius: 50,
              // borderWidth:2,
              // borderColor:COLORS.white
            }}
          >
            <Icon1
              name="close"
              size={25}
              color={COLORS.white}
              style={{ textAlign: "center" }}
            />
          </TouchableOpacity>
        </View>
      </ReactNativeModal>

      <ReactNativeModal
        isVisible={modalvisible}
        onBackdropPress={() => setmodalvisible(!modalvisible)}
        transparent={true}
        animationType="slide"
        backdropColor="rgba(0,0,0,0.18)"
        hasBackdrop={true}
      >
        <View style={styles.modal_container}>
          <Cartmenu />
        </View>
      </ReactNativeModal>
    </>
  );
};

export default BottomModal;

const styles = StyleSheet.create({
  add_to_cart_btn_container: {
    backgroundColor: COLORS.white,
    paddingVertical: 5,
    borderRadius: 6,
    marginTop: -10,
    elevation: 5,
    paddingHorizontal: 10,
    width: wp(25),
  },
  add_btn_txt: {
    textAlign: "center",
    color: COLORS.primary,
    fontWeight: "600",
    fontSize: 16,
  },
  modal_container: {
    backgroundColor: COLORS.gray,
    height: hp(50),
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderRadius: 20,
  },
});
