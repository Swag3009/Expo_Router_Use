import { Stack, useRouter } from "expo-router";
import {FontAwesome} from '@expo/vector-icons';
import { Alert } from "react-native";

export default () => {
    const router = useRouter();

    return <Stack  screenOptions={{
        headerTintColor: '#1e2632',
        headerStyle: {
            backgroundColor: '#FFE030',
            
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30
        },
        headerTitleAlign: 'center',
        headerRight: () => (
            <FontAwesome 
                name="info-circle" 
                size={24} 
                color="black" 
                onPress={() => router.push('/modal')}
            />
        )
    }}>
        <Stack.Screen name = "index" options = {{title: 'Home'}} />
        <Stack.Screen name = 'modal' options={{
            
            headerStyle: {
                backgroundColor: 'white',
            },
            headerTintColor: '#1e2632',
            title: "Modal",
            presentation: 'modal'
        }}/>
        <Stack.Screen name = "home" options={{headerShown: false}}/>
    </Stack>;
};

