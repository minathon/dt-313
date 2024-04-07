import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./screens/Login";
import Splash from "./screens/Splash";
import SignUp from "./screens/Signup"
import Task from "./screens/Task";
import Homepage from "./screens/Homepage";
import InfoRequest from "./screens/InfoRequest";
import NavBar from "./assets/components/NavBar"
import Accout from "./screens/Accout";
import Timer from "./screens/Timer";
import Teams from "./screens/Teams";
import Community from "./screens/Community"
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator> 
      
      <Stack.Screen name=" " component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Sign Up" component={SignUp} />
      <Stack.Screen name='Task' component={Task}/>
      <Stack.Screen name='Info Request' component={InfoRequest}/>
      <Stack.Screen name='Home Page' component={Homepage}/>
      <Stack.Screen name='Your Account' component={Accout}/>
      <Stack.Screen name='Timer' component={Timer}/>
      <Stack.Screen name='Teams' component={Teams}/>
      <Stack.Screen name='Community of Developers' component={Community}/>
      {/* <Stack.Screen name="User Management" component={UserManagement} />
      <Stack.Screen name="Info" component={InfoAdminView} /> */} 
    </Stack.Navigator>
    {/* <NavBar></NavBar> */}
    </NavigationContainer>
  );
}