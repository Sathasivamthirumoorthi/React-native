// import React to be able to use JSX (JAVASCRIPT XML)
import React,{ useState } from 'react'
// import StyleSheet,Text,View,Button from react-native to use in JSX
import {StyleSheet,Text,View,Button } from 'react-native';
import Navbar from './components/Navbar';

export default function App() {
  // The state allows React components to change their output over time in response to user actions
  // Here, count is variable, setCount is used to set the value of it
  const [count,setCount] = useState(0);

  return (
    // Imagine View as div tag in html (Acts a container)
    <View style={styles.container}>
      <Navbar/>

      {/* Text is used to render normal text  (Imagine it as <p> in html)*/}
      <Text>I am clicked {count} times </Text>
      {/* Imagine as a normal button tag in html, it updates count on every click, title is a name of the button*/}
      <Button onPress={()=>{setCount(count + 1)}} title="Click me" />
    </View>
  );
}

// StyleSheet from react-native is used to style the JSX , just like CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});