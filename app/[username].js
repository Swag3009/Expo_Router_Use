import React from "react";
import { View, Text, Button } from 'react-native';
import { useRouter, useSearchParams, Stack } from "expo-router";

const profile = () => {
    const router = useRouter();

    const {name, username} = useSearchParams();

    return(
        <View style = {{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Stack.Screen options={{
                headerStyle : {backgroundColor: '#1e2632'},
                headerTintColor: '#ffe030',
                title: username
            }}/>
            <Text style = {{
                fontSize: 30
            }}>Hey, {name} (@{username}). Good to see you. How's it going?</Text>
        <Button onPress={() => router.back()} title="Go Back"/>
        </View>
    );
}

export default profile;