import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigationContainerTheme from "./navigation/NavigationContainerTheme";
import ListingScreen from "./screens/listing/ListingScreen";
import ScanBarcodeScreen from "./screens/ScanBarcodeScreen";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainerTheme>
      <Stack.Navigator>
        <Stack.Screen
          name="scan"
          options={{ headerShown: false }}
          component={ScanBarcodeScreen}
        />
        <Stack.Screen
          name="listing"
          options={{ headerShown: false }}
          component={ListingScreen}
        />
      </Stack.Navigator>
    </NavigationContainerTheme>
  );
};

export default AppNavigation;
