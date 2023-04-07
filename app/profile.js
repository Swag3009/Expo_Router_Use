import React from "react";
import { View, Text, Button } from 'react-native';
import { useRouter, useSearchParams } from "expo-router";

const profile = () => {
    const router = useRouter();

    const {name, surname} = useSearchParams();

    return(
        <View style = {{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style = {{
                fontSize: 30
            }}>Hey, {name} {surname}. Good to see you. How's it going?</Text>
        <Button onPress={() => router.back()} title="Go Back"/>
        </View>
    );
}

export default profile;