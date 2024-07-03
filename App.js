import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Frontscreen from "./src/screens/frontscreen";
import Loginscreen from "./src/screens/loginscreen";
import Sign_up_screen from "./src/screens/sign_up_screen";
import mainscreen from "./src/screens/Nav_screens/mainscreen";
import { Cartprovider } from "./src/screens/Cartcontext";
import Couponscreen from "./src/screens/Nav_screens/Couponscreen";
import Paymentscreen from "./src/screens/Nav_screens/Paymentscreen";
import Walletscreen from "./src/screens/Nav_screens/Walletscreen";
import Passwordscreen from "./src/screens/Nav_screens/Passwordscreen";
import Forgetpasswordscreen from "./src/screens/Forgetpasswordscreen";
import Editprofile from "./src/screens/Nav_screens/Editprofile";
import Resetpasswordscreen from "./src/screens/Resetpasswordscreen";


export default function App() {
  const stack = createNativeStackNavigator();

  return (
    <Cartprovider>
      <NavigationContainer>
        <stack.Navigator screenOptions={{ headerShown: false }}>
          <stack.Screen name="Front" component={Frontscreen} />
          <stack.Screen name="login" component={Loginscreen} />
          <stack.Screen name="sign-up" component={Sign_up_screen} />
          <stack.Screen name="main" component={mainscreen} />
          <stack.Screen name="Coupon" component={Couponscreen} />
          <stack.Screen name="payment" component={Paymentscreen} />
          <stack.Screen name="wallet" component={Walletscreen} />
          <stack.Screen name="password" component={Passwordscreen} />
          <stack.Screen name="edit-profile" component={Editprofile} />
          <stack.Screen name="forget" component={Forgetpasswordscreen} />
          <stack.Screen name="reset" component={Resetpasswordscreen} />
        </stack.Navigator>
      </NavigationContainer>
    </Cartprovider>
  );
}
const styles = StyleSheet.create({});
