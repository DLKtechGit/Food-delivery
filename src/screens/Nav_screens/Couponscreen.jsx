import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import safe_area_style from "../../safe_area_style";
import { COLORS } from "../../constants";
import Icon from "react-native-vector-icons/AntDesign";
import { coupon } from "../../Coupon";
const Couponscreen = ({ navigation }) => {
  const [showtext, setshowtext] = useState(false);
  return (
    <SafeAreaView style={safe_area_style.androidsafearea}>
      <View style={styles.main_coupon_container}>
        <View style={styles.header_main_section}>
          {/* apply coupon and cart text contaier */}
          <View style={styles.header_txt_container}>
            <Icon
              name="arrowleft"
              size={25}
              onPress={() => navigation.navigate("cart")}
            />
            <View style={styles.header_txt}>
              <Text style={styles.apply_coupon_txt}>APPLY COUPON</Text>
              <Text style={styles.cart_txt}>Your cart: ₹500</Text>
            </View>
          </View>
          {/* input container */}
          <View style={styles.input_container}>
            <TextInput
              placeholder="Enter Coupon Code"
              style={styles.txt_input_field}
            />
            <TouchableOpacity
              onPress={() => alert("Coupon applied successfully")}
            >
              <Text style={styles.apply_txt}>APPLY</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.more_offer_txt}>More offers</Text>
          {coupon.map((item, i) => {
            return (
              <View style={{ paddingBottom: 20 }} key={i}>
                <View style={styles.coupon_body}>
                  <View style={styles.coupon_first_section}>
                    <View style={styles.img_txt_container}>
                      <Image
                        source={item.coupon_img}
                        style={styles.coupon_img}
                      />
                      <Text style={styles.coupon_txt}>{item.coupon_name}</Text>
                    </View>
                    <Text style={styles.coupon_apply_txt}>Apply</Text>
                  </View>
                  <Text style={styles.coupon_desc_1}>{item.coupon_desc_1}</Text>
                  <View style={styles.coupon_second_section}>
                    <Text style={styles.coupon_desc_2}>
                      {item.coupon_desc_2}
                    </Text>
                    <Text
                      style={{ fontWeight: "600" }}
                      onPress={() => setshowtext(!showtext)}
                    >
                      {showtext ? "-MORE" : "+MORE"}
                    </Text>
                    {showtext && <Text>More text</Text>}
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Couponscreen;

const styles = StyleSheet.create({
  main_coupon_container: {
    backgroundColor: COLORS.gray,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  header_main_section: {
    backgroundColor: COLORS.white,
    padding: 15,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  header_txt_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  header_txt: {
    display: "flex",
    flexDirection: "column",
  },
  apply_coupon_txt: {
    fontWeight: "800",
    fontSize: 16,
  },
  cart_txt: {
    color: COLORS.dark_gray,
  },
  input_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 12,
    borderRadius: 15,
    marginTop: 30,
  },
  txt_input_field: {
    fontWeight: "600",
    width: "85%",
  },
  apply_txt: {
    fontWeight: "600",
    color: COLORS.primary,
  },

  more_offer_txt: {
    fontWeight: "700",
    fontSize: 16,
    paddingTop: 30,
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  coupon_body: {
    padding: 15,
    backgroundColor: COLORS.white,
    marginHorizontal: 15,
    marginVertical: 5,
    borderRadius: 15,
    elevation: 3,
  },
  coupon_first_section: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  img_txt_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  coupon_img: {
    width: 20,
    height: 20,
  },
  coupon_txt: {
    fontSize: 17,
    fontWeight: "700",
  },
  coupon_apply_txt: {
    fontWeight: "600",
    color: COLORS.primary,
    fontSize: 16,
  },
  coupon_desc_1: {
    fontSize: 15,
    width: "70%",
    paddingTop: 10,
    color: COLORS.primary,
    fontWeight: "500",
  },
  coupon_second_section: {
    marginTop: 15,
    borderTopColor: COLORS.dark_gray,
    borderTopWidth: 1,
    borderStyle: "dashed",
  },
  coupon_desc_2: {
    paddingVertical: 15,
    fontWeight: "500",
    color: COLORS.dark_gray,
  },
});
