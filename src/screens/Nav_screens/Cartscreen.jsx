import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import safe_area_style from "../../safe_area_style";
import Icon from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/FontAwesome6";
import { COLORS } from "../../constants";
import { usecart } from "../Cartcontext";
import Couponmodal from "../Couponmodal";
const Cartscreen = ({ navigation, route }) => {
  const { count, increasecount, decreasecount, amount } = usecart();
  const new_amount = amount + 6.9 + 5 + 37;

  return (
    <SafeAreaView style={safe_area_style.androidsafearea}>
      <ScrollView>
        {/* Main cart container */}
        <View style={styles.main_cart_container}>
          {/* navigation and restaurant name */}
          <View style={styles.header_section}>
            <Icon
              name="arrowleft"
              size={25}
              onPress={() => navigation.navigate("home")}
            />
            <Text style={styles.header_name}>
              Muniyandi Vilas, Family Restaurant
            </Text>
          </View>
          {/* item name and details */}
          <View style={styles.food_item_card}>
            <View style={styles.fooditem_details}>
              <Image
                source={require("/React Native app/food_delivery_app/src/assets/nonveg_logo.png")}
                style={{ width: 12, height: 12 }}
              />
              <Text style={styles.food_item_name}>
                Chicken Biryani Combo 2pcs
              </Text>
              <View style={styles.count_container}>
                <TouchableOpacity onPress={decreasecount}>
                  <Icon1
                    name="minus"
                    size={16}
                    color={COLORS.primary}
                    style={styles.icon}
                  />
                </TouchableOpacity>
                <Text style={styles.count_txt}>{count}</Text>
                <TouchableOpacity onPress={increasecount}>
                  <Icon1
                    name="plus"
                    size={16}
                    color={COLORS.primary}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.amount_txt}>₹{amount}</Text>
            </View>
            {/* add more items section */}
            <View style={styles.add_more_item_section}>
              <Text>Add more items</Text>
              <Icon name="pluscircleo" size={17} color={COLORS.dark_gray} />
            </View>
            {/* add cooking request */}
            <View style={styles.add_cooking_request_section}>
              <Text>Add cooking request</Text>
              <Icon name="pluscircleo" size={17} color={COLORS.dark_gray} />
            </View>
          </View>

          {/* offer and coupon section */}
          <Text style={styles.offer_benefit_txt}>Offers & Benefits</Text>
          {/* coupon container */}
          <View style={styles.coupon_container}>
            {/* coupon left side container */}
            <View style={styles.coupon_first_section}>
              <View style={styles.coupon_first_left_section}>
                <View style={styles.coupon_img_txt}>
                  <Image
                    source={require("/React Native app/food_delivery_app/src/assets/percentage.png")}
                    style={{ width: 20, height: 20 }}
                  />
                  <Text style={styles.coupon_title}>WELCOME50</Text>
                </View>
                <Text style={styles.coupon_sub_txt}>
                  Save another ₹100 on your first order
                </Text>
              </View>
              <Couponmodal />
            </View>
            <View style={styles.coupon_second_section}>
              <Text
                style={styles.view_more_txt}
                onPress={() => navigation.navigate("Coupon")}
              >
                View more coupons
              </Text>
              <Icon1 name="chevron-right" color={COLORS.dark_gray} />
            </View>
          </View>

          {/* delivery instructions */}
          <Text style={styles.offer_benefit_txt}>Delivery Instructions</Text>
          <View style={styles.main_delivery_instruction_container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {/* containers */}
              <View style={styles.delivery_instruction_container}>
                <Icon1 name="bell" size={17} color={COLORS.dark_gray} />
                <Text style={styles.delivery_instruction_txt}>
                  Avoid ringing bell
                </Text>
              </View>

              <View style={styles.delivery_instruction_container}>
                <Icon2 name="door-open" size={17} color={COLORS.dark_gray} />
                <Text style={styles.delivery_instruction_txt}>
                  Leave at the door
                </Text>
              </View>

              <View style={styles.delivery_instruction_container}>
                <Icon1 name="microphone" size={17} color={COLORS.dark_gray} />
                <Text style={styles.delivery_instruction_txt}>
                  Direction to reach
                </Text>
              </View>

              <View style={styles.delivery_instruction_container}>
                <Icon2
                  name="mobile-screen"
                  size={17}
                  color={COLORS.dark_gray}
                />
                <Text style={styles.delivery_instruction_txt}>
                  Avoid calling
                </Text>
              </View>

              <View style={styles.delivery_instruction_container}>
                <Icon2 name="user-tie" size={17} color={COLORS.dark_gray} />
                <Text style={styles.delivery_instruction_txt}>
                  Leave with security
                </Text>
              </View>
            </ScrollView>
          </View>

          {/* billing section */}
          <Text style={styles.offer_benefit_txt}>Bill Details</Text>
          <View style={styles.bill_main_container}>
            {/* first section */}
            <View style={styles.bill_first_section}>
              <View style={styles.item_total_section}>
                <Text>Item Total</Text>
                <Text>₹{amount}</Text>
              </View>
              <View style={styles.delivery_fee_section}>
                <Text>Delivery Fee | 3.0 Kms</Text>
                <Text>₹37.00</Text>
              </View>
              <Text style={styles.delivery_sub_txt}>
                Free delivery applicable on orders above ₹149
              </Text>
            </View>
            {/* second section */}
            <View style={styles.bill_second_section}>
              <View style={styles.item_total_section}>
                <Text>Delivery Tip</Text>
                <Text style={styles.add_tip_txt}>Add tip</Text>
              </View>
              <View style={styles.item_total_section}>
                <Text>Platform fee</Text>
                <Text>₹5.00</Text>
              </View>
              <View style={styles.item_total_section}>
                <Text>GST and Restaurant Charges</Text>
                <Text>₹6.90</Text>
              </View>
            </View>
            {/* third section */}
            <View style={styles.bill_amount_section}>
              <View style={styles.item_total_section}>
                <Text style={styles.bill_amount_txt}>To Pay</Text>
                <Text style={styles.bill_amount_txt}>₹{new_amount}</Text>
              </View>
            </View>
          </View>

          {/* cancellation policy section */}
          <Text style={styles.offer_benefit_txt}>
            Review your order and address details to avoid cancellations
          </Text>
          <View style={styles.cancellation_policy_main_container}>
            {/* first text */}
            <View style={styles.policy_first_section}>
              <Text>
                <Text style={styles.note_txt}>Note:</Text> &nbsp;
                <Text style={styles.note_policy_txt}>
                  If you cancel within 60 seconds of placing your order, a 100%
                  refund will be issued. No refund for cancellation made after
                  60 seconds.
                </Text>
              </Text>
            </View>
            {/* second section */}
            <View style={styles.policy_first_section}>
              <Text style={styles.note_policy_txt}>
                Avoid cancellation as it leads to food wastage.
              </Text>
            </View>
            {/* third section */}
            <View>
              <Text style={styles.read_policy_txt}>
                READ CANCELLATION POLICY
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.pay_btn_container}>
        <TouchableOpacity
          style={styles.pay_btn}
          onPress={() => navigation.navigate("payment")}
        >
          <Text style={styles.btn_txt}>Proceed to Pay ₹{new_amount}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Cartscreen;

const styles = StyleSheet.create({
  main_cart_container: {
    backgroundColor: COLORS.gray,
    flex: 1,
    padding: 15,
    paddingBottom: 140,
  },
  header_section: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  header_name: {
    fontSize: 16,
    fontWeight: "600",
  },
  food_item_card: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginTop: 20,
    borderRadius: 10,
  },
  fooditem_details: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  food_item_name: {
    width: wp(38),
  },
  count_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    backgroundColor: COLORS.white,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  count_txt: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.primary,
  },
  amount_txt: {
    fontSize: 16,
    fontWeight: "500",
  },
  add_more_item_section: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  add_cooking_request_section: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 15,
  },
  offer_benefit_txt: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 25,
  },
  coupon_container: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginTop: 20,
    borderRadius: 10,
    display: "flex",
    flexDirection: "coloumn",
    alignItems: "center",
    justifyContent: "space-between",
  },
  coupon_first_section: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    borderStyle: "dashed",
    paddingBottom: 20,
  },
  coupon_first_left_section: {
    display: "flex",
    flexDirection: "column",
  },
  coupon_img_txt: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  coupon_title: {
    fontSize: 18,
    fontWeight: "700",
  },
  coupon_sub_txt: {
    fontSize: 12,
    color: "#6c757d",
  },

  view_more_txt: {
    fontWeight: "600",
    color: COLORS.dark_gray,
    paddingVertical: 5,
  },
  coupon_second_section: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingTop: 15,
  },
  main_delivery_instruction_container: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
  },
  delivery_instruction_container: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
    backgroundColor: COLORS.white,
    padding: 15,
    width: wp(24),
    borderRadius: 10,
    marginRight: 10,
  },
  delivery_instruction_txt: {
    fontSize: 13,
    fontWeight: "500",
    color: COLORS.dark_gray,
  },
  bill_main_container: {
    padding: 10,
    backgroundColor: COLORS.white,
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    borderRadius: 10,
  },
  bill_first_section: {
    display: "flex",
    flexDirection: "column",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    borderStyle: "dashed",
    paddingBottom: 15,
  },
  item_total_section: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  delivery_fee_section: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 5,
  },
  delivery_sub_txt: {
    color: COLORS.dark_gray,
    width: wp(70),
  },
  add_tip_txt: {
    color: COLORS.primary,
  },
  bill_second_section: {
    display: "flex",
    flexDirection: "column",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    borderStyle: "dashed",
    paddingTop: 10,
    paddingBottom: 10,
  },
  bill_amount_section: {
    paddingVertical: 15,
  },
  bill_amount_txt: {
    fontWeight: "600",
  },
  cancellation_policy_main_container: {
    padding: 10,
    backgroundColor: COLORS.white,
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    borderRadius: 10,
    paddingVertical: 20,
  },
  note_txt: {
    color: "red",
  },
  note_policy_txt: {
    color: COLORS.dark_gray,
    fontSize: 14,
  },
  policy_first_section: {
    paddingBottom: 20,
  },
  read_policy_txt: {
    color: COLORS.primary,
    fontWeight: "600",
  },
  icon: {
    padding: 3,
  },
  pay_btn_container: {
    paddingHorizontal: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  pay_btn: {
    backgroundColor: COLORS.primary,
    position: "absolute",
    bottom: 75,
    width: "100%",
    paddingVertical: 10,
    borderRadius: 10,
  },
  btn_txt: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "800",
    color: COLORS.white,
  },
});
