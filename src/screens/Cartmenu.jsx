import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../constants";
import Cartscreen from "./Nav_screens/Cartscreen";
import { usecart } from "./Cartcontext";
const Cartmenu = () => {
  const {count,increasecount,decreasecount,amount}=usecart();
  // const [count, setcount] = useState(1);
  // const [amount, setamount] = useState(500);
  const navigation = useNavigation();
  const [loaded] = useFonts({
    fira: require("/React Native app/food_delivery_app/src/fonts/FiraSans-Regular.ttf"),
    fira_b: require("/React Native app/food_delivery_app/src/fonts/FiraSans-Bold.ttf"),
  });
  if (!loaded) {
    return null;
  }
  

  return (
    <>
      <View style={styles.main_cartmenu}>
        <Image
          source={require("../assets/chicken.jpg")}
          style={styles.menu_img}
        />
        {/* title rating container */}
        <View style={styles.title_rating_container}>
          <Text style={styles.menu_title}>BBQ Chicken</Text>
          {/* rating container */}
          <View style={styles.rating_container}>
            <Icon name="star" size={15} color={COLORS.primary} />
            <Text>4.3</Text>
          </View>
        </View>
        <Text style={styles.menu_txt}>
          Barbecue chicken is often seasoned or coated in a spice rub, barbecue
          sauce, or both. Marinades are also used to tenderize the meat and add
          flavor
        </Text>
        {/* count and amount section */}
        <View style={styles.count_amount_container}>
          {/* count */}
          <View style={styles.count_container}>
            <TouchableOpacity onPress={decreasecount}>
              <Icon
                name="minus"
                size={16}
                color={COLORS.primary}
                style={styles.icon}
              />
            </TouchableOpacity>
            <Text style={styles.count_txt}>{count}</Text>

            <TouchableOpacity onPress={increasecount}>
              <Icon
                name="plus"
                size={16}
                color={COLORS.primary}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          {/* amount */}
          <View style={styles.amount_container}>
            <Text style={styles.amount_txt}>TOTAL:</Text>
            <Text style={styles.amount_txt}>{amount}.00</Text>
          </View>
        </View>
        {/* go to cart button */}
        <View style={{ paddingHorizontal: 5 }}>
          <TouchableOpacity
            style={styles.cart_btn}
            onPress={() =>
              navigation.navigate('cart')
              // navigation.navigate("cart"
              //   , {
              //   count: count || 1,
              //   amount: amount || 500,
              //   updatecount: setcount,
              // })
            }
          >
            <Text style={styles.cart_btn_txt}>GO TO CART</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Cartmenu;

const styles = StyleSheet.create({
  main_cartmenu: {
    padding: 10,
    display: "flex",
    flexDirection: "column",
  },
  menu_img: {
    width: "100%",
    height: hp(20),
    objectFit: "cover",
    borderRadius: 10,
  },
  menu_txt: {
    fontSize: 14,
    fontFamily: "fira",
    paddingTop: 5,
    paddingHorizontal: 5,
  },
  menu_title: {
    fontSize: 20,
    paddingTop: 5,
    fontWeight: "600",
    fontFamily: "fira_b",
  },
  title_rating_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  rating_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  count_amount_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    paddingVertical: hp(2),
  },
  count_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 25,
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
    paddingVertical: 10,
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
    fontWeight: "600",
  },
  amount_container: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    gap: 10,
  },
  cart_btn: {
    backgroundColor: COLORS.white,
    width: "100%",
    paddingVertical: 13,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  cart_btn_txt: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.primary,
  },
  icon: {
    padding: 3,
  },
});
