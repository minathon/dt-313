import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./screens/Login";
import Splash from "./screens/Splash";
import SignUp from "./screens/Signup"
// import UserManagement from "./views/UserManagement";
// import InfoAdminView from "./views/InfoAdminView";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator> 
      <Stack.Screen name=" " component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Sign Up" component={SignUp} />
      {/* <Stack.Screen name="User Management" component={UserManagement} />
      <Stack.Screen name="Info" component={InfoAdminView} /> */} 
    </Stack.Navigator>
    </NavigationContainer>
  );
}