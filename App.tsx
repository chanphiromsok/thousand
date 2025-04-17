import * as Splash from "expo-splash-screen";
import { verifyInstallation } from 'nativewind';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import "./global.css";
import AppNavigation from "./src/AppNavigation";

Splash.preventAutoHideAsync();
const App = () => {
  verifyInstallation()
  return (
    <GestureHandlerRootView>
      <KeyboardProvider>
        <AppNavigation />
      </KeyboardProvider>
    </GestureHandlerRootView>
  );
};

export default App;
