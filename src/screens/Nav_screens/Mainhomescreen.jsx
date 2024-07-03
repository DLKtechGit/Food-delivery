import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
  Pressable,
  Image,
  Dimensions,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useRef, useState } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Icon1 from "react-native-vector-icons/AntDesign";
import safe_area_style from "../../safe_area_style";
import RestaurantLayout from "../RestaurantLayout";
import { COLORS } from "../../constants";
import OfferLabelSlider from "../OfferLabelSlider";
import Icon from "react-native-vector-icons/FontAwesome";
import FilterBtn from "./FilterBtn";
import ReactNativeModal from "react-native-modal";
import AccordionCollapse from "../AccordionCollapse";
import { Recommended, HotDeals } from "../../data";

const Mainhomescreen = ({ navigation }) => {
  const [menumodalvisible, setmenumodalvisible] = useState(false);
  const [selectedmenu, setselectedmenu] = useState(null);
  const selectcategory = (category) => {
    if (selectcategory === category) {
      setselectedmenu(null);
    } else {
      setselectedmenu(category);
    }
    setmenumodalvisible(!menumodalvisible);
  };

  this.state = {
    expanded: true,
  };

  return (
    <SafeAreaView style={safe_area_style.androidsafearea}>
      <ScrollView>
        <View style={styles.menuscreen_container}>
          {/* restaurent Details */}
          <RestaurantLayout
            image={require("/React Native app/food_delivery_app/src/assets/nonveg_logo.png")}
            veg_or_nonveg="Non-Veg"
            rating_number="4.3"
            reviews_text="10K+ ratings"
            restaurant_name="Hotel Muniyandi Vilas pure Non-veg"
            minutes_and_location="20-30 mins - Perambur"
            cuisine_name="South Indian, Chettinad"
            distance_text="1.5 Km | Free Delivery on your First order"
          />

          {/* slider */}
          <OfferLabelSlider />

          {/* title text */}
          <View style={styles.title_container}>
            <Icon name="leaf" color={"#adb5bd"} />
            <Text style={{ fontWeight: "600", letterSpacing: 5 }}>MENU</Text>
            <Icon name="leaf" color={"#adb5bd"} />
          </View>

          {/* input container */}
          <View style={styles.search_menu_container}>
            <TextInput
              placeholder="Search for dishes"
              style={{ width: "95%" }}
            />
            <Icon name="search" size={20} color={"gray"} />
          </View>

          {/* Filter Buttons */}
          <View style={styles.button_container}>
            <FilterBtn filter_name="Non-Veg" />
            <FilterBtn filter_name="Ratings 4.0+" />
            <FilterBtn filter_name="Bestseller" />
          </View>
          {/* <AccordionCollapse /> */}
          {/* initial show */}
          {selectedmenu !== "recommended" && (
            <AccordionCollapse category="Recommended" items={Recommended} />
           )} 
          {selectedmenu !== "hotdeals" && (
            <AccordionCollapse category="Hot Deals" items={HotDeals} />
          )} 
          {/* showing first */}
          {selectedmenu === "hotdeals" && (
            <AccordionCollapse category="Hot deals" items={HotDeals} />
          )}
          {selectedmenu === "recommended" && (
            <AccordionCollapse category="Recommended" items={Recommended} />
          )}
        </View>
      </ScrollView>
      <View>
        <Pressable
          style={styles.menubook}
          onPress={() => setmenumodalvisible(!menumodalvisible)}
        >
          <Image
            source={require("/React Native app/food_delivery_app/src/assets/menu_book.png")}
            style={styles.MenuBook_img}
          />
          <Text
            style={{
              color: COLORS.white,
              fontWeight: "600",
              marginTop: -7,
              fontSize: 12,
            }}
          >
            Menu
          </Text>
        </Pressable>
        <ReactNativeModal
          transparent={true}
          isVisible={menumodalvisible}
          onBackdropPress={() => setmenumodalvisible(!menumodalvisible)}
          backdropColor="rgba(0,0,0,0.40)"
          hideModalContentWhileAnimating={true}
          animationIn={"fadeIn"}
          // animationOut={"fadeOut"}
          // animationInTiming={200}
          // animationOutTiming={200}
        >
          <View style={styles.menu_modal_container}>
            <TouchableOpacity onPress={() => selectcategory("hotdeals")}>
              <Text style={styles.nav_titles}>Recommended</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => selectcategory("recommended")}>
              <Text style={styles.nav_titles}>Hot deals</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.nav_titles}>Breakfast Menu</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.nav_titles}>Lunch Menu</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.nav_titles}>Dinner Menu</Text>
            </TouchableOpacity>
          </View>
        </ReactNativeModal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  menuscreen_container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingBottom:140
  },
  title_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    gap: 5,
  },

  search_menu_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.gray,
    marginHorizontal: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 10,
  },

  button_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
    marginHorizontal: 15,
    gap: 15,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.gray,
    paddingBottom: 10,
  },

  menu_modal_container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: hp(30),
    backgroundColor: COLORS.gray,
    gap: 15,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: COLORS.primary,
    elevation: 10,
    position: "absolute",
    bottom: 60,
    right: 10,
  },
  MenuBook_img: {
    width: 35,
    height: 35,
  },
  menubook: {
    position: "absolute",
    bottom: 80,
    right: 30,
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 50,
    elevation: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 70,
  },
  nav_titles: {
    fontSize: 18,
    fontWeight: "600",
    // fontFamily: "fira_b",
  },
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
});

export default Mainhomescreen;
