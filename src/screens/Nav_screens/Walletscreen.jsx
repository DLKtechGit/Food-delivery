import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import safe_area_style from "../../safe_area_style";
import { COLORS } from "../../constants";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/FontAwesome";
import { usecart } from "../Cartcontext";
const Walletscreen = ({ navigation }) => {
  const { count, amount } = usecart();
  const new_amount = amount + 6.9 + 5 + 37;
  return (
    <SafeAreaView style={safe_area_style.androidsafearea}>
      <View style={styles.wallet_main_container}>
        {/* first section */}
        <View style={styles.wallet_first_section}>
          <Icon
            name="arrowleft"
            size={25}
            onPress={() => navigation.navigate("payment")}
          />
          <View style={styles.wallet_txt_item_total_container}>
            <Text style={styles.select_wallet_txt}>Select a wallet</Text>
            <Text style={styles.item_total_txt}>
              {count} item, Total: ₹{new_amount}
            </Text>
          </View>
        </View>
        {/* second section */}
        <View style={{ padding: 15 }}>
          <View style={styles.second_container}>
            {/*amazon pay  */}
            <View style={styles.wallet_container}>
              <View style={styles.logo_txt_container}>
                <View style={styles.logo_container}>
                  <Image
                    source={require("../../assets/amazon_pay_logo.png")}
                    style={{ width: 25, height: 25 }}
                  />
                </View>
                <Text style={styles.wallet_txt}>Amazon Pay Balance</Text>
              </View>

              <Text style={styles.link_account_txt}>Link Account</Text>
            </View>
            {/* paytm */}
            <View style={styles.wallet_container}>
              <View style={styles.logo_txt_container}>
                <View style={styles.logo_container}>
                  <Image
                    source={require("../../assets/paytm_logo.png")}
                    style={{ width: 30, height: 30 }}
                  />
                </View>
                <Text style={styles.wallet_txt}>Paytm</Text>
              </View>
              <Text style={styles.link_account_txt}>Link Account</Text>
            </View>
            {/* phonepe */}
            <View style={styles.wallet_container}>
              <View style={styles.logo_txt_container}>
                <View style={styles.logo_container}>
                  <Image
                    source={require("../../assets/phonepe_logo.png")}
                    style={{ width: 25, height: 25 }}
                  />
                </View>
                <Text style={styles.wallet_txt}>PhonePe</Text>
              </View>
              <Text style={styles.link_account_txt}>Link Account</Text>
            </View>
            {/* mobikwik */}
            <View style={styles.wallet_container}>
              <View style={styles.logo_txt_container}>
                <View style={styles.logo_container}>
                  <Image
                    source={require("../../assets/mobikwik_logo.jpg")}
                    style={{ width: 30, height: 30 }}
                  />
                </View>
                <Text style={styles.wallet_txt}>MobiKwik</Text>
              </View>
              <Text style={styles.link_account_txt}>Link Account</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Walletscreen;

const styles = StyleSheet.create({
  wallet_main_container: {
    backgroundColor: COLORS.gray,
    flex: 1,
  },
  wallet_first_section: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: COLORS.white,
    padding: 15,
  },
  select_wallet_txt: {
    fontWeight: "700",
    fontSize: 16,
  },
  item_total_txt: {
    color: COLORS.dark_gray,
  },
  wallet_txt_item_total_container: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },

  second_container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: COLORS.white,
    borderRadius: 15,
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
  wallet_txt: {
    fontWeight: "600",
    fontSize: 16,
  },
  wallet_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderBottomColor: COLORS.gray,
    borderBottomWidth: 1,
  },
  logo_txt_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  link_account_txt: {
    fontWeight: "800",
    color: COLORS.primary,
    fontSize: 14,
  },
});
