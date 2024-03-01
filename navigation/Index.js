import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../app/components/HomeScreen";
import ClimateScreen from "../app/components/ClimateScreen";

export default function Navigation({ loggedIns }) {
  return (
    <NavigationContainer>
      <RootNavigator loggedIns={loggedIns} />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function RootNavigator({ loggedIns }) {
  const [loggedIn, setLoggedIn] = React.useState(loggedIns);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Climate"
        component={ClimateScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
