import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as Splash from "expo-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import "./global.css";
import AppNavigation from "./src/AppNavigation";
Splash.preventAutoHideAsync();
const queryClient = new QueryClient();
const App = () => {
  return (
    <GestureHandlerRootView>
      <KeyboardProvider>
        <QueryClientProvider client={queryClient}>
          <AppNavigation />
        </QueryClientProvider>
      </KeyboardProvider>
    </GestureHandlerRootView>
  );
};

export default App;
