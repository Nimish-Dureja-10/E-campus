import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import ClassroomScreen from './screens/ClassroomScreen';
import HomeScreen from './screens/HomeScreen';
import MessScreen from './screens/MessScreen';
import ProfileScreen from './screens/ProfileScreen';
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-sharp";
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === "Classroom") {
            iconName = focused ? "book" : "book-outline";
          } else if (route.name === "Mess") {
            iconName = focused ? "fast-food" : "fast-food-outline";
          } else if (route.name == "Profile") {
              iconName = focused ? "man" : "man-outline"
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        // headerShown:false,
        tabBarActiveTintColor: "#F31559",
        tabBarInactiveTintColor: "#FF9B9B",
      })} >
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Classroom' component={ClassroomScreen} />
            <Tab.Screen name='Mess' component={MessScreen} />
            <Tab.Screen name='Profile' component={ProfileScreen} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}