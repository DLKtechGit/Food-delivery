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
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/FontAwesome";
import Icon3 from "react-native-vector-icons/FontAwesome5";
import { COLORS } from "../../constants";
import { usecart } from "../Cartcontext";
const Paymentscreen = ({ navigation }) => {
  const { count, amount } = usecart();
  const new_amount = amount + 6.9 + 5 + 37;
  const cod_alert = () => {
    Alert.alert(
      "Hi!",
      "Your order placed successfully.",
      [
        { text: "OK" },
        { text: "Go to Home", onPress: () => navigation.navigate("home") },
      ],
      { cancelable: true }
    );
  };

  return (
    <SafeAreaView style={safe_area_style.androidsafearea}>
      <View style={styles.payment_main_container}>
        {/* first section */}
        <View style={styles.first_main_section}>
          <View style={styles.payment_first_section}>
            <Icon
              name="arrowleft"
              size={25}
              onPress={() => navigation.navigate("cart")}
            />
            <View style={styles.payment_txt_item_total_container}>
              <Text style={styles.payment_option_txt}>Payment Options</Text>
              <Text style={styles.item_total_txt}>
                {count} item, Total: ₹{new_amount}
              </Text>
            </View>
          </View>
          <View style={styles.location_container}>
            <View style={styles.hotel_location_container}>
              <Icon2 name="dot-circle-o" size={18} color={COLORS.primary} />
              <Text>
                <Text style={styles.span_txt}>Hotel safari</Text>
                <Text style={styles.main_txt}>| Delivery in: 30-35 mins</Text>
              </Text>
            </View>
            <View style={styles.hotel_location_container}>
              <Icon3 name="map-marker-alt" size={18} color={COLORS.primary} />
              <Text>
                <Text style={styles.span_txt}>Home</Text>
                <Text style={styles.main_txt}>
                  | No:8, Vadapalani, Raahat plaza.
                </Text>
              </Text>
            </View>
          </View>
        </View>
        {/* second section */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.second_main_container}>
            <Text style={styles.payment_type_heading_txt}>
              Recommended for you
            </Text>
            {/* Google pay section */}
            <View style={styles.payment_option_container_gpay}>
              <View style={styles.logo_container}>
                <Image
                  source={require("../../assets/gpay_logo.png")}
                  style={{ width: 25, height: 25 }}
                />
              </View>
              <View style={styles.gpay_txt_container}>
                <Text style={styles.gpay_txt}>Google Pay</Text>
                <Text style={styles.gpay_sub_txt}>
                  Up to ₹250 cashback on RuPay CC on UPI transactions above
                </Text>
              </View>
            </View>
            {/* upi payment section */}
            <View style={styles.upi_logo_txt_container}>
              <Image
                source={require("../../assets/upi_logo.png")}
                style={{ width: 45, height: 45 }}
              />
              <Text style={styles.payment_type_heading_txt}>
                Pay by any UPI App
              </Text>
            </View>
            <View style={styles.payment_option_container_upi}>
              <View style={styles.logo_container}>
                <Icon2 name="plus" size={18} color={COLORS.primary} />
              </View>
              <View style={styles.upi_txt_container}>
                <Text style={styles.upi_txt}>Add New UPI ID</Text>
                <Text style={styles.upi_sub_txt}>
                  you need to have a registered UPI ID
                </Text>
              </View>
            </View>
            {/* credit & debit card section */}
            <Text style={styles.payment_type_heading_txt}>
              Credit & Debit Cards
            </Text>
            <View style={styles.payment_option_container_upi}>
              <View style={styles.logo_container}>
                <Icon2 name="plus" size={18} color={COLORS.primary} />
              </View>
              <View style={styles.upi_txt_container}>
                <Text style={styles.upi_txt}>Add New Card</Text>
                <Text style={styles.upi_sub_txt}>save and pay via cards.</Text>
              </View>
            </View>
            {/* More payment methods */}
            <Text style={styles.payment_type_heading_txt}>
              More Payment Options
            </Text>
            <View style={styles.more_payment_main_container}>
              {/* first section wallet*/}
              <Pressable onPress={() => navigation.navigate("wallet")}>
                <View style={styles.more_payment_container}>
                  {/* loga & text */}
                  <View style={styles.more_payment_sub_container}>
                    {/* logo */}
                    <View style={styles.logo_container}>
                      <Icon3 name="wallet" size={20} />
                    </View>
                    {/* text */}
                    <View style={styles.more_payment_txt}>
                      <Text style={styles.payment_main_txt}>Wallets</Text>
                      <Text style={styles.sub_txt}>
                        Paytm, PhonePe, Amazon Pay & more
                      </Text>
                    </View>
                  </View>
                  {/* icon */}
                  <Icon2 name="chevron-right" color={COLORS.dark_gray} />
                </View>
              </Pressable>
              {/* second section pluxee*/}
              <View style={styles.more_payment_container}>
                {/* loga & text */}
                <View style={styles.more_payment_sub_container}>
                  {/* logo */}
                  <View style={styles.logo_container}>
                    <Image
                      source={require("../../assets/pluxee-logo.png")}
                      style={{ width: 30, height: 30 }}
                    />
                  </View>
                  {/* text */}
                  <View style={styles.more_payment_txt}>
                    <Text style={styles.payment_main_txt}>pluxee</Text>
                    <Text style={styles.sub_txt}>
                      pluxee card valid only on Food & Instamart
                    </Text>
                  </View>
                </View>
                {/* icon */}
                <Icon2 name="chevron-right" color={COLORS.dark_gray} />
              </View>

              {/* third section net banking*/}
              <View style={styles.more_payment_container}>
                {/* loga & text */}
                <View style={styles.more_payment_sub_container}>
                  {/* logo */}
                  <View style={styles.logo_container}>
                    <Icon2 name="bank" size={20} />
                  </View>
                  {/* text */}
                  <View style={styles.more_payment_txt}>
                    <Text style={styles.payment_main_txt}>Netbanking</Text>
                    <Text style={styles.sub_txt}>
                      Select from a list of banks
                    </Text>
                  </View>
                </View>
                {/* icon */}
                <Icon2 name="chevron-right" color={COLORS.dark_gray} />
              </View>

              {/* fourth section pay later*/}
              <View style={styles.more_payment_container}>
                {/* loga & text */}
                <View style={styles.more_payment_sub_container}>
                  {/* logo */}
                  <View style={styles.logo_container}>
                    {/* <Icon2 name="money" size={20} /> */}
                    <Image
                      source={require("../../assets/rupee_logo.png")}
                      style={{ width: 30, height: 30 }}
                    />
                  </View>
                  {/* text */}
                  <View style={styles.more_payment_txt}>
                    <Text style={styles.payment_main_txt}>Pay Later</Text>
                    <Text style={styles.sub_txt}>Simpl</Text>
                  </View>
                </View>
                {/* icon */}
                <Icon2 name="chevron-right" color={COLORS.dark_gray} />
              </View>

              {/* Fifth section cred*/}
              <View style={styles.more_payment_container}>
                {/* logo & text */}
                <View style={styles.more_payment_sub_container}>
                  {/* logo */}
                  <View style={styles.logo_container}>
                    <Image
                      source={require("../../assets/cred_logo.png")}
                      style={{ width: 20, height: 23 }}
                    />
                  </View>
                  {/* text */}
                  <View style={styles.more_payment_txt}>
                    <Text style={styles.payment_main_txt}>CRED pay</Text>
                    {/* <Text style={styles.sub_txt}>
                      Paytm, PhonePe, Amazon Pay & more
                    </Text> */}
                  </View>
                </View>

                {/* icon */}
                <Icon2 name="chevron-right" color={COLORS.dark_gray} />
              </View>
            </View>

            {/* pay on delivery section */}
            <Text style={styles.payment_type_heading_txt}>Pay on Delivery</Text>
            <Pressable onPress={cod_alert}>
              <View style={styles.payment_option_container_upi}>
                <View style={styles.logo_container}>
                  <Image
                    source={require("../../assets/rupee_logo_1.png")}
                    style={{ width: 25, height: 25 }}
                  />
                </View>
                <View style={styles.upi_txt_container}>
                  <Text style={styles.upi_txt}>Pay on Delivery (cash/UPI)</Text>
                  <Text style={styles.upi_sub_txt}>
                    Cash on delivery is available.
                  </Text>
                </View>
              </View>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Paymentscreen;

const styles = StyleSheet.create({
  payment_main_container: {
    backgroundColor: COLORS.gray,
    flex: 1,
  },
  first_main_section: {
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingHorizontal: 15,
    backgroundColor: COLORS.white,
    paddingVertical: 10,
    display: "flex",
    flexDirection: "column",
  },
  payment_first_section: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderBottomColor: COLORS.gray,
    borderBottomWidth: 1,
    paddingBottom: 15,
  },
  payment_txt_item_total_container: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
  payment_option_txt: {
    fontWeight: "700",
    fontSize: 16,
  },
  item_total_txt: {
    color: COLORS.dark_gray,
  },
  location_container: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 15,
    paddingBottom: 5,
    gap: 10,
  },
  hotel_location_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  span_txt: {
    fontWeight: "600",
  },
  main_txt: {
    color: COLORS.dark_gray,
  },
  second_main_container: {
    padding: 15,
    display: "flex",
    flexDirection: "column",
    paddingBottom: 20,
  },
  payment_type_heading_txt: {
    fontWeight: "700",
    fontSize: 16,
  },
  payment_option_container_gpay: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 15,
    gap: 15,
    marginTop: 15,
    marginBottom: 20,
  },
  logo_container: {
    borderColor: COLORS.gray,
    borderWidth: 1,
    padding: 5,
    borderRadius: 7,
    width: 45,
    height: 45,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  gpay_txt_container: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  gpay_txt: {
    fontWeight: "600",
    fontSize: 16,
  },
  gpay_sub_txt: {
    color: COLORS.primary,
  },
  upi_logo_txt_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  payment_option_container_upi: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 15,
    gap: 15,
    marginTop: 10,
    marginBottom: 25,
  },
  upi_txt: {
    fontWeight: "700",
    color: COLORS.primary,
    fontSize: 17,
  },
  upi_sub_txt: {
    fontSize: 13,
  },
  upi_txt_container: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  more_payment_main_container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: COLORS.white,
    borderRadius: 15,
    marginTop: 15,
    marginBottom: 20,
  },
  more_payment_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderBottomColor: COLORS.gray,
    borderBottomWidth: 1,
  },
  more_payment_sub_container: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
  },
  payment_main_txt: {
    fontSize: 17,
    fontWeight: "500",
  },
  sub_txt: {
    fontSize: 12.5,
    color: COLORS.dark_gray,
  },
  more_payment_txt: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
    justifyContent: "center",
  },
});
