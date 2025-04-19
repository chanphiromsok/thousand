import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigationContainerTheme from "./navigation/NavigationContainerTheme";
import TabNavigation from "./navigation/TabNavigation";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainerTheme>
      <TabNavigation />
    </NavigationContainerTheme>
  );
};

export default AppNavigation;
