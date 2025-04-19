import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeTab from "../screens/HomeTab";
import ProductScreen from "../screens/ProductScreen";

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeTab" component={HomeTab} />
      <Tab.Screen name="ProductTab" component={ProductScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
