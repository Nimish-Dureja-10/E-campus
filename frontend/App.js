import "react-native-gesture-handler";
import Navigation from "./Navigation";
import LoginScreen from "./screens/LoginScreen";
import { View } from "react-native";

export default function App() {
  const user = true;
  return (
    <View className="flex-1">
      {user ? <Navigation/> : <LoginScreen />}
    </View>
  );
}