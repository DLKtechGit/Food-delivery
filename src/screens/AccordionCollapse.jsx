import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from "accordion-collapse-react-native";
import React, { useEffect, useRef, useState } from "react";
import { COLORS } from "../constants";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useFonts } from "expo-font";
import BottomModal from "./BottomModal";

const AccordionCollapse = ({category,items}) => {
  const [open, setopen] = useState(true);
  const [showmore, setshowmore] = useState(true);

  const [loaded] = useFonts({
    montserrat: require("/React Native app/food_delivery_app/src/fonts/Montserrat-Bold.ttf"),
    montserrat_reg: require("/React Native app/food_delivery_app/src/fonts/Montserrat-Regular.ttf"),
    lato: require("/React Native app/food_delivery_app/src/fonts/Lato-Regular.ttf"),
    lato_b: require("/React Native app/food_delivery_app/src/fonts/Lato-Bold.ttf"),
    inter: require("/React Native app/food_delivery_app/src/fonts/Inter-Regular.ttf"),
    inter_b: require("/React Native app/food_delivery_app/src/fonts/Inter-Bold.ttf"),
    pt: require("/React Native app/food_delivery_app/src/fonts/PTSansNarrow-Regular.ttf"),
    pt_b: require("/React Native app/food_delivery_app/src/fonts/PTSansNarrow-Bold.ttf"),
    sans: require("/React Native app/food_delivery_app/src/fonts/OpenSans-Regular.ttf"),
    serif: require("/React Native app/food_delivery_app/src/fonts/PTSerif-Regular.ttf"),
    pop: require("/React Native app/food_delivery_app/src/fonts/Poppins-Regular.ttf"),
    pop_b: require("/React Native app/food_delivery_app/src/fonts/Poppins-Bold.ttf"),
    fira: require("/React Native app/food_delivery_app/src/fonts/FiraSans-Regular.ttf"),
    fira_b: require("/React Native app/food_delivery_app/src/fonts/FiraSans-Bold.ttf"),
  });
  if (!loaded) {
    return null;
  }

  this.state = {
    expanded: true,
  };

  return (
    <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
      <View style={styles.accordion_main_container}>
        {/* RECOMMENDED SECTION */}
        <Collapse
          isExpanded={this.state.expanded}
          onToggle={() => setopen(!open)}
        >
          <CollapseHeader>
            <View style={styles.accordion_header_container}>
              {/* <Text style={styles.accordion_header_txt}>Recommended(5)</Text> */}
              <Text style={styles.accordion_header_txt}>{category}</Text>
              <Icon name={open ? "angle-up" : "angle-down"} size={30} />
            </View>
          </CollapseHeader>
          <CollapseBody>
            <View style={styles.accordion_body_main_container}>
              {items.map((item) => {
                return (
                  <View key={item.id} style={styles.accordion_body_container}>
                    <View style={styles.accordion_body_left_container}>
                      <View style={styles.menu_label}>
                        <Image
                          source={require("../assets/nonveg_logo.png")}
                          style={{ width: 16, height: 16 }}
                        />
                        <Text style={styles.label_txt}>BestSeller</Text>
                      </View>

                      <Text style={styles.food_name}>{item.name}</Text>

                      <Text style={styles.food_price}>{item.price}</Text>

                      <View style={styles.rating_container}>
                        <Icon name="star" color={COLORS.primary} />
                        <Text>4.3</Text>
                      </View>

                      <Text style={styles.food_desc}>
                        {showmore ? item.desc.slice(0, 45) : item.desc}
                        <Text onPress={() => setshowmore(false)}>
                          {showmore ? "..." : ""}
                        </Text>
                      </Text>
                    </View>
                    <View style={styles.accordion_body_right_container}>
                      <Image style={styles.food_img} source={item.image} />
                      <BottomModal />
                    </View>
                  </View>
                );
              })}
            </View>
          </CollapseBody>
        </Collapse>

        {/* HOT DEALS SECTION */}
        {/* <Collapse
          isExpanded={this.state.expanded}
          onToggle={() => setopen(!open)}
        >
          <CollapseHeader>
            <View style={styles.accordion_header_container2}>
              <Text style={styles.accordion_header_txt}>Hot Deals(5)</Text>
              <Icon name={open ? "angle-up" : "angle-down"} size={30} />
            </View>
          </CollapseHeader>
          <CollapseBody>
            <View style={styles.accordion_body_main_container}>
              {menu.map((item) => {
                return (
                  <View key={item.id} style={styles.accordion_body_container}>
                    <View style={styles.accordion_body_left_container}>
                      <View style={styles.menu_label}>
                        <Image
                          source={require("../assets/nonveg_logo.png")}
                          style={{ width: 16, height: 16 }}
                        />
                        <Text style={styles.label_txt}>BestSeller</Text>
                      </View>

                      <Text style={styles.food_name}>{item.name}</Text>

                      <Text style={styles.food_price}>{item.price}</Text>

                      <View style={styles.rating_container}>
                        <Icon name="star" color={COLORS.primary} />
                        <Text>4.3</Text>
                      </View>

                      <Text style={styles.food_desc}>
                        {showmore ? item.desc.slice(0, 45) : item.desc}
                        <Text onPress={() => setshowmore(false)}>
                          {showmore ? "..." : ""}
                        </Text>
                      </Text>
                    </View>
                    <View style={styles.accordion_body_right_container}>
                      <Image style={styles.food_img} source={item.image} />
                      <BottomModal />
                    </View>
                  </View>
                );
              })}
            </View>
          </CollapseBody>
        </Collapse> */}
      </View>
    </ScrollView>
  );
};

export default AccordionCollapse;

const styles = StyleSheet.create({
  accordion_main_container: {
    marginTop: 10,
    marginHorizontal: 15,
    // paddingBottom: 80,
  },
  accordion_header_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomColor: COLORS.gray,
    borderBottomWidth: 1,
  },
  accordion_header_container2: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    paddingBottom: 10,
    borderBottomColor: COLORS.gray,
    borderBottomWidth: 1,
  },
  accordion_header_txt: {
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "fira_b",
  },
  accordion_body_main_container: {
    display: "flex",
    flexDirection: "column",
    // paddingBottom:80
  },
  accordion_body_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomColor: COLORS.gray,
    borderBottomWidth: 1,
  },
  accordion_body_left_container: {
    display: "flex",
    flexDirection: "column",
  },
  menu_label: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  label_txt: {
    fontWeight: "600",
    fontSize: 14,
    color: COLORS.primary,
  },
  food_name: {
    fontWeight: "600",
    fontSize: 20,
    fontFamily: "fira_b",
  },
  food_price: {
    fontWeight: "600",
    fontSize: 16,
    paddingVertical: 7,
  },
  rating_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  food_desc: {
    width: wp(50),
    fontFamily: "fira",
    color: "gray",
  },
  accordion_body_right_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  food_img: {
    width: wp(35),
    height: hp(16),
    borderRadius: 10,
    objectFit: "cover",
  },
});
