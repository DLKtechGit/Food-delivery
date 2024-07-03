import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import safe_area_style from "../../safe_area_style";
import { COLORS } from "../../constants";
import Icon from "react-native-vector-icons/AntDesign";
import Icon3 from "react-native-vector-icons/FontAwesome5";
import { orders } from "../../Orders";
const Orderscreen = ({ navigation }) => {
  const [showdetails, setshowdetails] = useState(false);
  return (
    <SafeAreaView style={safe_area_style.androidsafearea}>
      {/* main section */}
      <View style={styles.order_main_container}>
        {/* first section */}
        <View style={styles.first_section}>
          <Icon
            name="arrowleft"
            size={25}
            onPress={() => navigation.navigate("home")}
          />
          <Text style={styles.your_order_txt}>YOUR ORDERS</Text>
        </View>
        <ScrollView>
          {/* second section */}
          {/* order first section */}
          {orders.map((item, i) => {
            return (
              <>
                <View style={styles.orders_first_section} key={i}>
                  <View style={styles.order_txt_container}>
                    <Text style={styles.order_txt}>ORDER 23546789</Text>
                    <Text style={styles.item_amount_txt}>2 items | ₹500</Text>
                  </View>
                  <Text
                    style={styles.details_txt}
                    onPress={() => setshowdetails(!showdetails)}
                  >
                    {showdetails ? "VIEW LESS" : "DETAILS"}
                  </Text>
                </View>
                <View style={styles.order_second_section}>
                  {/* first container */}
                  <View style={styles.order_second_first_section}>
                    {/* left side section */}
                    <View style={styles.loc_left_container}>
                      <View style={styles.loc_container}>
                        <Icon3
                          name="map-marker-alt"
                          size={16}
                          color={COLORS.primary}
                        />
                        <View>
                          <Text style={styles.loc_main_txt}>Hotel safari</Text>
                          <Text style={styles.loc_sub_txt}>BTM</Text>
                        </View>
                      </View>
                      {showdetails && (
                        <View style={styles.loc_container}>
                          <Icon3 name="home" size={13} color={COLORS.primary} />
                          <View>
                            <Text style={styles.loc_main_txt}>Home</Text>
                            <Text style={styles.loc_sub_txt}>BTM</Text>
                          </View>
                        </View>
                      )}
                    </View>
                    {/* right side section */}
                    <View style={styles.loc_right_container}>
                      <View style={styles.deliverd_txt_container}>
                        <Text style={styles.loc_main_txt}>Deliverd</Text>
                        <Text style={styles.loc_sub_txt}>May 9, 8:54PM</Text>
                      </View>
                      <Icon
                        name="checkcircle"
                        size={16}
                        color={COLORS.primary}
                        style={{ marginTop: 2 }}
                      />
                    </View>
                  </View>
                  {/* second section items*/}
                  <Text style={styles.section_heading_txt}>ITEMS</Text>
                  <View style={styles.item_details_main_container}>
                    <View style={styles.items_details_container}>
                      {/* left side section */}
                      <View style={styles.items_left_section}>
                        <Image
                          source={require("../../assets/nonveg_logo.png")}
                          style={{ width: 12, height: 12, marginTop: 5 }}
                        />
                        <View style={styles.item_txt_container}>
                          <Text style={styles.item_name_txt}>
                            {item.item_name} × 1
                          </Text>
                          <Text style={styles.item_name_sub_txt}>FULL</Text>
                        </View>
                      </View>
                      {/* right side section */}
                      <Text style={styles.amount_txt}>₹500</Text>
                    </View>
                  </View>
                  {/* third section amount */}
                  {showdetails && (
                    <Text style={styles.section_heading_txt}>AMOUNT</Text>
                  )}
                  {/* main amount container */}
                  {showdetails && (
                    <View style={styles.main_amount_container}>
                      {/* amount container */}
                      <View style={styles.amount_details_container}>
                        <Text style={styles.amount_name_txt}>Item Total</Text>
                        <Text style={styles.amount_amount_txt}>₹500.00</Text>
                      </View>
                      <View style={styles.amount_details_container}>
                        <Text style={styles.amount_name_txt}>
                          Delivery Charge
                        </Text>
                        <Text style={styles.amount_amount_txt}>₹37.00</Text>
                      </View>
                      <View style={styles.amount_details_container}>
                        <Text style={styles.amount_name_txt}>
                          Discount Applied (AXIS30)
                        </Text>
                        <Text style={styles.amount_amount_txt}>₹30.00</Text>
                      </View>
                      <View style={styles.amount_details_container}>
                        <Text style={styles.amount_name_txt}>Taxes</Text>
                        <Text style={styles.amount_amount_txt}>₹5.00</Text>
                      </View>
                      <View
                        style={[
                          styles.amount_details_container,
                          styles.total_amount_container,
                        ]}
                      >
                        <Text style={styles.amount_name_txt}>
                          Paid via Credit/Debit card
                        </Text>
                        <Text style={styles.amount_txt}>₹500</Text>
                      </View>
                    </View>
                  )}

                  {/* Button section */}
                  <View style={styles.main_btn_container}>
                    {/* button container */}
                    <View style={styles.btn_container1}>
                      <Text style={styles.reorder_txt}>RE ORDER</Text>
                    </View>
                    <View style={styles.btn_container2}>
                      <Text style={styles.rate_order_txt}>RATE ORDER</Text>
                    </View>
                  </View>
                  {/* text container */}
                  <View style={styles.main_txt_container}>
                    <View style={styles.txt_container}>
                      <Text style={styles.btn_sub_txt}>
                        You haven't rated {"\n"} this delivery yet
                      </Text>
                    </View>
                    <View style={styles.txt_container}>
                      <Text style={styles.btn_sub_txt}>
                        You haven't rated {"\n"} this food yet
                      </Text>
                    </View>
                  </View>
                </View>
              </>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Orderscreen;

const styles = StyleSheet.create({
  order_main_container: {
    backgroundColor: COLORS.gray,
    flex: 1,
    paddingBottom: 50,
  },
  first_section: {
    backgroundColor: COLORS.white,
    padding: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  your_order_txt: {
    fontWeight: "600",
    fontSize: 16,
  },
  orders_first_section: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderTopColor: "#ccc",
    borderTopWidth: 1,
    // marginTop: 10,
  },
  order_txt_container: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  order_txt: {
    fontWeight: "500",
    fontSize: 16,
  },
  item_amount_txt: {
    color: COLORS.dark_gray,
  },
  details_txt: {
    fontWeight: "700",
    color: COLORS.primary,
  },
  order_second_section: {
    backgroundColor: COLORS.white,
    padding: 15,
    marginBottom: 20,
  },
  loc_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  loc_left_container: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  loc_right_container: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  order_second_first_section: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: COLORS.gray,
    borderBottomWidth: 1,
    borderStyle: "dashed",
    paddingBottom: 15,
    marginBottom: 25,
  },
  deliverd_txt_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  loc_main_txt: {
    fontWeight: "600",
    fontSize: 15,
  },
  loc_sub_txt: {
    color: COLORS.dark_gray,
    fontSize: 13,
  },
  item_details_main_container: {
    display: "flex",
    flexDirection: "column",
  },
  items_left_section: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  items_details_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: COLORS.gray,
    borderBottomWidth: 1,
    borderStyle: "dashed",
    paddingVertical: 10,
    marginBottom: 15,
  },
  section_heading_txt: {
    color: COLORS.dark_gray,
    fontSize: 12,
    fontWeight: "500",
    letterSpacing: 2,
  },
  item_txt_container: {
    display: "flex",
    flexDirection: "column",
  },
  item_name_txt: {
    fontSize: 16,
    fontWeight: "500",
  },
  item_name_sub_txt: {
    color: COLORS.dark_gray,
    fontSize: 12,
  },
  amount_txt: {
    fontSize: 16,
    fontWeight: "500",
  },
  amount_amount_txt: {
    fontSize: 16,
    fontWeight: "500",
    color: COLORS.dark_gray,
  },
  main_amount_container: {
    display: "flex",
    flexDirection: "column",
    marginTop: 5,
  },
  amount_details_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  total_amount_container: {
    paddingVertical: 15,
  },
  amount_name_txt: {
    fontSize: 15,
    fontWeight: "500",
  },
  main_btn_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  btn_container1: {
    borderColor: COLORS.primary,
    borderWidth: 2,
    paddingVertical: 13,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "48%",
  },
  btn_container2: {
    borderColor: COLORS.black,
    borderWidth: 2,
    paddingVertical: 13,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "48%",
  },
  reorder_txt: {
    fontWeight: "800",
    color: COLORS.primary,
    letterSpacing: 1,
  },
  rate_order_txt: {
    fontWeight: "800",
    color: COLORS.black,
    letterSpacing: 1,
  },

  txt_container: {
    display: "flex",
    justifyContent: "flex-start",
    width: "47%",
    paddingVertical: 10,
  },
  main_txt_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn_sub_txt: {
    color: COLORS.dark_gray,
    fontSize: 13,
  },
});
