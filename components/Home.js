import React from 'react';
import {View,Text,StyleSheet,Button,Image} from 'react-native' 

const Home = (props) => {
  const {navigation} = props
  return (
     <View style={styles.container}>
    
      <View style={styles.topContainer}>
      <Text style={styles.title}> Colorful Thrills
    </Text >
      </View>
      <View style={styles.bottomContainer}></View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/bookcover.png')}
        />
         
         <Text style={styles.paragraph}> 
     {"\n"}  BOOKWORMS, UNITE! {"\n"} {"\n"}
      Suspense, Mystery and Thrillers by Authors of Color
      </Text>
      <Button 
      color='#ff914d'
      title= 'ENTER'
      onPress={() =>
          navigation.navigate('Books')}
      />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  topContainer: {
    flex: 1,
    backgroundColor: '#ff914d',
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: '#96d0e3',
  },
  imageContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
  },
  title:{
     margin: 24,
    marginTop: 50,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'GillSans-Italic',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
export default Home;