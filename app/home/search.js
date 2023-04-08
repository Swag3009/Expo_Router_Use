import { StyleSheet, Text, View } from "react-native";
import {Link, Stack, Redirect} from 'expo-router';

const users = [
  {
    username : 'vadim',
    name : 'Vadim Savin'
  },
  {
    username: 'alex',
    name: "Alexandre",
  },
  {
    username: 'Lukas',
    name: "Lukas Donda",
  }
]


export default function Search() {
  //return <Redirect href = {'/home'} />;
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <Link 
          href= "/Alex" 
          style = {styles.link}
        >Open Profile 1</Link>

        {users.map((user) => (

          <Link 
          href= {`/${user.username}`}
          style = {styles.link}
          key={user.name}
          >Open {user.name}'s profile 1</Link>
        ))}

        <Link href= {{
          pathname: '/VadimNotJustDev', params: {
            name: "Sanjay", username: "Prajapat"
          }
        }} style = {styles.link}>Open Profile 2</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  link: {
    fontSize: 20,
    fontWeight: 'bold', 
    color: 'green',
    marginVertical: 10
  }
});
